---
sidebar_position: 6
---

# 历史记录

历史记录也是编辑器类应用中很重要的功能，通过历史记录用户可以快速撤销自己的误操作，也可以在对比效果之后恢复到已有的操作。

同样，历史记录依赖事件实现，也监听了和自动保存一样的事件，同样也抽象一个 `FabricHistory` 类来处理。

类中提供了三个数据，分别保存可以撤销的数据（historyUndo）、重做的数据（historyRedo）和当前状态（currentState）。

```js
private _historyEvents () {
  return {
    'object:added': this._historySaveAction.bind(this),
    'object:removed': this._historySaveAction.bind(this),
    'object:modified': this._historySaveAction.bind(this),
    'object:skewing': this._historySaveAction.bind(this),
    'fabritor:object:modified': this._historySaveAction.bind(this)
  };
}
```

监听事件，将操作也就是 JSON 数据保存到历史记录中。

另外提供了 undo 和 redo 两个方法供外部调用。

undo 和 redo 本质上是入栈和出栈的操作。以 undo 为例：

* 从 historyUndo 数据中找出最新数据：`const _history = this.historyUndo.pop()`
* 将 currentState 放到 historyRedo 中
* 将 historyUndo 数据中找出最新数据置为 currentState
* 画布重新加载 currentState 对应的 JSON 数据

---

备注：该代码由 `https://github.com/alimozdemir/fabric-history/blob/master/src/index.js` 修改而来。