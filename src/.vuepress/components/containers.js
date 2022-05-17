module.exports = [
  [
    "vuepress-plugin-container",
    {
      type: "example",
      before: `<div class="block example">
          <div class="title">Пример</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "hw",
      before: `<div class="block hw">
          <div class="title">Homework</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "nb",
      before: (info) => `<div class="block nb">
          <div class="title">Важно</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "footnote",
      before: `<div class="block footnote">
          <div class="title">Примечание</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "quote",
      before: `<div class="quote block">`,
      after: (info) =>
        `<div class="author">${info}</div>
            </div>`
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "quiz",
      before: `<div class="block quiz">
          <div class="title">Викторина</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "principle",
      before: (info) => `<div class="principle block">
          <div class="title">${info}</div>`,
      after: `</div>`
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "tasks",
      before: `<div class="block tasks">
          <div class="title">Задания</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "todo",
      before: (info) => {
        let res = "";

        if (info.length > 2) {
          switch (info) {
            case "table":
              res = "таблицу";
              break;
            case "img":
              res = "картинку";
              break;
            case "task":
              res = "задание";
              break;
            default:
              res = "";
              break;
          }
          res = `<div class="title">Добавить ${res}</div>`;
        }

        return `<div class="block todo">${res}`;
      },
      after: "</div>"
    }
  ],

  [
    "vuepress-plugin-container",
    {
      type: "wow",
      before: (title) => `<div class="block wow">
          <div class="title">${title}</div>`,
      after: "</div>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "youtube",
      before: (src) =>
        `<iframe class="youtube-frame" src="https://www.youtube.com/embed/${src}" frameborder="0" allowfullscreen>`,
      after: "</iframe>"
    }
  ],
  [
    "vuepress-plugin-container",
    {
      type: "desmos",
      before: (src) => `<iframe class="desmos-frame"
      src="https://www.desmos.com/calculator/${src}"
      frameborder="0">`,
      after: "</iframe>"
    }
  ]
]