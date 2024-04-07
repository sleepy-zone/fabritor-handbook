---
sidebar_position: 1
---

# 对象初始化

`this._initObject()` 内是和 fabric.js 对象相关的一些初始化操作。

## fabric.js 对象模型

我们先来简单聊聊 fabric.js 里的`对象`。

fabric.js 基于 Canvas 的底层 API 提供了一套`对象模型（Object Model）`，把画布上所有的元素抽象为 `Object`，使用 fabric.js 操作 Canvas 就和操作 JS 对象一样简单。

比如：canvas 内绘制矩形并且修改位置：

```js
var canvasEl = document.getElementById('c');
var ctx = canvasEl.getContext('2d');
ctx.fillStyle = 'red';

ctx.translate(100, 100);
ctx.rotate(Math.PI / 180 * 45);
ctx.fillRect(-10, -10, 20, 20);

// 清空画布，重新绘制
ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
ctx.fillRect(20, 50, 20, 20);
```

但使用 fabric.js，

```js
var canvas = new fabric.Canvas('c');

// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 45
});

canvas.add(rect);

// 修改对象即可
rect.set({ left: 20, top: 50 });
canvas.renderAll();
```

以上代码取自：[fabric.js 官网教程#why_fabric](http://fabricjs.com/fabric-intro-part-1#why_fabric)，建议初次使用 fabric.js 的同学都读一下，覆盖了 fabric.js 基础到高级的所有话题。

fabric.js 像 Rect、Text、Cricle 甚至是 Group 都是 Object，他们都继承于 `fabric.Object`。另外 fabric.js 的代码还是 ES5，使用的都是原型链，所以如果你要全局修改对象的属性，可以直接修改原型链。如果自定义部分过于复杂，那可能你需要自定义一个新的对象。

## 对象初始化逻辑

那说回对象初始化，`this._initObject()` 有三部分。

```ts
private _initObject () {
  initObjectPrototype();
  createCustomClass();
  initControl();
}
```

`initObjectPrototype` 方法内就是通过修改原型修改了一些对象的默认配置。具体配置项的含义都可以在[官方文档](http://fabricjs.com/docs/fabric.Object.html)中查看，你可以根据需求随意的修改。


`createCustomClass` 是创建自定义对象的逻辑。fabric.js 内通过继承 `fabric.Object` 创建了各种内置对象，同时你也可以通过扩展 `fabric.Object` 或者内置对象来创建新的对象。fabritor 内包含许多自定义对象，后面我们还会详细讨论。

`initControl` 是自定义对象 Control 的逻辑，Control 也就是对象控制点，可以对对象进行缩放、旋转、删除等。不管样式还是功能都可以自定义。我们也放到后面讨论。