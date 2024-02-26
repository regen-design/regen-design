"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[233],{8922:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>v,contentTitle:()=>j,default:()=>C,frontMatter:()=>b,metadata:()=>S,toc:()=>k});var t=o(9214),a=o(2411),s=o(215),i=o(869),r=o(8318);function l(){const[e,n]=(0,r.useState)(!1);return(0,t.jsx)(s.$x,{alignItems:"center",children:(0,t.jsx)(s.sx,{checked:e,onChange:n,children:"\u5355\u9009\u6846"})})}const c="import { Radio, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(false)\n  return (\n    <Space alignItems={'center'}>\n      <Radio checked={checked} onChange={setChecked}>\n        \u5355\u9009\u6846\n      </Radio>\n    </Space>\n  )\n}\n";function d(){const[e,n]=(0,r.useState)(!0),[o,a]=(0,r.useState)(!0);return(0,t.jsxs)(s.$x,{alignItems:"center",children:[(0,t.jsx)(s.sx,{checked:e,disabled:o,onChange:n,children:"\u4e0d\u53ef\u4ee5\u54e6~"}),(0,t.jsx)(s.$n,{onClick:()=>a(!o),children:"\u7981\u6b62"})]})}const u="import { Button, Radio, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(true)\n  const [disabled, setDisabled] = useState(true)\n  return (\n    <Space alignItems={'center'}>\n      <Radio checked={checked} disabled={disabled} onChange={setChecked}>\n        \u4e0d\u53ef\u4ee5\u54e6~\n      </Radio>\n      <Button onClick={() => setDisabled(!disabled)}>\u7981\u6b62</Button>\n    </Space>\n  )\n}\n";function p(){return(0,t.jsxs)(s.$x,{alignItems:"center",children:[(0,t.jsx)(s.sx,{size:"tiny",children:"\u5c0f\u5c0f"}),(0,t.jsx)(s.sx,{size:"small",children:"\u5c0f"}),(0,t.jsx)(s.sx,{size:"default",children:"\u9ed8\u8ba4"}),(0,t.jsx)(s.sx,{size:"large",children:"\u5927"})]})}const m='import { Radio, Space } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space alignItems={\'center\'}>\n      <Radio size="tiny">\u5c0f\u5c0f</Radio>\n      <Radio size="small">\u5c0f</Radio>\n      <Radio size="default">\u9ed8\u8ba4</Radio>\n      <Radio size="large">\u5927</Radio>\n    </Space>\n  )\n}\n';function x(){const e=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],[n,o]=(0,r.useState)("");return(0,t.jsxs)(s.$x,{flexDirection:"column",children:[(0,t.jsx)(s.z6,{size:"tiny",value:n,options:e,onChange:o}),(0,t.jsx)(s.z6,{size:"small",value:n,options:e,onChange:o}),(0,t.jsx)(s.z6,{size:"default",value:n,options:e,onChange:o}),(0,t.jsx)(s.z6,{size:"large",value:n,options:e,onChange:o})]})}const g="import { RadioGroup, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const options = [\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange', disabled: true },\n  ]\n  const [value, setValue] = useState('')\n  return (\n    <Space flexDirection={'column'}>\n      <RadioGroup size={'tiny'} value={value} options={options} onChange={setValue} />\n      <RadioGroup size={'small'} value={value} options={options} onChange={setValue} />\n      <RadioGroup size={'default'} value={value} options={options} onChange={setValue} />\n      <RadioGroup size={'large'} value={value} options={options} onChange={setValue} />\n    </Space>\n  )\n}\n";function h(){const[e,n]=(0,r.useState)("");return(0,t.jsx)(s.$x,{flexDirection:"column",children:(0,t.jsx)(s.z6,{value:e,optionType:"button",options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"},{label:"Banana",value:"Banana"}],onChange:n})})}const f="import { RadioGroup, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const options = [\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n    { label: 'Banana', value: 'Banana' },\n  ]\n  const [value, setValue] = useState('')\n  return (\n    <Space flexDirection={'column'}>\n      <RadioGroup value={value} optionType={'button'} options={options} onChange={setValue} />\n    </Space>\n  )\n}\n",b={sidebar_position:1},j="\u5355\u9009\u6846 Radio",S={id:"components/form-component/radio/index",title:"\u5355\u9009\u6846 Radio",description:"\u5355\u9009\u6846\uff0c\u7528\u4e8e\u5728\u591a\u4e2a\u5907\u9009\u9879\u4e2d\u9009\u4e2d\u5355\u4e2a\u72b6\u6001\u3002",source:"@site/docs/components/form-component/radio/index.mdx",sourceDirName:"components/form-component/radio",slug:"/components/form-component/radio/",permalink:"/regen-design/docs/components/form-component/radio/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/radio/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u6c34\u5370 Watermark",permalink:"/regen-design/docs/components/basic-components/watermark/"},next:{title:"\u590d\u9009\u6846 Checkbox",permalink:"/regen-design/docs/components/form-component/checkbox/"}},v={},k=[];function R(e){const n={h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5355\u9009\u6846-radio",children:"\u5355\u9009\u6846 Radio"}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u9009\u6846\uff0c\u7528\u4e8e\u5728\u591a\u4e2a\u5907\u9009\u9879\u4e2d\u9009\u4e2d\u5355\u4e2a\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(i.A,{children:()=>(0,t.jsx)(s.NP,{children:(0,t.jsxs)(s.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,t.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,t.jsx)(s.NG,{title:"\u57fa\u7840",code:String(c),children:(0,t.jsx)(l,{})}),(0,t.jsx)(s.NG,{title:"\u5355\u9009\u7ec4",code:String(g),children:(0,t.jsx)(x,{})}),(0,t.jsx)(s.NG,{title:"\u6309\u94ae\u5355\u9009\u7ec4",code:String(f),children:(0,t.jsx)(h,{})})]}),(0,t.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,t.jsx)(s.NG,{title:"\u7981\u7528",code:String(u),children:(0,t.jsx)(d,{})}),(0,t.jsx)(s.NG,{title:"\u5c3a\u5bf8",code:String(m),children:(0,t.jsx)(p,{})})]})]})})})]})}function C(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(R,{...e})}):R(e)}}}]);