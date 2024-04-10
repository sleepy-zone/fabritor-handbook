---
sidebar_position: 0
---

# 自定义对象

在介绍对象之前，我们先来聊聊如何创建自定义对象。

## 创建对象类

通常我们需要继承 fabric.js 内已有的对象来创建新对象，这个对象可以是 Text、Rect 这种高级对象，也可以是 Object 这个基础对象。Text、Rect 这些对象也是继承 Object 而来的。 

使用 `fabric.util.createClass` 提供的工具类创建新对象类，并且指定 type，这样在操作中，我们可以使用 `object.type` 获取对象类型以进行不同的处理。

另外如果需要自定义渲染逻辑，需要覆盖 `_render` 方法，如果继承的是 Object，那必须要提供 `_render` 方法。

```js
fabric.CustomObject = fabric.util.createClass(fabric.Object, {
  type: 'custom',

  otherProp: '',

  otherFunction: function () {},

  _render: function () {}
})
```

## 重写 toObject _toSVG 等方法

我们在前面看到，canvas 可以导出 JSON 数据，就是调用的每个对象的 `toObject` 方法，如果你的自定义对象有不一样的逻辑，可以重写该方法。

比如 Rect 对象，Rect 对象新增了 rx、ry 两个属性，就覆盖了 `toObject` 方法再导出 JSON 数据时包含了新增的属性。

```js
toObject: function(propertiesToInclude) {
  return this.callSuper('toObject', ['rx', 'ry'].concat(propertiesToInclude));
}
```

另外一个是 _toSVG 方法。fabric.js 号称也是一个 svg parser，canvas 可以导出 svg，如果自定义对象有自定义的 _render，且也有导出 svg 的需求，记得重新该方法。

## 重写 CustomObject.fromObject

canvas 也可以加载一段 JSON 数据渲染画布，就是调用的每个对象 `fromObject` 这个静态方法。通常就是直接调用 Object 对象的 `_fromObject` 即可。

```js
fabric.Rect.fromObject = function(object, callback) {
  return fabric.Object._fromObject('Rect', object, callback);
};
```

如果有自定义的逻辑，也会比较复杂，比如 Text 的 fromObject 方法，需要额外处理 text 的 path 属性。

```js
fabric.Text.fromObject = function(object, callback) {
  var objectCopy = clone(object), path = object.path;
  delete objectCopy.path;
  return fabric.Object._fromObject('Text', objectCopy, function(textInstance) {
    textInstance.styles = fabric.util.stylesFromArray(object.styles, object.text);
    if (path) {
      fabric.Object._fromObject('Path', path, function(pathInstance) {
        textInstance.set('path', pathInstance);
        callback(textInstance);
      }, 'path');
    }
    else {
      callback(textInstance);
    }
  }, 'text');
};
```

---

fabritor 像文本、图片、线段、箭头等都进行了不同程度的自定义，自定义的代码在 `editor/custom-objects` 内，不过也都不是很复杂的自定义。

接下来我们聊一下 fabritor 中的对象处理的逻辑。