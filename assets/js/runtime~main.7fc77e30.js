(()=>{"use strict";var e,r,t,a,o,n={},c={};function f(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=n,f.c=c,e=[],f.O=(r,t,a,o)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],a=e[b][1],o=e[b][2];for(var c=!0,d=0;d<t.length;d++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](t[d])))?t.splice(d--,1):(c=!1,o<n&&(n=o));if(c){e.splice(b--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,a,o]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var c=2&a&&e;"object"==typeof c&&!~r.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(o,n),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",65:"d4d67096",85:"1f391b9e",237:"1df93b7f",305:"2800caa3",361:"f6ceb3e5",368:"a94703ab",414:"393be207",479:"6a6e805d",518:"a7bd4aaa",587:"882e5fde",592:"common",661:"5e95c892",722:"b53e133a",756:"75b6ea76",813:"ffc1a6c1",835:"f00d114a",838:"a49c42c6",882:"72960c7c",918:"17896441",981:"bdbad719"}[e]||e)+"."+{53:"43dc3a62",65:"102132f0",85:"12c55fd8",237:"273c30fe",305:"4a496705",361:"75a5336e",368:"fdb62fd4",414:"eeb5b038",479:"b390ebee",518:"5ac40699",587:"7b1011b5",592:"8c9a769b",661:"f84c3138",709:"67986419",722:"23052da5",756:"88d5e13b",813:"ab291b4d",835:"aa2aa490",838:"ab761193",882:"fafb22a4",901:"bfa83736",918:"53ac54a3",981:"285259d1"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="@regen-design/docs:",f.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var c,d;if(void 0!==t)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+t),c.src=e),a[e]=[r];var l=(r,t)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/regen-design/",f.gca=function(e){return e={17896441:"918","935f2afb":"53",d4d67096:"65","1f391b9e":"85","1df93b7f":"237","2800caa3":"305",f6ceb3e5:"361",a94703ab:"368","393be207":"414","6a6e805d":"479",a7bd4aaa:"518","882e5fde":"587",common:"592","5e95c892":"661",b53e133a:"722","75b6ea76":"756",ffc1a6c1:"813",f00d114a:"835",a49c42c6:"838","72960c7c":"882",bdbad719:"981"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=f.p+f.u(r),c=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],c=t[1],d=t[2],i=0;if(n.some((r=>0!==e[r]))){for(a in c)f.o(c,a)&&(f.m[a]=c[a]);if(d)var b=d(f)}for(r&&r(t);i<n.length;i++)o=n[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(b)},t=self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f.nc=void 0})();