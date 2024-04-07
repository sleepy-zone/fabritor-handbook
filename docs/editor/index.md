---
sidebar_position: 3
---

# Editor 类

Editor 类是整个项目的核心，封装了大量和 fabric.js 有关的功能。代码位于 `editor/index.ts`。

## 初始化 

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

类初始化代码位于 `init` 方法内，我们逐个看一下。
