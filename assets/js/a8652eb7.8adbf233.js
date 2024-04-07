"use strict";(self.webpackChunkfabricjs_tutorial=self.webpackChunkfabricjs_tutorial||[]).push([[994],{4033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>j,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var c=t(5893),r=t(1151);const i={sidebar_position:1},s="\u5bf9\u8c61\u521d\u59cb\u5316",a={id:"editor/object-init",title:"\u5bf9\u8c61\u521d\u59cb\u5316",description:"this._initObject() \u5185\u662f\u548c fabric.js \u5bf9\u8c61\u76f8\u5173\u7684\u4e00\u4e9b\u521d\u59cb\u5316\u64cd\u4f5c\u3002",source:"@site/docs/editor/object-init.md",sourceDirName:"editor",slug:"/editor/object-init",permalink:"/fabritor-handbook/editor/object-init",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editor \u7c7b",permalink:"/fabritor-handbook/editor/"},next:{title:"\u753b\u5e03\u521d\u59cb\u5316",permalink:"/fabritor-handbook/editor/canvas-init"}},o={},l=[{value:"fabric.js \u5bf9\u8c61\u6a21\u578b",id:"fabricjs-\u5bf9\u8c61\u6a21\u578b",level:2},{value:"\u5bf9\u8c61\u521d\u59cb\u5316\u903b\u8f91",id:"\u5bf9\u8c61\u521d\u59cb\u5316\u903b\u8f91",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u5bf9\u8c61\u521d\u59cb\u5316",children:"\u5bf9\u8c61\u521d\u59cb\u5316"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"this._initObject()"})," \u5185\u662f\u548c fabric.js \u5bf9\u8c61\u76f8\u5173\u7684\u4e00\u4e9b\u521d\u59cb\u5316\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"fabricjs-\u5bf9\u8c61\u6a21\u578b",children:"fabric.js \u5bf9\u8c61\u6a21\u578b"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u5148\u6765\u7b80\u5355\u804a\u804a fabric.js \u91cc\u7684",(0,c.jsx)(n.code,{children:"\u5bf9\u8c61"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["fabric.js \u57fa\u4e8e Canvas \u7684\u5e95\u5c42 API \u63d0\u4f9b\u4e86\u4e00\u5957",(0,c.jsx)(n.code,{children:"\u5bf9\u8c61\u6a21\u578b\uff08Object Model\uff09"}),"\uff0c\u628a\u753b\u5e03\u4e0a\u6240\u6709\u7684\u5143\u7d20\u62bd\u8c61\u4e3a ",(0,c.jsx)(n.code,{children:"Object"}),"\uff0c\u4f7f\u7528 fabric.js \u64cd\u4f5c Canvas \u5c31\u548c\u64cd\u4f5c JS \u5bf9\u8c61\u4e00\u6837\u7b80\u5355\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6bd4\u5982\uff1acanvas \u5185\u7ed8\u5236\u77e9\u5f62\u5e76\u4e14\u4fee\u6539\u4f4d\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"var canvasEl = document.getElementById('c');\nvar ctx = canvasEl.getContext('2d');\nctx.fillStyle = 'red';\n\nctx.translate(100, 100);\nctx.rotate(Math.PI / 180 * 45);\nctx.fillRect(-10, -10, 20, 20);\n\n// \u6e05\u7a7a\u753b\u5e03\uff0c\u91cd\u65b0\u7ed8\u5236\nctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\nctx.fillRect(20, 50, 20, 20);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f46\u4f7f\u7528 fabric.js\uff0c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"var canvas = new fabric.Canvas('c');\n\n// create a rectangle with angle=45\nvar rect = new fabric.Rect({\n  left: 100,\n  top: 100,\n  fill: 'red',\n  width: 20,\n  height: 20,\n  angle: 45\n});\n\ncanvas.add(rect);\n\n// \u4fee\u6539\u5bf9\u8c61\u5373\u53ef\nrect.set({ left: 20, top: 50 });\ncanvas.renderAll();\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\u53d6\u81ea\uff1a",(0,c.jsx)(n.a,{href:"http://fabricjs.com/fabric-intro-part-1#why_fabric",children:"fabric.js \u5b98\u7f51\u6559\u7a0b#why_fabric"}),"\uff0c\u5efa\u8bae\u521d\u6b21\u4f7f\u7528 fabric.js \u7684\u540c\u5b66\u90fd\u8bfb\u4e00\u4e0b\uff0c\u8986\u76d6\u4e86 fabric.js \u57fa\u7840\u5230\u9ad8\u7ea7\u7684\u6240\u6709\u8bdd\u9898\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["fabric.js \u50cf Rect\u3001Text\u3001Cricle \u751a\u81f3\u662f Group \u90fd\u662f Object\uff0c\u4ed6\u4eec\u90fd\u7ee7\u627f\u4e8e ",(0,c.jsx)(n.code,{children:"fabric.Object"}),"\u3002\u53e6\u5916 fabric.js \u7684\u4ee3\u7801\u8fd8\u662f ES5\uff0c\u4f7f\u7528\u7684\u90fd\u662f\u539f\u578b\u94fe\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u8981\u5168\u5c40\u4fee\u6539\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u539f\u578b\u94fe\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u90e8\u5206\u8fc7\u4e8e\u590d\u6742\uff0c\u90a3\u53ef\u80fd\u4f60\u9700\u8981\u81ea\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5bf9\u8c61\u521d\u59cb\u5316\u903b\u8f91",children:"\u5bf9\u8c61\u521d\u59cb\u5316\u903b\u8f91"}),"\n",(0,c.jsxs)(n.p,{children:["\u90a3\u8bf4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\uff0c",(0,c.jsx)(n.code,{children:"this._initObject()"})," \u6709\u4e09\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"private _initObject () {\n  initObjectPrototype();\n  createCustomClass();\n  initControl();\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"initObjectPrototype"})," \u65b9\u6cd5\u5185\u5c31\u662f\u901a\u8fc7\u4fee\u6539\u539f\u578b\u4fee\u6539\u4e86\u4e00\u4e9b\u5bf9\u8c61\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\u5177\u4f53\u914d\u7f6e\u9879\u7684\u542b\u4e49\u90fd\u53ef\u4ee5\u5728",(0,c.jsx)(n.a,{href:"http://fabricjs.com/docs/fabric.Object.html",children:"\u5b98\u65b9\u6587\u6863"}),"\u4e2d\u67e5\u770b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u968f\u610f\u7684\u4fee\u6539\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"createCustomClass"})," \u662f\u521b\u5efa\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7684\u903b\u8f91\u3002fabric.js \u5185\u901a\u8fc7\u7ee7\u627f ",(0,c.jsx)(n.code,{children:"fabric.Object"})," \u521b\u5efa\u4e86\u5404\u79cd\u5185\u7f6e\u5bf9\u8c61\uff0c\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55 ",(0,c.jsx)(n.code,{children:"fabric.Object"})," \u6216\u8005\u5185\u7f6e\u5bf9\u8c61\u6765\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u3002fabritor \u5185\u5305\u542b\u8bb8\u591a\u81ea\u5b9a\u4e49\u5bf9\u8c61\uff0c\u540e\u9762\u6211\u4eec\u8fd8\u4f1a\u8be6\u7ec6\u8ba8\u8bba\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"initControl"})," \u662f\u81ea\u5b9a\u4e49\u5bf9\u8c61 Control \u7684\u903b\u8f91\uff0cControl \u4e5f\u5c31\u662f\u5bf9\u8c61\u63a7\u5236\u70b9\uff0c\u53ef\u4ee5\u5bf9\u5bf9\u8c61\u8fdb\u884c\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u5220\u9664\u7b49\u3002\u4e0d\u7ba1\u6837\u5f0f\u8fd8\u662f\u529f\u80fd\u90fd\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002\u6211\u4eec\u4e5f\u653e\u5230\u540e\u9762\u8ba8\u8bba\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var c=t(7294);const r={},i=c.createContext(r);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);