(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[4282],{66244:(e,t,o)=>{var i=o(23645)((function(e){return e[1]}));i.push([e.id,".yrolvcoq[data-v-5271a1ce]{--section-padding:16px}",""]),e.exports=i},62981:(e,t,o)=>{var i=o(23645)((function(e){return e[1]}));i.push([e.id,".fdidabkb.center[data-v-731fbae0]{text-align:center}.fdidabkb>.back[data-v-731fbae0]{height:var(--height);width:var(--height)}.fdidabkb>.action[data-v-731fbae0]{height:var(--height);width:var(--height)}.fdidabkb>.titleContainer[data-v-731fbae0]{width:calc(100% - var(--height)*2)}.fdidabkb>.titleContainer>.title[data-v-731fbae0]{height:var(--height)}.fdidabkb>.titleContainer>.title>.avatar[data-v-731fbae0]{margin:calc((var(--height) - 32px)/2) 8px calc((var(--height) - 32px)/2) 0;pointer-events:none}",""]),e.exports=i},72048:(e,t,o)=>{var i=o(23645)((function(e){return e[1]}));i.push([e.id,".fdidabkb>.back[data-v-731fbae0]{position:absolute;z-index:1;top:0;left:0}.fdidabkb>.action[data-v-731fbae0]{position:absolute;z-index:1;top:0;right:0}.fdidabkb.center>.titleContainer[data-v-731fbae0]{margin:0 auto}.fdidabkb>.titleContainer[data-v-731fbae0]{overflow:auto;white-space:nowrap}.fdidabkb>.titleContainer>.title[data-v-731fbae0]{display:inline-block;vertical-align:bottom;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 16px;position:relative}.fdidabkb>.titleContainer>.title>.indicator[data-v-731fbae0]{position:absolute;top:auto;right:8px;top:8px;color:var(--indicator);font-size:12px;animation:blink 1s infinite}.fdidabkb>.titleContainer>.title>.icon+.text[data-v-731fbae0]{margin-left:8px}.fdidabkb>.titleContainer>.title>.avatar[data-v-731fbae0]{display:inline-block;width:32px;height:32px;vertical-align:bottom}",""]),e.exports=i},14282:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var i=o(55393);const a=(0,i.withScopeId)("data-v-5271a1ce");(0,i.pushScopeId)("data-v-5271a1ce");const n={key:1,class:"_button",style:{"pointer-events":"none"}},c={class:"yrolvcoq",style:{"min-height":"100%",background:"var(--bg)"}};(0,i.popScopeId)();const r=a(((e,t,o,r,s,l)=>{const d=(0,i.resolveComponent)("XHeader"),p=(0,i.resolveComponent)("Fa"),h=(0,i.resolveComponent)("XWindow");return(0,i.openBlock)(),(0,i.createBlock)(h,{ref:"window","initial-width":500,"initial-height":500,"can-resize":!0,"close-right":!0,contextmenu:e.contextmenu,onClosed:t[2]||(t[2]=t=>e.$emit("closed"))},{header:a((()=>[(0,i.createVNode)(d,{info:e.pageInfo,"with-back":!1},null,8,["info"])])),buttons:a((()=>[e.history.length>0?((0,i.openBlock)(),(0,i.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=t=>e.back())},[(0,i.createVNode)(p,{icon:e.faChevronLeft},null,8,["icon"])])):((0,i.openBlock)(),(0,i.createBlock)("button",n))])),default:a((()=>[(0,i.createVNode)("div",c,[((0,i.openBlock)(),(0,i.createBlock)((0,i.resolveDynamicComponent)(e.component),(0,i.mergeProps)(e.props,{ref:e.changePage}),null,16))])])),_:1},8,["contextmenu"])}));var s=o(51436),l=o(91650),d=o(16554),p=o(14979),h=o(70037),f=o(87272),u=o(34862);const b=(0,i.defineComponent)({components:{XWindow:l.Z,XHeader:d.Z},inject:{sideViewHook:{default:null}},provide(){return{navHook:e=>{this.navigate(e)}}},props:{initialPath:{type:String,required:!0},initialComponent:{type:Object,required:!0},initialProps:{type:Object,required:!1,default:()=>{}}},emits:["closed"],data(){return{pageInfo:null,path:this.initialPath,component:this.initialComponent,props:this.initialProps,history:[],faChevronLeft:s.A35}},computed:{url(){return u.HQ+this.path},contextmenu(){return[{type:"label",text:this.path},{icon:s.TTL,text:this.$ts.showInPage,action:this.expand},this.sideViewHook?{icon:s.rWw,text:this.$ts.openInSideView,action:()=>{this.sideViewHook(this.path),this.$refs.window.close()}}:void 0,{icon:s.Xjp,text:this.$ts.popout,action:this.popout},null,{icon:s.Xjp,text:this.$ts.openInNewTab,action:()=>{window.open(this.url,"_blank"),this.$refs.window.close()}},{icon:s.nNP,text:this.$ts.copyLink,action:()=>{(0,h.Z)(this.url)}}]}},methods:{changePage(e){null!=e&&e.INFO&&(this.pageInfo=e.INFO)},navigate(e,t=!0){t&&this.history.push(this.path),this.path=e;const{component:o,props:i}=(0,f.D)(e);this.component=o,this.props=i},back(){this.navigate(this.history.pop(),!1)},expand(){this.$router.push(this.path),this.$refs.window.close()},popout(){(0,p.a)(this.path,this.$el),this.$refs.window.close()}}});o(13873);b.render=r,b.__scopeId="data-v-5271a1ce";const k=b},16554:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var i=o(55393);const a=(0,i.withScopeId)("data-v-731fbae0");(0,i.pushScopeId)("data-v-731fbae0");const n={class:"titleContainer"},c={class:"title"},r={key:2,class:"text"};(0,i.popScopeId)();const s=a(((e,t,o,s,l,d)=>{const p=(0,i.resolveComponent)("Fa"),h=(0,i.resolveComponent)("MkAvatar"),f=(0,i.resolveComponent)("MkUserName");return(0,i.openBlock)(),(0,i.createBlock)("div",{class:["fdidabkb",{center:e.center}],style:`--height:${e.height};`},[(0,i.createVNode)(i.Transition,{name:e.$store.state.animation?"header":"",mode:"out-in",appear:""},{default:a((()=>[e.withBack&&e.canBack?((0,i.openBlock)(),(0,i.createBlock)("button",{key:0,class:"_button back",onClick:t[1]||(t[1]=(0,i.withModifiers)((t=>e.back()),["stop"]))},[(0,i.createVNode)(p,{icon:e.faChevronLeft},null,8,["icon"])])):(0,i.createCommentVNode)("",!0)])),_:1},8,["name"]),e.info?((0,i.openBlock)(),(0,i.createBlock)(i.Fragment,{key:0},[(0,i.createVNode)("div",n,[(0,i.createVNode)("div",c,[e.info.icon?((0,i.openBlock)(),(0,i.createBlock)(p,{icon:e.info.icon,key:e.info.icon,class:"icon"},null,8,["icon"])):e.info.avatar?((0,i.openBlock)(),(0,i.createBlock)(h,{key:1,class:"avatar",user:e.info.avatar,"disable-preview":!0},null,8,["user"])):(0,i.createCommentVNode)("",!0),e.info.title?((0,i.openBlock)(),(0,i.createBlock)("span",r,(0,i.toDisplayString)(e.info.title),1)):e.info.userName?((0,i.openBlock)(),(0,i.createBlock)(f,{key:3,user:e.info.userName,nowrap:!1,class:"text"},null,8,["user"])):(0,i.createCommentVNode)("",!0)])]),e.info.action?((0,i.openBlock)(),(0,i.createBlock)("button",{key:0,class:"_button action",onClick:t[2]||(t[2]=(0,i.withModifiers)(((...t)=>e.info.action.handler&&e.info.action.handler(...t)),["stop"]))},[(0,i.createVNode)(p,{icon:e.info.action.icon,key:e.info.action.icon},null,8,["icon"])])):(0,i.createCommentVNode)("",!0)],64)):(0,i.createCommentVNode)("",!0)],6)}));var l=o(51436);const d=(0,i.defineComponent)({props:{info:{required:!0},withBack:{type:Boolean,required:!1,default:!0},center:{type:Boolean,required:!1,default:!0}},data:()=>({canBack:!1,height:0,faChevronLeft:l.A35,faCircle:l.diR}),watch:{$route:{handler(e,t){this.canBack=window.history.length>0&&!["index"].includes(e.name)},immediate:!0}},mounted(){this.height=this.$el.parentElement.offsetHeight+"px",new ResizeObserver(((e,t)=>{this.height=this.$el.parentElement.offsetHeight+"px"})).observe(this.$el)},methods:{back(){this.canBack&&this.$router.back()}}});o(94805),o(45715);d.render=s,d.__scopeId="data-v-731fbae0";const p=d},13873:(e,t,o)=>{var i=o(66244);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,o(45346).Z)("3be5deaa",i,!0,{})},94805:(e,t,o)=>{var i=o(62981);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,o(45346).Z)("9cf5f4d0",i,!0,{})},45715:(e,t,o)=>{var i=o(72048);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,o(45346).Z)("35999f4e",i,!0,{})}}]);