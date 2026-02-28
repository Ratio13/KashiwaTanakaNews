console.log("RUNNING FILE:", __filename);
console.log("GIT SHA:", process.env.GITHUB_SHA);
console.log("SCRIPT VERSION: LLM-AUDIENCE-ENABLED");

const fs = require("node:fs");
const cheerio = require("cheerio");

const INDEX = "https://www.city.kashiwa.lg.jp/shinchaku/index.html";
const ua = { "user-agent": "kashiwa-news-bot" };

async function classifyByLLM({ title, body }) {
  const prompt = `student/worker/seniorから複数選びJSON配列のみで返して\nタイトル:${title}\n本文:${body}`;

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

  const urls = [...new Set(
    $("a").map((_, a) => {
      const href = $(a).attr("href");
      if (!href) return null;
      return new URL(href, INDEX).toString();
    }).get().filter(Boolean)
  )]
    .filter(u => u.startsWith("https://www.city.kashiwa.lg.jp/"))
    .slice(0, 20); // APIコスト削減のため20件まで

  const items = [];

  for (const url of urls) {
    try {
      const h = await (await fetch(url, { headers: ua })).text();
      const d = cheerio.load(h);

      const title = d("h1").first().text().trim();
      const body = d("main")
        .text()
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 600);

      if (title) {
        const audiences = await classifyByLLM({ title, body });
        items.push({ title, url, body, audiences });
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