(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[4522],{4522:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var o=s(55393);const n={class:"mk-follow-page"};var l=s(10192),c=s(77127);const r=(0,o.defineComponent)({created(){const e=new URL(location.href).searchParams.get("acct");if(null==e)return;let t;e.startsWith("https://")?(t=l.hi("ap/show",{uri:e}),t.then((e=>{"User"==e.type?this.follow(e.object):"Note"===e.type?this.$router.push("/notes/"+e.object.id):l.WZ({type:"error",text:"Not a user"}).then((()=>{window.close()}))}))):(t=l.hi("users/show",(0,c.Z)(e)),t.then((e=>{this.follow(e)}))),l.Xp(t,null,null,this.$ts.fetchingAsApObject)},methods:{async follow(e){const{canceled:t}=await l.WZ({type:"question",text:this.$t("followConfirm",{name:e.name||e.username}),showCancelButton:!0});t?window.close():l.Zv("following/create",{userId:e.id})}}});r.render=function(e,t,s,l,c,r){return(0,o.openBlock)(),(0,o.createBlock)("div",n)};const a=r}}]);