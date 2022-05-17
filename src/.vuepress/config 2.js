const sidebarEn = require("./sidebars/en.json");
const sidebarRu = require("./sidebars/ru.json");

module.exports = {
  base: "/lucidum101/",
  // base: process.env.NODE_ENV === 'production' ? '/lucidum101/' : '/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Lucidum 101",
      description: "What real education should be"
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Lucidum 101",
      description: "Каким и должно быть настоящее образование"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "🇺🇸 English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",

        // algolia docsearch options for current locale
        algolia: {},
        nav: [{ text: "Handbooks", link: "/en/handbooks/" }],
        sidebar: sidebarEn
      },
      "/ru/": {
        selectText: "Языки",
        label: "🇷🇺 Русский",
        editLinkText: "Редактировать страницу на GitHub",
        nav: [{ text: "Справочники", link: "/ru/handbooks/" }],
        algolia: {},
        sidebar: sidebarRu
      }
    }
  },
  
  plugins: [
    [
      "container",
      {
        type: "example",
        before: info => `<div class="block example-block">
        <div class="block-title example-title">Пример ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "task",
        before: info => `<div class="block task-block">
        <div class="block-title task-title">Задание ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "nb",
        before: info => `<div class="block nb-block">
        <div class="block-title nb-title">Важно ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "quest",
        before: info => `<div class="block quest-block">
        <div class="block-title quest-title">Вопрос ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "container",
      {
        type: "todo",
        defaultTitle: ""
      }
    ],
    [
      "mathjax",
      {
        target: "chtml",
        macros: {
          "~=": "\\approx",
          "=/=": "\\ne",
          "+-": "\\pm",
          "=>": "\\implies",
          "<=": "\\impliedby",
          "<=>": "\\iff",
          "->": "\\to",
          "<-": "\\gets",
          "<->": "\\leftrightarrow",
          "...": "\\dots",
          "***": "\\cdots",
          "*": "\\cdot",
          "-:": "\\div",
          "\\deg": "^\\circ",
          "(": "\\left(",
          ")": "\\right)",
          "\\Z": "\\mathbb{Z}",
          "\\R": "\\mathbb{R}",
          "\\Q": "\\mathbb{Q}",
          "\\N": "\\mathbb{N}"
        }
        // presets: [
        //     '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
        //     '\\def{#1}/{#2}{\\dfrac{#1}{#2}}',
        // ]
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        // selector for images that you want to be zoomable
        // default: '.content img'
        // selector: '.my-wrapper .my-img',

        // make imgaes zoomable with delay after entering a page
        // default: 500
        delay: 1000,

        // options of zooming
        // default: {}
        options: {
          bgColor: "rgba(0,0,0,0.75)",
          zIndex: 10000
        }
      }
    ],
    // Below 2 plugins can conflict with each other, nedd to test
    "vuepress-plugin-smooth-scroll",
    "@vuepress/active-header-links",
    // Export to PDF, need to resolve conflict
    "vuepress-plugin-export",
    // Back to top button
    "@vuepress/back-to-top",
    // Reading progress
    "reading-progress",
    // Progress bar?
    "@vuepress/nprogress",
    // Search
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    // Progressive Web App
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "New content is available.",
            buttonText: "Refresh"
          },
          "/ru/": {
            message: "На сайте появилось много нового.",
            buttonText: "Обновить"
          }
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typographer: true });
      // md.use(require("@iktakahiro/markdown-it-katex"))
    }
  },
  head: [
    // ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css' }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ],
    [
      "script",
      {
        type: "text/javascript",
        src: "https://cindyjs.org/dist/latest/Cindy.js"
      }
    ]
  ]
};
