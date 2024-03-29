---
sidebar_position: 2
---

# 快速开始

```bash
npm install -g yarn
yarn
yarn start
```

访问 http://localhost:3000/。

也可以直接前往 [https://fabritor.surge.sh/](https://fabritor.surge.sh/) 预览。（字体会加载很慢

<img src="img/docs/ui.jpg" style={{ borderRadius: 8 }} />


默认展示一个空白的设计器界面，画布默认为小红书的封面尺寸（1242x1660）。

可以看到，是一个典型的`左中右结构`的设计器界面。

## 技术栈

在详细讲解 fabritor 前，我们先来了解下 fabritor 用到了哪些技术栈。如果你对这些技术栈有一定了解，那对了解 fabritor 会有很大帮助。

**[react](https://react.dev/)**：React 技术栈。

**[fabric.js](http://fabricjs.com/)**：项目核心依赖。

**[ant design 5.0](https://ant-design.antgroup.com/index-cn)**：UI 依赖。

**[ice 3.0](https://v3.ice.work/)** 项目研发框架，很推荐在项目中使用！

另外项目还依赖了很多工具和库，在此表示感谢！不再一一列举。

## 代码结构

<img src="img/docs/code-tree.png" />

一个典型的 [ice 目录结构](https://v3.ice.work/docs/guide/basic/directory)。

两个核心目录：

`fabritor` 目录：图片设计器的入口，`UI` 目录展示了负责设计器的界面，`panel` 目录是左侧的操作区界面，`setter` 目录是右侧的属性设置界面。

`editor` 目录是和 fabric.js 相关的逻辑，封装了大量 fabric.js 功能，也是我们手册的核心内容。

---

接下来，我们详细介绍 fabritor 中的各项特性。



