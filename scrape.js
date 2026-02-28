const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
    const url = 'https://www.city.kashiwa.lg.jp/shinchaku/index.html';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results = [];

    // 柏市の新着情報リスト（dl dt a 構造）を解析
    // ※実際のHTML構造に合わせてセレクタを調整します
    $('div.contents_list_box dl dt a').each((i, el) => {
        results.push({
            title: $(el).text().trim(),
            url: new URL($(el).attr('href'), url).href // 相対パスを絶対パスに変換
        });
    });

    // publicフォルダに保存（Pages公開用）
    if (!fs.existsSync('./public')) fs.mkdirSync('./public');
    fs.writeFileSync('./public/news.json', JSON.stringify(results, null, 2));
    console.log('保存完了: ' + results.length + '件');
}

scrape();