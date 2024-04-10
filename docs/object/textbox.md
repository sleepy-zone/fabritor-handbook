---
sidebar_position: 1
---

# 文本

当初技术选型没有选择 Konva 的一个重要原因就是 Konva 没有实现文字编辑的功能，当然这个功能确实很复杂，fabric.js 内使用了大量的代码实现，抽象了三个类：`fabric.Text`、`fabric.IText`、`fabric.Textbox`，分别对应简单文本、可编辑单行文本、可编辑多行文本。

## 自定义文本

fabritor 内基于 `fabric.Textbox` 进行了简单的自定义，之所以自定义有两个原因：

1. `paintFirst: 'stroke'` 属性，覆盖默认属性，配置描边 `stroke` 效果会比较好看。
2. 最重要的原因，在配置 Textbox 的 path 属性发现了一个 fabric.js 的 bug，配置 path 属性后，文本的边界并没有因为有了 path 属性而变化，但 Text 对象可以，所以我把 Text 对象的计算边界的逻辑 `initDimensions` 抄了过来。

## 文本填充

关于像字体、字号这些配置这里就不再赘述了，主要聊一下文本的填充。

像前端遇到字体，只能设置 `color`，但像 canvas 中不不仅仅是颜色，还可以是渐变色、pattern，所以叫做填充 `fill`。如果你用过 Sketch，会发现 Sketch 也是如此。

```js
// 填充颜色
text.set('fill', '#000000');

// 填充渐变
text.set('fill', new fabric.Gradient({
  coords: {
    x1: object.width,
    y1: 0,
    x2: 0,
    y2: 0,
    r1: 0,
    r2: object.width / 2
  },
  gradientUnits: 'pixels'
}))

// 填充pattern
object.set('fill', new fabric.Pattern({
  source: img,
  repeat: 'repeat'
}));
```

不过在实践中，发现了 fabric.js 的两个 bug：

1. fabric.js 文本渐变不支持配置百分比，只能用像素值去配置。
2. 文本配置了 path 属性后，渐变填充就会失效。

需要在实际应用场景中规避。

---

关于渐变，可以参考：[聊聊前端里的渐变](https://sleepy-zone.github.io/blog/gradient-in-fe/)。