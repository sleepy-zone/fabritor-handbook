"use strict";(self.webpackChunkfabricjs_tutorial=self.webpackChunkfabricjs_tutorial||[]).push([[471],{4046:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=n(5893),r=n(1151);const o={sidebar_position:6},s="\u5386\u53f2\u8bb0\u5f55",c={id:"editor/history",title:"\u5386\u53f2\u8bb0\u5f55",description:"\u5386\u53f2\u8bb0\u5f55\u4e5f\u662f\u7f16\u8f91\u5668\u7c7b\u5e94\u7528\u4e2d\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u901a\u8fc7\u5386\u53f2\u8bb0\u5f55\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u64a4\u9500\u81ea\u5df1\u7684\u8bef\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5bf9\u6bd4\u6548\u679c\u4e4b\u540e\u6062\u590d\u5230\u5df2\u6709\u7684\u64cd\u4f5c\u3002",source:"@site/docs/editor/history.md",sourceDirName:"editor",slug:"/editor/history",permalink:"/fabritor-handbook/editor/history",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u4fdd\u5b58",permalink:"/fabritor-handbook/editor/auto-save"},next:{title:"\u5bf9\u8c61",permalink:"/fabritor-handbook/object/"}},d={},a=[];function h(t){const e={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5386\u53f2\u8bb0\u5f55",children:"\u5386\u53f2\u8bb0\u5f55"}),"\n",(0,i.jsx)(e.p,{children:"\u5386\u53f2\u8bb0\u5f55\u4e5f\u662f\u7f16\u8f91\u5668\u7c7b\u5e94\u7528\u4e2d\u5f88\u91cd\u8981\u7684\u529f\u80fd\uff0c\u901a\u8fc7\u5386\u53f2\u8bb0\u5f55\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u64a4\u9500\u81ea\u5df1\u7684\u8bef\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5bf9\u6bd4\u6548\u679c\u4e4b\u540e\u6062\u590d\u5230\u5df2\u6709\u7684\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u540c\u6837\uff0c\u5386\u53f2\u8bb0\u5f55\u4f9d\u8d56\u4e8b\u4ef6\u5b9e\u73b0\uff0c\u4e5f\u76d1\u542c\u4e86\u548c\u81ea\u52a8\u4fdd\u5b58\u4e00\u6837\u7684\u4e8b\u4ef6\uff0c\u540c\u6837\u4e5f\u62bd\u8c61\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"FabricHistory"})," \u7c7b\u6765\u5904\u7406\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u7c7b\u4e2d\u63d0\u4f9b\u4e86\u4e09\u4e2a\u6570\u636e\uff0c\u5206\u522b\u4fdd\u5b58\u53ef\u4ee5\u64a4\u9500\u7684\u6570\u636e\uff08historyUndo\uff09\u3001\u91cd\u505a\u7684\u6570\u636e\uff08historyRedo\uff09\u548c\u5f53\u524d\u72b6\u6001\uff08currentState\uff09\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"private _historyEvents () {\n  return {\n    'object:added': this._historySaveAction.bind(this),\n    'object:removed': this._historySaveAction.bind(this),\n    'object:modified': this._historySaveAction.bind(this),\n    'object:skewing': this._historySaveAction.bind(this),\n    'fabritor:object:modified': this._historySaveAction.bind(this)\n  };\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u76d1\u542c\u4e8b\u4ef6\uff0c\u5c06\u64cd\u4f5c\u4e5f\u5c31\u662f JSON \u6570\u636e\u4fdd\u5b58\u5230\u5386\u53f2\u8bb0\u5f55\u4e2d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53e6\u5916\u63d0\u4f9b\u4e86 undo \u548c redo \u4e24\u4e2a\u65b9\u6cd5\u4f9b\u5916\u90e8\u8c03\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"undo \u548c redo \u672c\u8d28\u4e0a\u662f\u5165\u6808\u548c\u51fa\u6808\u7684\u64cd\u4f5c\u3002\u4ee5 undo \u4e3a\u4f8b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4ece historyUndo \u6570\u636e\u4e2d\u627e\u51fa\u6700\u65b0\u6570\u636e\uff1a",(0,i.jsx)(e.code,{children:"const _history = this.historyUndo.pop()"})]}),"\n",(0,i.jsx)(e.li,{children:"\u5c06 currentState \u653e\u5230 historyRedo \u4e2d"}),"\n",(0,i.jsx)(e.li,{children:"\u5c06 historyUndo \u6570\u636e\u4e2d\u627e\u51fa\u6700\u65b0\u6570\u636e\u7f6e\u4e3a currentState"}),"\n",(0,i.jsx)(e.li,{children:"\u753b\u5e03\u91cd\u65b0\u52a0\u8f7d currentState \u5bf9\u5e94\u7684 JSON \u6570\u636e"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\u5907\u6ce8\uff1a\u8be5\u4ee3\u7801\u7531 ",(0,i.jsx)(e.code,{children:"https://github.com/alimozdemir/fabric-history/blob/master/src/index.js"})," \u4fee\u6539\u800c\u6765\u3002"]})]})}function l(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);