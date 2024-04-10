---
sidebar_position: 2
---

# 图片

图片应该是图片编辑器类应用最常见一类对象了，打开一个设计模板，90%的可能都是图片。

## 自定义图片

之所以需要自定义图片，是为了给图片添加边框和圆角。

为了简化实现，自定义图片对象继承了 Group 类，将图片和一个矩形组合，矩形透明填充，只配置 stroke, 作为了图片的边框实现。

这样外部修改边框，其实是修改图片的边框。

```js
initialize (options, alreayGrouped = false) {
  const { image, imageBorder = {}, ...rest } = options;
  image.set({
    originX: 'center',
    originY: 'center'
  });
  this.img = image;
  this.borderRect = this._createBorderRect(imageBorder);
  this.img.clipPath = this._createClipPath();
  this.callSuper('initialize', [this.img, this.borderRect], {
    borderColor: '#FF2222',
    borderDashArray: null,
    borderScaleFactor: 2,
    padding: 0,
    subTargetCheck: false,
    imageBorder,
    ...rest
  }, alreayGrouped);
}
```

如上面代码所示，图片的圆角使用了对象的 clipPath 属性，clipPath 可以以任意的形状裁剪对象，将图片的 clipPath 设置为一个圆角矩形，同样，修改圆角，修改圆角矩形的圆角即可。

**注：**

当图片应用 clipPath 属性时，图片会变糊，见 fabric.js 的 issue：[fabricjs/fabric.js#5639](https://github.com/sleepy-zone/fabritor-web/issues/31)。有小伙伴在 [fabritor issue](https://github.com/sleepy-zone/fabritor-web/issues/31) 中提到设置 canvas 的 `imageSmoothingEnabled` 为 false 可以解决。不过 fabritor 还是给出一个配置项，按照 [fabricjs/fabric.js#5639](https://github.com/sleepy-zone/fabritor-web/issues/31) 给出的方式处理：

```js
fabric.Image.prototype.needsItsOwnCache = () => false;
fabric.perfLimitSizeTotal = 16777216; // allows for up to 4096x4096 cache
```

## 配置

### 边框虚线配置

图片的边框配置，fabritor 可以将边框配置为虚线，即 `strokeDashArray` 属性，这是一个 svg 里的概念，具体可以查阅 [MDN 的文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)。正常设置没什么问题，但随着 strokeWidth 的增大会发现 strokeDashArray 中的间距会黏在一起。所以我设计了一个简单的算法，strokeDashArray 的线段和间隔随着 strokeWidth 增大而增大。如果有更好的实现，欢迎 issue 和 pr。

形状内边框的也用了同样的方式处理。

```js
dashArray[0] = dashArray[0] * (strokeWidth / 2 > 1 ? strokeWidth / 2 : strokeWidth);
dashArray[1] = dashArray[1] * (strokeWidth / 4 > 1 ? strokeWidth / 4 : strokeWidth);
```

### 图片裁剪

图片裁剪也使用了一个很取巧方式，当需要裁剪图片时，获取画布图片在画布外部处理，修改后再重新绘制到画布。

不过这并不是一个完美的实现方式，更好的方式是结合 clipPath 在画布内处理，同时可以做到任意形状的裁剪，可以参照 [Canva](https://www.canva.cn/) 内的处理。

fabritor 图片裁剪依赖了 [cropperjs](https://fengyuanchen.github.io/cropperjs/v2/zh/guide.html)，在此感谢！