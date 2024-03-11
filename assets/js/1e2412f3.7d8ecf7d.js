"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[127],{5663:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var t=o(9214),s=o(7988),i=o(1851),r=o(5787),c=o(8318);function l(){const[e,n]=(0,c.useState)([]);return console.log(e),(0,t.jsx)(r.$x,{children:(0,t.jsx)(r._O,{fileList:e,action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",onChange:(e,o)=>{n(o)},onRemove:e=>{n((n=>n.filter((n=>n.uid!==e.uid))))},children:(0,t.jsx)(r.$n,{children:"\u4e0a\u4f20\u6587\u4ef6"})})})}const a="import { Button, Space, Upload } from '@regen-design/components'\nimport { FileInfoType } from '@regen-design/types'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [fileList, setFileList] = useState<FileInfoType[]>([])\n  console.log(fileList)\n  return (\n    <Space>\n      <Upload\n        fileList={fileList}\n        action={'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'}\n        onChange={(file, fileList) => {\n          setFileList(fileList)\n        }}\n        onRemove={file => {\n          setFileList(prev => prev.filter(item => item.uid !== file.uid))\n        }}\n      >\n        <Button>\u4e0a\u4f20\u6587\u4ef6</Button>\n      </Upload>\n    </Space>\n  )\n}\n",d={sidebar_position:9},p="\u4e0a\u4f20 Upload",m={id:"components/form-component/upload/index",title:"\u4e0a\u4f20 Upload",description:"\u5982\u679c\u4e0d\u5728\u610f\u5ef6\u8fdf\uff0c\u6211\u66f4\u60f3\u7528\u5361\u8f66\u548c\u786c\u76d8\u3002",source:"@site/docs/components/form-component/upload/index.mdx",sourceDirName:"components/form-component/upload",slug:"/components/form-component/upload/",permalink:"/regen-design/docs/components/form-component/upload/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/upload/index.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"componentsSidebar",previous:{title:"\u65e5\u671f\u9009\u62e9\u5668 Date Picker",permalink:"/regen-design/docs/components/form-component/datePicker/"},next:{title:"\u95f4\u8ddd Space",permalink:"/regen-design/docs/components/layout-components/space/"}},u={},f=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2}];function h(e){const n={h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4e0a\u4f20-upload",children:"\u4e0a\u4f20 Upload"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5728\u610f\u5ef6\u8fdf\uff0c\u6211\u66f4\u60f3\u7528\u5361\u8f66\u548c\u786c\u76d8\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,t.jsx)(i.A,{children:()=>(0,t.jsx)(r.NP,{children:(0,t.jsx)(r.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:(0,t.jsx)(r.xA,{yGap:16,cols:1,children:(0,t.jsx)(r.NG,{title:"\u57fa\u7840",code:String(a),children:(0,t.jsx)(l,{})})})})})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);