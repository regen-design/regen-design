"use strict";(self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[]).push([[918],{1386:(e,t,s)=>{s.r(t),s.d(t,{default:()=>be});var a=s(79),n=s(9973),i=s(432),l=s(5250);const o=a.createContext(null);function d(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:s}=r();return(0,l.jsx)(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(9577),m=s(3018),h=s(3247),p=s(8946);function b(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,l.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(b,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(b,{...s,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=r();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var j=s(2462),v=s(4328),f=s(1702),_=s(5589),N=s(5602);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.Z,{to:s,onClick:a,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,j.Z)(),{pluginId:n}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(n),{latestDocSuggestion:o,latestVersionSuggestion:d}=(0,v.Jo)(n),r=o??(c=d).docs.find((e=>e.id===c.mainDocId));var c;return(0,l.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(L,{siteTitle:a,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(k,{versionLabel:d.label,to:r.path,onClick:()=>i(d.name)})})]})}function T(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,l.jsx)(Z,{className:t,versionMetadata:s}):null}function U(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:f.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,l.jsx)(y,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:a?(0,l.jsx)(w,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const B={iconEdit:"iconEdit_XqUb"};function M(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(B.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(p.Z,{to:t,className:f.k.common.editThisPage,children:[(0,l.jsx)(M,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const E={tag:"tag_X7XG",tagRegular:"tagRegular_yR0T",tagWithCount:"tagWithCount_dfyc"};function H(e){let{permalink:t,label:s,count:a}=e;return(0,l.jsxs)(p.Z,{href:t,className:(0,u.Z)(E.tag,a?E.tagWithCount:E.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const V={tags:"tags_QKcB",tag:"tag_o14q"};function S(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(V.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:V.tag,children:(0,l.jsx)(H,{label:t,permalink:s})},s)}))})]})}const P={lastUpdated:"lastUpdated_VxoG"};function D(e){return(0,l.jsx)("div",{className:(0,u.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(S,{...e})})})}function R(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(f.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",P.lastUpdated),children:(s||a)&&(0,l.jsx)(A,{lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a})})]})}function z(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n,tags:i}=e,o=i.length>0,d=!!(t||s||n);return o||d?(0,l.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(D,{tags:i}),d&&(0,l.jsx)(R,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a})]}):null}var F=s(8062),O=s(129);const W={tocCollapsibleButton:"tocCollapsibleButton_VeKm",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_lk3g"};function X(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const q={tocCollapsible:"tocCollapsible_JjSJ",tocCollapsibleContent:"tocCollapsibleContent_cCFg",tocCollapsibleExpanded:"tocCollapsibleExpanded_eWhz"};function G(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,F.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(q.tocCollapsible,!i&&q.tocCollapsibleExpanded,s),children:[(0,l.jsx)(X,{collapsed:i,onClick:o}),(0,l.jsx)(F.z,{lazy:!0,className:q.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(O.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const J={tocMobile:"tocMobile_SGn8"};function K(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,J.tocMobile)})}var Q=s(978);function $(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(Q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var Y=s(3158),ee=s(9429);function te(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=r();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(Y.Z,{as:"h1",children:s})}),(0,l.jsx)(ee.Z,{children:t})]})}var se=s(5571),ae=s(4118),ne=s(4507);function ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_SXC1"};function oe(){const e=(0,ne.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ie,{className:le.breadcrumbHomeIcon})})})}const de={breadcrumbsContainer:"breadcrumbsContainer_mIzT"};function re(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,l.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,l.jsx)(p.Z,{className:n,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:n,children:t})}function ce(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,l.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ue(){const e=(0,se.s1)(),t=(0,ae.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,de.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(oe,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ce,{active:a,index:s,addMicrodata:!!n,children:(0,l.jsx)(re,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var me=s(9947);const he={docItemContainer:"docItemContainer_XWdk",docItemCol:"docItemCol_OQ6j"};function pe(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=r(),s=(0,m.i)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,l.jsx)(K,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)($,{})}}(),{metadata:{unlisted:a}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&he.docItemCol),children:[a&&(0,l.jsx)(me.Z,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:he.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(U,{}),s.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(z,{})]}),(0,l.jsx)(g,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function be(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(d,{content:e.content,children:(0,l.jsxs)(n.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(pe,{children:(0,l.jsx)(s,{})})]})})}}}]);