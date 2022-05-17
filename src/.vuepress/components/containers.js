module.exports = [
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
]