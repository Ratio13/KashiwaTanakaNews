const newsData = {
    youth: [
        { date: "2026-02-20", title: "第三期柏市子ども・子育て支援事業計画（案）へのパブリックコメント（意見募集）", content: "次期の子ども・子育て支援事業計画案に対し、市民の皆様からの大切なご意見を募集しています。", url: "https://www.city.kashiwa.lg.jp/kodomoseisaku/publiccomment.html" },
        { date: "2026-02-19", title: "教育委員会令和8年第2回定例会（予定）", content: "教育委員会の定例会開催予定です。教育行政に関する重要な審議が行われます。", url: "https://www.city.kashiwa.lg.jp/kyoikusomu/kaigi/kaisai/r8teirei2.html" },
        { date: "2026-02-17", title: "柏市任期付短時間勤務職員（児童施設厚生員）を募集", content: "児童館などの児童施設で勤務する厚生員を募集しています。", url: "https://www.city.kashiwa.lg.jp/shogaigakushu/seishonen/nintan.html" },
        { date: "2026-02-17", title: "令和8年度 教育支援室教育相談員を募集", content: "不登校などの悩みを持つ児童生徒への支援を行う相談員を募集しています。", url: "https://www.city.kashiwa.lg.jp/jidoseito/kyouikusoudanin/kyouikusoudaninr7.html" },
        { date: "2026-02-16", title: "【令和8年4月1日採用】会計年度任用職員（保健師又は助産師）を募集（母子保健課）", content: "母子保健課での専門職募集。地域の子育て世代を支えるお仕事です。", url: "https://www.city.kashiwa.lg.jp/boshihoken/shiseijoho/shokuin/kaikeinendo/sodan/20260401hokennsijosannsi.html" },
        { date: "2026-02-13", title: "はぐはぐひろば沼南勤務の会計年度任用職員を募集", content: "子育て支援施設でのスタッフ募集案内です。", url: "https://www.city.kashiwa.lg.jp/kosodateshien/shiseijoho/shokuin/kaikeinendo/hoikuen/hughugshonan_kyujin.html" },
        { date: "2026-02-12", title: "柏市内小中学校に勤務する学校栄養士の募集", content: "学校給食に関わる栄養士の募集。子どもたちの食育を支えます。", url: "https://www.city.kashiwa.lg.jp/kyushoku/eiyousibosyuu.html" },
        { date: "2026-02-10", title: "物価高対応子育て応援手当", content: "物価高騰の影響を受ける子育て世帯への応援手当に関するお知らせです。", url: "https://www.city.kashiwa.lg.jp/kosodateshien/bukkataka_teate.html" },
        { date: "2026-02-10", title: "柏市妊産婦等生活援助事業所運営業務委託プロポ―ザルの開催", content: "妊産婦の方々の生活を支える事業の運営委託に関するプロポーザルです。", url: "https://www.city.kashiwa.lg.jp/kodomosodan-c/ninsanpu-kaisai.html" },
        { date: "2026-02-07", title: "公立保育園で働く会計年度任用職員を募集", content: "市内の公立保育園で勤務する職員を募集しています。", url: "https://www.city.kashiwa.lg.jp/hoikuunei/kosodate/oshirase/904.html" },
        { date: "2026-02-05", title: "令和8年度会計年度任用職員(柏市立こどもルームで働く職員)を募集", content: "放課後の子どもたちの居場所「こどもルーム」で働く職員の募集です。", url: "https://www.city.kashiwa.lg.jp/afterschool/shiseijoho/shokuin/kaikeinendo/20230201.html" },
        { date: "2026-02-03", title: "（仮称）柏市こども・若者相談センター福祉連携型カフェ管理運営事業者の募集", content: "新しい相談センターに併設されるカフェの運営事業者を募集しています。", url: "https://www.city.kashiwa.lg.jp/kodomosodan-c/jisou-setchi/proposal-cafe.html" },
        { date: "2026-02-03", title: "柏市妊産婦等生活援助事業所運営業務委託プロポ―ザル募集（質疑回答追加）", content: "事業委託に関する詳細な質疑応答を追加しました。", url: "https://www.city.kashiwa.lg.jp/kodomosodan-c/jisou-setchi/proposal-ninsanpuseikatsuenjyo-r7.html" },
        { date: "2026-02-02", title: "令和7年度柏市健康福祉審議会第3回児童健康福祉専門分科会の開催", content: "児童の健康福祉に関する専門的な審議が行われます。", url: "https://www.city.kashiwa.lg.jp/kodomoseisaku/shiseijoho/council/kaisaiannai/bunkakai/20260227.html" },
        { date: "2026-01-29", title: "会計年度任用職員（保健師又は助産師）を募集", content: "専門資格を活かして、地域の母子保健に貢献しませんか。", url: "https://www.city.kashiwa.lg.jp/boshihoken/saiyouhokenshijosanshi.html" },
        { date: "2026-01-29", title: "柏市里親養育包括支援業務委託公募型プロポ―ザル募集", content: "里親養育を包括的に支援する業務の委託先を募集しています。", url: "https://www.city.kashiwa.lg.jp/kodomosodan-c/jisou-setchi/proposal-satooya.html" }
    ],
    adult: [
        { date: "2026-02-20", title: "【令和8年3月16日】北柏駅北口交差点および旧水戸街道交差点「供用開始」のお知らせ", content: "新しく整備された交差点の供用開始に関する通知です。通行の際はご注意ください。", url: "https://www.city.kashiwa.lg.jp/kitakashiwaseibi/kyouyou.html" },
        { date: "2026-02-19", title: "【令和8年2月24日(火曜日)休所】旅券(パスポート)の申請・交付", content: "パスポートセンターの臨時休所に関するお知らせです。事前のご確認をお願いします。", url: "https://www.city.kashiwa.lg.jp/gyosei-sc/todokede/933/shinsekofu.html" },
        { date: "2026-02-19", title: "広報かしわ3月号を発行", content: "最新の広報誌を発行しました。地域情報や各種手続き案内を掲載しています。", url: "https://www.city.kashiwa.lg.jp/kohokocho/koho/pr/kohokashiwa/saishingo.html" },
        { date: "2026-02-18", title: "【令和8年4月1日採用】会計年度任用職員（技術員）を募集（南部クリーンセンター）", content: "環境美化を支える技術職の募集案内です。", url: "https://www.city.kashiwa.lg.jp/nanbuclean-c/shiseijoho/syokuinn/kaikeinendo/r80218kyujinn.html" },
        { date: "2026-02-18", title: "【2月28日・アリオ柏】春の火災予防運動コンサートを開催します♪", content: "消防局による防火意識啓発のコンサートを開催。ご家族でお楽しみください。", url: "https://www.city.kashiwa.lg.jp/yobo/event/event.html" },
        { date: "2026-02-18", title: "千葉ジェッツ公式戦にご招待！", content: "プロバスケットボール観戦招待。地元チームをみんなで応援しましょう！", url: "https://www.city.kashiwa.lg.jp/kyosei-c/event/jets_syotai_202604.html" },
        { date: "2026-02-18", title: "千葉ロッテマリーンズ公式戦にご招待！", content: "プロ野球観戦招待のお知らせ。スポーツの感動を体験しませんか。", url: "https://www.city.kashiwa.lg.jp/kyosei-c/hometown/lotte_friend_ship_syotai_202604.html" },
        { date: "2026-02-16", title: "コンビニ交付休止情報（メンテナンス・トラブル等）を更新しました", content: "証明書のコンビニ交付サービスの保守情報です。利用予定の方はご確認ください。", url: "https://www.city.kashiwa.lg.jp/shimin/todokede/conviniencestore/maintenance.html" },
        { date: "2026-02-10", title: "自転車乗車用ヘルメット購入費等補助金", content: "自転車安全利用のためのヘルメット購入費用の補助に関する案内です。", url: "https://www.city.kashiwa.lg.jp/bosaianzen/anshinanzen/kotsuanzen/r7hojyo.html" },
        { date: "2026-02-10", title: "会計年度任用職員（地域づくりコーディネーター・市民活動）の募集", content: "地域のつながりづくりを推進するコーディネーターの募集です。", url: "https://www.city.kashiwa.lg.jp/shiminkatsudo/shiseijoho/shokuin/kaikeinendo/sodan/coordinatorr0128.html" },
        { date: "2026-02-09", title: "【2月28日開催】柏市消防局消防職員採用説明会", content: "消防職員を志す方のための採用説明会を実施します。", url: "https://www.city.kashiwa.lg.jp/shoboshokuin/fdk/saiyo/shiken/r7/setsumeikai2.html" },
        { date: "2026-02-08", title: "令和8年2月8日執行 衆議院議員総選挙・最高裁判所裁判官国民審査【特設ページ】", content: "選挙に関する特設ページを公開。期日前投票などの情報を掲載しています。", url: "https://www.city.kashiwa.lg.jp/senkan/shiseijoho/senkyo/tokusetsu/r7syuugi/r7syuugitokusetsu.html" },
        { date: "2026-02-06", title: "柏市環境基本計画（案）のパブリックコメント募集", content: "これからの柏市の環境づくりについてのご意見をお待ちしています。", url: "https://www.city.kashiwa.lg.jp/kankyoseisaku/kankyo_kihonkeikaku/publiccomment.html" },
        { date: "2026-02-06", title: "令和8年度柏市職員採用試験【春試験】受験案内", content: "市職員採用試験の案内が公開されました。詳細な受験資格をご確認ください。", url: "https://www.city.kashiwa.lg.jp/jinji/shiseijoho/shokuin/recruit/h22/r8_spring.html" },
        { date: "2026-02-05", title: "最新の柏市人口を公表", content: "最新の人口統計データを更新しました。地域の現状把握にご活用ください。", url: "https://www.city.kashiwa.lg.jp/databunseki/shiseijoho/toukei/jinko/joju.html" },
        { date: "2026-02-03", title: "マイナンバー（個人番号）カードの電子証明書更新の臨時開庁（休日）", content: "平日忙しい方向けの電子証明書更新のための臨時開庁日のご案内です。", url: "https://www.city.kashiwa.lg.jp/shimin/todokede/mynumber/densikyuujitu.html" },
        { date: "2026-02-03", title: "沼南近隣センター（ひまわりプラザ）再整備に向けて", content: "地域の核となる施設の再整備計画について進捗を報告しています。", url: "https://www.city.kashiwa.lg.jp/shiminkatsudo/region/chokai/topics/20251030syounan.html" },
        { date: "2026-01-31", title: "柏市生活応援特別給付金", content: "生活を支えるための特別な給付金に関する申請・対象等の案内です。", url: "https://www.city.kashiwa.lg.jp/fukushiseisaku/kyufukin/seikatuouenkyufukin.html" },
        { date: "2026-01-30", title: "令和8年度柏市DX人材育成研修業務委託の公募型プロポーザル募集", content: "職員のITスキル向上を目的とした研修業務の委託募集です。", url: "https://www.city.kashiwa.lg.jp/dx-suishin/puropojinzai.html" },
        { date: "2026-01-29", title: "柏市生活困窮者就労準備支援等事業業務委託に関するプロポーザル（質疑回答）", content: "就労支援事業に関する質疑応答の内容を更新しました。", url: "https://www.city.kashiwa.lg.jp/shogaifukushi/seikatsukonkyuusyuuroujunbisienzigyou.html" },
        { date: "2026-02-03", title: "合格祈願！マンホールカードをプレゼント（配布終了のお知らせ）", content: "[お知らせ] 合格祈願マンホールカードの配付は、大好評につき終了いたしました。", url: "https://www.city.kashiwa.lg.jp/somu/koho/gokakukigan.html" },
        { date: "2026-02-12", title: "柏市行政不服及び情報公開・個人情報保護審議会(合議体)の開催", content: "行政情報の適正な取り扱いに関する審議会が開催されます。", url: "https://www.city.kashiwa.lg.jp/gyosei/publicity/080226.html" }
    ],
    senior: [
        { date: "2026-02-20", title: "【令和8年4月1日採用】会計年度任用職員（管理栄養士）を募集（健康増進課）", content: "地域の健康づくりをサポートする管理栄養士の募集案内です。", url: "https://www.city.kashiwa.lg.jp/kenkozoshin/shiseijoho/shokuin/kaikeinendo/20260401kanrieiyoushi.html" },
        { date: "2026-02-17", title: "高野台春まつり～親子で楽しむ 歴史さんぽ～", content: "地域の歴史を巡る散策イベント。ゆったりとした春のひとときを。", url: "https://www.city.kashiwa.lg.jp/bunka/event/kouyadaiharumaturir7.html" },
        { date: "2026-02-13", title: "インフルエンザ警報が発令中です", content: "市内で流行中。予防対策を再確認し、体調管理にご注意ください。", url: "https://www.city.kashiwa.lg.jp/hokenyobo/flukeihou.html" },
        { date: "2026-02-12", title: "会計年度任用職員（生涯学習専門アドバイザー）の募集", content: "豊かな学びを推進する専門アドバイザーを募集します。", url: "https://www.city.kashiwa.lg.jp/shogaigakushu/kaikeinendoninyoushokuinad.html" },
        { date: "2026-02-12", title: "令和7年度第3回柏市公設総合地方卸売市場運営審議会", content: "市場の適正運営に関する審議が行われます。", url: "https://www.city.kashiwa.lg.jp/kosetsuichiba/shingikai_r7_3.html" },
        { date: "2026-02-10", title: "新型コロナワクチンの予防接種費用の一部を助成", content: "高齢者の方等を対象とした接種費用助成の継続的なお知らせです。", url: "https://www.city.kashiwa.lg.jp/kenkozoshin/kenkouzousin/covid-19_r6_information.html" },
        { date: "2026-02-09", title: "「柏市図書館のあり方」の実現に向けて", content: "これからの図書館のサービスや施設のあり方についての取り組み状況です。", url: "https://www.city.kashiwa.lg.jp/toshokan/ranran/library/5877.html" },
        { date: "2026-02-09", title: "令和7年度第6回柏市上下水道事業運営審議会の開催", content: "上下水道事業の安定運営に向けた意見交換が行われる審議会のご案内です。", url: "https://www.city.kashiwa.lg.jp/somu/shiseijoho/council/kaisaiannai/shingikai0224.html" },
        { date: "2026-02-03", title: "会計年度任用職員（保健師）を募集（健康増進課）", content: "健康増進活動を担う専門職員の採用案内です。", url: "https://www.city.kashiwa.lg.jp/kenkozoshin/shiseijoho/shokuin/kaikeinendo/2025hokenshiboshu.html" },
        { date: "2026-02-03", title: "教育委員会事務局（図書館）勤務の会計年度任用職員を募集", content: "図書館業務をサポートする事務スタッフを募集しています。", url: "https://www.city.kashiwa.lg.jp/kyoikusomu/syokuinsaiyou/jimuhojo/r8jimuhojyo.html" },
        { date: "2026-02-02", title: "令和8年度柏市食品衛生監視指導計画(案)に関するパブリックコメントの募集", content: "食品の安全を確保するための監視計画についての意見募集を行っています。", url: "https://www.city.kashiwa.lg.jp/seikatsueisei/kouhou/public_comment/reiwa8kanshishidoukeikaku.html" },
        { date: "2026-01-28", title: "手賀沼いちごスタンプラリー2026開催！", content: "地元の美味しいイチゴを楽しみながら巡るスタンプラリー。春の行楽に最適です。", url: "https://www.city.kashiwa.lg.jp/nosei/agurikyogikai/strawberryrarry2026.html" }
    ]
};

