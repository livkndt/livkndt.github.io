if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const c=e=>s(e,n),t={module:{uri:n},exports:a,require:c};i[n]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(o(...e),a)))}}define(["./workbox-09107d18"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c4db0fb96035e24637f145b3685ec5e8"},{url:"assets/main.css",revision:"5670987c9887a50626403dfb0fa91137"},{url:"assets/main.js",revision:"bd9a33714c34b6e46708f1ef5e99815a"},{url:"assets/minima-social-icons.svg",revision:"3a70b871c930a7ed8af27caa162af123"},{url:"feed.xml",revision:"f8705ee26288643f241750be146a130f"},{url:"index.html",revision:"4e934ee2ca33603201f4fa1acbf092f9"},{url:"manifest.json",revision:"beb0cbb5111afd647cd7d2d81f4cfb45"},{url:"positions/HoE-OpenSC.html",revision:"dacaad20d3e61527665bc00c3c22af11"},{url:"positions/SSE-BCGDV.html",revision:"92c38549ee1d77103234ae0dc3845326"},{url:"README.md",revision:"747626f90a528979fd4c61d3c20fb6eb"},{url:"robots.txt",revision:"753920caa080934a9c884654e8b9796f"},{url:"sitemap.xml",revision:"d2222ae92b499de8cd73de0e736ea24c"},{url:"sw.js",revision:"b437b6671d8aa2a4b67da4168f44097c"},{url:"workbox-09107d18.js",revision:"fa94699770bb7a840910188d4721be08"},{url:"workbox-config.js",revision:"186f0b53eb1b7ca81940006d78442241"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
