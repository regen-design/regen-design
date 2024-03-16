"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[907],{1401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>x,default:()=>j,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var s=t(9214),r=t(3958),a=t(1851),i=t(228);function o(){return(0,s.jsx)(i.nz,{content:"\u7cbe\u5fc3\u5411\u5bfc",children:(0,s.jsx)("div",{style:{height:200,width:"100%",background:"#f5f5f5"}})})}function c(){return(0,s.jsx)(i.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"content",type:"`string`",defaultValue:"",description:"\u6c34\u5370\u5185\u5bb9"},{name:"fontSize",type:"`number`",defaultValue:"16",description:"\u6c34\u5370\u5b57\u4f53\u5927\u5c0f"},{name:"color",type:"`string`",defaultValue:"rgba(0, 0, 0, 0.1)",description:"\u6c34\u5370\u5b57\u4f53\u989c\u8272"},{name:"angle",type:"`number`",defaultValue:"-20",description:"\u6c34\u5370\u503e\u659c\u89d2\u5ea6"},{name:"width",type:"`number`",defaultValue:"320",description:"\u6c34\u5370\u5bbd\u5ea6"},{name:"height",type:"`number`",defaultValue:"160",description:"\u6c34\u5370\u9ad8\u5ea6"},{name:"zIndex",type:"`number`",defaultValue:"10",description:"\u6c34\u5370\u5c42\u7ea7"},{name:"fullscreen",type:"`boolean`",defaultValue:"false",description:"\u662f\u5426\u5168\u5c4f\u663e\u793a\u6c34\u5370"}]})}const d="import { Watermark } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Watermark content={'\u7cbe\u5fc3\u5411\u5bfc'}>\n      <div style={{ height: 200, width: '100%', background: '#f5f5f5' }} />\n    </Watermark>\n  )\n}\n";var l=t(8318);function p(){const[e,n]=(0,l.useState)(!1),[t,r]=(0,l.useState)(32);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.nz,{content:"\u559c\u6c14\u6d0b\u6d0b",zIndex:9e9,fontSize:t,fullscreen:e}),(0,s.jsxs)(i.$x,{flexDirection:"column",children:[(0,s.jsxs)(i.$x,{children:[(0,s.jsx)(i.dO,{checked:e,onChange:n}),(0,s.jsx)("span",{children:"\u5f00\u542f\u5168\u5c4f"})]}),(0,s.jsxs)(i.$x,{children:[(0,s.jsx)(i.$n,{onClick:()=>{r(t-1)},children:"\u7f29\u5c0f"}),(0,s.jsx)("span",{children:t}),(0,s.jsx)(i.$n,{onClick:()=>{r(t+1)},children:"\u653e\u5927"})]})]})]})}const u="import { Button, Space, Switch, Watermark } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [checked, setChecked] = useState(false)\n  const [fontSize, setFontSize] = useState(32)\n  return (\n    <>\n      <Watermark content={'\u559c\u6c14\u6d0b\u6d0b'} zIndex={9e9} fontSize={fontSize} fullscreen={checked} />\n      <Space flexDirection={'column'}>\n        <Space>\n          <Switch checked={checked} onChange={setChecked} />\n          <span>\u5f00\u542f\u5168\u5c4f</span>\n        </Space>\n        <Space>\n          <Button\n            onClick={() => {\n              setFontSize(fontSize - 1)\n            }}\n          >\n            \u7f29\u5c0f\n          </Button>\n          <span>{fontSize}</span>\n          <Button\n            onClick={() => {\n              setFontSize(fontSize + 1)\n            }}\n          >\n            \u653e\u5927\n          </Button>\n        </Space>\n      </Space>\n    </>\n  )\n}\n",m={sidebar_position:7},x="\u6c34\u5370 Watermark",h={id:"components/basic-components/watermark/index",title:"\u6c34\u5370 Watermark",description:"\u51fa\u73b0\u5728\u94b1\u4e0a\u7684\u65f6\u5019\u6bd4\u8f83\u53ef\u7231\u3002",source:"@site/docs/components/basic-components/watermark/index.mdx",sourceDirName:"components/basic-components/watermark",slug:"/components/basic-components/watermark/",permalink:"/regen-design/docs/components/basic-components/watermark/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/watermark/index.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"componentsSidebar",previous:{title:"\u6e10\u53d8\u6587\u5b57 Gradient Text",permalink:"/regen-design/docs/components/basic-components/gradientText/"},next:{title:"\u5355\u9009\u6846 Radio",permalink:"/regen-design/docs/components/form-component/radio/"}},f={},k=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2}];function g(e){const n={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6c34\u5370-watermark",children:"\u6c34\u5370 Watermark"}),"\n",(0,s.jsx)(n.p,{children:"\u51fa\u73b0\u5728\u94b1\u4e0a\u7684\u65f6\u5019\u6bd4\u8f83\u53ef\u7231\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,s.jsx)(a.A,{children:()=>(0,s.jsx)(i.NP,{children:(0,s.jsxs)(i.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,s.jsx)(i.xA,{yGap:16,cols:1,children:(0,s.jsx)(i.NG,{title:"\u57fa\u7840",code:String(d),children:(0,s.jsx)(o,{})})}),(0,s.jsx)(i.xA,{yGap:16,cols:1,children:(0,s.jsx)(i.NG,{title:"\u5168\u5c4f",description:"\u53ef\u4ee5\u6253\u5f00\u5168\u5c4f\uff0c\u8fd9\u6837\u663e\u5f97\u5f88\u4e13\u4e1a\u3002",code:String(u),children:(0,s.jsx)(p,{})})})]})})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(a.A,{children:()=>(0,s.jsx)(i.NP,{children:(0,s.jsx)(c,{})})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);