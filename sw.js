if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const f=e=>s(e,n),a={module:{uri:n},exports:t,require:f};i[n]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(o(...e),t)))}}define(["./workbox-09107d18"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c4db0fb96035e24637f145b3685ec5e8"},{url:"assets/main.css",revision:"5670987c9887a50626403dfb0fa91137"},{url:"assets/main.js",revision:"bd9a33714c34b6e46708f1ef5e99815a"},{url:"assets/minima-social-icons.svg",revision:"3a70b871c930a7ed8af27caa162af123"},{url:"feed.xml",revision:"6694b57226f8e6b41ccfbe7845dd47b0"},{url:"index.html",revision:"4e934ee2ca33603201f4fa1acbf092f9"},{url:"manifest.json",revision:"beb0cbb5111afd647cd7d2d81f4cfb45"},{url:"positions/HoE-OpenSC.html",revision:"9256a21322bbb9e41a4dd253c0bd77e9"},{url:"positions/SSE-BCGDV.html",revision:"5662f3aaea24219360280fd5f73918fa"},{url:"README.md",revision:"747626f90a528979fd4c61d3c20fb6eb"},{url:"robots.txt",revision:"753920caa080934a9c884654e8b9796f"},{url:"sitemap.xml",revision:"bced9855400e0b1b8d660e065bba8537"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
