(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[7390],{50047:(e,t,o)=>{var r=o(23645)((function(e){return e[1]}));r.push([e.id,".cxiknjgy>.more>.button[data-v-2a5f1774]{margin-left:auto;margin-right:auto;height:48px;min-width:150px}",""]),e.exports=r},18083:(e,t,o)=>{var r=o(23645)((function(e){return e[1]}));r.push([e.id,".vjnjpkug[data-v-6bb21d0e]{position:relative}.vjnjpkug>.banner[data-v-6bb21d0e]{height:84px;background-color:rgba(0,0,0,.1);background-size:cover;background-position:50%}.vjnjpkug>.avatar[data-v-6bb21d0e]{display:block;position:absolute;top:62px;left:13px;z-index:2;width:58px;height:58px;border:4px solid var(--panel)}.vjnjpkug>.title[data-v-6bb21d0e]{display:block;padding:10px 0 10px 88px}.vjnjpkug>.title>.name[data-v-6bb21d0e]{display:inline-block;margin:0;font-weight:700;line-height:16px;word-break:break-all}.vjnjpkug>.title>.username[data-v-6bb21d0e]{display:block;margin:0;line-height:16px;font-size:.8em;color:var(--fg);opacity:.7}.vjnjpkug>.description[data-v-6bb21d0e]{padding:16px;font-size:.8em;border-top:1px solid var(--divider)}.vjnjpkug>.description>.mfm[data-v-6bb21d0e]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.vjnjpkug>.status[data-v-6bb21d0e]{padding:10px 16px;border-top:1px solid var(--divider)}.vjnjpkug>.status>div[data-v-6bb21d0e]{display:inline-block;width:33%}.vjnjpkug>.status>div>p[data-v-6bb21d0e]{margin:0;font-size:.7em;color:var(--fg)}.vjnjpkug>.status>div>span[data-v-6bb21d0e]{font-size:1em;color:var(--accent)}.vjnjpkug>.koudoku-button[data-v-6bb21d0e]{position:absolute;top:8px;right:8px}",""]),e.exports=r},10376:(e,t,o)=>{var r=o(23645)((function(e){return e[1]}));r.push([e.id,".mk-following-or-followers>.users[data-v-235a4dd4]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-gap:var(--margin)}",""]),e.exports=r},78732:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var r=o(55393);const a=(0,r.withScopeId)("data-v-2a5f1774");(0,r.pushScopeId)("data-v-2a5f1774");const n={class:"cxiknjgy"},s={class:"empty",key:"_empty_"},i={class:"more",key:"_more_"};(0,r.popScopeId)();const l=a(((e,t,o,l,d,c)=>{const p=(0,r.resolveComponent)("MkLoading"),u=(0,r.resolveComponent)("MkButton"),v=(0,r.resolveDirective)("appear");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.renderSlot)(e.$slots,"default",{items:e.items}),e.empty?((0,r.openBlock)(),(0,r.createBlock)("div",s,[(0,r.renderSlot)(e.$slots,"empty")])):(0,r.createCommentVNode)("",!0),(0,r.withDirectives)((0,r.createVNode)("div",i,[(0,r.withDirectives)((0,r.createVNode)(u,{class:"button",onClick:e.fetchMore,disabled:e.moreFetching,style:{cursor:e.moreFetching?"wait":"pointer"},primary:""},{default:a((()=>[e.moreFetching?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)(r.Fragment,{key:0},[(0,r.createTextVNode)((0,r.toDisplayString)(e.$ts.loadMore),1)],64)),e.moreFetching?((0,r.openBlock)(),(0,r.createBlock)(p,{key:1,inline:""})):(0,r.createCommentVNode)("",!0)])),_:1},8,["onClick","disabled","style"]),[[v,e.$store.state.enableInfiniteScroll?e.fetchMore:null]])],512),[[r.vShow,e.more]])])}));var d=o(42453),c=o(90381);const p=(0,r.defineComponent)({components:{MkButton:d.Z},mixins:[(0,c.Z)({})],props:{pagination:{required:!0}}});o(4708);p.render=l,p.__scopeId="data-v-2a5f1774";const u=p},42739:(e,t,o)=>{"use strict";o.d(t,{Z:()=>b});var r=o(55393);const a=(0,r.withScopeId)("data-v-6bb21d0e");(0,r.pushScopeId)("data-v-6bb21d0e");const n={class:"_panel vjnjpkug"},s={class:"title"},i={class:"username"},l={class:"description"},d={key:0,class:"mfm"},c={key:1,style:{opacity:"0.7"}},p={class:"status"};(0,r.popScopeId)();const u=a(((e,t,o,u,v,k)=>{const m=(0,r.resolveComponent)("MkAvatar"),g=(0,r.resolveComponent)("MkUserName"),b=(0,r.resolveComponent)("MkA"),f=(0,r.resolveComponent)("MkAcct"),y=(0,r.resolveComponent)("Mfm"),h=(0,r.resolveComponent)("MkFollowButton");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",{class:"banner",style:e.user.bannerUrl?`background-image: url(${e.user.bannerUrl})`:""},null,4),(0,r.createVNode)(m,{class:"avatar",user:e.user,"disable-preview":!0},null,8,["user"]),(0,r.createVNode)("div",s,[(0,r.createVNode)(b,{class:"name",to:e.userPage(e.user)},{default:a((()=>[(0,r.createVNode)(g,{user:e.user,nowrap:!1},null,8,["user"])])),_:1},8,["to"]),(0,r.createVNode)("p",i,[(0,r.createVNode)(f,{user:e.user},null,8,["user"])])]),(0,r.createVNode)("div",l,[e.user.description?((0,r.openBlock)(),(0,r.createBlock)("div",d,[(0,r.createVNode)(y,{text:e.user.description,author:e.user,i:e.$i,"custom-emojis":e.user.emojis},null,8,["text","author","i","custom-emojis"])])):((0,r.openBlock)(),(0,r.createBlock)("span",c,(0,r.toDisplayString)(e.$ts.noAccountDescription),1))]),(0,r.createVNode)("div",p,[(0,r.createVNode)("div",null,[(0,r.createVNode)("p",null,(0,r.toDisplayString)(e.$ts.notes),1),(0,r.createVNode)("span",null,(0,r.toDisplayString)(e.user.notesCount),1)]),(0,r.createVNode)("div",null,[(0,r.createVNode)("p",null,(0,r.toDisplayString)(e.$ts.following),1),(0,r.createVNode)("span",null,(0,r.toDisplayString)(e.user.followingCount),1)]),(0,r.createVNode)("div",null,[(0,r.createVNode)("p",null,(0,r.toDisplayString)(e.$ts.followers),1),(0,r.createVNode)("span",null,(0,r.toDisplayString)(e.user.followersCount),1)])]),e.$i&&e.user.id!=e.$i.id?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,class:"koudoku-button",user:e.user,mini:""},null,8,["user"])):(0,r.createCommentVNode)("",!0)])}));var v=o(77127),k=o(49683),m=o(55006);const g=(0,r.defineComponent)({components:{MkFollowButton:k.Z},props:{user:{type:Object,required:!0}},data:()=>({}),methods:{userPage:m.tL,parseAcct:v.Z}});o(42598);g.render=u,g.__scopeId="data-v-6bb21d0e";const b=g},19165:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var r=o(55393);const a=(0,r.withScopeId)("data-v-235a4dd4");(0,r.pushScopeId)("data-v-235a4dd4");const n={class:"users"};(0,r.popScopeId)();const s=a(((e,t,o,s,i,l)=>{const d=(0,r.resolveComponent)("MkUserInfo"),c=(0,r.resolveComponent)("MkPagination");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(c,{pagination:e.pagination,class:"mk-following-or-followers _content",ref:"list"},{default:a((({items:t})=>[(0,r.createVNode)("div",n,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(t.map((t=>"following"===e.type?t.followee:t.follower)),(e=>((0,r.openBlock)(),(0,r.createBlock)(d,{class:"user",user:e,key:e.id},null,8,["user"])))),128))])])),_:1},8,["pagination"])])}));var i=o(42739),l=o(78732),d=o(55006);const c=(0,r.defineComponent)({components:{MkPagination:l.Z,MkUserInfo:i.Z},props:{user:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{pagination:{endpoint:()=>"following"===this.type?"users/following":"users/followers",limit:20,params:{userId:this.user.id}}}},watch:{type(){this.$refs.list.reload()},user(){this.$refs.list.reload()}},methods:{userPage:d.tL,acct:d.R}});o(68157);c.render=s,c.__scopeId="data-v-235a4dd4";const p=c},4708:(e,t,o)=>{var r=o(50047);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(45346).Z)("5bb49243",r,!0,{})},42598:(e,t,o)=>{var r=o(18083);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(45346).Z)("19f85634",r,!0,{})},68157:(e,t,o)=>{var r=o(10376);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(45346).Z)("159c35d0",r,!0,{})}}]);