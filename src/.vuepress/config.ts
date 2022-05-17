const { description } = require('../../package')
const containers = require("./components/containers.js");
const sidebarEn = require("./sidebars/en.json");
const sidebarRu = require("./sidebars/ru.json");
// const katex = require('@iktakahiro/markdown-it-katex')
import katex from '@iktakahiro/markdown-it-katex'

import {defineConfig} from 'vuepress/config'

export default defineConfig({
  title: 'Ariadna',
  description: description,

  base: '/ariadna/',

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "ru-RU", // this will be set as the lang attribute on <html>
      title: "Ариадна",
      description: "Лучшие учебные материалы в одном месте"
    },
    "/en/": {
      lang: "en-US",
      title: "Ariadna",
      description: "Best educational materials in one place"
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css' }],

    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ],

  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,

    locales: {

      "/": {
        selectText: "Языки",
        label: "🇷🇺 Русский",
        editLinkText: "Редактировать страницу на GitHub",
        nav: [{ text: "Справочники", link: "/ru/handbooks/" }],
        algolia: {},
        sidebar: sidebarRu
      },
      "/en/": {
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
    },

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ...containers,
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typographer: true });
      md.use(katex)
    }
  },
})
