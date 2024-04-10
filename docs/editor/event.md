---
sidebar_position: 3
---

# 事件

代码位于 `this._initEvents()` 方法中。

这一部分主要基于 Canvas 的事件实现，fabric.js 提供了一个灵活的事件系统，几乎覆盖了 Canvas 上的所有的动作。

```js
// 监听事件
canvas.on(eventName, eventHandler);
// 取消事件
canvas.off(eventName, eventHandler);
```

Canvas 的所有事件可以前往[官网 DEMO 体验](http://fabricjs.com/events) 体验。

fabritor 功能都使用了事件实现，`this._initEvents()` 主要做了一些交互性的功能：画布缩放、双击修改组内文字、对象 Hover 效果等，这里不再赘述了。

同时你也可以抛出自定义事件：

```js
canvas.trigger(eventName, data);
```