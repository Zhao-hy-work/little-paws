# Little Paws — Beginner website

An English animal website made with plain HTML, CSS and JavaScript. Open index.html in a browser or use VS Code Live Server. No build step, database or external JavaScript libraries are needed.

## Five development stages

1. Basic pages and navigation — completed.
2. Single-question animal quiz — completed.
3. Expanded animal guide and responsive cards — completed.
4. Lifestyle matching quiz, seven animal profiles and saved preparation checklist — implemented in this version.
5. Final layout review, accessibility checks and GitHub Pages publishing — planned.

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

这次把“知识题判对错”改成“性格与生活习惯匹配”，并完成原定的照顾清单。网页保持英文，代码保持普通 HTML、CSS、JavaScript，方便自己阅读和解释。

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

第五阶段的最终排版和网站发布尚未完成。
