---
sidebar_position: 2
---

# 画布初始化

画布负责管理和操作对象。默认情况下，新建一个 `fabric.Canvas` 即可（后面 Canvas 默认都是 fabric.Canvas，如果涉及到浏览器原生 Canvas，我们会特别的称之为`原生Canvas`），但我们为了模拟常见的图片编辑器的效果，中间使用一个矩形作为真正的画布。

该思路借鉴自[vue-fabric-editor](https://github.com/nihaojob/vue-fabric-editor)，很巧妙。

## fabric.Canvas

```ts
private _initCanvas () {
  const { canvasEl, workspaceEl } = this._options;
  this.canvas = new fabric.Canvas(canvasEl, {
    selection: true,
    containerClass: 'fabritor-canvas',
    enableRetinaScaling: true,
    fireRightClick: true,
    controlsAboveOverlay: true,
    width: workspaceEl.offsetWidth,
    height: workspaceEl.offsetHeight,
    backgroundColor: '#ddd',
    preserveObjectStacking: true,
    imageSmoothingEnabled: false
  });
}
```

新建 `fabric.Canvas` 代码比较简单，有几个配置项单独说一下：

+ `selection` 控制画布是否可以多选。
+ `fireRightClick` 是否触发右键时间，这对右键菜单很有有用。
+ `controlsAboveOverlay` 对象的 Control 是否渲染在对象之上，因为我们用矩形模拟了画布，那矩形之外如果有对象，不会渲染出来，但会渲染其 Control。
+ `preserveObjectStacking` 选中对象时是否将该对象的层级提高。
+ `imageSmoothingEnabled` 是 Canvas Context 的一个属性，用来设置图片是否平滑的属性，true 表示图片平滑（默认值），false 表示图片不平滑。

> MDN：以缩放画布为例，这个属性对像素为主的游戏很有用。默认的改变大小的算法会造成图片模糊并且破坏图片原有的像素。如果那样的话，设置属性值为 false。

## 矩形画布

真正用户看到的画布。创建一个矩形，将矩形添加到 Canvas 中，fabritor 内称之为 Sketch。

```ts
private _initSketch () {
  // 默认小红书尺寸
  const { width = 1242, height = 1660 } = this._template || {};
  const sketch = new fabric.Rect({
    fill: '#ffffff',
    left: 0,
    top: 0,
    width,
    height,
    selectable: false,
    hasControls: false,
    hoverCursor: 'default',
    // @ts-ignore custom id 
    id: SKETCH_ID,
    // @ts-ignore custom desc
    fabritor_desc: '我的画板 by fabritor',
  });
  this.canvas.add(sketch);
  this.canvas.requestRenderAll();
  this.sketch = sketch;

  this._adjustSketch2Canvas();
}
```

Sketch 默认为小红书封面尺寸，当然也允许修改，如果按原始尺寸展示，肯定出现不和谐的情况，所以进行简单的计算，将 Canvas 缩放到一个合适的比例。

同时，默认 Canvas 添加的对象都是位于左上角的，所以我们通过空间变换将 Sketch 的中心移动至 Canvas 中心。这样 Canvas 左上角添加元素时，就会显示在 Sketch 的左上角。

```ts
private _adjustSketch2Canvas () {
  const zoomLevel = calcCanvasZoomLevel(
    {
      width: this.canvas.width,
      height: this.canvas.height
    },
    {
      width: this.sketch.width,
      height: this.sketch.height
    }
  );

  const center = this.canvas.getCenter();
  this.canvas.zoomToPoint(new fabric.Point(center.left, center.top), zoomLevel - 0.04);

  // sketch 移至画布中心
  const sketchCenter = this.sketch.getCenterPoint();
  const viewportTransform = this.canvas.viewportTransform;
  // @ts-ignore 平移
  viewportTransform[4] = this.canvas.width / 2 - sketchCenter.x * viewportTransform[0];
  viewportTransform[5] = this.canvas.height / 2 - sketchCenter.y * viewportTransform[3];
  // @ts-ignore
  this.canvas.setViewportTransform(viewportTransform);
  this.canvas.requestRenderAll();

  this.sketch.clone((cloned) => {
    this.canvas.clipPath = cloned;
    this.canvas.requestRenderAll();
  });
}
```

## fabric.js Canvas 的 viewportTransform

简单介绍一下 fabric.js Canvas viewportTransform。

viewportTransform 是 Canvas 的一个属性，用于进行空间变换，将一个点从一个坐标系转换到另一个坐标系，形式是一个6个值的数组：

```js
[
 a, c, e,
 b, d, f
]
```

**a 和 d 控制了缩放，b 和 c 控制了倾斜，e 和 f 控制了平移。**

写成上述类似矩阵的形式，感官上更好理解一些，我们逐个来看：

### 缩放

变换公式如下：

$$
\begin{bmatrix}
 x'\\y'

\end{bmatrix}
=
\begin{bmatrix}
  a&0 \\
  0&d
\end{bmatrix}
\begin{bmatrix}
 x\\y

\end{bmatrix}
$$

不知道你们还记不记得矩阵的乘法， x 和 y 分别乘以一个系数，很显然就可以达到缩放的效果。这就是数组中 a 和 d 两个参数为何可以控制缩放的原因。

比如，我们要实现对象按照 y 轴对称，其实就是就 x 的值乘以 -1，y 值保持不变：

$$
\begin{bmatrix}
 x'\\y'

\end{bmatrix}
=
\begin{bmatrix}
  -1&0 \\
  0&1
\end{bmatrix}
\begin{bmatrix}
 x\\y

\end{bmatrix}
$$

### 倾斜

我们看到上述缩放矩阵还空着两个值，那两个值就是控制倾斜的，也就是 b 和 c：

想象一个位于[0,0]点，宽高为1的矩形，四个点分别为：[0,0] [0,1] [1,0] 和 [1,1]，
此时我们将 c 的值置为 0.5，那么四个点变换为： [0,0] [1.5,1] [1,0] [1.5,1]。可以在图上画一下，你得到了一个倾斜的矩形！

$$
\begin{bmatrix}
 x'\\y'

\end{bmatrix}
=
\begin{bmatrix}
  1&c \\
  b&1
\end{bmatrix}
\begin{bmatrix}
 x\\y

\end{bmatrix}
$$

### 平移

也就是数组内 e 和 f，当 x 和 y 分别加上一个值时，就是平移的效果。

$$
\begin{bmatrix}
 x'\\y'

\end{bmatrix}
=
\begin{bmatrix}
  1&0 \\
  0&1
\end{bmatrix}
\begin{bmatrix}
 x\\y

\end{bmatrix}
+
\begin{bmatrix}
 e\\f

\end{bmatrix}
$$

关于更多 fabric.js 变换的内容可以参考官方文档[Using transformations, Introduction to Fabric.js Part 6](http://fabricjs.com/using-transformations)

另外，要详细了解线性变换的内容，可以参考 B 站视频[GAMES101-现代计算机图形学入门-闫令琪](https://www.bilibili.com/video/BV1X7411F744)，讲的深入浅出，一门优秀的计算机图形学入门教程。