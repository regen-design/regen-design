"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[162],{2967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>y,contentTitle:()=>T,default:()=>S,frontMatter:()=>f,metadata:()=>j,toc:()=>w});var a=s(9214),t=s(5629),c=s(7800),r=s(8064);function i(){return(0,a.jsxs)(r.$x,{children:[(0,a.jsx)(r.vw,{children:"\u7231\u5728\u897f\u5143\u524d"}),(0,a.jsx)(r.vw,{type:"success",children:"\u4e0d\u8be5"}),(0,a.jsx)(r.vw,{type:"warning",children:"\u8d85\u4eba\u4e0d\u4f1a\u98de"}),(0,a.jsx)(r.vw,{type:"danger",children:"\u624b\u5199\u7684\u4ece\u524d"}),(0,a.jsx)(r.vw,{type:"info",children:"\u54ea\u91cc\u90fd\u662f\u4f60"})]})}function d(){return(0,a.jsx)(r.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"[type](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)",type:"`string`",defaultValue:"default",description:"\u6807\u7b7e\u7c7b\u578b"},{name:"[size](https://github.com/regen-design/regen-design/blob/master/packages/types/common/index.d.ts)",type:"`'tiny' | 'small' | 'default' | 'large'`",defaultValue:"default",description:"\u6807\u7b7e\u5c3a\u5bf8"},{name:"bordered",type:"`boolean`",defaultValue:"ture",description:"\u662f\u5426\u663e\u793a\u8fb9\u6846"},{name:"closeable",type:"`boolean`",defaultValue:"false",description:"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"},{name:"onClose",type:"`() => void`",defaultValue:"undefined",description:"\u5173\u95ed\u4e8b\u4ef6"}]})}const o='import { Space, Tag } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Tag>\u7231\u5728\u897f\u5143\u524d</Tag>\n      <Tag type="success">\u4e0d\u8be5</Tag>\n      <Tag type="warning">\u8d85\u4eba\u4e0d\u4f1a\u98de</Tag>\n      <Tag type="danger">\u624b\u5199\u7684\u4ece\u524d</Tag>\n      <Tag type="info">\u54ea\u91cc\u90fd\u662f\u4f60</Tag>\n    </Space>\n  )\n}\n';function l(){return(0,a.jsxs)(r.$x,{children:[(0,a.jsx)(r.vw,{bordered:!1,children:"\u7231\u5728\u897f\u5143\u524d"}),(0,a.jsx)(r.vw,{bordered:!1,type:"success",children:"\u4e0d\u8be5"}),(0,a.jsx)(r.vw,{bordered:!1,type:"warning",children:"\u8d85\u4eba\u4e0d\u4f1a\u98de"}),(0,a.jsx)(r.vw,{bordered:!1,type:"danger",children:"\u624b\u5199\u7684\u4ece\u524d"}),(0,a.jsx)(r.vw,{bordered:!1,type:"info",children:"\u54ea\u91cc\u90fd\u662f\u4f60"})]})}const p='import { Space, Tag } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Tag bordered={false}>\u7231\u5728\u897f\u5143\u524d</Tag>\n      <Tag bordered={false} type="success">\n        \u4e0d\u8be5\n      </Tag>\n      <Tag bordered={false} type="warning">\n        \u8d85\u4eba\u4e0d\u4f1a\u98de\n      </Tag>\n      <Tag bordered={false} type="danger">\n        \u624b\u5199\u7684\u4ece\u524d\n      </Tag>\n      <Tag bordered={false} type="info">\n        \u54ea\u91cc\u90fd\u662f\u4f60\n      </Tag>\n    </Space>\n  )\n}\n';function g(){return(0,a.jsxs)(r.$x,{children:[(0,a.jsx)(r.vw,{type:"success",size:"tiny",children:"\u4e0d\u8be5"}),(0,a.jsx)(r.vw,{type:"warning",size:"small",children:"\u8d85\u4eba\u4e0d\u4f1a\u98de"}),(0,a.jsx)(r.vw,{type:"danger",size:"default",children:"\u624b\u5199\u7684\u4ece\u524d"}),(0,a.jsx)(r.vw,{type:"info",size:"large",children:"\u54ea\u91cc\u90fd\u662f\u4f60"})]})}const u="import { Space, Tag } from '@regen-design/components'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Tag type=\"success\" size={'tiny'}>\n        \u4e0d\u8be5\n      </Tag>\n      <Tag type=\"warning\" size={'small'}>\n        \u8d85\u4eba\u4e0d\u4f1a\u98de\n      </Tag>\n      <Tag type=\"danger\" size={'default'}>\n        \u624b\u5199\u7684\u4ece\u524d\n      </Tag>\n      <Tag type=\"info\" size={'large'}>\n        \u54ea\u91cc\u90fd\u662f\u4f60\n      </Tag>\n    </Space>\n  )\n}\n";function x(){return(0,a.jsxs)(r.$x,{children:[(0,a.jsx)(r.vw,{closeable:!0,children:"\u7231\u5728\u897f\u5143\u524d"}),(0,a.jsx)(r.vw,{closeable:!0,type:"success",children:"\u4e0d\u8be5"}),(0,a.jsx)(r.vw,{closeable:!0,type:"warning",children:"\u8d85\u4eba\u4e0d\u4f1a\u98de"}),(0,a.jsx)(r.vw,{closeable:!0,type:"danger",children:"\u624b\u5199\u7684\u4ece\u524d"}),(0,a.jsx)(r.vw,{closeable:!0,type:"info",children:"\u54ea\u91cc\u90fd\u662f\u4f60"})]})}const m='import { Space, Tag } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Tag closeable>\u7231\u5728\u897f\u5143\u524d</Tag>\n      <Tag closeable type="success">\n        \u4e0d\u8be5\n      </Tag>\n      <Tag closeable type="warning">\n        \u8d85\u4eba\u4e0d\u4f1a\u98de\n      </Tag>\n      <Tag closeable type="danger">\n        \u624b\u5199\u7684\u4ece\u524d\n      </Tag>\n      <Tag closeable type="info">\n        \u54ea\u91cc\u90fd\u662f\u4f60\n      </Tag>\n    </Space>\n  )\n}\n';function b(){return(0,a.jsxs)(r.$x,{children:[(0,a.jsx)(r.vw,{closeable:!0,disabled:!0,children:"\u7231\u5728\u897f\u5143\u524d"}),(0,a.jsx)(r.vw,{closeable:!0,disabled:!0,type:"success",children:"\u4e0d\u8be5"}),(0,a.jsx)(r.vw,{closeable:!0,disabled:!0,type:"warning",children:"\u8d85\u4eba\u4e0d\u4f1a\u98de"}),(0,a.jsx)(r.vw,{closeable:!0,disabled:!0,type:"danger",children:"\u624b\u5199\u7684\u4ece\u524d"}),(0,a.jsx)(r.vw,{closeable:!0,disabled:!0,type:"info",children:"\u54ea\u91cc\u90fd\u662f\u4f60"})]})}const h='import { Space, Tag } from \'@regen-design/components\'\n\nexport default function Demo() {\n  return (\n    <Space>\n      <Tag closeable disabled>\n        \u7231\u5728\u897f\u5143\u524d\n      </Tag>\n      <Tag closeable disabled type="success">\n        \u4e0d\u8be5\n      </Tag>\n      <Tag closeable disabled type="warning">\n        \u8d85\u4eba\u4e0d\u4f1a\u98de\n      </Tag>\n      <Tag closeable disabled type="danger">\n        \u624b\u5199\u7684\u4ece\u524d\n      </Tag>\n      <Tag closeable disabled type="info">\n        \u54ea\u91cc\u90fd\u662f\u4f60\n      </Tag>\n    </Space>\n  )\n}\n',f={},T="\u6807\u7b7e Tag",j={id:"components/basic-components/tag/index",title:"\u6807\u7b7e Tag",description:"\u901a\u5e38\u7528\u6765\u5c55\u793a\u4e00\u4e9b\u5c5e\u6027\uff0c\u5076\u5c14\u4e5f\u7528\u6765\u5f53\u4e00\u4e9b\u5907\u9009\u7684\u5c5e\u6027\u3002",source:"@site/docs/components/basic-components/tag/index.mdx",sourceDirName:"components/basic-components/tag",slug:"/components/basic-components/tag/",permalink:"/regen-design/docs/components/basic-components/tag/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/tag/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u56fe\u6807 Icons",permalink:"/regen-design/docs/components/basic-components/icons/"},next:{title:"\u6c34\u5370 Watermark",permalink:"/regen-design/docs/components/basic-components/watermark/"}},y={},w=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2}];function v(e){const n={h1:"h1",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u6807\u7b7e-tag",children:"\u6807\u7b7e Tag"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u5e38\u7528\u6765\u5c55\u793a\u4e00\u4e9b\u5c5e\u6027\uff0c\u5076\u5c14\u4e5f\u7528\u6765\u5f53\u4e00\u4e9b\u5907\u9009\u7684\u5c5e\u6027\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,a.jsx)(c.A,{children:()=>(0,a.jsx)(r.NP,{children:(0,a.jsxs)(r.xA,{xGap:16,cols:2,style:{alignItems:"flex-start"},children:[(0,a.jsxs)(r.xA,{yGap:16,cols:1,children:[(0,a.jsx)(r.NG,{title:"\u57fa\u7840",description:"\u5b83\u6709\u4e0d\u540c\u7684\u7c7b\u578b\u3002",code:String(o),children:(0,a.jsx)(i,{})}),(0,a.jsx)(r.NG,{title:"\u5c3a\u5bf8",description:"\u5b83\u6709\u4e0d\u540c\u7684\u5c3a\u5bf8\u3002",code:String(u),children:(0,a.jsx)(g,{})}),(0,a.jsx)(r.NG,{title:"\u7981\u7528",code:String(h),children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)(r.xA,{yGap:16,cols:1,children:[(0,a.jsx)(r.NG,{title:"\u53ef\u5173\u95ed\u7684",code:String(m),children:(0,a.jsx)(x,{})}),(0,a.jsx)(r.NG,{title:"\u65e0\u8fb9\u6846",code:String(p),children:(0,a.jsx)(l,{})})]})]})})}),"\n",(0,a.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,a.jsx)(c.A,{children:()=>(0,a.jsx)(r.NP,{children:(0,a.jsx)(d,{})})})]})}function S(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}}}]);