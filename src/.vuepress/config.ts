const { description } = require('../../package')
const containers = require("./components/containers.js");
const sidebarEn = require("./sidebars/en.json");
const sidebarRu = require("./sidebars/ru.json");
// const katex = require('@iktakahiro/markdown-it-katex')
import katex from '@iktakahiro/markdown-it-katex'

import {defineConfig} from 'vuepress/config'

export default defineConfig({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ariadna',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
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
