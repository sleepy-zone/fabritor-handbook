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

## 项目全貌

整个项目是一个单页应用，入口文件位于 `fabritor/index.tsx`：

```tsx
<GloablStateContext.Provider
  value={{
    object: activeObject,
    setActiveObject,
    isReady,
    setReady,
    editor,
    roughSvg
  }}
>
  <Layout style={{ height: '100%' }} className="fabritor-layout">
    <Spin spinning={!isReady} fullscreen />
    <ObjectRotateAngleTip />
    <Header />
    <Layout>
      <Panel />
      <Content style={contentStyle}>
        <ContextMenu ref={contextMenuRef} object={activeObject}>
          <div style={workspaceStyle} ref={workspaceEl} className="fabritor-workspace">
            <canvas ref={canvasEl} />
          </div>
        </ContextMenu>
      </Content>
      <Setter />
    </Layout>

    <svg id="fabritor-rough-svg" ref={roughSvgEl} />
  </Layout>
</GloablStateContext.Provider>
```

UI 比较简单，一个典型的`左中右结构`的设计器界面。（比较早接触这个项目的同学可能记得，项目最初 setter 是位于上方的，当时的考虑是这样右侧工作区 WorkSpace 空间就会很大，很利于编辑横屏的图片项目。不过在实践之后发现，Setter 位于上方，对于复杂的设置有过多的 Popover，以及很多频繁的左侧空间使用，也会打扰使用者操作。不过 UI 见仁见智，本手册不会过多讨论。）

状态管理部分，因为项目主要共享的基本只有当前画布激活的对象（Object），所以直接使用了 React 的 `Context`，一个拼写错误的 `GloablStateContext`。😂

初始化的代码位于一个简单的 `useEffect` 中：

```ts
useEffect(() => {
  if (editor) {
    initEvent();
    initRoughSvg();
  }
}, [editor]);

useEffect(() => {
  initEditor();
}, []);
```

下一节，我们介绍一下 Editor 的实现。



