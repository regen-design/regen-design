(()=>{"use strict";var e,r,t,a,o,n={},d={};function i(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=n,i.c=d,e=[],i.O=(r,t,a,o)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],a=e[b][1],o=e[b][2];for(var d=!0,f=0;f<t.length;f++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](t[f])))?t.splice(f--,1):(d=!1,o<n&&(n=o));if(d){e.splice(b--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[t,a,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var d=2&a&&e;"object"==typeof d&&!~r.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,i.d(o,n),o},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",65:"d4d67096",85:"1f391b9e",237:"1df93b7f",361:"f6ceb3e5",368:"a94703ab",414:"393be207",479:"6a6e805d",518:"a7bd4aaa",592:"common",661:"5e95c892",722:"b53e133a",756:"75b6ea76",835:"f00d114a",838:"a49c42c6",882:"72960c7c",918:"17896441",981:"bdbad719"}[e]||e)+"."+{53:"c4426b17",65:"102132f0",85:"63fc7b97",123:"ffb2dea3",237:"3c6578da",361:"8acd94ca",368:"c70a7300",414:"eeb5b038",479:"c540e3dd",518:"5ac40699",592:"e254ce30",661:"c6698da9",709:"c2617e41",722:"12676cfb",756:"06999879",835:"0a1b50f9",838:"ab761193",882:"b97f4770",918:"c9af7baf",981:"397fb75f"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="@regen-design/docs:",i.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var d,f;if(void 0!==t)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var u=c[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){d=u;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",o+t),d.src=e),a[e]=[r];var l=(r,t)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),f&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/regen-design/",i.gca=function(e){return e={17896441:"918","935f2afb":"53",d4d67096:"65","1f391b9e":"85","1df93b7f":"237",f6ceb3e5:"361",a94703ab:"368","393be207":"414","6a6e805d":"479",a7bd4aaa:"518",common:"592","5e95c892":"661",b53e133a:"722","75b6ea76":"756",f00d114a:"835",a49c42c6:"838","72960c7c":"882",bdbad719:"981"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(r,t)=>{var a=i.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=i.p+i.u(r),d=new Error;i.l(n,(t=>{if(i.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],d=t[1],f=t[2],c=0;if(n.some((r=>0!==e[r]))){for(a in d)i.o(d,a)&&(i.m[a]=d[a]);if(f)var b=f(i)}for(r&&r(t);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(b)},t=self.webpackChunk_regen_design_docs=self.webpackChunk_regen_design_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0})();