(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[5376],{15351:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,"",""]),e.exports=a},81188:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".bfomjevm[data-v-a89e8eb4]{display:flex;padding:16px}.bfomjevm>.icon[data-v-a89e8eb4]{display:block;flex-shrink:0;margin:0 12px 0 0;width:50px;height:50px;border-radius:8px}.bfomjevm>.body[data-v-a89e8eb4]{width:calc(100% - 62px);position:relative}.bfomjevm>.body>.name[data-v-a89e8eb4]{font-weight:700}",""]),e.exports=a},42369:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var a=o(55393);const n=(0,a.withScopeId)("data-v-29d875a8");(0,a.pushScopeId)("data-v-29d875a8");const s={class:"empty",key:"_empty_"};(0,a.popScopeId)();const l=n(((e,t,o,l,i,r)=>{const c=(0,a.resolveComponent)("MkLoading"),d=(0,a.resolveComponent)("FormButton"),p=(0,a.resolveComponent)("FormGroup");return(0,a.openBlock)(),(0,a.createBlock)(p,{class:"uljviswt _formItem"},{label:n((()=>[(0,a.renderSlot)(e.$slots,"label")])),default:n((()=>[(0,a.renderSlot)(e.$slots,"default",{items:e.items}),e.empty?((0,a.openBlock)(),(0,a.createBlock)("div",s,[(0,a.renderSlot)(e.$slots,"empty")])):(0,a.createCommentVNode)("",!0),(0,a.withDirectives)((0,a.createVNode)(d,{class:"button",onClick:e.fetchMore,disabled:e.moreFetching,style:{cursor:e.moreFetching?"wait":"pointer"},primary:""},{default:n((()=>[e.moreFetching?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)(a.Fragment,{key:0},[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.loadMore),1)],64)),e.moreFetching?((0,a.openBlock)(),(0,a.createBlock)(c,{key:1,inline:""})):(0,a.createCommentVNode)("",!0)])),_:1},8,["onClick","disabled","style"]),[[a.vShow,e.more]])])),_:3})}));var i=o(11937),r=o(42519),c=o(90381);const d=(0,a.defineComponent)({components:{FormButton:i.Z,FormGroup:r.Z},mixins:[(0,c.Z)({})],props:{pagination:{required:!0}}});o(64362);d.render=l,d.__scopeId="data-v-29d875a8";const p=d},481:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var a=o(55393);const n=(0,a.withScopeId)("data-v-a89e8eb4");(0,a.pushScopeId)("data-v-a89e8eb4");const s={class:"_fullinfo"},l=(0,a.createVNode)("img",{src:"https://xn--931a.moe/assets/info.jpg",class:"_ghost"},null,-1),i={class:"body"},r={class:"name"},c={class:"description"},d={class:"_keyValue"},p={class:"_keyValue"},m={class:"actions"};(0,a.popScopeId)();const u=n(((e,t,o,u,v,k)=>{const f=(0,a.resolveComponent)("MkTime"),g=(0,a.resolveComponent)("Fa"),h=(0,a.resolveComponent)("FormPagination"),y=(0,a.resolveComponent)("FormBase");return(0,a.openBlock)(),(0,a.createBlock)(y,null,{default:n((()=>[(0,a.createVNode)(h,{pagination:e.pagination,ref:"list"},{empty:n((()=>[(0,a.createVNode)("div",s,[l,(0,a.createVNode)("div",null,(0,a.toDisplayString)(e.$ts.nothing),1)])])),default:n((({items:t})=>[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(t,(t=>((0,a.openBlock)(),(0,a.createBlock)("div",{class:"_formPanel bfomjevm",key:t.id},[t.iconUrl?((0,a.openBlock)(),(0,a.createBlock)("img",{key:0,class:"icon",src:t.iconUrl,alt:""},null,8,["src"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("div",i,[(0,a.createVNode)("div",r,(0,a.toDisplayString)(t.name),1),(0,a.createVNode)("div",c,(0,a.toDisplayString)(t.description),1),(0,a.createVNode)("div",d,[(0,a.createVNode)("div",null,(0,a.toDisplayString)(e.$ts.installedDate)+":",1),(0,a.createVNode)("div",null,[(0,a.createVNode)(f,{time:t.createdAt},null,8,["time"])])]),(0,a.createVNode)("div",p,[(0,a.createVNode)("div",null,(0,a.toDisplayString)(e.$ts.lastUsedDate)+":",1),(0,a.createVNode)("div",null,[(0,a.createVNode)(f,{time:t.lastUsedAt},null,8,["time"])])]),(0,a.createVNode)("div",m,[(0,a.createVNode)("button",{class:"_button",onClick:o=>e.revoke(t)},[(0,a.createVNode)(g,{icon:e.faTrashAlt},null,8,["icon"])],8,["onClick"])]),(0,a.createVNode)("details",null,[(0,a.createVNode)("summary",null,(0,a.toDisplayString)(e.$ts.details),1),(0,a.createVNode)("ul",null,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(t.permission,(t=>((0,a.openBlock)(),(0,a.createBlock)("li",{key:t},(0,a.toDisplayString)(e.$t("_permissions."+t)),1)))),128))])])])])))),128))])),_:1},8,["pagination"])])),_:1})}));var v=o(51436),k=o(42369),f=o(30320),g=o(10192);const h=(0,a.defineComponent)({components:{FormBase:f.Z,FormPagination:k.Z},emits:["info"],data(){return{INFO:{title:this.$ts.installedApps,icon:v.oso},pagination:{endpoint:"i/apps",limit:100,params:{sort:"+lastUsedAt"}},faTrashAlt:v.I7k,faPlug:v.oso}},mounted(){this.$emit("info",this.INFO)},methods:{revoke(e){g.hi("i/revoke-token",{tokenId:e.id}).then((()=>{this.$refs.list.reload()}))}}});o(88224);h.render=u,h.__scopeId="data-v-a89e8eb4";const y=h},64362:(e,t,o)=>{var a=o(15351);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("6fc09c80",a,!0,{})},88224:(e,t,o)=>{var a=o(81188);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("379d3bd5",a,!0,{})}}]);