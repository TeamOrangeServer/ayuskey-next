(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[7703],{36654:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,'#wait{display:block;position:fixed;z-index:10000;top:15px;right:15px}#wait:before{content:"";display:block;width:18px;height:18px;box-sizing:border-box;border-bottom:2px solid transparent;border-right:2px solid transparent;border-top:2px solid transparent;border-top-color:var(--accent);border-left:2px solid transparent;border-left-color:var(--accent);border-radius:50%;animation:progress-spinner .4s linear infinite}@keyframes progress-spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),e.exports=a},62981:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".fdidabkb.center[data-v-731fbae0]{text-align:center}.fdidabkb>.back[data-v-731fbae0]{height:var(--height);width:var(--height)}.fdidabkb>.action[data-v-731fbae0]{height:var(--height);width:var(--height)}.fdidabkb>.titleContainer[data-v-731fbae0]{width:calc(100% - var(--height)*2)}.fdidabkb>.titleContainer>.title[data-v-731fbae0]{height:var(--height)}.fdidabkb>.titleContainer>.title>.avatar[data-v-731fbae0]{margin:calc((var(--height) - 32px)/2) 8px calc((var(--height) - 32px)/2) 0;pointer-events:none}",""]),e.exports=a},72048:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".fdidabkb>.back[data-v-731fbae0]{position:absolute;z-index:1;top:0;left:0}.fdidabkb>.action[data-v-731fbae0]{position:absolute;z-index:1;top:0;right:0}.fdidabkb.center>.titleContainer[data-v-731fbae0]{margin:0 auto}.fdidabkb>.titleContainer[data-v-731fbae0]{overflow:auto;white-space:nowrap}.fdidabkb>.titleContainer>.title[data-v-731fbae0]{display:inline-block;vertical-align:bottom;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 16px;position:relative}.fdidabkb>.titleContainer>.title>.indicator[data-v-731fbae0]{position:absolute;top:auto;right:8px;top:8px;color:var(--indicator);font-size:12px;animation:blink 1s infinite}.fdidabkb>.titleContainer>.title>.icon+.text[data-v-731fbae0]{margin-left:8px}.fdidabkb>.titleContainer>.title>.avatar[data-v-731fbae0]{display:inline-block;width:32px;height:32px;vertical-align:bottom}",""]),e.exports=a},27572:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".mk-app[data-v-778ac5e7]{min-height:calc(var(--vh, 1vh)*100);box-sizing:border-box}.mk-app>.contents[data-v-778ac5e7]{padding-top:52px}.mk-app>.contents>.header[data-v-778ac5e7]{position:fixed;z-index:1000;top:0;height:52px;width:100%;line-height:52px;text-align:center;-webkit-backdrop-filter:blur(32px);backdrop-filter:blur(32px);background-color:var(--header);border-bottom:1px solid var(--divider)}.mk-app>.contents>main>.content>*[data-v-778ac5e7]{min-height:calc(var(--vh, 1vh)*100 - 52px)}",""]),e.exports=a},96316:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(55393);const n={key:1,id:"wait"};var i=o(10192),r=o(56858),c=o(37200);const d=(0,a.defineComponent)({components:{XStreamIndicator:(0,a.defineAsyncComponent)((()=>o.e(3597).then(o.bind(o,83597)))),XUpload:(0,a.defineAsyncComponent)((()=>o.e(2031).then(o.bind(o,72031))))},setup(){const e=e=>{c.$i.mutingNotificationTypes.includes(e.type)||("visible"===document.visibilityState&&(i.Vw.send("readNotification",{id:e.id}),(0,i.gk)(Promise.all([o.e(7577),o.e(4002)]).then(o.bind(o,54002)),{notification:e},{},"closed")),r.h("notification"))};if(c.$i){i.Vw.useSharedConnection("main","UI").on("notification",e)}return{uploads:i.q6,popups:i.EH,pendingApiRequestsCount:i.Xj}}});o(57122);d.render=function(e,t,o,i,r,c){const d=(0,a.resolveComponent)("XUpload"),l=(0,a.resolveComponent)("XStreamIndicator");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(e.popups,(e=>((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(e.component),(0,a.mergeProps)({key:e.id},e.props,(0,a.toHandlers)(e.events)),null,16)))),128)),e.uploads.length>0?((0,a.openBlock)(),(0,a.createBlock)(d,{key:0})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(l),e.pendingApiRequestsCount>0?((0,a.openBlock)(),(0,a.createBlock)("div",n)):(0,a.createCommentVNode)("",!0)],64)};const l=d},16554:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var a=o(55393);const n=(0,a.withScopeId)("data-v-731fbae0");(0,a.pushScopeId)("data-v-731fbae0");const i={class:"titleContainer"},r={class:"title"},c={key:2,class:"text"};(0,a.popScopeId)();const d=n(((e,t,o,d,l,s)=>{const p=(0,a.resolveComponent)("Fa"),f=(0,a.resolveComponent)("MkAvatar"),h=(0,a.resolveComponent)("MkUserName");return(0,a.openBlock)(),(0,a.createBlock)("div",{class:["fdidabkb",{center:e.center}],style:`--height:${e.height};`},[(0,a.createVNode)(a.Transition,{name:e.$store.state.animation?"header":"",mode:"out-in",appear:""},{default:n((()=>[e.withBack&&e.canBack?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button back",onClick:t[1]||(t[1]=(0,a.withModifiers)((t=>e.back()),["stop"]))},[(0,a.createVNode)(p,{icon:e.faChevronLeft},null,8,["icon"])])):(0,a.createCommentVNode)("",!0)])),_:1},8,["name"]),e.info?((0,a.openBlock)(),(0,a.createBlock)(a.Fragment,{key:0},[(0,a.createVNode)("div",i,[(0,a.createVNode)("div",r,[e.info.icon?((0,a.openBlock)(),(0,a.createBlock)(p,{icon:e.info.icon,key:e.info.icon,class:"icon"},null,8,["icon"])):e.info.avatar?((0,a.openBlock)(),(0,a.createBlock)(f,{key:1,class:"avatar",user:e.info.avatar,"disable-preview":!0},null,8,["user"])):(0,a.createCommentVNode)("",!0),e.info.title?((0,a.openBlock)(),(0,a.createBlock)("span",c,(0,a.toDisplayString)(e.info.title),1)):e.info.userName?((0,a.openBlock)(),(0,a.createBlock)(h,{key:3,user:e.info.userName,nowrap:!1,class:"text"},null,8,["user"])):(0,a.createCommentVNode)("",!0)])]),e.info.action?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button action",onClick:t[2]||(t[2]=(0,a.withModifiers)(((...t)=>e.info.action.handler&&e.info.action.handler(...t)),["stop"]))},[(0,a.createVNode)(p,{icon:e.info.action.icon,key:e.info.action.icon},null,8,["icon"])])):(0,a.createCommentVNode)("",!0)],64)):(0,a.createCommentVNode)("",!0)],6)}));var l=o(51436);const s=(0,a.defineComponent)({props:{info:{required:!0},withBack:{type:Boolean,required:!1,default:!0},center:{type:Boolean,required:!1,default:!0}},data:()=>({canBack:!1,height:0,faChevronLeft:l.A35,faCircle:l.diR}),watch:{$route:{handler(e,t){this.canBack=window.history.length>0&&!["index"].includes(e.name)},immediate:!0}},mounted(){this.height=this.$el.parentElement.offsetHeight+"px",new ResizeObserver(((e,t)=>{this.height=this.$el.parentElement.offsetHeight+"px"})).observe(this.$el)},methods:{back(){this.canBack&&this.$router.back()}}});o(94805),o(45715);s.render=d,s.__scopeId="data-v-731fbae0";const p=s},77703:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var a=o(55393);const n=(0,a.withScopeId)("data-v-778ac5e7");(0,a.pushScopeId)("data-v-778ac5e7");const i={class:"mk-app"},r={class:"contents"},c={class:"header"},d={ref:"main"},l={class:"content"};(0,a.popScopeId)();const s=n(((e,t,o,s,p,f)=>{const h=(0,a.resolveComponent)("XHeader"),b=(0,a.resolveComponent)("router-view"),v=(0,a.resolveComponent)("XCommon");return(0,a.openBlock)(),(0,a.createBlock)("div",i,[(0,a.createVNode)("div",r,[(0,a.createVNode)("header",c,[(0,a.createVNode)(h,{info:e.pageInfo},null,8,["info"])]),(0,a.createVNode)("main",d,[(0,a.createVNode)("div",l,[(0,a.createVNode)(b,null,{default:n((({Component:t})=>[(0,a.createVNode)(a.Transition,{name:e.$store.state.animation?"page":"",mode:"out-in",onEnter:e.onTransition},{default:n((()=>[((0,a.openBlock)(),(0,a.createBlock)(a.KeepAlive,{include:["timeline"]},[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t),{ref:e.changePage},null,512))],1024))])),_:2},1032,["name","onEnter"])])),_:1})])],512)]),(0,a.createVNode)(v)])}));var p=o(51436),f=o(56024),h=o(34862),b=o(16554),v=o(96316);const m=(0,a.defineComponent)({components:{XCommon:v.Z,XHeader:b.Z},data:()=>({host:h.ho,pageInfo:null,faLayerGroup:p.Krp,faBars:p.xiG,faBell:f.qm,faHome:p.J9Y,faCircle:p.diR}),created(){document.documentElement.style.overflowY="scroll"},methods:{changePage(e){null!=e&&e.INFO&&(this.pageInfo=e.INFO)},top(){window.scroll({top:0,behavior:"smooth"})},help(){this.$router.push("/docs/keyboard-shortcut")},onTransition(){window._scroll&&window._scroll()}}});o(65041);m.render=s,m.__scopeId="data-v-778ac5e7";const k=m},57122:(e,t,o)=>{var a=o(36654);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("09f782f0",a,!0,{})},94805:(e,t,o)=>{var a=o(62981);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("9cf5f4d0",a,!0,{})},45715:(e,t,o)=>{var a=o(72048);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("35999f4e",a,!0,{})},65041:(e,t,o)=>{var a=o(27572);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("03c2d3ed",a,!0,{})}}]);