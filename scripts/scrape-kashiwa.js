import fs from "node:fs";
import cheerio from "cheerio";

const INDEX="https://www.city.kashiwa.lg.jp/shinchaku/index.html";
const ua={"user-agent":"kashiwa-news-bot"};

const indexHtml = await (await fetch(INDEX,{headers:ua})).text();
const $ = cheerio.load(indexHtml);

// ※ リンク抽出はサイト構造で調整が必要。まずは main 内 a を拾う。
const urls = [...new Set($("main a").map((_,a)=>new URL($(a).attr("href"),INDEX).toString()).get())]
  .filter(u=>u.startsWith("https://www.city.kashiwa.lg.jp/"))
  .slice(0,50);

const items=[];
for (const url of urls){
  const h = await (await fetch(url,{headers:ua})).text();
  const d = cheerio.load(h);
  const title = d("h1").first().text().trim();
  const body  = d("main").text().replace(/\s+/g," ").trim().slice(0,400);
  if (title) items.push({title,url,body});
}

fs.mkdirSync("docs/data",{recursive:true});
fs.writeFileSync("docs/data/news.json", JSON.stringify({fetchedAt:new Date().toISOString(), items}, null, 2));
console.log("saved:", items.length);