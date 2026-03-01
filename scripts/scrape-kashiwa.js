console.log("RUNNING FILE:", __filename);
console.log("GIT SHA:", process.env.GITHUB_SHA);
console.log("SCRIPT VERSION: LLM-AUDIENCE-ENABLED");

const fs = require("node:fs");
const cheerio = require("cheerio");

const INDEX = "https://www.city.kashiwa.lg.jp/shinchaku/index.html";
const ua = { "user-agent": "kashiwa-news-bot" };

async function classifyByLLM({ title, body }) {
  const prompt = `以下のニュース記事（タイトルと本文）を読み、情報を整理して指定のJSON形式のみで出力してください。

タイトル: ${title}
本文: ${body}

【出力形式】
{
  "audiences"配列: ["student", "worker", "senior" から適合するものを1つ以上選択],
  "summary": "リンク先ページの内容を300字程度に要約したもの"
}

【ルール】
- JSON以外の説明文や挨拶は一切含めないでください。
- tagsは必ず1つ以上含めてください。
- 要約は客観的かつ簡潔に日本語で記述してください。`;

  try {
    const r = await fetch(process.env.GEMINI_API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0,
          response_mime_type: "application/json"
        },
      }),
    });

    const data = await r.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "{}";

    // 堅牢なパース: Markdownのコードブロックが含まれる場合を除去
    if (text.startsWith("```")) {
      text = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();
    }

    const parsed = JSON.parse(text);
    return {
      tags: Array.isArray(parsed.tags) ? parsed.tags : ["worker"],
      summary: parsed.summary || body.slice(0, 300)
    };
  } catch (e) {
    console.error("分類・要約失敗:", e);
    return { tags: ["error"], summary: body.slice(0, 300) };
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
        const result = await classifyByLLM({ title, body });
        items.push({
          title,
          url,
          body,
          updated,
          audiences: result.tags,
          summary: result.summary
        });
        console.log("分類・要約完了:", title, result.tags);
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