const labels = {
    youth: "子供・学生向けの最新ニュース",
    adult: "現役・ファミリー向けの最新ニュース",
    senior: "シニア向けの最新ニュース"
};

// DOM Elements
const dateElement = document.getElementById('current-date');
const newsContainer = document.getElementById('news-grid'); // Changed from 'news-container' to 'news-grid' to match existing HTML
const tabButtons = document.querySelectorAll('.tab-btn');
const refreshBtn = document.getElementById('refresh-btn');
const loadingSpinner = document.getElementById('loading-spinner');

let currentCategory = 'adult';

// Keyword-based categorization logic
const categorizeItem = (title) => {
    const youthKeywords = ['子ども', '子育て', '児童', '学校', '教育', '乳幼児', '保育', '里親', 'こども'];
    const seniorKeywords = ['高齢者', 'シニア', '福祉', '健康', '介護', 'インフルエンザ', '歴史', '生涯学習', '新型コロナワクチン'];

    if (youthKeywords.some(k => title.includes(k))) return 'youth';
    if (seniorKeywords.some(k => title.includes(k))) return 'senior';
    return 'adult';
};

// Fetch news from official site via proxy
async function fetchNews() {
    if (refreshBtn) { // Check if refreshBtn exists
        refreshBtn.disabled = true;
        refreshBtn.classList.add('refreshing');
    }
    if (loadingSpinner) { // Check if loadingSpinner exists
        loadingSpinner.classList.remove('hidden');
    }

    try {
        // Using allorigins as a CORS proxy for local development/prototype
        const targetUrl = 'https://www.city.kashiwa.lg.jp/shinchaku/index.html';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}&timestamp=${Date.now()}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');

        const items = doc.querySelectorAll('#tmp_shinchaku_list dl');
        const newNewsData = { youth: [], adult: [], senior: [] };

        items.forEach(dl => {
            const date = dl.querySelector('dt')?.textContent.trim() || '';
            const link = dl.querySelector('dd a');
            if (link) {
                const title = link.textContent.trim();
                const url = new URL(link.getAttribute('href'), 'https://www.city.kashiwa.lg.jp').href;

                // Construct date string (adding year for consistency if possible, or just using source date)
                // Assuming the date from the source is like "2月20日" and we need to prepend the current year.
                // If the source date already contains a year, this logic needs adjustment.
                const currentYear = new Date().getFullYear();
                let dateStr = date;
                if (!date.includes('年')) { // If year is not present, prepend current year
                    dateStr = `${currentYear}年` + date;
                }
                // Convert "YYYY年MM月DD日" to "YYYY-MM-DD" for consistency with existing data format
                dateStr = dateStr.replace(/年|月/g, '-').replace(/日/g, '');


                const category = categorizeItem(title);
                newNewsData[category].push({
                    date: dateStr,
                    title: title,
                    content: "柏市公式ホームページの最新情報です。詳細は「詳細を見る」よりご確認ください。",
                    url: url
                });
            }
        });

        // Update global newsData (or at least replace values)
        // Merge new data with existing, prioritizing new data for freshness
        // For simplicity, replacing entire categories here as per instruction's implied behavior
        Object.assign(newsData, newNewsData);

        // Re-render
        updateNews(currentCategory);

        console.log(`Updated news: Total ${newNewsData.youth.length + newNewsData.adult.length + newNewsData.senior.length} items`);
    } catch (error) {
        console.error('Error fetching news:', error);
        alert('ニュースの取得に失敗しました。時間をおいて再度お試しください。');
    } finally {
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.classList.remove('refreshing');
        }
        if (loadingSpinner) {
            loadingSpinner.classList.add('hidden');
        }
    }
}

