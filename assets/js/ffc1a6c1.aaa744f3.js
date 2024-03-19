"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[658],{2998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>S,contentTitle:()=>C,default:()=>G,frontMatter:()=>b,metadata:()=>f,toc:()=>j});var c=t(9214),o=t(6593),s=t(5389),i=t(1851),r=t(8318);function a(){const[e,n]=(0,r.useState)(!0);return(0,c.jsxs)(s.$x,{alignItems:"center",children:[(0,c.jsx)(s.Sc,{checked:e,onChange:n,children:"\u590d\u9009\u6846"}),(0,c.jsx)(s.Sc,{checked:e,onChange:n})]})}const l="import { Checkbox, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(true)\n  return (\n    <Space alignItems={'center'}>\n      <Checkbox checked={checked} onChange={setChecked}>\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox checked={checked} onChange={setChecked} />\n    </Space>\n  )\n}\n";function d(){const[e,n]=(0,r.useState)(!0),[t,o]=(0,r.useState)(!0);return(0,c.jsxs)(s.$x,{alignItems:"center",children:[(0,c.jsx)(s.Sc,{checked:e,disabled:t,onChange:n,children:"\u4e0d\u53ef\u4ee5\u54e6~"}),(0,c.jsx)(s.$n,{onClick:()=>o(!t),children:"\u7981\u6b62"})]})}const h="import { Button, Checkbox, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(true)\n  const [disabled, setDisabled] = useState(true)\n  return (\n    <Space alignItems={'center'}>\n      <Checkbox checked={checked} disabled={disabled} onChange={setChecked}>\n        \u4e0d\u53ef\u4ee5\u54e6~\n      </Checkbox>\n      <Button onClick={() => setDisabled(!disabled)}>\u7981\u6b62</Button>\n    </Space>\n  )\n}\n";function p(){return(0,c.jsxs)(s.$x,{alignItems:"center",children:[(0,c.jsx)(s.Sc,{size:"tiny",children:"\u5c0f\u5c0f"}),(0,c.jsx)(s.Sc,{size:"small",children:"\u5c0f"}),(0,c.jsx)(s.Sc,{size:"default",children:"\u9ed8\u8ba4"}),(0,c.jsx)(s.Sc,{size:"large",children:"\u5927"})]})}const u='import { Checkbox, Space } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space alignItems={\'center\'}>\n      <Checkbox size="tiny">\u5c0f\u5c0f</Checkbox>\n      <Checkbox size="small">\u5c0f</Checkbox>\n      <Checkbox size="default">\u9ed8\u8ba4</Checkbox>\n      <Checkbox size="large">\u5927</Checkbox>\n    </Space>\n  )\n}\n';function x(){const[e,n]=(0,r.useState)([""]);return(0,c.jsx)(s.$x,{alignItems:"center",children:(0,c.jsx)(s.$Q,{value:e,options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],onChange:n})})}const m="import { CheckboxGroup, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const options = [\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange', disabled: true },\n  ]\n  const [value, setValue] = useState([''])\n  return (\n    <Space alignItems={'center'}>\n      <CheckboxGroup value={value} options={options} onChange={setValue} />\n    </Space>\n  )\n}\n";function k(){const e=[{label:"\u590d\u9009\u68461",value:"1"},{label:"\u590d\u9009\u68462",value:"2"},{label:"\u590d\u9009\u68463",value:"3"}],[n,t]=(0,r.useState)([]),o=n.length>0&&n.length<e.length,i=e.length===n.length;return(0,c.jsxs)(s.$x,{alignItems:"center",children:[(0,c.jsx)(s.Sc,{indeterminate:o,checked:i,onChange:n=>{t(n?e.map((e=>e.value)):[])},children:"\u590d\u9009\u6846"}),(0,c.jsx)(s.cG,{}),(0,c.jsx)(s.$Q,{value:n,onChange:t,options:e})]})}const g="import { Checkbox, CheckboxGroup, Divider, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const options = [\n    { label: '\u590d\u9009\u68461', value: '1' },\n    { label: '\u590d\u9009\u68462', value: '2' },\n    { label: '\u590d\u9009\u68463', value: '3' },\n  ]\n  const [checkedList, setCheckedList] = useState<string[]>([])\n  const indeterminate = checkedList.length > 0 && checkedList.length < options.length\n  const checkedAll = options.length === checkedList.length\n  return (\n    <Space alignItems={'center'}>\n      <Checkbox\n        indeterminate={indeterminate}\n        checked={checkedAll}\n        onChange={checked => {\n          setCheckedList(checked ? options.map(item => item.value) : [])\n        }}\n      >\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Divider />\n      <CheckboxGroup value={checkedList} onChange={setCheckedList} options={options} />\n    </Space>\n  )\n}\n",b={sidebar_position:2},C="\u590d\u9009\u6846 Checkbox",f={id:"components/form-component/checkbox/index",title:"\u590d\u9009\u6846 Checkbox",description:"\u590d\u9009\u6846\u7528\u4e8e\u5728\u4e00\u7ec4\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u3002",source:"@site/docs/components/form-component/checkbox/index.mdx",sourceDirName:"components/form-component/checkbox",slug:"/components/form-component/checkbox/",permalink:"/regen-design/docs/components/form-component/checkbox/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/checkbox/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"componentsSidebar",previous:{title:"\u5355\u9009\u6846 Radio",permalink:"/regen-design/docs/components/form-component/radio/"},next:{title:"\u5f00\u5173 Switch",permalink:"/regen-design/docs/components/form-component/switch/"}},S={},j=[];function v(e){const n={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u590d\u9009\u6846-checkbox",children:"\u590d\u9009\u6846 Checkbox"}),"\n",(0,c.jsx)(n.p,{children:"\u590d\u9009\u6846\u7528\u4e8e\u5728\u4e00\u7ec4\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u3002"}),"\n",(0,c.jsx)(i.A,{children:()=>(0,c.jsx)(s.NP,{children:(0,c.jsxs)(s.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,c.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,c.jsx)(s.NG,{title:"\u57fa\u7840",code:String(l),children:(0,c.jsx)(a,{})}),(0,c.jsx)(s.NG,{title:"\u590d\u9009\u7ec4",code:String(m),children:(0,c.jsx)(x,{})}),(0,c.jsx)(s.NG,{title:"\u90e8\u5206\u9009\u4e2d",code:String(g),children:(0,c.jsx)(k,{})})]}),(0,c.jsxs)(s.xA,{yGap:16,cols:1,children:[(0,c.jsx)(s.NG,{title:"\u7981\u7528",code:String(h),children:(0,c.jsx)(d,{})}),(0,c.jsx)(s.NG,{title:"\u5c3a\u5bf8",code:String(u),children:(0,c.jsx)(p,{})})]})]})})})]})}function G(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(v,{...e})}):v(e)}}}]);