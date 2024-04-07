"use strict";(self.webpackChunkfabricjs_tutorial=self.webpackChunkfabricjs_tutorial||[]).push([[827],{2343:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=e(5893),o=e(1151);const r={sidebar_position:3},s="Editor",a={id:"editor/index",title:"Editor",description:"Editor \u7c7b\u662f\u6574\u4e2a\u9879\u76ee\u7684\u6838\u5fc3\uff0c\u5c01\u88c5\u4e86\u5927\u91cf\u548c fabric.js \u6709\u5173\u7684\u529f\u80fd\u3002\u4ee3\u7801\u4f4d\u4e8e editor/index.ts\u3002",source:"@site/docs/editor/index.md",sourceDirName:"editor",slug:"/editor/",permalink:"/fabritor-handbook/editor/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/fabritor-handbook/quick-start"},next:{title:"\u5bf9\u8c61\u521d\u59cb\u5316",permalink:"/fabritor-handbook/editor/object-init"}},c={},d=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2}];function h(t){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"editor",children:"Editor"}),"\n",(0,n.jsxs)(i.p,{children:["Editor \u7c7b\u662f\u6574\u4e2a\u9879\u76ee\u7684\u6838\u5fc3\uff0c\u5c01\u88c5\u4e86\u5927\u91cf\u548c fabric.js \u6709\u5173\u7684\u529f\u80fd\u3002\u4ee3\u7801\u4f4d\u4e8e ",(0,n.jsx)(i.code,{children:"editor/index.ts"}),"\u3002"]}),"\n",(0,n.jsx)(i.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"public async init() {\n  this._initObject();\n  this._initCanvas();\n  this._initEvents();\n  this._initSketch();\n  this._initGuidelines();\n\n  this.autoSave = new AutoSave(this);\n  await this.autoSave.loadFromLocal();\n\n  this.fhistory = new FabricHistory(this);\n  initHotKey(this.canvas, this.fhistory);\n\n  this.autoSave.init();\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["\u7c7b\u521d\u59cb\u5316\u4ee3\u7801\u4f4d\u4e8e ",(0,n.jsx)(i.code,{children:"init"})," \u65b9\u6cd5\u5185\uff0c\u6211\u4eec\u9010\u4e2a\u770b\u4e00\u4e0b\u3002"]})]})}function l(t={}){const{wrapper:i}={...(0,o.a)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},1151:(t,i,e)=>{e.d(i,{Z:()=>a,a:()=>s});var n=e(7294);const o={},r=n.createContext(o);function s(t){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function a(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(r.Provider,{value:i},t.children)}}}]);