// Initial display logic
function updateCurrentDate() {
    const now = new Date();
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];

    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        dateElement.textContent = `${year}年${month}月${date}日 (${day})`;
    }
}

function updateNews(category) {
    currentCategory = category;
    const titleElement = document.getElementById("section-title");

    if (newsContainer) {
        newsContainer.style.opacity = 0;
    }

    setTimeout(() => {
        if (newsContainer) {
            newsContainer.innerHTML = '';
        }
        if (titleElement) {
            titleElement.textContent = labels[category];
        }

        const items = newsData[category];

        if (!items || items.length === 0) {
            if (newsContainer) {
                newsContainer.innerHTML = '<div class="no-news">現在、表示できる情報はありません。</div>';
            }
            return;
        }

        items.forEach(item => {
            const card = document.createElement('a');
            card.className = 'news-card';
            card.href = item.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";

            // Format date for display
            const [year, month, day] = item.date.split("-");
            const dateStr = `${year}年${parseInt(month)}月${parseInt(day)}日`;

            card.innerHTML = `
                <div class="news-date">${dateStr}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-content">${item.content}</p>
                <div class="news-link-btn">詳細を見る</div>
            `;
            if (newsContainer) {
                newsContainer.appendChild(card);
            }
        });

        if (newsContainer) {
            newsContainer.style.transition = "opacity 0.5s ease";
            newsContainer.style.opacity = 1;
        }
    }, 200);
}

// Initialization and Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    updateCurrentDate();

    // Radio button event listeners
    const radios = document.querySelectorAll('input[name="age-group"]');
    radios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            updateNews(e.target.value);
        });
    });

    if (refreshBtn) {
        refreshBtn.addEventListener('click', fetchNews);
    }

    // Initial render
    updateNews("adult");
});
