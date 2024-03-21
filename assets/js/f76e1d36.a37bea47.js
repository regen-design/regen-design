"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[809],{513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>x,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>k});var a=t(9214),d=t(6593),o=t(7800),i=t(9771);function s(){const e=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"},{title:"Action",dataIndex:"actions",render:(e,n,t)=>(0,a.jsx)(i.$n,{onClick:()=>{console.log(n,t)},children:"Play"})}];return(0,a.jsx)(i.XI,{columns:e,dataSource:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],bordered:!1})}function r(){return(0,a.jsx)(i.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"dataSource",type:"`Array`",defaultValue:"[]",description:"\u6570\u636e\u6e90"},{name:"columns",type:"[`TableColumnItem[]`](#TableColumnItem)",defaultValue:"[]",description:"\u5217\u914d\u7f6e"},{name:"markdown",type:"`boolean`",defaultValue:"false",description:"\u662f\u5426\u4f7f\u7528markdown\u6e32\u67d3\u6570\u636e"},{name:"rowKey",type:"`string`",defaultValue:"key",description:"\u884c\u6570\u636e\u7684\u552f\u4e00\u952e"},{name:"bordered",type:"`boolean`",defaultValue:"true",description:"\u662f\u5426\u5c55\u793a\u5916\u8fb9\u6846\u548c\u5217\u8fb9\u6846"}]})}function l(){return(0,a.jsx)(i.XI,{columns:[{title:"\u540d\u79f0",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"defaultValue"},{title:"\u63cf\u8ff0",dataIndex:"description"}],markdown:!0,dataSource:[{name:"title",type:"`ReactNode`",defaultValue:"undefined",description:"\u5217\u5934\u663e\u793a\u6587\u5b57"},{name:"dataIndex",type:"`string`",defaultValue:"undefined",description:"\u5217\u6570\u636e\u5728\u6570\u636e\u9879\u4e2d\u5bf9\u5e94\u7684 key"},{name:"key",type:"`string`",defaultValue:"undefined",description:"React \u9700\u8981\u7684 key\uff0c\u5982\u679c\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u552f\u4e00\u7684 dataIndex\uff0c\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u5c5e\u6027"},{name:"width",type:"`CSSProperties['width']`",defaultValue:"undefined",description:"\u5217\u5bbd\u5ea6"},{name:"render",type:"`(text, record, index) => ReactNode`",defaultValue:"undefined",description:"\u751f\u6210\u590d\u6742\u6570\u636e\u7684\u6e32\u67d3\u51fd\u6570"},{name:"fixed",type:'`"left" | "right"`',defaultValue:"undefined",description:"\u5217\u662f\u5426\u56fa\u5b9a\uff0c\u53ef\u9009 `left` `right`"},{name:"align",type:'`"left" | "right" | "center"`',defaultValue:"left",description:"\u8bbe\u7f6e\u5217\u5185\u5bb9\u7684\u5bf9\u9f50\u65b9\u5f0f"}]})}const c="import { Button, Table } from '@regen-design/components'\n\nexport default function Demo() {\n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n    },\n    {\n      title: 'Address',\n      dataIndex: 'address',\n    },\n    {\n      title: 'Action',\n      dataIndex: 'actions',\n      render: (_, row, index) => (\n        <Button\n          onClick={() => {\n            console.log(row, index)\n          }}\n        >\n          Play\n        </Button>\n      ),\n    },\n  ]\n  const data = [\n    {\n      key: '1',\n      name: 'John Brown',\n      age: 32,\n      address: 'New York No. 1 Lake Park',\n    },\n    {\n      key: '2',\n      name: 'Jim Green',\n      age: 42,\n      address: 'London No. 1 Lake Park',\n    },\n    {\n      key: '3',\n      name: 'Joe Black',\n      age: 32,\n      address: 'Sidney No. 1 Lake Park',\n    },\n  ]\n  return <Table columns={columns} dataSource={data} bordered={false} />\n}\n";function u(){return(0,a.jsx)(i.XI,{columns:[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],dataSource:[]})}const m="import { Table } from '@regen-design/components'\n\nexport default function Demo() {\n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n    },\n    {\n      title: 'Address',\n      dataIndex: 'address',\n    },\n  ]\n  return <Table columns={columns} dataSource={[]} />\n}\n",p={sidebar_position:1},x="\u8868\u683c Table",f={id:"components/data-components/table/index",title:"\u8868\u683c Table",description:"\u8868\u683c\u7528\u6765\u663e\u793a\u4e00\u4e9b\u683c\u5f0f\u5316\u4fe1\u606f\u3002",source:"@site/docs/components/data-components/table/index.mdx",sourceDirName:"components/data-components/table",slug:"/components/data-components/table/",permalink:"/regen-design/docs/components/data-components/table/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/data-components/table/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u7a7a\u72b6\u6001 Empty",permalink:"/regen-design/docs/components/data-components/empty/"},next:{title:"\u6570\u503c\u52a8\u753b Number Animation",permalink:"/regen-design/docs/components/data-components/numberAnimation/"}},g={},k=[{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"API",id:"api",level:2},{value:"TableColumnItem API",id:"tablecolumnitem-api",level:2}];function h(e){const n={h1:"h1",h2:"h2",p:"p",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u8868\u683c-table",children:"\u8868\u683c Table"}),"\n",(0,a.jsx)(n.p,{children:"\u8868\u683c\u7528\u6765\u663e\u793a\u4e00\u4e9b\u683c\u5f0f\u5316\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6f14\u793a",children:"\u6f14\u793a"}),"\n",(0,a.jsx)(o.A,{children:()=>(0,a.jsx)(i.NP,{children:(0,a.jsxs)(i.xA,{yGap:16,cols:1,children:[(0,a.jsx)(i.NG,{title:"\u57fa\u7840",code:String(c),children:(0,a.jsx)(s,{})}),(0,a.jsx)(i.NG,{title:"\u7a7a\u8868\u683c",code:String(m),children:(0,a.jsx)(u,{})})]})})}),"\n",(0,a.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,a.jsx)(o.A,{children:()=>(0,a.jsx)(i.NP,{children:(0,a.jsx)(r,{})})}),"\n",(0,a.jsx)(n.h2,{id:"tablecolumnitem-api",children:"TableColumnItem API"}),"\n",(0,a.jsx)(o.A,{children:()=>(0,a.jsx)(i.NP,{children:(0,a.jsx)(l,{})})})]})}function b(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);