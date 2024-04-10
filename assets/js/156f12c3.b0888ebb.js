"use strict";(self.webpackChunkfabricjs_tutorial=self.webpackChunkfabricjs_tutorial||[]).push([[690],{6598:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>j});var n=c(5893),r=c(1151);const o={sidebar_position:0},s="\u81ea\u5b9a\u4e49\u5bf9\u8c61",a={id:"object/custom",title:"\u81ea\u5b9a\u4e49\u5bf9\u8c61",description:"\u5728\u4ecb\u7ecd\u5bf9\u8c61\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u804a\u804a\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5bf9\u8c61\u3002",source:"@site/docs/object/custom.md",sourceDirName:"object",slug:"/object/custom",permalink:"/fabritor-handbook/object/custom",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u8c61",permalink:"/fabritor-handbook/object/"},next:{title:"\u6587\u672c",permalink:"/fabritor-handbook/object/textbox"}},i={},j=[{value:"\u521b\u5efa\u5bf9\u8c61\u7c7b",id:"\u521b\u5efa\u5bf9\u8c61\u7c7b",level:2},{value:"\u91cd\u5199 toObject _toSVG \u7b49\u65b9\u6cd5",id:"\u91cd\u5199-toobject-_tosvg-\u7b49\u65b9\u6cd5",level:2},{value:"\u91cd\u5199 CustomObject.fromObject",id:"\u91cd\u5199-customobjectfromobject",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u81ea\u5b9a\u4e49\u5bf9\u8c61",children:"\u81ea\u5b9a\u4e49\u5bf9\u8c61"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u4ecb\u7ecd\u5bf9\u8c61\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u804a\u804a\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5bf9\u8c61\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u521b\u5efa\u5bf9\u8c61\u7c7b",children:"\u521b\u5efa\u5bf9\u8c61\u7c7b"}),"\n",(0,n.jsx)(t.p,{children:"\u901a\u5e38\u6211\u4eec\u9700\u8981\u7ee7\u627f fabric.js \u5185\u5df2\u6709\u7684\u5bf9\u8c61\u6765\u521b\u5efa\u65b0\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u662f Text\u3001Rect \u8fd9\u79cd\u9ad8\u7ea7\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f Object \u8fd9\u4e2a\u57fa\u7840\u5bf9\u8c61\u3002Text\u3001Rect \u8fd9\u4e9b\u5bf9\u8c61\u4e5f\u662f\u7ee7\u627f Object \u800c\u6765\u7684\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"fabric.util.createClass"})," \u63d0\u4f9b\u7684\u5de5\u5177\u7c7b\u521b\u5efa\u65b0\u5bf9\u8c61\u7c7b\uff0c\u5e76\u4e14\u6307\u5b9a type\uff0c\u8fd9\u6837\u5728\u64cd\u4f5c\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"object.type"})," \u83b7\u53d6\u5bf9\u8c61\u7c7b\u578b\u4ee5\u8fdb\u884c\u4e0d\u540c\u7684\u5904\u7406\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u53e6\u5916\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u6e32\u67d3\u903b\u8f91\uff0c\u9700\u8981\u8986\u76d6 ",(0,n.jsx)(t.code,{children:"_render"})," \u65b9\u6cd5\uff0c\u5982\u679c\u7ee7\u627f\u7684\u662f Object\uff0c\u90a3\u5fc5\u987b\u8981\u63d0\u4f9b ",(0,n.jsx)(t.code,{children:"_render"})," \u65b9\u6cd5\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"fabric.CustomObject = fabric.util.createClass(fabric.Object, {\n  type: 'custom',\n\n  otherProp: '',\n\n  otherFunction: function () {},\n\n  _render: function () {}\n})\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u91cd\u5199-toobject-_tosvg-\u7b49\u65b9\u6cd5",children:"\u91cd\u5199 toObject _toSVG \u7b49\u65b9\u6cd5"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u5728\u524d\u9762\u770b\u5230\uff0ccanvas \u53ef\u4ee5\u5bfc\u51fa JSON \u6570\u636e\uff0c\u5c31\u662f\u8c03\u7528\u7684\u6bcf\u4e2a\u5bf9\u8c61\u7684 ",(0,n.jsx)(t.code,{children:"toObject"})," \u65b9\u6cd5\uff0c\u5982\u679c\u4f60\u7684\u81ea\u5b9a\u4e49\u5bf9\u8c61\u6709\u4e0d\u4e00\u6837\u7684\u903b\u8f91\uff0c\u53ef\u4ee5\u91cd\u5199\u8be5\u65b9\u6cd5\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6bd4\u5982 Rect \u5bf9\u8c61\uff0cRect \u5bf9\u8c61\u65b0\u589e\u4e86 rx\u3001ry \u4e24\u4e2a\u5c5e\u6027\uff0c\u5c31\u8986\u76d6\u4e86 ",(0,n.jsx)(t.code,{children:"toObject"})," \u65b9\u6cd5\u518d\u5bfc\u51fa JSON \u6570\u636e\u65f6\u5305\u542b\u4e86\u65b0\u589e\u7684\u5c5e\u6027\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"toObject: function(propertiesToInclude) {\n  return this.callSuper('toObject', ['rx', 'ry'].concat(propertiesToInclude));\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u53e6\u5916\u4e00\u4e2a\u662f _toSVG \u65b9\u6cd5\u3002fabric.js \u53f7\u79f0\u4e5f\u662f\u4e00\u4e2a svg parser\uff0ccanvas \u53ef\u4ee5\u5bfc\u51fa svg\uff0c\u5982\u679c\u81ea\u5b9a\u4e49\u5bf9\u8c61\u6709\u81ea\u5b9a\u4e49\u7684 _render\uff0c\u4e14\u4e5f\u6709\u5bfc\u51fa svg \u7684\u9700\u6c42\uff0c\u8bb0\u5f97\u91cd\u65b0\u8be5\u65b9\u6cd5\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u91cd\u5199-customobjectfromobject",children:"\u91cd\u5199 CustomObject.fromObject"}),"\n",(0,n.jsxs)(t.p,{children:["canvas \u4e5f\u53ef\u4ee5\u52a0\u8f7d\u4e00\u6bb5 JSON \u6570\u636e\u6e32\u67d3\u753b\u5e03\uff0c\u5c31\u662f\u8c03\u7528\u7684\u6bcf\u4e2a\u5bf9\u8c61 ",(0,n.jsx)(t.code,{children:"fromObject"})," \u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\u3002\u901a\u5e38\u5c31\u662f\u76f4\u63a5\u8c03\u7528 Object \u5bf9\u8c61\u7684 ",(0,n.jsx)(t.code,{children:"_fromObject"})," \u5373\u53ef\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"fabric.Rect.fromObject = function(object, callback) {\n  return fabric.Object._fromObject('Rect', object, callback);\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\uff0c\u4e5f\u4f1a\u6bd4\u8f83\u590d\u6742\uff0c\u6bd4\u5982 Text \u7684 fromObject \u65b9\u6cd5\uff0c\u9700\u8981\u989d\u5916\u5904\u7406 text \u7684 path \u5c5e\u6027\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"fabric.Text.fromObject = function(object, callback) {\n  var objectCopy = clone(object), path = object.path;\n  delete objectCopy.path;\n  return fabric.Object._fromObject('Text', objectCopy, function(textInstance) {\n    textInstance.styles = fabric.util.stylesFromArray(object.styles, object.text);\n    if (path) {\n      fabric.Object._fromObject('Path', path, function(pathInstance) {\n        textInstance.set('path', pathInstance);\n        callback(textInstance);\n      }, 'path');\n    }\n    else {\n      callback(textInstance);\n    }\n  }, 'text');\n};\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["fabritor \u50cf\u6587\u672c\u3001\u56fe\u7247\u3001\u7ebf\u6bb5\u3001\u7bad\u5934\u7b49\u90fd\u8fdb\u884c\u4e86\u4e0d\u540c\u7a0b\u5ea6\u7684\u81ea\u5b9a\u4e49\uff0c\u81ea\u5b9a\u4e49\u7684\u4ee3\u7801\u5728 ",(0,n.jsx)(t.code,{children:"editor/custom-objects"})," \u5185\uff0c\u4e0d\u8fc7\u4e5f\u90fd\u4e0d\u662f\u5f88\u590d\u6742\u7684\u81ea\u5b9a\u4e49\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u804a\u4e00\u4e0b fabritor \u4e2d\u7684\u5bf9\u8c61\u5904\u7406\u7684\u903b\u8f91\u3002"})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,c)=>{c.d(t,{Z:()=>a,a:()=>s});var n=c(7294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);