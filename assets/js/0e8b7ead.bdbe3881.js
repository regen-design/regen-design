"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[671],{7318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>C,frontMatter:()=>x,metadata:()=>f,toc:()=>j});var o=t(9214),r=t(6593),s=t(7800),i=t(3826),c=t(8318);function a(){const[e,n]=(0,c.useState)("https://regen-design.github.io/regen-design/");return(0,o.jsxs)(i.$x,{flexDirection:"column",children:[(0,o.jsx)(i.rg,{value:e}),(0,o.jsx)(i.pd,{value:e,debounce:300,onChange:n})]})}function d(){return(0,o.jsx)(i.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"value",type:"`string`",defaultValue:"''",description:"\u63cf\u8ff0"},{name:"size",type:"`number`",defaultValue:"100",description:"\u4e8c\u7ef4\u7801\u5927\u5c0f"},{name:"scale",type:"`number`",defaultValue:"4",description:"\u4e8c\u7ef4\u7801\u6bd4\u4f8b"},{name:"margin",type:"`number`",defaultValue:"0",description:"\u4e8c\u7ef4\u7801\u8fb9\u8ddd"},{name:"color",type:"`string`",defaultValue:"#000",description:"\u4e8c\u7ef4\u7801\u989c\u8272"},{name:"backgroundColor",type:"`string`",defaultValue:"#fff",description:"\u4e8c\u7ef4\u7801\u80cc\u666f\u989c\u8272"},{name:"errorCorrectionLevel",type:"`QRCodeErrorCorrectionLevel`",defaultValue:"M",description:"\u4e8c\u7ef4\u7801\u5bb9\u9519\u7387"},{name:"iconSrc",type:"`string`",defaultValue:"undefined",description:"\u56fe\u6807\u5730\u5740"},{name:"iconSize",type:"`number`",defaultValue:"40",description:"\u56fe\u6807\u5927\u5c0f"}]})}const u="import { Input, QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space flexDirection={'column'}>\n      <QRCode value={value} />\n      <Input value={value} debounce={300} onChange={setValue} />\n    </Space>\n  )\n}\n";function l(){const[e]=(0,c.useState)("https://regen-design.github.io/regen-design/");return(0,o.jsxs)(i.$x,{children:[(0,o.jsx)(i.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4"}),(0,o.jsx)(i.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4",iconSize:40}),(0,o.jsx)(i.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4",iconSize:40,errorCorrectionLevel:"H"})]})}const p="import { QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space>\n      <QRCode value={value} iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'} />\n      <QRCode\n        value={value}\n        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}\n        iconSize={40}\n      />\n      <QRCode\n        value={value}\n        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}\n        iconSize={40}\n        errorCorrectionLevel={'H'}\n      />\n    </Space>\n  )\n}\n";var g=t(9464);function m(){const[e]=(0,c.useState)("https://regen-design.github.io/regen-design/");return(0,o.jsxs)(i.$x,{children:[(0,o.jsx)(i.rg,{value:e,color:g.Tj.blue[500],backgroundColor:g.Tj.zinc[100]}),(0,o.jsx)(i.rg,{value:e,color:g.Tj.red[500],backgroundColor:g.Tj.zinc[100]})]})}const h="import { QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\nimport { colors } from '@regen-design/theme'\n\nexport default function Demo() {\n  const [value] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space>\n      <QRCode value={value} color={colors.blue['500']} backgroundColor={colors.zinc['100']} />\n      <QRCode value={value} color={colors.red['500']} backgroundColor={colors.zinc['100']} />\n    </Space>\n  )\n}\n",x={sidebar_position:3},v="\u4e8c\u7ef4\u7801 QR Code",f={id:"components/data-components/qrcode/index",title:"\u4e8c\u7ef4\u7801 QR Code",description:"\u4e8c\u7ef4\u7801\u662f\u4e00\u79cd\u77e9\u9635\u5f0f\u4e8c\u7ef4\u6761\u7801\uff0c\u662f\u7528\u67d0\u79cd\u7279\u5b9a\u7684\u51e0\u4f55\u56fe\u5f62\u6309\u4e00\u5b9a\u89c4\u5f8b\u5728\u5e73\u9762\uff08\u4e8c\u7ef4\u65b9\u5411\u4e0a\uff09\u5206\u5e03\u7684\u9ed1\u767d\u76f8\u95f4\u7684\u56fe\u5f62\u8bb0\u5f55\u6570\u636e\u7b26\u53f7\u4fe1\u606f\u7684\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u8bc6\u522b\u6570\u636e\u3001\u4fe1\u606f\u7684\u81ea\u52a8\u8bc6\u522b\u3001\u8bb0\u5f55\u3001\u5b58\u50a8\u7b49\u3002",source:"@site/docs/components/data-components/qrcode/index.mdx",sourceDirName:"components/data-components/qrcode",slug:"/components/data-components/qrcode/",permalink:"/regen-design/docs/components/data-components/qrcode/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/data-components/qrcode/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"componentsSidebar",previous:{title:"\u6570\u503c\u52a8\u753b Number Animation",permalink:"/regen-design/docs/components/data-components/numberAnimation/"},next:{title:"\u6811 Tree",permalink:"/regen-design/docs/components/data-components/tree/"}},b={},j=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2}];function S(e){const n={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u4e8c\u7ef4\u7801-qr-code",children:"\u4e8c\u7ef4\u7801 QR Code"}),"\n",(0,o.jsx)(n.p,{children:"\u4e8c\u7ef4\u7801\u662f\u4e00\u79cd\u77e9\u9635\u5f0f\u4e8c\u7ef4\u6761\u7801\uff0c\u662f\u7528\u67d0\u79cd\u7279\u5b9a\u7684\u51e0\u4f55\u56fe\u5f62\u6309\u4e00\u5b9a\u89c4\u5f8b\u5728\u5e73\u9762\uff08\u4e8c\u7ef4\u65b9\u5411\u4e0a\uff09\u5206\u5e03\u7684\u9ed1\u767d\u76f8\u95f4\u7684\u56fe\u5f62\u8bb0\u5f55\u6570\u636e\u7b26\u53f7\u4fe1\u606f\u7684\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u8bc6\u522b\u6570\u636e\u3001\u4fe1\u606f\u7684\u81ea\u52a8\u8bc6\u522b\u3001\u8bb0\u5f55\u3001\u5b58\u50a8\u7b49\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,o.jsx)(s.A,{children:()=>(0,o.jsx)(i.NP,{children:(0,o.jsxs)(i.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,o.jsx)(i.xA,{yGap:16,cols:1,children:(0,o.jsx)(i.NG,{title:"\u57fa\u7840",description:"\u57fa\u7840\u7684\u4e8c\u7ef4\u7801\u3002",code:String(u),children:(0,o.jsx)(a,{})})}),(0,o.jsxs)(i.xA,{yGap:16,cols:1,children:[(0,o.jsx)(i.NG,{title:"\u56fe\u6807",description:"\u53ef\u4ee5\u653e\u4e00\u4e9b\u4ee3\u8868\u6027\u7684\u56fe\u6807\u3002",code:String(p),children:(0,o.jsx)(l,{})}),(0,o.jsx)(i.NG,{title:"\u989c\u8272",description:"\u8ba9\u4e8c\u7ef4\u7801\u4e0d\u518d\u5355\u8c03\u4e4f\u5473\u3002",code:String(h),children:(0,o.jsx)(m,{})})]})]})})}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(s.A,{children:()=>(0,o.jsx)(i.NP,{children:(0,o.jsx)(d,{})})})]})}function C(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(S,{...e})}):S(e)}}}]);