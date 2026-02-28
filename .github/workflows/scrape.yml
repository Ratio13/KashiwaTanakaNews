const fs = require("node:fs");
const cheerio = require("cheerio");

const INDEX = "https://www.city.kashiwa.lg.jp/shinchaku/index.html";
const ua = { "user-agent": "kashiwa-news-bot" };

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
    .slice(0, 50);

  const items = [];
  for (const url of urls) {
    const h = await (await fetch(url, { headers: ua })).text();
    const d = cheerio.load(h);
    const title = d("h1").first().text().trim();
    const body = d("main").text().replace(/\s+/g, " ").trim().slice(0, 400);
    if (title) items.push({ title, url, body });
  }

  fs.mkdirSync("docs/data", { recursive: true });
  fs.writeFileSync(
    "docs/data/news.json",
    JSON.stringify({ fetchedAt: new Date().toISOString(), items }, null, 2)
  );
  console.log("saved:", items.length);
})().catch(err => {
  console.error(err);
  process.exit(1);
});