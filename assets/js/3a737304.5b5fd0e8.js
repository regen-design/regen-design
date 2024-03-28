"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[355],{1587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var s=t(9214),o=t(2816),r=t(7800),c=t(5017),i=t(8318);function d(){const[e,n]=(0,i.useState)(0);return(0,s.jsxs)(c.$x,{children:[(0,s.jsx)(c.Ap,{value:e,onChange:n}),(0,s.jsx)(c.pd,{onlyNumber:!0,value:e.toString(),readOnly:!0})]})}const a="import { Space, Slider, Input } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(0)\n  return (\n    <Space>\n      <Slider value={value} onChange={setValue} />\n      <Input onlyNumber value={value.toString()} readOnly />\n    </Space>\n  )\n}\n";function l(){const[e,n]=(0,i.useState)(50),[t,o]=(0,i.useState)(!0);return(0,s.jsxs)(c.$x,{children:[(0,s.jsx)(c.dO,{checked:t,onChange:o}),(0,s.jsx)(c.Ap,{value:e,disabled:t,onChange:n})]})}const u="import { Space, Slider, Switch } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(50)\n  const [disabled, setDisabled] = useState(true)\n  return (\n    <Space>\n      <Switch checked={disabled} onChange={setDisabled} />\n      <Slider value={value} disabled={disabled} onChange={setValue} />\n    </Space>\n  )\n}\n",p={},m="\u6ed1\u52a8\u9009\u62e9 Slider",h={id:"components/form-component/slider/index",title:"\u6ed1\u52a8\u9009\u62e9 Slider",description:"\u5c31\u6211\u6240\u77e5\uff0c\u8fd9\u4e1c\u897f\u4e00\u822c\u5c31\u7528\u6765\u63a7\u5236\u97f3\u91cf\u6216\u8fdb\u5ea6\u3002",source:"@site/docs/components/form-component/slider/index.mdx",sourceDirName:"components/form-component/slider",slug:"/components/form-component/slider/",permalink:"/regen-design/docs/components/form-component/slider/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/slider/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u9009\u62e9\u6846 Select",permalink:"/regen-design/docs/components/form-component/select/"},next:{title:"\u5f00\u5173 Switch",permalink:"/regen-design/docs/components/form-component/switch/"}},x={},g=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function S(e){const n={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6ed1\u52a8\u9009\u62e9-slider",children:"\u6ed1\u52a8\u9009\u62e9 Slider"}),"\n",(0,s.jsx)(n.p,{children:"\u5c31\u6211\u6240\u77e5\uff0c\u8fd9\u4e1c\u897f\u4e00\u822c\u5c31\u7528\u6765\u63a7\u5236\u97f3\u91cf\u6216\u8fdb\u5ea6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,s.jsx)(r.A,{children:()=>(0,s.jsx)(c.NP,{children:(0,s.jsxs)(c.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,s.jsx)(c.xA,{yGap:16,cols:1,children:(0,s.jsx)(c.NG,{title:"\u57fa\u7840",code:String(a),children:(0,s.jsx)(d,{})})}),(0,s.jsx)(c.xA,{yGap:16,cols:1,children:(0,s.jsx)(c.NG,{title:"\u7981\u7528",code:String(u),children:(0,s.jsx)(l,{})})})]})})})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}}}]);