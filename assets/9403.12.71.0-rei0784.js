(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[9403],{62960:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".container-toggle-enter-active[data-v-1dbdaf33],.container-toggle-leave-active[data-v-1dbdaf33]{overflow-y:hidden;transition:opacity .5s,height .5s!important}.container-toggle-enter-from[data-v-1dbdaf33],.container-toggle-leave-to[data-v-1dbdaf33]{opacity:0}.ukygtjoj[data-v-1dbdaf33]{position:relative;overflow:hidden}.ukygtjoj.naked[data-v-1dbdaf33]{background:transparent!important;box-shadow:none!important}.ukygtjoj.scrollable[data-v-1dbdaf33]{display:flex;flex-direction:column}.ukygtjoj.scrollable>div[data-v-1dbdaf33]{overflow:auto}.ukygtjoj>header[data-v-1dbdaf33]{position:relative;color:var(--panelHeaderFg);background:var(--panelHeaderBg);box-shadow:0 1px 0 0 var(--panelHeaderDivider);z-index:2;line-height:1.4em}.ukygtjoj>header>.title[data-v-1dbdaf33]{margin:0;padding:12px 16px}.ukygtjoj>header>.title[data-v-1dbdaf33]> [data-icon]{margin-right:6px}.ukygtjoj>header>.title[data-v-1dbdaf33]:empty{display:none}.ukygtjoj>header>.sub[data-v-1dbdaf33]{position:absolute;z-index:2;top:0;right:0;height:100%}.ukygtjoj>header>.sub[data-v-1dbdaf33]> button{width:42px;height:100%}.ukygtjoj>div[data-v-1dbdaf33]> ._content{padding:24px}.ukygtjoj>div[data-v-1dbdaf33]> ._content+._content{border-top:1px solid var(--divider)}.ukygtjoj.max-width_380px>header>.title[data-v-1dbdaf33]{padding:8px 10px;font-size:.9em}.ukygtjoj.max-width_380px>div[data-v-1dbdaf33]> ._content{padding:16px}._forceContainerFull_ .ukygtjoj>header>.title[data-v-1dbdaf33]{padding:12px 16px!important}._forceContainerFull_.ukygtjoj>header>.title[data-v-1dbdaf33]{padding:12px 16px!important}",""]),e.exports=a},46397:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(55393),n=o(51084),s=o(10192);function i(e){return(0,a.defineComponent)({props:{widget:{type:Object,required:!1},settingCallback:{required:!1}},emits:["updateProps"],data(){return{props:this.widget?JSON.parse(JSON.stringify(this.widget.data)):{},save:(0,n.P)(3e3,(()=>{this.$emit("updateProps",this.props)}))}},computed:{id(){return this.widget?this.widget.id:null}},created(){this.mergeProps(),this.$watch("props",(()=>{this.mergeProps()}),{deep:!0}),this.settingCallback&&this.settingCallback(this.setting)},methods:{mergeProps(){if(e.props){const t=e.props();for(const e of Object.keys(t))this.props.hasOwnProperty(e)||(this.props[e]=t[e].default)}},async setting(){const t=e.props();for(const e of Object.keys(t))t[e].default=this.props[e];const{canceled:o,result:a}=await s.cr(e.name,t);if(!o){for(const e of Object.keys(a))this.props[e]=a[e];this.save()}}}})}},69146:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var a=o(55393);const n=(0,a.withScopeId)("data-v-1dbdaf33");(0,a.pushScopeId)("data-v-1dbdaf33");const s={key:0,ref:"header"},i={class:"title"},r={class:"sub"};(0,a.popScopeId)();const l=n(((e,t,o,l,d,c)=>{const p=(0,a.resolveComponent)("Fa"),h=(0,a.resolveDirective)("size");return(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)("div",{class:["ukygtjoj _panel",{naked:e.naked,hideHeader:!e.showHeader,scrollable:e.scrollable,closed:!e.showBody}]},[e.showHeader?((0,a.openBlock)(),(0,a.createBlock)("header",s,[(0,a.createVNode)("div",i,[(0,a.renderSlot)(e.$slots,"header")]),(0,a.createVNode)("div",r,[(0,a.renderSlot)(e.$slots,"func"),e.bodyTogglable?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=()=>e.showBody=!e.showBody)},[e.showBody?((0,a.openBlock)(),(0,a.createBlock)(p,{key:0,icon:e.faAngleUp},null,8,["icon"])):((0,a.openBlock)(),(0,a.createBlock)(p,{key:1,icon:e.faAngleDown},null,8,["icon"]))])):(0,a.createCommentVNode)("",!0)])],512)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(a.Transition,{name:"container-toggle",onEnter:e.enter,onAfterEnter:e.afterEnter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:n((()=>[(0,a.withDirectives)((0,a.createVNode)("div",null,[(0,a.renderSlot)(e.$slots,"default")],512),[[a.vShow,e.showBody]])])),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],2)),[[h,{max:[380]}]])}));var d=o(51436);const c=(0,a.defineComponent)({props:{showHeader:{type:Boolean,required:!1,default:!0},naked:{type:Boolean,required:!1,default:!1},bodyTogglable:{type:Boolean,required:!1,default:!1},expanded:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1}},data(){return{showBody:this.expanded,faAngleUp:d.onQ,faAngleDown:d.gc2}},mounted(){this.$watch("showBody",(e=>{const t=this.showHeader?this.$refs.header.offsetHeight:0;this.$el.style.minHeight=t+"px",this.$el.style.flexBasis=e?"auto":t+"px"}),{immediate:!0})},methods:{toggleContent(e){this.bodyTogglable&&(this.showBody=e)},enter(e){const t=e.getBoundingClientRect().height;e.style.height=0,e.offsetHeight,e.style.height=t+"px"},afterEnter(e){e.style.height=null},leave(e){const t=e.getBoundingClientRect().height;e.style.height=t+"px",e.offsetHeight,e.style.height=0},afterLeave(e){e.style.height=null}}});o(64935);c.render=l,c.__scopeId="data-v-1dbdaf33";const p=c},49403:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g});var a=o(55393);const n={style:{"margin-left":"8px"}};var s=o(51436),i=o(56024),r=o(69146),l=o(13862),d=o(46397),c=o(10192);const p=(0,d.Z)({name:"timeline",props:()=>({showHeader:{type:"boolean",default:!0},height:{type:"number",default:300},src:{type:"string",default:"home",hidden:!0},list:{type:"object",default:null,hidden:!0}})}),h=(0,a.defineComponent)({extends:p,components:{MkContainer:r.Z,XTimeline:l.Z},data:()=>({menuOpened:!1,faAngleDown:s.gc2,faAngleUp:s.onQ,faHome:s.J9Y,faShareAlt:s.EfQ,faGlobe:s.g4A,faComments:i.lX,faListUl:s.gf$,faSatellite:s.mDh}),methods:{async choose(e){this.menuOpened=!0;const[t,o]=await Promise.all([c.hi("antennas/list"),c.hi("users/lists/list")]),a=t.map((e=>({text:e.name,icon:s.mDh,action:()=>{this.props.antenna=e,this.setSrc("antenna")}}))),n=o.map((e=>({text:e.name,icon:s.gf$,action:()=>{this.props.list=e,this.setSrc("list")}})));c.n4([{text:this.$ts._timelines.home,icon:s.J9Y,action:()=>{this.setSrc("home")}},{text:this.$ts._timelines.local,icon:i.lX,action:()=>{this.setSrc("local")}},{text:this.$ts._timelines.social,icon:s.EfQ,action:()=>{this.setSrc("social")}},{text:this.$ts._timelines.global,icon:s.g4A,action:()=>{this.setSrc("global")}},a.length>0?null:void 0,...a,n.length>0?null:void 0,...n],e.currentTarget||e.target).then((()=>{this.menuOpened=!1}))},setSrc(e){this.props.src=e,this.save()}}});h.render=function(e,t,o,s,i,r){const l=(0,a.resolveComponent)("Fa"),d=(0,a.resolveComponent)("XTimeline"),c=(0,a.resolveComponent)("MkContainer");return(0,a.openBlock)(),(0,a.createBlock)(c,{"show-header":e.props.showHeader,style:`height: ${e.props.height}px;`,scrollable:!0},{header:(0,a.withCtx)((()=>[(0,a.createVNode)("button",{onClick:t[1]||(t[1]=(...t)=>e.choose&&e.choose(...t)),class:"_button"},["home"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:0,icon:e.faHome},null,8,["icon"])):(0,a.createCommentVNode)("",!0),"local"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:1,icon:e.faComments},null,8,["icon"])):(0,a.createCommentVNode)("",!0),"social"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:2,icon:e.faShareAlt},null,8,["icon"])):(0,a.createCommentVNode)("",!0),"global"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:3,icon:e.faGlobe},null,8,["icon"])):(0,a.createCommentVNode)("",!0),"list"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:4,icon:e.faListUl},null,8,["icon"])):(0,a.createCommentVNode)("",!0),"antenna"===e.props.src?((0,a.openBlock)(),(0,a.createBlock)(l,{key:5,icon:e.faSatellite},null,8,["icon"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("span",n,(0,a.toDisplayString)("list"===e.props.src?e.props.list.name:"antenna"===e.props.src?e.props.antenna.name:e.$t("_timelines."+e.props.src)),1),(0,a.createVNode)(l,{icon:e.menuOpened?e.faAngleUp:e.faAngleDown,style:{"margin-left":"8px"}},null,8,["icon"])])])),default:(0,a.withCtx)((()=>[(0,a.createVNode)("div",null,[(0,a.createVNode)(d,{key:"list"===e.props.src?"list:"+e.props.list.id:"antenna"===e.props.src?"antenna:"+e.props.antenna.id:e.props.src,src:e.props.src,list:e.props.list?e.props.list.id:null,antenna:e.props.antenna?e.props.antenna.id:null},null,8,["src","list","antenna"])])])),_:1},8,["show-header","style"])};const g=h},64935:(e,t,o)=>{var a=o(62960);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("ab0d80cc",a,!0,{})}}]);