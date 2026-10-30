# Little Paws — Beginner website

This is a small animal website built with HTML, CSS and a little JavaScript.

## Current progress

- Four linked pages: home, animals, pet care and quiz.
- A welcome page with a local cat photograph.
- Profiles of cats, dogs, rabbits and hamsters, including activities and care tips.
- Animal cards in two columns on larger screens and one column on phones.
- Links from the animal guide to the care page, quiz and RSPCA pet-care guides.
- A basic pet-care list.
- A quiz with answer choices and immediate feedback.

## Open locally

Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Five development stages

1. Basic pages, shared styles and navigation — completed.
2. Interactive animal quiz — completed.
3. Expanded animal guide and responsive cards — implemented in this version.
4. Pet-care checklist and more useful care information — planned.
5. Final layout improvements, accessibility checks and GitHub Pages publishing — planned.

Each stage should represent real work that has been reviewed and tested.

## 中文说明

第三阶段完善了动物介绍页：保留猫和狗，新增兔子和仓鼠。每张卡片都有介绍、活动示例和照顾建议。页面还链接到照顾指南、小测验和 RSPCA 的资料入口，方便继续阅读。

这次修改涉及三个文件：

- `animals.html`：四种动物的内容和卡片结构。
- `styles.css`：卡片样式和小屏幕单列布局。
- `README.md`：当前进度和后续计划。

可以打开动物页，把浏览器窗口缩窄，观察卡片从两列变成一列；再点击照顾指南和测验链接，检查导航。

代码讲解：`section` 将每种动物的内容分组，`aria-labelledby` 指向该卡片的标题；CSS Grid 负责两列布局，`@media (max-width: 600px)` 让窄屏改成一列。装饰性的表情符号使用 `aria-hidden`，避免读屏器重复朗读。

本次提交说明：`Expand animal guide with responsive cards`。

第四、第五阶段目前是计划；后续完成实际修改并检查后再提交。
