"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[320],{5890:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>x,contentTitle:()=>f,default:()=>j,frontMatter:()=>p,metadata:()=>h,toc:()=>F});var o=r(9214),s=r(8643),t=r(9311),m=r(7800);function i(){const[e]=(0,t.mN)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.lV,{form:e,onFinish:e=>{console.log(e)},children:[(0,o.jsx)(t.eI,{label:"Username",name:"username",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{})}),(0,o.jsx)(t.eI,{label:"Password",name:"password",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{type:"password"})}),(0,o.jsx)(t.$n,{htmlType:"submit",children:"Submit"})]})})}const u='import { Button, Form, FormItem, Input, useForm } from \'@regen-design/components\'\n\nexport default function Demo() {\n  const [$form] = useForm()\n  return (\n    <>\n      <Form\n        form={$form}\n        onFinish={e => {\n          console.log(e)\n        }}\n      >\n        <FormItem label="Username" name="username" required rules={[{ required: true }]}>\n          <Input />\n        </FormItem>\n        <FormItem label="Password" name="password" required rules={[{ required: true }]}>\n          <Input type={\'password\'} />\n        </FormItem>\n        <Button htmlType="submit">Submit</Button>\n      </Form>\n    </>\n  )\n}\n';function l(){const[e]=(0,t.mN)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.lV,{form:e,inline:!0,onFinish:e=>{console.log(e)},children:[(0,o.jsx)(t.eI,{label:"Username",name:"username",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{clearable:!0})}),(0,o.jsx)(t.eI,{label:"Password",name:"password",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{type:"password"})}),(0,o.jsx)(t.$n,{htmlType:"submit",children:"Submit"})]})})}const d='import { Button, Form, FormItem, Input, useForm } from \'@regen-design/components\'\n\nexport default function Demo() {\n  const [$form] = useForm()\n  return (\n    <>\n      <Form\n        form={$form}\n        inline\n        onFinish={e => {\n          console.log(e)\n        }}\n      >\n        <FormItem label="Username" name="username" required rules={[{ required: true }]}>\n          <Input clearable />\n        </FormItem>\n        <FormItem label="Password" name="password" required rules={[{ required: true }]}>\n          <Input type={\'password\'} />\n        </FormItem>\n        <Button htmlType="submit">Submit</Button>\n      </Form>\n    </>\n  )\n}\n';function c(){const[e]=(0,t.mN)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(t.lV,{form:e,labelWidth:120,onFinish:e=>{console.log(e)},children:[(0,o.jsx)(t.eI,{label:"Username",name:"username",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{})}),(0,o.jsx)(t.eI,{label:"Password",name:"password",required:!0,rules:[{required:!0}],children:(0,o.jsx)(t.pd,{type:"password"})}),(0,o.jsx)(t.$n,{htmlType:"submit",children:"Submit"})]})})}const a='import { Button, Form, FormItem, Input, useForm } from \'@regen-design/components\'\n\nexport default function Demo() {\n  const [$form] = useForm()\n  return (\n    <>\n      <Form\n        form={$form}\n        labelWidth={120}\n        onFinish={e => {\n          console.log(e)\n        }}\n      >\n        <FormItem label="Username" name="username" required rules={[{ required: true }]}>\n          <Input />\n        </FormItem>\n        <FormItem label="Password" name="password" required rules={[{ required: true }]}>\n          <Input type={\'password\'} />\n        </FormItem>\n        <Button htmlType="submit">Submit</Button>\n      </Form>\n    </>\n  )\n}\n',p={sidebar_position:5},f="\u8868\u5355 Form",h={id:"components/form-component/forms/index",title:"\u8868\u5355 Form",description:"{() => (",source:"@site/docs/components/form-component/forms/index.mdx",sourceDirName:"components/form-component/forms",slug:"/components/form-component/forms/",permalink:"/regen-design/docs/components/form-component/forms/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-component/forms/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"componentsSidebar",previous:{title:"\u9009\u62e9\u6846 Select",permalink:"/regen-design/docs/components/form-component/select/"},next:{title:"\u6587\u672c\u8f93\u5165 Input",permalink:"/regen-design/docs/components/form-component/input/"}},x={},F=[];function b(e){const n={h1:"h1",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u8868\u5355-form",children:"\u8868\u5355 Form"}),"\n",(0,o.jsx)(m.A,{children:()=>(0,o.jsx)(t.NP,{children:(0,o.jsx)(t.xA,{xGap:16,cols:1,style:{alignItems:"flex-start"},children:(0,o.jsxs)(t.xA,{yGap:16,cols:1,children:[(0,o.jsx)(t.NG,{title:"\u57fa\u7840",code:String(u),children:(0,o.jsx)(i,{})}),(0,o.jsx)(t.NG,{title:"\u884c\u5185\u8868\u5355",code:String(d),children:(0,o.jsx)(l,{})}),(0,o.jsx)(t.NG,{title:"\u8bbe\u7f6e\u6807\u7b7e\u5bbd\u5ea6",code:String(a),children:(0,o.jsx)(c,{})})]})})})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}}}]);