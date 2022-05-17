const { description } = require('../../package')
const containers = require("./components/containers.js");
const sidebarEn = require("./sidebars/en.json");
const sidebarRu = require("./sidebars/ru.json");

module.exports = {
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
    [
      "vuepress-plugin-container",
      {
        type: "example",
        before: info => `<div class="block example-block">
        <div class="block-title example-title">Пример ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "task",
        before: info => `<div class="block task-block">
        <div class="block-title task-title">Задание ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "nb",
        before: info => `<div class="block nb-block">
        <div class="block-title nb-title">Важно ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "quest",
        before: info => `<div class="block quest-block">
        <div class="block-title quest-title">Вопрос ${info}</div>
        <div class="block-contents">`,
        after: "</div></div>"
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "todo",
        defaultTitle: ""
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
