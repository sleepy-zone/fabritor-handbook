---
sidebar_position: 3
---

# 形状

形状包括了线条、箭头、几何形状、图案等。

## 线条和箭头

线条和箭头也都是自定义对象。

箭头继承于 Line 对象，重写了 _render 方法。这里给两种箭头的实现，不过实现方式类似，我们以其中一个为例：

```js
_render: function(ctx) {
  this.callSuper('_render', ctx);

  ctx.save();

  if (!this.oldArrowInfo) {
    this.oldArrowInfo = {
      left: -28,
      top: -15,
      bottom: 15,
      strokeWidth: this.strokeWidth
    };
  }
  var xDiff = this.x2 - this.x1;
  var yDiff = this.y2 - this.y1;
  var angle = Math.atan2(yDiff, xDiff);
  ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
  ctx.rotate(angle);

  const delta = this.strokeWidth - this.oldArrowInfo.strokeWidth;
  ctx.lineJoin = this.strokeLineJoin;
  ctx.lineCap = this.strokeLineCap;
  ctx.strokeStyle = this.stroke;
  ctx.beginPath();

  ctx.moveTo(0, 0);
  ctx.lineTo(this.oldArrowInfo.left - delta, this.oldArrowInfo.bottom + delta);
  ctx.lineTo(this.oldArrowInfo.left - delta, this.oldArrowInfo.top - delta);
  ctx.closePath();
  ctx.fillStyle = this.stroke;
  ctx.fill();
  ctx.stroke();

  ctx.restore();
},
```

_render 方法内首先执行了父类，也就是 Line 的 _render 方式绘制一条直线，然后在直线端点绘制一个箭头，箭头其实也是一条线段。不过绘制时需要考虑 `strokeWidth`，当 strokeWidth 增大时，线条变宽，同时也要处理箭头。

这里我自己设计了一个算法，记住之前设置的 strokeWidth，当 strokeWidth 改变时，并不改变箭头的 strokeWidth，而是根据差值去改变箭头线段内的几个点的坐标。如果有更好的实现，欢迎 issue 和 pr。

## 几何形状

几何形状就比较简单，直接创建 fabric.js 的 Rect、Circle、Polygon 等对象即可。

---

形状处还有一个心形和星星，他们是使用 Path 实现，我们放到下一节聊。
