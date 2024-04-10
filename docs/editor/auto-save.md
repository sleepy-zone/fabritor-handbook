---
sidebar_position: 5
---

# 自动保存

在线编辑器自动保存是一个比较重要的功能，一是可以及时保存用户操作，另外也可以在用户误关闭页面时，再次打开可以快速恢复。

fabritor 的实现是将用户操作保存在本地 `LocalStorage` 中，在真正业务实践中，可以将操作保存在云端。

为了更好的抽离自动保存的逻辑，抽象一个 `AutoSave` 类来处理。

自动保存有两部分功能，一是随着用户操作，将最新内容保存到本地。这里主要监听 canvas 的一些事件实现：

```js
private initAutoSaveEvents () {
  return {
    'object:added': this.autoSaveAction.bind(this),
    'object:removed': this.autoSaveAction.bind(this),
    'object:modified': this.autoSaveAction.bind(this),
    'object:skewing': this.autoSaveAction.bind(this),
    'fabritor:object:modified': this.autoSaveAction.bind(this)
  };
}
```

`this.autoSaveAction` 调用 Editor 类的 `canvas2Json` 方法将 json 保存到本地。

`fabritor:object:modified` 这个时间就是 fabritor 内部抛出的自定义事件。一般像添加、移除、拖动位置等操作 fabric.js 是会抛出对应事件的，而通过程序 `object.set(key, value)` 这样调用是不会抛出事件的，fabritor 在这个时机统一抛出 `fabritor:object:modified` 这个事件。

```js
public fireCustomModifiedEvent (data: any = null) {
  this.canvas.fire('fabritor:object:modified', data);
}
```

不过如果你看过 fabritor 的代码就会发现，这个调用遍布代码各处，如果有更好的实现欢迎 issue 和 pr。

另外一个功能，是打开编辑器时加载本地内容，这里直接调用 Editor 类里的 `loadFromJSON` 将本地 json 加载到编辑器内。