"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[320],{6336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>k,frontMatter:()=>b,metadata:()=>g,toc:()=>v});var r=t(7512),s=t(7875),a=t(8948),o=t(984),c=t(2752),l=t(9712),i=t(2188),u=t(5824),d=t(5496),p=t(188);function m(){const[e,n]=(0,u.EJ)(),[t,s]=(0,d.useState)(""),a=(0,p.qG)(),[o,c]=(0,d.useState)({}),[m,h]=(0,d.useState)("");return(0,d.useEffect)((()=>{const e=Object.keys(i.gl7).filter((e=>(e||"").toLocaleUpperCase().includes((t||"").toLocaleUpperCase()))).reduce(((e,n)=>(e[n]=i.gl7[n],e)),{});c(e)}),[t]),(0,r.jsxs)(l.wr,{yGap:16,children:[(0,r.jsx)(l.EF,{placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u56fe\u6807",debounce:300,value:t,onChange:s}),(0,r.jsx)(l.ye,{cols:6,yGap:16,xGap:16,children:Object.keys(o).map((t=>{const s=o[t];return(0,r.jsx)(l.Cg,{children:(0,r.jsxs)("div",{className:"icon-item",style:{border:`1px solid ${"light"===a.theme?a.borderColor:a.borderDarkColor}`},onClick:()=>{h(t),e(`<${t} />`)},children:[(0,r.jsx)("div",{className:"icon-item__tip",style:{opacity:n&&m===t?1:0,backgroundColor:a.colors.primary},children:"Copied"}),(0,r.jsx)(s,{size:"large"})]})},t)}))})]})}const h="import { Grid, GridItem, Input, Space } from '@regen-design/components'\nimport { SvgIcons } from '@regen-design/icons'\nimport './demo.css'\nimport { useCopy } from '@regen-design/hooks'\nimport { useEffect, useState } from 'react'\nimport { useTheme } from '@regen-design/theme'\nexport default function Demo() {\n  const [handleCopy, isSuccess] = useCopy()\n  const [searchValue, SetSearchValue] = useState<string>('')\n  const theme = useTheme()\n  const [filterIcons, setFilterIcons] = useState<any>({})\n  const [currentClickKey, setCurrentClickKey] = useState<string>('')\n  useEffect(() => {\n    const keys = Object.keys(SvgIcons)\n    const filterKeys = keys.filter(key => {\n      return (key || '').toLocaleUpperCase().includes((searchValue || '').toLocaleUpperCase())\n    })\n    const filterIcons = filterKeys.reduce((pre, cur) => {\n      pre[cur] = SvgIcons[cur]\n      return pre\n    }, {})\n    setFilterIcons(filterIcons)\n  }, [searchValue])\n  return (\n    <Space yGap={16}>\n      <Input\n        placeholder={'\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u56fe\u6807'}\n        debounce={300}\n        value={searchValue}\n        onChange={SetSearchValue}\n      />\n      <Grid cols={6} yGap={16} xGap={16}>\n        {Object.keys(filterIcons).map(key => {\n          const Icon = filterIcons[key]\n          return (\n            <GridItem key={key}>\n              <div\n                className=\"icon-item\"\n                style={{\n                  border: `1px solid ${theme.theme === 'light' ? theme.borderColor : theme.borderDarkColor}`,\n                }}\n                onClick={() => {\n                  setCurrentClickKey(key)\n                  handleCopy(`<${key} />`)\n                }}\n              >\n                <div\n                  className=\"icon-item__tip\"\n                  style={{\n                    opacity: isSuccess && currentClickKey === key ? 1 : 0,\n                    backgroundColor: theme.colors.primary,\n                  }}\n                >\n                  Copied\n                </div>\n                <Icon size={'large'} />\n              </div>\n            </GridItem>\n          )\n        })}\n      </Grid>\n    </Space>\n  )\n}\n",b={sidebar_position:2},f="\u56fe\u6807 Icons",g={id:"components/basic-components/icons/index",title:"\u56fe\u6807 Icons",description:"\u5185\u90e8\u4f7f\u7528 flatIcon \u4f5c\u4e3a\u56fe\u6807\u5e93\u3002",source:"@site/docs/components/basic-components/icons/index.mdx",sourceDirName:"components/basic-components/icons",slug:"/components/basic-components/icons/",permalink:"/regen-design/docs/components/basic-components/icons/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/icons/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"componentsSidebar",previous:{title:"\u6309\u94ae Button",permalink:"/regen-design/docs/components/basic-components/button/"},next:{title:"\u5361\u7247 Card",permalink:"/regen-design/docs/components/basic-components/card/"}},y={},v=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u56fe\u6807-icons",children:"\u56fe\u6807 Icons"}),"\n",(0,r.jsxs)(n.p,{children:["\u5185\u90e8\u4f7f\u7528 ",(0,r.jsx)("a",{href:"https://www.flaticon.com",target:"_blank",children:"flatIcon"})," \u4f5c\u4e3a\u56fe\u6807\u5e93\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u56fe\u6807\u7ec4\u4ef6\uff0c\u4f60\u9700\u8981\u5b89\u88c5 ",(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@regen-design/icons",target:"_blank",children:"@regen-design/icons"})," \u56fe\u6807\u7ec4\u4ef6\u5305"]}),"\n",(0,r.jsxs)(o.c,{children:[(0,r.jsx)(c.c,{value:"npm",label:"npm",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @regen-design/icons --save\n"})})}),(0,r.jsx)(c.c,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add @regen-design/icons --save\n"})})}),(0,r.jsx)(c.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pnpm add @regen-design/icons --save\n"})})})]}),"\n",(0,r.jsx)(a.c,{children:()=>(0,r.jsx)(l.Mp,{children:(0,r.jsx)(l.sj,{title:"\u56fe\u6807\u5217\u8868",onlyView:!0,code:String(h),children:(0,r.jsx)(m,{})})})})]})}function k(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},2752:(e,n,t)=>{t.d(n,{c:()=>o});t(5496);var r=t(8536);const s={tabItem:"tabItem_yWvh"};var a=t(7512);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.c)(s.tabItem,o),hidden:t,children:n})}},984:(e,n,t)=>{t.d(n,{c:()=>j});var r=t(5496),s=t(8536),a=t(5268),o=t(6252),c=t(7664),l=t(2900),i=t(2912),u=t(7408);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.Uz)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._M)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,d]=h({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.IN)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),g=(()=>{const e=i??b;return m({value:e,tabValues:a})?e:null})();(0,c.c)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(7968);const g={tabList:"tabList_Y5Z5",tabItem:"tabItem_QHds"};var y=t(7512);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.MV)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==r&&(i(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.c)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,s.c)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...n}),(0,y.jsx)(x,{...e,...n})]})}function j(e){const n=(0,f.c)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(n))}}}]);