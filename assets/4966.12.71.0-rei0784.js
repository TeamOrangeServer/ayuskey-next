(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[4966],{32850:(e,t,a)=>{var o=a(23645)((function(e){return e[1]}));o.push([e.id,".ujigsodd[data-v-0fcb8a2a]{padding:8px}.ujigsodd>.stream[data-v-0fcb8a2a]{display:flex;justify-content:center;flex-wrap:wrap}.ujigsodd>.stream>.img[data-v-0fcb8a2a]{flex:1 1 33%;width:33%;height:90px;box-sizing:border-box;background-position:50%;background-size:cover;background-clip:content-box;border:2px solid transparent;border-radius:6px}.ujigsodd>.empty[data-v-0fcb8a2a]{margin:0;padding:16px;text-align:center}.ujigsodd>.empty>i[data-v-0fcb8a2a]{margin-right:4px}",""]),e.exports=o},44966:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var o=a(55393);const n=(0,o.withScopeId)("data-v-0fcb8a2a");(0,o.pushScopeId)("data-v-0fcb8a2a");const i={class:"ujigsodd"},s={key:1,class:"stream"},r={key:2,class:"empty"};(0,o.popScopeId)();const c=n(((e,t,a,c,d,l)=>{const g=(0,o.resolveComponent)("Fa"),p=(0,o.resolveComponent)("MkLoading"),m=(0,o.resolveComponent)("MkA"),u=(0,o.resolveComponent)("MkContainer");return(0,o.openBlock)(),(0,o.createBlock)(u,null,{header:n((()=>[(0,o.createVNode)(g,{icon:e.faImage,style:{"margin-right":"0.5em"}},null,8,["icon"]),(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.images),1)])),default:n((()=>[(0,o.createVNode)("div",i,[e.fetching?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0})):(0,o.createCommentVNode)("",!0),!e.fetching&&e.images.length>0?((0,o.openBlock)(),(0,o.createBlock)("div",s,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.images,(t=>((0,o.openBlock)(),(0,o.createBlock)(m,{class:"img",style:`background-image: url(${e.thumbnail(t.file)})`,to:e.notePage(t.note)},null,8,["style","to"])))),256))])):(0,o.createCommentVNode)("",!0),e.fetching||0!=e.images.length?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)("p",r,(0,o.toDisplayString)(e.$ts.nothing),1))])])),_:1})}));var d=a(51436),l=a(87774),g=a(25021),p=a(10192),m=a(69146);const u=(0,o.defineComponent)({components:{MkContainer:m.Z},props:{user:{type:Object,required:!0}},data:()=>({fetching:!0,images:[],faImage:d.VmB}),mounted(){p.hi("users/notes",{userId:this.user.id,fileType:["image/jpeg","image/png","image/gif","image/apng","image/vnd.mozilla.apng"],excludeNsfw:"ignore"!==this.$store.state.nsfw,limit:9}).then((e=>{for(const t of e)for(const e of t.files)this.images.length<9&&this.images.push({note:t,file:e});this.fetching=!1}))},methods:{thumbnail(e){return this.$store.state.disableShowingAnimatedImages?(0,l.e)(e.thumbnailUrl):e.thumbnailUrl},notePage:g.Z}});a(6368);u.render=c,u.__scopeId="data-v-0fcb8a2a";const f=u},6368:(e,t,a)=>{var o=a(32850);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,a(45346).Z)("7ed6d6f8",o,!0,{})}}]);