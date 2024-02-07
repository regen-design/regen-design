"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[524],{192:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>D,contentTitle:()=>I,default:()=>_,frontMatter:()=>C,metadata:()=>A,toc:()=>M});var o=t(7512),i=t(4496),s=t(8948),r=t(2776);function c(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{children:"default"}),(0,o.jsx)(r.q,{type:"primary",children:"primary"}),(0,o.jsx)(r.q,{type:"info",children:"info"}),(0,o.jsx)(r.q,{type:"success",children:"success"}),(0,o.jsx)(r.q,{type:"danger",children:"danger"}),(0,o.jsx)(r.q,{type:"warning",children:"warning"})]})}const d='import { Button, Space } from \'@regen-design/components\'\nexport default function Demo() {\n  return (\n    <Space>\n      <Button>default</Button>\n      <Button type="primary">primary</Button>\n      <Button type="info">info</Button>\n      <Button type="success">success</Button>\n      <Button type="danger">danger</Button>\n      <Button type="warning">warning</Button>\n    </Space>\n  )\n}\n';function a(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{dashed:!0,children:"default"}),(0,o.jsx)(r.q,{dashed:!0,type:"primary",children:"primary"}),(0,o.jsx)(r.q,{dashed:!0,type:"info",children:"info"}),(0,o.jsx)(r.q,{dashed:!0,type:"success",children:"success"}),(0,o.jsx)(r.q,{dashed:!0,type:"danger",children:"danger"}),(0,o.jsx)(r.q,{dashed:!0,type:"warning",children:"warning"})]})}const l='import { Button, Space } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button dashed>default</Button>\n      <Button dashed type="primary">\n        primary\n      </Button>\n      <Button dashed type="info">\n        info\n      </Button>\n      <Button dashed type="success">\n        success\n      </Button>\n      <Button dashed type="danger">\n        danger\n      </Button>\n      <Button dashed type="warning">\n        warning\n      </Button>\n    </Space>\n  )\n}\n';function u(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{size:"tiny",children:"tiny"}),(0,o.jsx)(r.q,{size:"small",children:"small"}),(0,o.jsx)(r.q,{size:"default",children:"default"}),(0,o.jsx)(r.q,{size:"large",children:"large"})]})}const p='import { Button, Space } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button size="tiny">tiny</Button>\n      <Button size="small">small</Button>\n      <Button size="default">default</Button>\n      <Button size="large">large</Button>\n    </Space>\n  )\n}\n';function m(){return(0,o.jsx)(r.wr,{children:(0,o.jsx)(r.q,{disabled:!0,children:"disabled"})})}const x="import { Button, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button disabled>disabled</Button>\n    </Space>\n  )\n}\n";var f=t(2188);function g(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{text:!0,icon:(0,o.jsx)(f.e6h,{}),children:"\u6f02\u6d0b\u8fc7\u6d77\u6765\u770b\u4f60~"}),(0,o.jsx)(r.q,{text:!0,type:"primary",children:"primary"}),(0,o.jsx)(r.q,{text:!0,type:"info",children:"info"}),(0,o.jsx)(r.q,{text:!0,type:"success",children:"success"}),(0,o.jsx)(r.q,{text:!0,type:"danger",children:"danger"}),(0,o.jsx)(r.q,{text:!0,type:"warning",children:"warning"})]})}const h='import { Button, Space } from \'@regen-design/components\'\nimport { CommentAltIcon } from \'@regen-design/icons\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button text icon={<CommentAltIcon />}>\n        \u6f02\u6d0b\u8fc7\u6d77\u6765\u770b\u4f60~\n      </Button>\n      <Button text type="primary">\n        primary\n      </Button>\n      <Button text type="info">\n        info\n      </Button>\n      <Button text type="success">\n        success\n      </Button>\n      <Button text type="danger">\n        danger\n      </Button>\n      <Button text type="warning">\n        warning\n      </Button>\n    </Space>\n  )\n}\n';function j(){return(0,o.jsx)(r.wr,{children:(0,o.jsx)(r.q,{block:!0,type:"primary",children:"Block Button"})})}const B="import { Button, Space } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button block type=\"primary\">\n        Block Button\n      </Button>\n    </Space>\n  )\n}\n";var y=t(5496);function b(){const[n,e]=(0,y.useState)(!1),t=()=>{e(!0),setTimeout((()=>{e(!1)}),2e3)};return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{loading:!0,children:"Loading..."}),(0,o.jsx)(r.q,{loading:n,icon:(0,o.jsx)(f.EgV,{}),onClick:t,children:"Click Me"}),(0,o.jsx)(r.q,{loading:n,onClick:t,children:"Click Me"})]})}const S="import { Button, Space } from '@regen-design/components'\nimport { AddIcon } from '@regen-design/icons'\nimport { useState } from 'react'\n\nexport default function Demo() {\n  const [loading, setLoading] = useState(false)\n  const handleClick = () => {\n    setLoading(true)\n    setTimeout(() => {\n      setLoading(false)\n    }, 2000)\n  }\n  return (\n    <Space>\n      <Button loading>Loading...</Button>\n      <Button loading={loading} icon={<AddIcon />} onClick={handleClick}>\n        Click Me\n      </Button>\n      <Button loading={loading} onClick={handleClick}>\n        Click Me\n      </Button>\n    </Space>\n  )\n}\n";function q(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{circle:!0,children:(0,o.jsx)(f.EgV,{})}),(0,o.jsx)(r.q,{rounded:!0,children:"rounded"}),(0,o.jsx)(r.q,{children:"square"})]})}const k="import { Button, Space } from '@regen-design/components'\nimport { AddIcon } from '@regen-design/icons'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button circle>\n        <AddIcon />\n      </Button>\n      <Button rounded>rounded</Button>\n      <Button>square</Button>\n    </Space>\n  )\n}\n";function w(){return(0,o.jsxs)(r.wr,{children:[(0,o.jsx)(r.q,{icon:(0,o.jsx)(f.EgV,{}),color:"#8a2be2",children:"#8a2be2"}),(0,o.jsx)(r.q,{color:"#ff69b4",children:"#ff69b4"}),(0,o.jsx)(r.q,{icon:(0,o.jsx)(f.EgV,{}),color:"#8a2be2",text:!0,children:"#8a2be2"}),(0,o.jsx)(r.q,{color:"#ff69b4",text:!0,children:"#ff69b4"})]})}const V="import { Button, Space } from '@regen-design/components'\nimport { AddIcon } from '@regen-design/icons'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Button icon={<AddIcon />} color={'#8a2be2'}>\n        #8a2be2\n      </Button>\n      <Button color={'#ff69b4'}>#ff69b4</Button>\n      <Button icon={<AddIcon />} color={'#8a2be2'} text>\n        #8a2be2\n      </Button>\n      <Button color={'#ff69b4'} text>\n        #ff69b4\n      </Button>\n    </Space>\n  )\n}\n";function v(){const n=[{name:"type",type:"[Type](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)",defaultValue:"default",description:"\u6309\u94ae\u7c7b\u578b"},{name:"size",type:"[Size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)",defaultValue:"default",description:"\u6309\u94ae\u5927\u5c0f"},{name:"disabled",type:"`boolean`",defaultValue:"false",description:"\u6309\u94ae\u662f\u5426\u7981\u7528"},{name:"color",type:"`undefined`",defaultValue:"false",description:"\u6309\u94ae\u662f\u5426\u7981\u7528"},{name:"dashed",type:"`boolean`",defaultValue:"false",description:"\u865a\u7ebf\u6309\u94ae"},{name:"block",type:"`boolean`",defaultValue:"false",description:"\u5c06\u6309\u94ae\u5bbd\u5ea6\u8c03\u6574\u4e3a\u5360\u6574\u5757"},{name:"text",type:"boolean",defaultValue:"false",description:"\u6587\u5b57\u6309\u94ae"},{name:"loading",type:"`boolean`",defaultValue:"false",description:"\u52a0\u8f7d\u4e2d\u72b6\u6001"},{name:"circle",type:"`boolean`",defaultValue:"false",description:"\u5706\u5f62\u6309\u94ae"},{name:"rounded",type:"`boolean`",defaultValue:"false",description:"\u5706\u89d2\u6309\u94ae"},{name:"icon",type:"`string`",defaultValue:"false",description:"\u56fe\u6807\u6309\u94ae"},{name:"onClick",type:"`(event: React.MouseEvent) => void`",defaultValue:"null",description:"\u70b9\u51fb\u6309\u94ae\u65f6\u7684\u56de\u8c03"}];return(0,o.jsx)(r.oJ,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:n})}const C={sidebar_position:1},I="\u6309\u94ae Button",A={id:"components/basic-components/button/index",title:"\u6309\u94ae Button",description:"\u6309\u94ae\u7528\u6765\u89e6\u53d1\u4e00\u4e9b\u64cd\u4f5c\u3002",source:"@site/docs/components/basic-components/button/index.mdx",sourceDirName:"components/basic-components/button",slug:"/components/basic-components/button/",permalink:"/regen-design/docs/components/basic-components/button/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/button/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u5934\u50cf Avatar",permalink:"/regen-design/docs/components/basic-components/avatar/"},next:{title:"\u5206\u5272\u7ebf Divider",permalink:"/regen-design/docs/components/basic-components/divider/"}},D={},M=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2}];function z(n){const e={h1:"h1",h2:"h2",p:"p",...(0,i.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u6309\u94ae-button",children:"\u6309\u94ae Button"}),"\n",(0,o.jsx)(e.p,{children:"\u6309\u94ae\u7528\u6765\u89e6\u53d1\u4e00\u4e9b\u64cd\u4f5c\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,o.jsx)(s.c,{children:()=>(0,o.jsx)(r.Mp,{children:(0,o.jsxs)(r.ye,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,o.jsxs)(r.ye,{yGap:16,cols:1,children:[(0,o.jsx)(r.sj,{title:"\u57fa\u7840",description:"\u6309\u94ae\u7684 type \u5206\u522b\u4e3a `default`\u3001`tertiary`\u3001`primary`\u3001`info`\u3001`success`\u3001`warning` \u548c `error`\u3002",code:String(d),children:(0,o.jsx)(c,{})}),(0,o.jsx)(r.sj,{title:"\u7981\u7528",description:"\u6309\u94ae\u53ef\u4ee5\u88ab\u7981\u7528\u3002",code:String(x),children:(0,o.jsx)(m,{})}),(0,o.jsx)(r.sj,{title:"\u6587\u672c",description:"\u50cf\u6587\u672c\u4e00\u6837\u7684\u6309\u94ae\u3002",code:String(h),children:(0,o.jsx)(g,{})}),(0,o.jsx)(r.sj,{title:"\u81ea\u5b9a\u4e49\u989c\u8272",description:"\u6309\u94ae\u6709\u52a0\u8f7d\u72b6\u6001\u3002",code:String(V),children:(0,o.jsx)(w,{})}),(0,o.jsx)(r.sj,{title:"loading",description:"\u6309\u94ae\u6709\u52a0\u8f7d\u72b6\u6001\u3002",code:String(S),children:(0,o.jsx)(b,{})})]}),(0,o.jsxs)(r.ye,{yGap:16,cols:1,children:[(0,o.jsx)(r.sj,{title:"\u5c3a\u5bf8",description:"\u6709 `tiny`\u3001`small`\u3001`default` \u548c `large` \u5c3a\u5bf8\u3002",code:String(p),children:(0,o.jsx)(u,{})}),(0,o.jsx)(r.sj,{title:"\u865a\u7ebf",description:"\u4f7f\u7528 `dashed` \u6765\u4f7f\u7528\u865a\u7ebf\u6309\u94ae\u3002",code:String(l),children:(0,o.jsx)(a,{})}),(0,o.jsx)(r.sj,{title:"\u5757\u7ea7",description:"`block`\u5c5e\u6027\u5c06\u4f7f\u6309\u94ae\u9002\u5408\u5176\u7236\u5bbd\u5ea6\u3002",code:String(B),children:(0,o.jsx)(j,{})}),(0,o.jsx)(r.sj,{title:"\u5f62\u72b6",description:"\u6309\u94ae\u62e5\u6709\u4e0d\u540c\u7684\u5f62\u72b6\u3002",code:String(k),children:(0,o.jsx)(q,{})})]})]})})}),"\n",(0,o.jsx)(e.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(s.c,{children:()=>(0,o.jsx)(r.Mp,{children:(0,o.jsx)(v,{})})})]})}function _(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(z,{...n})}):z(n)}}}]);