# Little Paws — Beginner website

An English animal website made with plain HTML, CSS and JavaScript. Open index.html in a browser or use VS Code Live Server. No build step, database or external JavaScript libraries are needed.

## Five development stages

1. Basic pages and navigation — completed.
2. Single-question animal quiz — completed.
3. Expanded animal guide and responsive cards — completed.
4. Lifestyle matching quiz, seven animal profiles and saved preparation checklist — completed.
5. Layout review and accessibility improvements — initial version completed; further revisions may follow.

## What changed in stage five

- A two-column home introduction with a local cat photo and three clear starting points.
- Shared page widths, navigation, active-page styling, footer and back-to-top links.
- Animal shortcut links with a highlighted destination card.
- Responsive cards, wrapping navigation and larger touch targets for mobile screens.
- Visible keyboard focus, working skip links and clearer option borders.
- Descriptions for all four pages; the site still uses plain HTML, CSS and JavaScript.

GitHub Pages was enabled after stage four. Updates pushed to main are published automatically. This fifth-stage version records the current layout; further improvements may follow.

## What changed in stage four

- Six questions about activities, interaction, routine, housing, noise and care readiness.
- Seven possible profiles: cats, dogs, rabbits, hamsters, guinea pigs, budgies and aquarium fish.
- Results include matching answers, real care requirements and a link to the relevant animal profile.
- Ties are shown together. Incomplete answers receive a message and keyboard focus.
- Changing an answer clears stale results. Start again clears all choices.
- Unsuitable housing or incomplete care plans lead to preparation advice, not a forced match.
- A six-item pet preparation checklist saves in the current browser, shows progress and can be cleared.
- If storage is blocked or saved data is damaged, the checklist still works without crashing.

## 中文讲解

第四阶段把“知识题判对错”改成“性格与生活习惯匹配”，并完成照顾清单。第五阶段整理首页、导航和手机排版，并改善键盘操作。网页保持英文，代码保持普通 HTML、CSS、JavaScript，方便自己阅读和解释。

### 第五阶段从哪里看代码

- index.html：首页的 hero 区域放标题和照片；feature-grid 放三个入口卡片。
- 四个 HTML 页面：header-inner 和 footer-inner 统一页眉页脚；aria-current 标出当前页面；description 简要说明页面内容。
- animals.html：animal-links 中的 #cat 等链接跳到已有的动物卡片；CSS 的 :target 突出显示目标卡片。
- styles.css：display: grid 控制分栏；@media 在窄屏下改为单列；:focus-visible 显示键盘焦点；按钮和导航有更大的点击区域。
- quiz.js 和 care.js：继续使用第四阶段的匹配规则和清单保存逻辑。

在 VS Code 中打开 web.homework，然后右键 index.html，选择 Open with Live Server（需要已安装 Live Server 扩展）。也可以直接在文件夹里双击 index.html 查看。本地预览会显示电脑中的最新修改；提交并上传到 main 后，GitHub Pages 会自动更新，通常需要稍等片刻。

### 测试如何给出结果

quiz.js 中的 pets 数组保存七种动物的需求和偏好。findMatches 先检查是否答完、是否有准备好长期照顾和合适空间，再比较活动、互动、作息、空间和声音偏好。每个相符的维度加一分，至少三项相符才给出匹配；最高分相同的动物一起展示，不编造精确百分比。

房屋条件是筛选条件，不能被性格分数抵消：鱼需要合适鱼缸，猫、狗、兔子和虎皮鹦鹉需要合适房间活动空间。只在白天陪伴时排除仓鼠；特别需要安静时排除虎皮鹦鹉。这只是简单的课堂匹配规则，不是专业养宠评估。具体动物性格、过敏、房东规定、预算和专业照顾要求仍须自己确认。

使用 fieldset 和 legend 为每题分组，label 让文字也能点击。缺题时提示并聚焦第一道未答题；结果出现后聚焦结果标题。修改答案会隐藏旧结果，避免误读。

### 清单如何保存

care.js 使用 localStorage 存储各项的勾选状态。它是养宠前准备清单，不是每天自动重置的任务表；刷新会保留状态，点击 Clear checklist 才清空。没有把内容上传到服务器。try/catch 用于处理禁止存储或损坏的数据；遇到问题会显示无法保存的提示，勾选仍然可用。

### 你可以自己检查

1. 在 Pet match 页先不选答案直接提交，应提示答完六题。
2. 答完后查看结果理由和照顾需求，再打开结果中的动物介绍链接。
3. 选择“还没准备好”或“暂时没有空间”，应得到先准备的建议。
4. 更改答案或点击 Start again，旧结果应消失。
5. 在 Pet care 页勾选清单，刷新确认恢复，清空后再次刷新确认清空。
6. 缩窄浏览器至手机尺寸，检查文字、选项和按钮。

建议第四次提交说明：Add lifestyle pet matching and saved care checklist

第五阶段的这一版已完成，后续可以根据检查结果继续修改。开发阶段和 Git 提交次数不一定一一对应，之前的补充提交也会保留在历史中。
