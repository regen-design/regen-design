"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[7],{4327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>k,default:()=>M,frontMatter:()=>z,metadata:()=>N,toc:()=>G});var o=t(9214),s=t(6593),a=t(5389),r=t(1851),l=t(8318);function p(){const[e,n]=(0,l.useState)("1234567890");return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u57fa\u672c\u7684Input",value:e,onChange:n}),(0,o.jsx)(a.pd,{placeholder:"\u57fa\u672c\u7684Textarea",value:e,onChange:n,type:"textarea"})]})}const c="import { Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('1234567890')\n  return (\n    <Space>\n      <Input placeholder={'\u57fa\u672c\u7684Input'} value={value} onChange={setValue} />\n      <Input placeholder={'\u57fa\u672c\u7684Textarea'} value={value} onChange={setValue} type=\"textarea\" />\n    </Space>\n  )\n}\n";function d(){return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{size:"tiny",placeholder:"\u5c0f\u5c0f"}),(0,o.jsx)(a.pd,{size:"small",placeholder:"\u5c0f"}),(0,o.jsx)(a.pd,{size:"default",placeholder:"\u9ed8\u8ba4"}),(0,o.jsx)(a.pd,{size:"large",placeholder:"\u5927"})]})}const u="import { Input, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Input size={'tiny'} placeholder={'\u5c0f\u5c0f'} />\n      <Input size={'small'} placeholder={'\u5c0f'} />\n      <Input size={'default'} placeholder={'\u9ed8\u8ba4'} />\n      <Input size={'large'} placeholder={'\u5927'} />\n    </Space>\n  )\n}\n";function i(){return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{size:"tiny",rounded:!0,placeholder:"\u5c0f\u5c0f"}),(0,o.jsx)(a.pd,{size:"small",rounded:!0,placeholder:"\u5c0f"}),(0,o.jsx)(a.pd,{size:"default",rounded:!0,placeholder:"\u9ed8\u8ba4"}),(0,o.jsx)(a.pd,{size:"large",rounded:!0,placeholder:"\u5927"})]})}const h="import { Input, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Input size={'tiny'} rounded placeholder={'\u5c0f\u5c0f'} />\n      <Input size={'small'} rounded placeholder={'\u5c0f'} />\n      <Input size={'default'} rounded placeholder={'\u9ed8\u8ba4'} />\n      <Input size={'large'} rounded placeholder={'\u5927'} />\n    </Space>\n  )\n}\n";var x=t(2612);function m(){return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u641c\u7d22",prefix:(0,o.jsx)(x.WIv,{})}),(0,o.jsx)(a.pd,{placeholder:"How Much ?",rounded:!0,suffix:(0,o.jsx)("span",{children:"\u5143"})}),(0,o.jsx)(a.pd,{placeholder:"\u641c\u7d22",rounded:!0,suffix:(0,o.jsx)(x.w6Z,{})})]})}const g="import { Input, Space } from '@regen-design/components'\nimport { MarkerIcon, SearchIcon } from '@regen-design/icons'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Input placeholder={'\u641c\u7d22'} prefix={<SearchIcon />} />\n      <Input placeholder={'How Much ?'} rounded suffix={<span>\u5143</span>} />\n      <Input placeholder={'\u641c\u7d22'} rounded suffix={<MarkerIcon />} />\n    </Space>\n  )\n}\n";function f(){const[e,n]=(0,l.useState)(!0);return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u5662\uff01\u5b83\u88ab\u7981\u7528\u4e86\u3002",disabled:e}),(0,o.jsx)(a.pd,{placeholder:"\u5662\uff01\u5b83\u88ab\u7981\u7528\u4e86\u3002",disabled:e,type:"textarea"}),(0,o.jsx)(a.$n,{onClick:()=>n(!e),children:"\u5207\u6362\u7981\u7528"})]})}const j="import { Button, Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [disabled, setDisabled] = useState(true)\n  return (\n    <Space>\n      <Input placeholder={'\u5662\uff01\u5b83\u88ab\u7981\u7528\u4e86\u3002'} disabled={disabled} />\n      <Input placeholder={'\u5662\uff01\u5b83\u88ab\u7981\u7528\u4e86\u3002'} disabled={disabled} type=\"textarea\" />\n      <Button onClick={() => setDisabled(!disabled)}>\u5207\u6362\u7981\u7528</Button>\n    </Space>\n  )\n}\n";function S(){const[e,n]=(0,l.useState)(""),[t,s]=(0,l.useState)("\u4f60\u5e72\ud83d\udc34?"),[r,p]=(0,l.useState)("\u4f60\u5e72\ud83d\udc34?");return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",showCount:!0,value:e,onChange:n}),(0,o.jsx)("span",{children:"\u9ed8\u8ba4\u8868\u73b0"}),(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",showCount:!0,value:t,maxLength:12,onChange:s}),(0,o.jsx)("span",{children:"\u6b63\u786e\u8868\u73b0"}),(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",showCount:!0,value:r,realLength:!0,maxLength:12,onChange:p})]})}const I="import { Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('')\n  const [value1, setValue1] = useState('\u4f60\u5e72\ud83d\udc34?')\n  const [value2, setValue2] = useState('\u4f60\u5e72\ud83d\udc34?')\n  return (\n    <Space>\n      <Input placeholder={'\u8bf7\u8f93\u5165'} showCount value={value} onChange={setValue} />\n      <span>\u9ed8\u8ba4\u8868\u73b0</span>\n      <Input placeholder={'\u8bf7\u8f93\u5165'} showCount value={value1} maxLength={12} onChange={setValue1} />\n      <span>\u6b63\u786e\u8868\u73b0</span>\n      <Input\n        placeholder={'\u8bf7\u8f93\u5165'}\n        showCount\n        value={value2}\n        realLength\n        maxLength={12}\n        onChange={setValue2}\n      />\n    </Space>\n  )\n}\n";function v(){const[e,n]=(0,l.useState)("");return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u53ef\u4ee5\u6e05\u9664",clearable:!0,value:e,onChange:n}),(0,o.jsx)(a.pd,{placeholder:"\u53ef\u4ee5\u6e05\u9664",clearable:!0,type:"textarea",value:e,onChange:n}),(0,o.jsx)(a.pd,{placeholder:"\u53ef\u4ee5\u6e05\u9664",clearable:!0,rounded:!0,value:e,onChange:n})]})}const C="import { Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Space>\n      <Input placeholder={'\u53ef\u4ee5\u6e05\u9664'} clearable value={value} onChange={setValue} />\n      <Input\n        placeholder={'\u53ef\u4ee5\u6e05\u9664'}\n        clearable\n        type={'textarea'}\n        value={value}\n        onChange={setValue}\n      />\n      <Input placeholder={'\u53ef\u4ee5\u6e05\u9664'} clearable rounded value={value} onChange={setValue} />\n    </Space>\n  )\n}\n";function w(){const[e,n]=(0,l.useState)("123456");return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",type:"password",value:e,onChange:n}),(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",type:"password",showPasswordOn:"mousedown",value:e,onChange:n}),(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",type:"password",value:e,onChange:n,passwordVisibleIcon:(0,o.jsx)(x.Jhb,{}),passwordInvisibleIcon:(0,o.jsx)(x.k2X,{})}),(0,o.jsx)(a.pd,{placeholder:"\u8bf7\u8f93\u5165",type:"password",value:e,showPassword:!1,onChange:n})]})}const b="import { Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\nimport { CloseFaceEyeIcon, MehEyeIcon } from '@regen-design/icons'\n\nexport default function Demo() {\n  const [value, setValue] = useState('123456')\n  return (\n    <Space>\n      <Input placeholder={'\u8bf7\u8f93\u5165'} type=\"password\" value={value} onChange={setValue} />\n      <Input\n        placeholder={'\u8bf7\u8f93\u5165'}\n        type=\"password\"\n        showPasswordOn={'mousedown'}\n        value={value}\n        onChange={setValue}\n      />\n      <Input\n        placeholder={'\u8bf7\u8f93\u5165'}\n        type=\"password\"\n        value={value}\n        onChange={setValue}\n        passwordVisibleIcon={<MehEyeIcon />}\n        passwordInvisibleIcon={<CloseFaceEyeIcon />}\n      />\n      <Input\n        placeholder={'\u8bf7\u8f93\u5165'}\n        type=\"password\"\n        value={value}\n        showPassword={false}\n        onChange={setValue}\n      />\n    </Space>\n  )\n}\n";function y(){const[e,n]=(0,l.useState)("");return(0,o.jsxs)(a.$x,{children:[(0,o.jsx)(a.pd,{placeholder:"\u53ea\u80fd\u8f93\u5165\u6570\u5b57",onlyNumber:!0}),(0,o.jsx)(a.pd,{placeholder:"\u6ca1\u6709\u524d\u540e\u7a7a\u683c",trim:!0})]})}const V="import { Input, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Space>\n      <Input placeholder={'\u53ea\u80fd\u8f93\u5165\u6570\u5b57'} onlyNumber />\n      <Input placeholder={'\u6ca1\u6709\u524d\u540e\u7a7a\u683c'} trim />\n    </Space>\n  )\n}\n",z={sidebar_position:5},k="\u6587\u672c\u8f93\u5165 Input",N={id:"components/form-component/input/index",title:"\u6587\u672c\u8f93\u5165 Input",description:"\u6587\u672c\u8f93\u5165\u6846\u7528\u4e8e\u7528\u6237\u8f93\u5165\u8868\u5355\u6570\u636e\uff0c\u652f\u6301\u591a\u79cd\u7c7b\u578b\u3001\u5c3a\u5bf8\u3001\u72b6\u6001\u7b49\u3002",source:"@site/docs/components/form-component/input/index.mdx",sourceDirName:"components/form-component/input",slug:"/components/form-component/input/",permalink:"/regen-design/docs/components/form-component/input/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/input/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"componentsSidebar",previous:{title:"\u9009\u62e9\u6846 Select",permalink:"/regen-design/docs/components/form-component/select/"},next:{title:"\u6ed1\u52a8\u9009\u62e9 Slider",permalink:"/regen-design/docs/components/form-component/slider/"}},D={},G=[];function $(e){const n={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u6587\u672c\u8f93\u5165-input",children:"\u6587\u672c\u8f93\u5165 Input"}),"\n",(0,o.jsx)(n.p,{children:"\u6587\u672c\u8f93\u5165\u6846\u7528\u4e8e\u7528\u6237\u8f93\u5165\u8868\u5355\u6570\u636e\uff0c\u652f\u6301\u591a\u79cd\u7c7b\u578b\u3001\u5c3a\u5bf8\u3001\u72b6\u6001\u7b49\u3002"}),"\n",(0,o.jsx)(r.A,{children:()=>(0,o.jsx)(a.NP,{children:(0,o.jsxs)(a.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,o.jsxs)(a.xA,{yGap:16,cols:1,children:[(0,o.jsx)(a.NG,{title:"\u57fa\u7840",code:String(c),children:(0,o.jsx)(p,{})}),(0,o.jsx)(a.NG,{title:"\u5706\u89d2",code:String(h),children:(0,o.jsx)(i,{})}),(0,o.jsx)(a.NG,{title:"\u7981\u7528",code:String(j),children:(0,o.jsx)(f,{})}),(0,o.jsx)(a.NG,{title:"\u53ef\u6e05\u9664",code:String(C),children:(0,o.jsx)(v,{})}),(0,o.jsx)(a.NG,{title:"\u53ea\u5141\u8bb8\u8f93\u5165\u7279\u5b9a\u503c",code:String(V),children:(0,o.jsx)(y,{})})]}),(0,o.jsxs)(a.xA,{yGap:16,cols:1,children:[(0,o.jsx)(a.NG,{title:"\u5c3a\u5bf8",code:String(u),children:(0,o.jsx)(d,{})}),(0,o.jsx)(a.NG,{title:"\u5bc6\u7801",code:String(b),children:(0,o.jsx)(w,{})}),(0,o.jsx)(a.NG,{title:"\u524d\u7f00&\u540e\u7f00",code:String(g),children:(0,o.jsx)(m,{})}),(0,o.jsx)(a.NG,{title:"\u5b57\u7d20\u8ba1\u6570",code:String(I),children:(0,o.jsx)(S,{})})]})]})})})]})}function M(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)($,{...e})}):$(e)}}}]);