"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[622],{490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>j,default:()=>C,frontMatter:()=>v,metadata:()=>D,toc:()=>P});var a=t(9214),o=t(7988),r=t(1851),s=t(5787),i=t(8318);function c(){const[e,n]=(0,i.useState)(Date.now());return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.lr,{value:e,onChange:e=>{n(e)}}),(0,a.jsx)("span",{children:e})]})}const l="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(Date.now())\n  return (\n    <>\n      <DatePicker\n        value={value}\n        onChange={e => {\n          setValue(e)\n        }}\n      />\n      <span>{value}</span>\n    </>\n  )\n}\n";function u(){return(0,a.jsx)(s.lr,{disabled:!0})}const d="import { DatePicker } from '@regen-design/components'\nexport default function Demo() {\n  return <DatePicker disabled />\n}\n";function m(){const[e,n]=(0,i.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.lr,{value:e,valueFormat:"YYYY-MM-DD",onChange:n}),(0,a.jsx)("span",{children:e})]})}const p="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <>\n      <DatePicker value={value} valueFormat={'YYYY-MM-DD'} onChange={setValue} />\n      <span>{value}</span>\n    </>\n  )\n}\n";function x(){const[e,n]=(0,i.useState)(Date.now());return(0,a.jsxs)(s.$x,{flexDirection:"column",children:[(0,a.jsx)(s.lr,{value:e,onChange:n,size:"tiny"}),(0,a.jsx)(s.lr,{value:e,onChange:n,size:"small"}),(0,a.jsx)(s.lr,{value:e,onChange:n,size:"default"}),(0,a.jsx)(s.lr,{value:e,onChange:n,size:"large"})]})}const g="import { DatePicker, Space } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(Date.now())\n  return (\n    <Space flexDirection={'column'}>\n      <DatePicker value={value} onChange={setValue} size={'tiny'} />\n      <DatePicker value={value} onChange={setValue} size={'small'} />\n      <DatePicker value={value} onChange={setValue} size={'default'} />\n      <DatePicker value={value} onChange={setValue} size={'large'} />\n    </Space>\n  )\n}\n";function h(){const[e,n]=(0,i.useState)([Date.now(),Date.now()+2592e6]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.lr,{value:e,type:"date-range",onChange:e=>{n(e)}}),e?.map(((e,n)=>(0,a.jsx)("div",{children:e},n)))]})}const f="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState([Date.now(), Date.now() + 1000 * 60 * 60 * 24 * 30])\n  return (\n    <>\n      <DatePicker\n        value={value}\n        type={'date-range'}\n        onChange={e => {\n          setValue(e)\n        }}\n      />\n      {value?.map((item, index) => <div key={index}>{item}</div>)}\n    </>\n  )\n}\n",v={sidebar_position:8},j="\u65e5\u671f\u9009\u62e9\u5668 Date Picker",D={id:"components/form-component/datePicker/index",title:"\u65e5\u671f\u9009\u62e9\u5668 Date Picker",description:"\u5173\u4e8e\u5982\u4f55\u8bbe\u5b9a\u65f6\u95f4\uff0c\u5927\u5bb6\u603b\u6709\u5f88\u591a\u79cd\u60f3\u6cd5\u3002",source:"@site/docs/components/form-component/datePicker/index.mdx",sourceDirName:"components/form-component/datePicker",slug:"/components/form-component/datePicker/",permalink:"/regen-design/docs/components/form-component/datePicker/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/datePicker/index.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"componentsSidebar",previous:{title:"\u8bc4\u5206 Rate",permalink:"/regen-design/docs/components/form-component/rate/"},next:{title:"\u4e0a\u4f20 Upload",permalink:"/regen-design/docs/components/form-component/upload/"}},k={},P=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function S(e){const n={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u65e5\u671f\u9009\u62e9\u5668-date-picker",children:"\u65e5\u671f\u9009\u62e9\u5668 Date Picker"}),"\n",(0,a.jsx)(n.p,{children:"\u5173\u4e8e\u5982\u4f55\u8bbe\u5b9a\u65f6\u95f4\uff0c\u5927\u5bb6\u603b\u6709\u5f88\u591a\u79cd\u60f3\u6cd5\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,a.jsx)(r.A,{children:()=>(0,a.jsx)(s.NP,{children:(0,a.jsxs)(s.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,a.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,a.jsx)(s.NG,{title:"\u57fa\u7840",code:String(l),children:(0,a.jsx)(c,{})}),(0,a.jsx)(s.NG,{title:"\u4f7f\u7528\u683c\u5f0f\u5316\u7684\u503c",code:String(p),children:(0,a.jsx)(m,{})}),(0,a.jsx)(s.NG,{title:"\u65e5\u671f\u8303\u56f4",code:String(f),children:(0,a.jsx)(h,{})})]}),(0,a.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,a.jsx)(s.NG,{title:"\u7981\u7528",code:String(d),children:(0,a.jsx)(u,{})}),(0,a.jsx)(s.NG,{title:"\u5c3a\u5bf8",code:String(g),children:(0,a.jsx)(x,{})})]})]})})})]})}function C(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}}}]);