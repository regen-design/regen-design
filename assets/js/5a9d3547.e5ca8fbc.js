"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[265],{6538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>T,frontMatter:()=>u,metadata:()=>f,toc:()=>y});var i=t(9214),r=t(3958),s=t(1851),d=t(228);function a(){return(0,i.jsxs)(d.$x,{flexDirection:"column",children:[(0,i.jsx)(d.yR,{type:"info",children:"\u5929\u9752\u8272\u7b49\u70df\u96e8"}),(0,i.jsx)(d.yR,{type:"danger",children:"\u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c"}),(0,i.jsx)(d.yR,{type:"warning",children:"\u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211"}),(0,i.jsx)(d.yR,{type:"success",children:"\u8fd9\u53ea\u662f\u4f60\u5934\u4e0a\u7684\u7eff\u8272"})]})}function c(){return(0,i.jsx)(d.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"type",type:"`'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'`",defaultValue:"default",description:"\u6e10\u53d8\u6587\u5b57\u7684\u7c7b\u578b"},{name:"[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)",type:"`'tiny' | 'small' | 'default' | 'large' | 'number'`",defaultValue:"undefined",description:"\u6587\u5b57\u5927\u5c0f\uff08\u5f53\u4e0d\u6307\u5b9a\u5355\u4f4d\u65f6\uff0c\u9ed8\u8ba4\u5355\u4f4d: px\uff09"},{name:"gradient",type:"`string | { from: string; to: string; deg?: number | string }`",defaultValue:"undefined",description:"\u6587\u5b57\u6e10\u53d8\u8272\u53c2\u6570"}]})}const o="import { GradientText, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space flexDirection={'column'}>\n      <GradientText type={'info'}>\u5929\u9752\u8272\u7b49\u70df\u96e8</GradientText>\n      <GradientText type={'danger'}>\u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c</GradientText>\n      <GradientText type={'warning'}>\u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211</GradientText>\n      <GradientText type={'success'}>\u8fd9\u53ea\u662f\u4f60\u5934\u4e0a\u7684\u7eff\u8272</GradientText>\n    </Space>\n  )\n}\n";function l(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.$x,{flexDirection:"column",children:[(0,i.jsx)(d.yR,{type:"info",size:"tiny",children:"\u5929\u9752\u8272\u7b49\u70df\u96e8"}),(0,i.jsx)(d.yR,{type:"danger",size:"small",children:"\u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c"}),(0,i.jsx)(d.yR,{type:"warning",size:"default",children:"\u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211"}),(0,i.jsx)(d.yR,{type:"success",size:"large",children:"\u8fd9\u53ea\u662f\u4f60\u5934\u4e0a\u7684\u7eff\u8272"}),(0,i.jsx)(d.yR,{type:"danger",size:36,children:"Live Forever"})]})})}const x="import { GradientText, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <>\n      <Space flexDirection={'column'}>\n        <GradientText type={'info'} size={'tiny'}>\n          \u5929\u9752\u8272\u7b49\u70df\u96e8\n        </GradientText>\n        <GradientText type={'danger'} size={'small'}>\n          \u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c\n        </GradientText>\n        <GradientText type={'warning'} size={'default'}>\n          \u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211\n        </GradientText>\n        <GradientText type={'success'} size={'large'}>\n          \u8fd9\u53ea\u662f\u4f60\u5934\u4e0a\u7684\u7eff\u8272\n        </GradientText>\n        <GradientText type={'danger'} size={36}>\n          Live Forever\n        </GradientText>\n      </Space>\n    </>\n  )\n}\n";function p(){return(0,i.jsxs)(d.$x,{flexDirection:"column",children:[(0,i.jsx)(d.yR,{size:36,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"},children:"\u5929\u9752\u8272\u7b49\u70df\u96e8"}),(0,i.jsx)(d.yR,{size:36,gradient:{deg:180,from:"rgb(37, 175, 243)",to:"rgb(248, 215, 20)"},children:"\u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c"}),(0,i.jsx)(d.yR,{size:36,gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)",children:"\u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211"})]})}const g="import { GradientText, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space flexDirection={'column'}>\n      <GradientText\n        size={36}\n        gradient={{\n          from: 'rgb(85, 85, 85)',\n          to: 'rgb(170, 170, 170)',\n        }}\n      >\n        \u5929\u9752\u8272\u7b49\u70df\u96e8\n      </GradientText>\n      <GradientText\n        size={36}\n        gradient={{ deg: 180, from: 'rgb(37, 175, 243)', to: 'rgb(248, 215, 20)' }}\n      >\n        \u7ea2\u96e8\u74e2\u6cfc\u6cdb\u8d77\u4e86\u56de\u5fc6\u600e\u4e48\u6f5c\n      </GradientText>\n      <GradientText size={36} gradient={'linear-gradient(90deg, red 0%, green 50%, blue 100%)'}>\n        \u4f60\u5c31\u4e0d\u8981\u60f3\u8d77\u6211\n      </GradientText>\n    </Space>\n  )\n}\n",u={sidebar_position:5},m="\u6e10\u53d8\u6587\u5b57 Gradient Text",f={id:"components/basic-components/gradientText/index",title:"\u6e10\u53d8\u6587\u5b57 Gradient Text",description:"\u8fd9\u4e2a\u4e1c\u897f\u770b\u8d77\u6765\u6ca1\u5565\u7528\uff0c\u5b9e\u9645\u4e0a\u786e\u5b9e\u6ca1\u5565\u7528\u3002",source:"@site/docs/components/basic-components/gradientText/index.mdx",sourceDirName:"components/basic-components/gradientText",slug:"/components/basic-components/gradientText/",permalink:"/regen-design/docs/components/basic-components/gradientText/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/gradientText/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"componentsSidebar",previous:{title:"\u5361\u7247 Card",permalink:"/regen-design/docs/components/basic-components/card/"},next:{title:"\u6c34\u5370 Watermark",permalink:"/regen-design/docs/components/basic-components/watermark/"}},h={},y=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2}];function j(e){const n={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6e10\u53d8\u6587\u5b57-gradient-text",children:"\u6e10\u53d8\u6587\u5b57 Gradient Text"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u4e1c\u897f\u770b\u8d77\u6765\u6ca1\u5565\u7528\uff0c\u5b9e\u9645\u4e0a\u786e\u5b9e\u6ca1\u5565\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,i.jsx)(s.A,{children:()=>(0,i.jsx)(d.NP,{children:(0,i.jsxs)(d.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,i.jsxs)(d.xA,{yGap:16,cols:1,children:[(0,i.jsx)(d.NG,{title:"\u57fa\u7840",description:"\u5b83\u6709\u4e0d\u540c\u7684\u7c7b\u578b\u3002",code:String(o),children:(0,i.jsx)(a,{})}),(0,i.jsx)(d.NG,{title:"\u5b9a\u5236",description:"\u9760\u4f60\u4e86\u3002",code:String(g),children:(0,i.jsx)(p,{})})]}),(0,i.jsx)(d.xA,{yGap:16,cols:1,children:(0,i.jsx)(d.NG,{title:"\u5c3a\u5bf8",description:"\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u5c3a\u5bf8\u3002",code:String(x),children:(0,i.jsx)(l,{})})})]})})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(s.A,{children:()=>(0,i.jsx)(d.NP,{children:(0,i.jsx)(c,{})})})]})}function T(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);