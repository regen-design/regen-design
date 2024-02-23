"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[907],{1368:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var s=t(9214),o=t(2411),c=t(152),r=t(983);function i(){return(0,s.jsx)(r.nz,{content:"\u7cbe\u5fc3\u5411\u5bfc",children:(0,s.jsx)("div",{style:{height:200,width:"100%",background:"#f5f5f5"}})})}const a="import { Watermark } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Watermark content={'\u7cbe\u5fc3\u5411\u5bfc'}>\n      <div style={{ height: 200, width: '100%', background: '#f5f5f5' }} />\n    </Watermark>\n  )\n}\n";var d=t(8318);function l(){const[n,e]=(0,d.useState)(!1),[t,o]=(0,d.useState)(32);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.nz,{content:"\u559c\u6c14\u6d0b\u6d0b",zIndex:9e9,fontSize:t,fullscreen:n}),(0,s.jsxs)(r.$x,{flexDirection:"column",children:[(0,s.jsxs)(r.$x,{children:[(0,s.jsx)(r.dO,{checked:n,onChange:e}),(0,s.jsx)("span",{children:"\u5f00\u542f\u5168\u5c4f"})]}),(0,s.jsxs)(r.$x,{children:[(0,s.jsx)(r.$n,{onClick:()=>{o(t-1)},children:"\u7f29\u5c0f"}),(0,s.jsx)("span",{children:t}),(0,s.jsx)(r.$n,{onClick:()=>{o(t+1)},children:"\u653e\u5927"})]})]})]})}const p="import { Button, Space, Switch, Watermark } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(false)\n  const [fontSize, setFontSize] = useState(32)\n  return (\n    <>\n      <Watermark content={'\u559c\u6c14\u6d0b\u6d0b'} zIndex={9e9} fontSize={fontSize} fullscreen={checked} />\n      <Space flexDirection={'column'}>\n        <Space>\n          <Switch checked={checked} onChange={setChecked} />\n          <span>\u5f00\u542f\u5168\u5c4f</span>\n        </Space>\n        <Space>\n          <Button\n            onClick={() => {\n              setFontSize(fontSize - 1)\n            }}\n          >\n            \u7f29\u5c0f\n          </Button>\n          <span>{fontSize}</span>\n          <Button\n            onClick={() => {\n              setFontSize(fontSize + 1)\n            }}\n          >\n            \u653e\u5927\n          </Button>\n        </Space>\n      </Space>\n    </>\n  )\n}\n",m={sidebar_position:7},h="\u6c34\u5370 Watermark",u={id:"components/basic-components/watermark/index",title:"\u6c34\u5370 Watermark",description:"\u51fa\u73b0\u5728\u94b1\u4e0a\u7684\u65f6\u5019\u6bd4\u8f83\u53ef\u7231\u3002",source:"@site/docs/components/basic-components/watermark/index.mdx",sourceDirName:"components/basic-components/watermark",slug:"/components/basic-components/watermark/",permalink:"/regen-design/docs/components/basic-components/watermark/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/watermark/index.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"componentsSidebar",previous:{title:"\u6e10\u53d8\u6587\u5b57 Gradient Text",permalink:"/regen-design/docs/components/basic-components/gradientText/"},next:{title:"\u5355\u9009\u6846 Radio",permalink:"/regen-design/docs/components/form-component/radio/"}},x={},f=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function k(n){const e={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6c34\u5370-watermark",children:"\u6c34\u5370 Watermark"}),"\n",(0,s.jsx)(e.p,{children:"\u51fa\u73b0\u5728\u94b1\u4e0a\u7684\u65f6\u5019\u6bd4\u8f83\u53ef\u7231\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,s.jsx)(c.A,{children:()=>(0,s.jsx)(r.NP,{children:(0,s.jsxs)(r.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,s.jsx)(r.xA,{yGap:16,cols:1,children:(0,s.jsx)(r.NG,{title:"\u57fa\u7840",code:String(a),children:(0,s.jsx)(i,{})})}),(0,s.jsx)(r.xA,{yGap:16,cols:1,children:(0,s.jsx)(r.NG,{title:"\u5168\u5c4f",description:"\u53ef\u4ee5\u6253\u5f00\u5168\u5c4f\uff0c\u8fd9\u6837\u663e\u5f97\u5f88\u4e13\u4e1a\u3002",code:String(p),children:(0,s.jsx)(l,{})})})]})})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(k,{...n})}):k(n)}}}]);