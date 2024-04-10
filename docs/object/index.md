---
sidebar_position: 4
---

# 对象

介绍完 Editor，我们接下来介绍对象。整个编辑器，本质上都是在和对象打交道。

在编辑器入口中 `src/fabritor/index.tsx`，监听 canvas 的 selection 事件：

```js
const selectionHandler = (opt) => {
  const { selected, sketch } = opt;
  if (selected && selected.length) {
    const selection = editor.canvas.getActiveObject();
    setActiveObject(selection);
  } else {
    // @ts-ignore
    setActiveObject(sketch);
  }
}

editor.canvas.on('selection:created', selectionHandler);
editor.canvas.on('selection:updated', selectionHandler);
editor.canvas.on('selection:cleared', selectionHandler);
```

获取画布当前激活（activeObject）的对象，并设置到 Context 内，后续在各处我们通过 useContext 获取到激活对象进行处理。 

```js
const { object, editor } = useContext(GloablStateContext);
```