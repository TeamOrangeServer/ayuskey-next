(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[9769],{79092:(e,a,o)=>{var d=o(23645)((function(e){return e[1]}));d.push([e.id,".qyqbqfal[data-v-485f1456]{padding:32px;max-width:800px;margin:0 auto}.qyqbqfal.max-width_500px[data-v-485f1456]{padding:16px}.qyqbqfal>.title[data-v-485f1456]{font-size:1.5em;font-weight:700;padding:0 0 .75em;margin:0 0 1em;border-bottom:2px solid var(--divider)}.qyqbqfal>.body[data-v-485f1456]>:first-child{margin-top:0}.qyqbqfal>.body[data-v-485f1456]>:last-child{margin-bottom:0}.qyqbqfal>.body[data-v-485f1456] a{color:var(--link)}.qyqbqfal>.body[data-v-485f1456] blockquote{display:block;margin:8px;padding:6px 0 6px 12px;color:var(--fg);border-left:3px solid var(--fg);opacity:.7}.qyqbqfal>.body[data-v-485f1456] blockquote p{margin:0}.qyqbqfal>.body[data-v-485f1456] h2{font-size:1.25em;padding:0 0 .5em;margin:1.5em 0 1em;border-bottom:1px solid var(--divider)}.qyqbqfal>.body[data-v-485f1456] table{width:100%;max-width:100%;overflow:auto}.qyqbqfal>.body[data-v-485f1456] kbd.group{display:inline-block;padding:2px;border:1px solid var(--divider);border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.1)}.qyqbqfal>.body[data-v-485f1456] kbd.key{display:inline-block;padding:6px 8px;border:1px solid var(--divider);border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.1)}.qyqbqfal>.body[data-v-485f1456] code{display:inline-block;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;tab-size:2;background:#272822;color:#f8f8f2;border-radius:6px;padding:4px 6px}.qyqbqfal>.body[data-v-485f1456] pre{background:#272822;color:#f8f8f2;border-radius:6px;padding:12px 16px}.qyqbqfal>.body[data-v-485f1456] pre>code{padding:0}.qyqbqfal>.footer[data-v-485f1456]{padding:1.5em 0 0;margin:1.5em 0 0;border-top:2px solid var(--divider)}",""]),e.exports=d},29769:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>h});var d=o(55393);const t=(0,d.withScopeId)("data-v-485f1456");(0,d.pushScopeId)("data-v-485f1456");const r={class:"qyqbqfal"},i={class:"title"},l={class:"footer"};(0,d.popScopeId)();const s=t(((e,a,o,s,n,p)=>{const c=(0,d.resolveComponent)("MkLink"),f=(0,d.resolveDirective)("size");return(0,d.withDirectives)(((0,d.openBlock)(),(0,d.createBlock)("div",r,[(0,d.createVNode)("div",i,(0,d.toDisplayString)(e.title),1),(0,d.createVNode)("div",{class:"body",innerHTML:e.body},null,8,["innerHTML"]),(0,d.createVNode)("div",l,[(0,d.createVNode)(c,{url:`https://github.com/syuilo/misskey/blob/master/src/docs/${e.lang}/${e.doc}.md`,class:"at"},{default:t((()=>[(0,d.createTextVNode)((0,d.toDisplayString)(e.$ts.docSource),1)])),_:1},8,["url"])])],512)),[[f,{max:[500]}]])}));var n=o(51436),p=o(9980),c=o.n(p),f=o(10178),b=o(34862),q=o(93044);const y=c()({html:!0});y.use(f.Z,{slugify:e=>encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))});const v=(0,d.defineComponent)({components:{MkLink:q.Z},props:{doc:{type:String,required:!0}},data(){return{INFO:(0,d.computed)((()=>this.title?{title:this.title,icon:n.sph}:null)),title:null,body:null,markdown:null,lang:b.KQ}},watch:{doc:{handler(){this.fetchDoc()},immediate:!0}},methods:{fetchDoc(){fetch(`${b.HQ}/assets/docs/${b.KQ}/${this.doc}.md`).then((e=>e.text())).then((e=>{this.parse(e)}))},parse(e){e=e.replace(/\{_URL_\}/g,b.HQ);const a=y.parse(e,{});if(0===a.length)return;const o=[...a],d=[];let t=0;for(;"heading_open"!==o[0].type;)o.shift(),t++;for(o.shift();"heading_close"!==o[0].type;){const e=o.shift();e&&d.push(e)}const r=[...a];r.splice(t,d.length+2),this.title=y.renderer.render(d,{},{}),this.body=y.renderer.render(r,{},{})}}});o(36191);v.render=s,v.__scopeId="data-v-485f1456";const h=v},36191:(e,a,o)=>{var d=o(79092);"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals);(0,o(45346).Z)("1b6d8dbe",d,!0,{})}}]);