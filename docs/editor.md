---
sidebar_position: 3
---

# Editor

Editor 类是整个项目的核心，封装了大量和 fabric.js 有关的功能。代码位于 `editor/index.ts`。

## 初始化 

类初始化代码位于 `init` 方法内，我们逐个看一下。

```ts
public async init() {
  this._initObject();
  this._initCanvas();
  this._initEvents();
  this._initSketch();
  this._initGuidelines();

  this.autoSave = new AutoSave(this);
  await this.autoSave.loadFromLocal();

  this.fhistory = new FabricHistory(this);
  initHotKey(this.canvas, this.fhistory);

  this.autoSave.init();
}
```

### 对象通用设置

`this._initObject()` 内是和 fabric.js 对象相关的一些初始化操作。

fabric.js 把画布上所有的元素称为 Object，所以手册内统一就称为 `对象` 了。我猜，之所以称为 Object 是因为 fabric.js 内操作 Canvas 就和操作 JS 对象一样简单。

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

以上代码取自：[fabric.js 官网教程#why_fabric](http://fabricjs.com/fabric-intro-part-1#why_fabric)，建议初次使用 fabric.js 的同学都读一下。

说回对象初始化，`this._initObject()` 有三部分。



