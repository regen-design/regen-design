"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[556],{260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>b,default:()=>S,frontMatter:()=>k,metadata:()=>g,toc:()=>C});var c=t(7512),o=t(4496),s=t(2776),r=t(8948),i=t(5496);function a(){const[e,n]=(0,i.useState)(!0);return(0,c.jsxs)(s.wr,{alignItems:"center",children:[(0,c.jsx)(s.yw,{checked:e,onChange:n,children:"\u590d\u9009\u6846"}),(0,c.jsx)(s.yw,{checked:e,onChange:n})]})}const l="import { Checkbox, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(true)\n  return (\n    <Space alignItems={'center'}>\n      <Checkbox checked={checked} onChange={setChecked}>\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox checked={checked} onChange={setChecked} />\n    </Space>\n  )\n}\n";function d(){const[e,n]=(0,i.useState)(!0),[t,o]=(0,i.useState)(!0);return(0,c.jsxs)(s.wr,{alignItems:"center",children:[(0,c.jsx)(s.yw,{checked:e,disabled:t,onChange:n,children:"\u4e0d\u53ef\u4ee5\u54e6~"}),(0,c.jsx)(s.q,{onClick:()=>o(!t),children:"\u7981\u6b62"})]})}const h="import { Button, Checkbox, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(true)\n  const [disabled, setDisabled] = useState(true)\n  return (\n    <Space alignItems={'center'}>\n      <Checkbox checked={checked} disabled={disabled} onChange={setChecked}>\n        \u4e0d\u53ef\u4ee5\u54e6~\n      </Checkbox>\n      <Button onClick={() => setDisabled(!disabled)}>\u7981\u6b62</Button>\n    </Space>\n  )\n}\n";function p(){return(0,c.jsxs)(s.wr,{alignItems:"center",children:[(0,c.jsx)(s.yw,{size:"tiny",children:"\u5c0f\u5c0f"}),(0,c.jsx)(s.yw,{size:"small",children:"\u5c0f"}),(0,c.jsx)(s.yw,{size:"default",children:"\u9ed8\u8ba4"}),(0,c.jsx)(s.yw,{size:"large",children:"\u5927"})]})}const u='import { Checkbox, Space } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space alignItems={\'center\'}>\n      <Checkbox size="tiny">\u5c0f\u5c0f</Checkbox>\n      <Checkbox size="small">\u5c0f</Checkbox>\n      <Checkbox size="default">\u9ed8\u8ba4</Checkbox>\n      <Checkbox size="large">\u5927</Checkbox>\n    </Space>\n  )\n}\n';function m(){const[e,n]=(0,i.useState)([]);return(0,c.jsx)(s.wr,{alignItems:"center",children:(0,c.jsx)(s.GK,{value:e,options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],onChange:n})})}const x="import { CheckboxGroup, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const options = [\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange', disabled: true },\n  ]\n  const [value, setValue] = useState([])\n  return (\n    <Space alignItems={'center'}>\n      <CheckboxGroup value={value} options={options} onChange={setValue} />\n    </Space>\n  )\n}\n",k={sidebar_position:2},b="\u590d\u9009\u6846 Checkbox",g={id:"components/form-component/checkbox/index",title:"\u590d\u9009\u6846 Checkbox",description:"\u590d\u9009\u6846\u7528\u4e8e\u5728\u4e00\u7ec4\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u3002",source:"@site/docs/components/form-component/checkbox/index.mdx",sourceDirName:"components/form-component/checkbox",slug:"/components/form-component/checkbox/",permalink:"/regen-design/docs/components/form-component/checkbox/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/checkbox/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"componentsSidebar",previous:{title:"\u5355\u9009\u6846 Radio",permalink:"/regen-design/docs/components/form-component/radio/"},next:{title:"\u5f00\u5173 Switch",permalink:"/regen-design/docs/components/form-component/switch/"}},f={},C=[];function j(e){const n={h1:"h1",p:"p",...(0,o.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u590d\u9009\u6846-checkbox",children:"\u590d\u9009\u6846 Checkbox"}),"\n",(0,c.jsx)(n.p,{children:"\u590d\u9009\u6846\u7528\u4e8e\u5728\u4e00\u7ec4\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u3002"}),"\n",(0,c.jsx)(r.c,{children:()=>(0,c.jsx)(s.Mp,{children:(0,c.jsxs)(s.ye,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,c.jsxs)(s.ye,{yGap:16,cols:1,children:[(0,c.jsx)(s.sj,{title:"\u57fa\u7840",code:String(l),children:(0,c.jsx)(a,{})}),(0,c.jsx)(s.sj,{title:"\u590d\u9009\u7ec4",code:String(x),children:(0,c.jsx)(m,{})})]}),(0,c.jsxs)(s.ye,{yGap:16,cols:1,children:[(0,c.jsx)(s.sj,{title:"\u7981\u7528",code:String(h),children:(0,c.jsx)(d,{})}),(0,c.jsx)(s.sj,{title:"\u5c3a\u5bf8",code:String(u),children:(0,c.jsx)(p,{})})]})]})})})]})}function S(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}}}]);