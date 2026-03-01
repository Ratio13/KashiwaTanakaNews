console.log("RUNNING FILE:", __filename);
console.log("GIT SHA:", process.env.GITHUB_SHA);
console.log("SCRIPT VERSION: LLM-AUDIENCE-ENABLED");

const fs = require("node:fs");
const cheerio = require("cheerio");

const INDEX = "https://www.city.kashiwa.lg.jp/shinchaku/index.html";
const ua = { "user-agent": "kashiwa-news-bot" };

async function classifyByLLM({ title, body }) {
  const prompt = `このページの新着情報リスト全てに対して、それぞれのリンク先コンテンツを読み、「学生向け」「社会人向け」「高齢者向け」のどれに近い内容かどうかを判別し、JSON配列オブジェクト内にそれぞれstudent/worker/seniorのタグを付けてください。各情報それぞれへのタグは空欄にはできず、複数付与が可能です。さらに、各情報のリンク先ページの内容を300字程度に要約して、変数に取り込んでください\nタイトル:${title}\n本文:${body}`;

  try {
    const r = await fetch(process.env.GEMINI_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0 },
      }),
    });

    const data = await r.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "[]";
    return JSON.parse(text);
  } catch (e) {
    console.error("分類失敗:", e);
    return ["worker"];
  }
}


(async () => {
  const indexHtml = await (await fetch(INDEX, { headers: ua })).text();
  const $ = cheerio.load(indexHtml);

  // 新着情報のメインリストのみをターゲットにする
  const newsLinks = $("#tmp_contents ul li a")
    .map((_, a) => {
      const href = $(a).attr("href");
      if (!href) return null;
      return {
        title: $(a).text().trim(),
        url: new URL(href, INDEX).toString()
      };
    })
    .get()
    .filter(item => item.url.startsWith("https://www.city.kashiwa.lg.jp/"))
    .slice(0, 20); // APIコスト削減のため20件まで

  const items = [];

  for (const { title: rawTitle, url } of newsLinks) {
    try {
      const h = await (await fetch(url, { headers: ua })).text();
      const d = cheerio.load(h);

      const title = d("h1").first().text().trim() || rawTitle;
      const body = d("main")
        .text()
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 600);

      // タイトルに含まれる日付（例：2月3日）を抽出
      const dateMatch = rawTitle.match(/（(\d+月\d+日)）/);
      const updated = dateMatch ? dateMatch[1] : "";

      if (title) {
        const audiences = await classifyByLLM({ title, body });
        items.push({ title, url, body, updated, audiences });
        console.log("分類完了:", title, audiences);
      }

    } catch (e) {
      console.error("記事取得失敗:", url, e);
    }
  }

  fs.mkdirSync("docs/data", { recursive: true });
  fs.writeFileSync(
    "docs/data/news.json",
    JSON.stringify(
      { fetchedAt: new Date().toISOString(), items },
      null,
      2
    )
  );

  console.log("保存完了:", items.length);
})();