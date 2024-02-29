"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[622],{490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>D,default:()=>C,frontMatter:()=>j,metadata:()=>v,toc:()=>P});var o=t(9214),a=t(2619),s=t(1851),r=t(8103),c=t(8318);function i(){const[e,n]=(0,c.useState)(Date.now());return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.lr,{value:e,onChange:n}),(0,o.jsx)("span",{children:e})]})}const l="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(Date.now())\n  return (\n    <>\n      <DatePicker value={value} onChange={setValue} />\n      <span>{value}</span>\n    </>\n  )\n}\n";function u(){return(0,o.jsx)(r.lr,{disabled:!0})}const d="import { DatePicker } from '@regen-design/components'\nexport default function Demo() {\n  return <DatePicker disabled />\n}\n";function m(){const[e,n]=(0,c.useState)("");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.lr,{value:e,valueFormat:"YYYY-MM-DD",onChange:n}),(0,o.jsx)("span",{children:e})]})}const p="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <>\n      <DatePicker value={value} valueFormat={'YYYY-MM-DD'} onChange={setValue} />\n      <span>{value}</span>\n    </>\n  )\n}\n";function x(){const[e,n]=(0,c.useState)(Date.now());return(0,o.jsxs)(r.$x,{flexDirection:"column",children:[(0,o.jsx)(r.lr,{value:e,onChange:n,size:"tiny"}),(0,o.jsx)(r.lr,{value:e,onChange:n,size:"small"}),(0,o.jsx)(r.lr,{value:e,onChange:n,size:"default"}),(0,o.jsx)(r.lr,{value:e,onChange:n,size:"large"})]})}const g="import { DatePicker, Space } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState(Date.now())\n  return (\n    <Space flexDirection={'column'}>\n      <DatePicker value={value} onChange={setValue} size={'tiny'} />\n      <DatePicker value={value} onChange={setValue} size={'small'} />\n      <DatePicker value={value} onChange={setValue} size={'default'} />\n      <DatePicker value={value} onChange={setValue} size={'large'} />\n    </Space>\n  )\n}\n";function h(){const[e,n]=(0,c.useState)([Date.now()-0,Date.now()+864e5]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.lr,{value:e,type:"date-range",onChange:e=>{console.log(e),n(e)}}),(0,o.jsx)("span",{children:e})]})}const f="import { DatePicker } from '@regen-design/components'\nimport { useState } from 'react'\nexport default function Demo() {\n  const [value, setValue] = useState<[number, number]>([\n    Date.now() - 1000 * 60 * 60 * 24 * 0,\n    Date.now() + 1000 * 60 * 60 * 24 * 1,\n  ])\n  return (\n    <>\n      <DatePicker\n        value={value}\n        type={'date-range'}\n        onChange={e => {\n          console.log(e)\n          setValue(e)\n        }}\n      />\n      <span>{value}</span>\n    </>\n  )\n}\n",j={sidebar_position:8},D="\u65e5\u671f\u9009\u62e9\u5668 Date Picker",v={id:"components/form-component/datePicker/index",title:"\u65e5\u671f\u9009\u62e9\u5668 Date Picker",description:"\u5173\u4e8e\u5982\u4f55\u8bbe\u5b9a\u65f6\u95f4\uff0c\u5927\u5bb6\u603b\u6709\u5f88\u591a\u79cd\u60f3\u6cd5\u3002",source:"@site/docs/components/form-component/datePicker/index.mdx",sourceDirName:"components/form-component/datePicker",slug:"/components/form-component/datePicker/",permalink:"/regen-design/docs/components/form-component/datePicker/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/datePicker/index.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"componentsSidebar",previous:{title:"\u8bc4\u5206 Rate",permalink:"/regen-design/docs/components/form-component/rate/"},next:{title:"\u95f4\u8ddd Space",permalink:"/regen-design/docs/components/layout-components/space/"}},k={},P=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function S(e){const n={h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u65e5\u671f\u9009\u62e9\u5668-date-picker",children:"\u65e5\u671f\u9009\u62e9\u5668 Date Picker"}),"\n",(0,o.jsx)(n.p,{children:"\u5173\u4e8e\u5982\u4f55\u8bbe\u5b9a\u65f6\u95f4\uff0c\u5927\u5bb6\u603b\u6709\u5f88\u591a\u79cd\u60f3\u6cd5\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,o.jsx)(s.A,{children:()=>(0,o.jsx)(r.NP,{children:(0,o.jsxs)(r.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,o.jsxs)(r.xA,{yGap:16,cols:1,children:[(0,o.jsx)(r.NG,{title:"\u57fa\u7840",code:String(l),children:(0,o.jsx)(i,{})}),(0,o.jsx)(r.NG,{title:"\u4f7f\u7528\u683c\u5f0f\u5316\u7684\u503c",code:String(p),children:(0,o.jsx)(m,{})}),(0,o.jsx)(r.NG,{title:"\u65e5\u671f\u8303\u56f4",code:String(f),children:(0,o.jsx)(h,{})})]}),(0,o.jsxs)(r.xA,{yGap:16,cols:1,children:[(0,o.jsx)(r.NG,{title:"\u7981\u7528",code:String(d),children:(0,o.jsx)(u,{})}),(0,o.jsx)(r.NG,{title:"\u5c3a\u5bf8",code:String(g),children:(0,o.jsx)(x,{})})]})]})})})]})}function C(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(S,{...e})}):S(e)}}}]);