if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const c=e=>s(e,n),t={module:{uri:n},exports:d,require:c};i[n]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-09107d18"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"972abd166f016ef877a3c6f00448b330"},{url:"assets/main.css",revision:"108d26d1210dd391a2c4fd158bc27472"},{url:"assets/main.js",revision:"bd9a33714c34b6e46708f1ef5e99815a"},{url:"assets/minima-social-icons.svg",revision:"3a70b871c930a7ed8af27caa162af123"},{url:"feed.xml",revision:"b1e262c17ab007edeaf269957298d448"},{url:"index.html",revision:"c0496ce85ef19f016efa36c383288a36"},{url:"manifest.json",revision:"a96202bd7d42180c621bba1904792163"},{url:"positions/HoE-OpenSC.html",revision:"85c0f0f04e9c6ccbedd077233b9c86ec"},{url:"positions/SSE-BCGDV.html",revision:"85808e64d677dc6163a27edb4236df0b"},{url:"README.md",revision:"747626f90a528979fd4c61d3c20fb6eb"},{url:"robots.txt",revision:"78b86a93737757e61f87cc33d2f30af0"},{url:"sitemap.xml",revision:"ff651de28d3bb4619b7df2263b03814a"},{url:"sw.js",revision:"51cfed0c99d1d3c7bf59d11ab5677451"},{url:"workbox-09107d18.js",revision:"fa94699770bb7a840910188d4721be08"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
