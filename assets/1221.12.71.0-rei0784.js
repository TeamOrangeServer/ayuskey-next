(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[1221],{21221:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var n=o(55393);const c={class:"_section"},s={class:"_content"};var l=o(51436),a=o(34862);const r=(0,n.defineComponent)({data(){return{INFO:{title:this.$ts.help,icon:l.sph},docs:[],faQuestionCircle:l.sph}},created(){fetch(`${a.HQ}/docs.json?lang=${a.KQ}`).then((e=>e.json())).then((e=>{this.docs=e}))}});r.render=function(e,t,o,l,a,r){const i=(0,n.resolveComponent)("MkA");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("main",c,[(0,n.createVNode)("div",s,[(0,n.createVNode)("ul",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.docs,(e=>((0,n.openBlock)(),(0,n.createBlock)("li",{key:e.path},[(0,n.createVNode)(i,{to:"/docs/"+e.path},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.title),1)])),_:2},1032,["to"])])))),128))])])])])};const i=r}}]);