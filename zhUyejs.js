// 多语言数据
const translations = {
    en: {
        title: "Pank Records",
        menu_artists: "Artists",
        menu_articles: "Articles",
        menu_music: "Music",
        menu_contact: "Contact",
        artists_title: "Our Artists",
        artists_desc: "Explore the amazing talents at Pank Records.",
        articles_title: "Latest Articles",
        article1: "https://b23.tv/WO5IW9u",
        article2: "Pluggnb: A New Wave in Music",
        article3: "How Subcultures Shape Music Today",
        music_title: "Discover Our Music",
        music_desc: "Check out our latest tracks and albums.",
        contact_title: "Contact Us",
        contact_desc: "For collaborations or inquiries, email us at:pankidRecords",
        language_label: "Language:"
    },
    zh: {
        title: "牧童唱片",
        menu_artists: "艺人",
        menu_articles: "文章",
        menu_music: "音乐",
        menu_contact: "联系",
        artists_title: "我们的艺人",
        artists_desc: "探索牧童唱片的精彩艺人。",
        articles_title: "最新文章",
        article1: "https://b23.tv/WO5IW9u",
        article2: "Pluggnb：音乐的新浪潮",
        article3: "亚文化如何影响当代音乐",
        music_title: "发现我们的音乐",
        music_desc: "聆听我们的最新曲目和专辑。",
        contact_title: "联系我们",
        contact_desc: "合作或咨询，请通过以下邮件联系我们：pankidRecords",
        language_label: "语言："
    },
    jp: {
        title: "牧童レコード",
        menu_artists: "アーティスト",
        menu_articles: "記事",
        menu_music: "音楽",
        menu_contact: "連絡先",
        artists_title: "私たちのアーティスト",
        artists_desc: "牧童レコードの素晴らしい才能を探る。",
        articles_title: "最新の記事",
        article1: "https://b23.tv/WO5IW9u",
        article2: "Pluggnb：新しい音楽の波",
        article3: "サブカルチャーが今日の音楽を形作る方法",
        music_title: "音楽を発見",
        music_desc: "私たちの最新のトラックとアルバムをご覧ください。",
        contact_title: "お問い合わせ",
        contact_desc: "コラボレーションやお問い合わせは、次のメールでお問い合わせください：pankidRecords",
        language_label: "言語："
    }
};

// 切换语言函数
function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 默认语言
switchLanguage("en");