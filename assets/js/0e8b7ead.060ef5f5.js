"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[671],{8207:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>f,frontMatter:()=>h,metadata:()=>x,toc:()=>S});var t=o(9214),r=o(2809),s=o(4985),c=o(602),i=o(8318);function a(){const[e,n]=(0,i.useState)("https://regen-design.github.io/regen-design/");return(0,t.jsxs)(c.$x,{flexDirection:"column",children:[(0,t.jsx)(c.rg,{value:e}),(0,t.jsx)(c.pd,{value:e,debounce:300,onChange:n})]})}const d="import { Input, QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value, setValue] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space flexDirection={'column'}>\n      <QRCode value={value} />\n      <Input value={value} debounce={300} onChange={setValue} />\n    </Space>\n  )\n}\n";function u(){const[e]=(0,i.useState)("https://regen-design.github.io/regen-design/");return(0,t.jsxs)(c.$x,{children:[(0,t.jsx)(c.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4"}),(0,t.jsx)(c.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4",iconSize:40}),(0,t.jsx)(c.rg,{value:e,iconSrc:"https://avatars.githubusercontent.com/u/66107882?v=4",iconSize:40,errorCorrectionLevel:"H"})]})}const l="import { QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [value] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space>\n      <QRCode value={value} iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'} />\n      <QRCode\n        value={value}\n        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}\n        iconSize={40}\n      />\n      <QRCode\n        value={value}\n        iconSrc={'https://avatars.githubusercontent.com/u/66107882?v=4'}\n        iconSize={40}\n        errorCorrectionLevel={'H'}\n      />\n    </Space>\n  )\n}\n";var p=o(7713);function g(){const[e]=(0,i.useState)("https://regen-design.github.io/regen-design/");return(0,t.jsxs)(c.$x,{children:[(0,t.jsx)(c.rg,{value:e,color:p.Tj.blue[500],backgroundColor:p.Tj.zinc[100]}),(0,t.jsx)(c.rg,{value:e,color:p.Tj.red[500],backgroundColor:p.Tj.zinc[100]})]})}const m="import { QRCode, Space } from '@regen-design/components'\nimport { useState } from 'react'\nimport { colors } from '@regen-design/theme'\n\nexport default function Demo() {\n  const [value] = useState('https://regen-design.github.io/regen-design/')\n  return (\n    <Space>\n      <QRCode value={value} color={colors.blue['500']} backgroundColor={colors.zinc['100']} />\n      <QRCode value={value} color={colors.red['500']} backgroundColor={colors.zinc['100']} />\n    </Space>\n  )\n}\n",h={sidebar_position:3},v="\u4e8c\u7ef4\u7801 QR Code",x={id:"components/data-components/qrcode/index",title:"\u4e8c\u7ef4\u7801 QR Code",description:"\u4e8c\u7ef4\u7801\u662f\u4e00\u79cd\u77e9\u9635\u5f0f\u4e8c\u7ef4\u6761\u7801\uff0c\u662f\u7528\u67d0\u79cd\u7279\u5b9a\u7684\u51e0\u4f55\u56fe\u5f62\u6309\u4e00\u5b9a\u89c4\u5f8b\u5728\u5e73\u9762\uff08\u4e8c\u7ef4\u65b9\u5411\u4e0a\uff09\u5206\u5e03\u7684\u9ed1\u767d\u76f8\u95f4\u7684\u56fe\u5f62\u8bb0\u5f55\u6570\u636e\u7b26\u53f7\u4fe1\u606f\u7684\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u8bc6\u522b\u6570\u636e\u3001\u4fe1\u606f\u7684\u81ea\u52a8\u8bc6\u522b\u3001\u8bb0\u5f55\u3001\u5b58\u50a8\u7b49\u3002",source:"@site/docs/components/data-components/qrcode/index.mdx",sourceDirName:"components/data-components/qrcode",slug:"/components/data-components/qrcode/",permalink:"/regen-design/docs/components/data-components/qrcode/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/data-components/qrcode/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"componentsSidebar",previous:{title:"\u6570\u503c\u52a8\u753b Number Animation",permalink:"/regen-design/docs/components/data-components/numberAnimation/"},next:{title:"\u5f39\u51fa\u4fe1\u606f Popover",permalink:"/regen-design/docs/components/feedback-components/popver/"}},b={},S=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function j(e){const n={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4e8c\u7ef4\u7801-qr-code",children:"\u4e8c\u7ef4\u7801 QR Code"}),"\n",(0,t.jsx)(n.p,{children:"\u4e8c\u7ef4\u7801\u662f\u4e00\u79cd\u77e9\u9635\u5f0f\u4e8c\u7ef4\u6761\u7801\uff0c\u662f\u7528\u67d0\u79cd\u7279\u5b9a\u7684\u51e0\u4f55\u56fe\u5f62\u6309\u4e00\u5b9a\u89c4\u5f8b\u5728\u5e73\u9762\uff08\u4e8c\u7ef4\u65b9\u5411\u4e0a\uff09\u5206\u5e03\u7684\u9ed1\u767d\u76f8\u95f4\u7684\u56fe\u5f62\u8bb0\u5f55\u6570\u636e\u7b26\u53f7\u4fe1\u606f\u7684\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u8bc6\u522b\u6570\u636e\u3001\u4fe1\u606f\u7684\u81ea\u52a8\u8bc6\u522b\u3001\u8bb0\u5f55\u3001\u5b58\u50a8\u7b49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,t.jsx)(s.A,{children:()=>(0,t.jsx)(c.NP,{children:(0,t.jsxs)(c.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,t.jsx)(c.xA,{yGap:16,cols:1,children:(0,t.jsx)(c.NG,{title:"\u57fa\u7840",description:"\u57fa\u7840\u7684\u4e8c\u7ef4\u7801\u3002",code:String(d),children:(0,t.jsx)(a,{})})}),(0,t.jsxs)(c.xA,{yGap:16,cols:1,children:[(0,t.jsx)(c.NG,{title:"\u56fe\u6807",description:"\u53ef\u4ee5\u653e\u4e00\u4e9b\u4ee3\u8868\u6027\u7684\u56fe\u6807\u3002",code:String(l),children:(0,t.jsx)(u,{})}),(0,t.jsx)(c.NG,{title:"\u989c\u8272",description:"\u8ba9\u4e8c\u7ef4\u7801\u4e0d\u518d\u5355\u8c03\u4e4f\u5473\u3002",code:String(m),children:(0,t.jsx)(g,{})})]})]})})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}}}]);