(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[2966],{26672:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(55393);const s=(0,n.createTextVNode)("API console");var i=o(51436),a=o(90705),r=o(30320),c=o(11937),l=o(10192);const m=(0,n.defineComponent)({components:{FormBase:r.Z,FormButton:c.Z,FormLink:a.Z},emits:["info"],data:()=>({INFO:{title:"API",icon:i.DD4},isDesktop:window.innerWidth>=1100}),mounted(){this.$emit("info",this.INFO)},methods:{generateToken(){l.gk(o.e(2425).then(o.bind(o,2425)),{},{done:async e=>{const{name:t,permissions:o}=e,{token:n}=await l.hi("miauth/gen-token",{session:null,name:t,permission:o});l.WZ({type:"success",title:this.$ts.token,text:n})}},"closed")}}});m.render=function(e,t,o,i,a,r){const c=(0,n.resolveComponent)("FormButton"),l=(0,n.resolveComponent)("FormLink"),m=(0,n.resolveComponent)("FormBase");return(0,n.openBlock)(),(0,n.createBlock)(m,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(c,{onClick:e.generateToken,primary:""},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$ts.generateAccessToken),1)])),_:1},8,["onClick"]),(0,n.createVNode)(l,{to:"/settings/apps"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)((0,n.toDisplayString)(e.$ts.manageAccessTokens),1)])),_:1}),(0,n.createVNode)(l,{to:"/api-console",behavior:e.isDesktop?"window":null},{default:(0,n.withCtx)((()=>[s])),_:1},8,["behavior"])])),_:1})};const d=m}}]);