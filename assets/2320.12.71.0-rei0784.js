(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[2320],{57823:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".fpezltsf[data-v-b3732a2e]{margin:16px 0;padding:16px;font-size:90%;background:var(--infoBg);color:var(--infoFg);border-radius:var(--radius)}.fpezltsf.warn[data-v-b3732a2e]{background:var(--infoWarnBg);color:var(--infoWarnFg)}.fpezltsf[data-v-b3732a2e]:first-child{margin-top:0}.fpezltsf[data-v-b3732a2e]:last-child{margin-bottom:0}.fpezltsf>i[data-v-b3732a2e]{margin-right:4px}",""]),e.exports=a},84602:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".ebkgoccj[data-v-4b49273d]{overflow:hidden;display:flex;flex-direction:column;contain:content;--section-padding:24px}@media(max-width:500px){.ebkgoccj[data-v-4b49273d]{--section-padding:16px}}.ebkgoccj>.header[data-v-4b49273d]{display:flex;flex-shrink:0;box-shadow:0 1px var(--divider)}.ebkgoccj>.header>button[data-v-4b49273d]{height:58px;width:58px}@media(max-width:500px){.ebkgoccj>.header>button[data-v-4b49273d]{height:42px;width:42px}}.ebkgoccj>.header>.title[data-v-4b49273d]{flex:1;line-height:58px;padding-left:32px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}@media(max-width:500px){.ebkgoccj>.header>.title[data-v-4b49273d]{line-height:42px;padding-left:16px}}.ebkgoccj>.header>button+.title[data-v-4b49273d]{padding-left:0}.ebkgoccj>.body[data-v-4b49273d]{overflow:auto}",""]),e.exports=a},42842:(e,t,o)=>{var a=o(23645)((function(e){return e[1]}));a.push([e.id,".ziffeoms[data-v-07df8238]{position:relative;display:flex;margin:32px 0;cursor:pointer;transition:all .3s}.ziffeoms[data-v-07df8238]:first-child{margin-top:0}.ziffeoms[data-v-07df8238]:last-child{margin-bottom:0}.ziffeoms>*[data-v-07df8238]{user-select:none}.ziffeoms.disabled[data-v-07df8238]{opacity:.6;cursor:not-allowed}.ziffeoms.checked>.button[data-v-07df8238]{background-color:var(--X10);border-color:var(--X10)}.ziffeoms.checked>.button>*[data-v-07df8238]{background-color:var(--accent);transform:translateX(14px)}.ziffeoms>input[data-v-07df8238]{position:absolute;width:0;height:0;opacity:0;margin:0}.ziffeoms>.button[data-v-07df8238]{position:relative;display:inline-block;flex-shrink:0;margin:3px 0 0;width:34px;height:14px;background:var(--X6);outline:none;border-radius:14px;transition:inherit}.ziffeoms>.button>*[data-v-07df8238]{position:absolute;top:-3px;left:0;border-radius:100%;transition:background-color .3s,transform .3s;width:20px;height:20px;background-color:#fff;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.ziffeoms>.label[data-v-07df8238]{margin-left:8px;display:block;cursor:pointer;transition:inherit;color:var(--fg)}.ziffeoms>.label>span[data-v-07df8238]{display:block;line-height:20px;transition:inherit}.ziffeoms>.label>p[data-v-07df8238]{margin:0;opacity:.7;font-size:90%}",""]),e.exports=a},62320:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var a=o(55393);const i={key:0,class:"_section"},n={key:1,class:"_section"};var l=o(26786),d=o(83359),s=o(61921),c=o(42453),r=o(8035);const p=(0,a.defineComponent)({components:{XModalWindow:l.Z,MkSwitch:d.Z,MkInfo:s.Z,MkButton:c.Z},props:{includingTypes:{type:Array,required:!1,default:null},showGlobalToggle:{type:Boolean,required:!1,default:!0}},emits:["done","closed"],data:()=>({typesMap:{},useGlobalSetting:!1,notificationTypes:r.mv}),created(){this.useGlobalSetting=null===this.includingTypes&&this.showGlobalToggle;for(const e of this.notificationTypes)this.typesMap[e]=null===this.includingTypes||this.includingTypes.includes(e)},methods:{ok(){const e=this.useGlobalSetting?null:Object.keys(this.typesMap).filter((e=>this.typesMap[e]));this.$emit("done",{includingTypes:e}),this.$refs.dialog.close()},disableAll(){for(const e in this.typesMap)this.typesMap[e]=!1},enableAll(){for(const e in this.typesMap)this.typesMap[e]=!0}}});p.render=function(e,t,o,l,d,s){const c=(0,a.resolveComponent)("MkSwitch"),r=(0,a.resolveComponent)("MkInfo"),p=(0,a.resolveComponent)("MkButton"),f=(0,a.resolveComponent)("XModalWindow");return(0,a.openBlock)(),(0,a.createBlock)(f,{ref:"dialog",width:400,height:450,"with-ok-button":!0,"ok-button-disabled":!1,onOk:t[2]||(t[2]=t=>e.ok()),onClose:t[3]||(t[3]=t=>e.$refs.dialog.close()),onClosed:t[4]||(t[4]=t=>e.$emit("closed"))},{header:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.notificationSetting),1)])),default:(0,a.withCtx)((()=>[e.showGlobalToggle?((0,a.openBlock)(),(0,a.createBlock)("div",i,[(0,a.createVNode)(c,{value:e.useGlobalSetting,"onUpdate:value":t[1]||(t[1]=t=>e.useGlobalSetting=t)},{desc:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.useGlobalSettingDesc),1)])),default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.useGlobalSetting)+" ",1)])),_:1},8,["value"])])):(0,a.createCommentVNode)("",!0),e.useGlobalSetting?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)("div",n,[(0,a.createVNode)(r,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.notificationSettingDesc),1)])),_:1}),(0,a.createVNode)(p,{inline:"",onClick:e.disableAll},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.disableAll),1)])),_:1},8,["onClick"]),(0,a.createVNode)(p,{inline:"",onClick:e.enableAll},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$ts.enableAll),1)])),_:1},8,["onClick"]),((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(e.notificationTypes,(t=>((0,a.openBlock)(),(0,a.createBlock)(c,{key:t,value:e.typesMap[t],"onUpdate:value":o=>e.typesMap[t]=o},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$t("_notification._types."+t)),1)])),_:2},1032,["value","onUpdate:value"])))),128))]))])),_:1},512)};const f=p},61921:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(55393);const i=(0,a.withScopeId)("data-v-b3732a2e");(0,a.pushScopeId)("data-v-b3732a2e");const n={key:0},l={key:1};(0,a.popScopeId)();const d=i(((e,t,o,i,d,s)=>{const c=(0,a.resolveComponent)("Fa");return(0,a.openBlock)(),(0,a.createBlock)("div",{class:["fpezltsf",{warn:e.warn}]},[e.warn?((0,a.openBlock)(),(0,a.createBlock)("i",n,[(0,a.createVNode)(c,{icon:e.faExclamationTriangle},null,8,["icon"])])):((0,a.openBlock)(),(0,a.createBlock)("i",l,[(0,a.createVNode)(c,{icon:e.faInfoCircle},null,8,["icon"])])),(0,a.renderSlot)(e.$slots,"default")],2)}));var s=o(51436);const c=(0,a.defineComponent)({props:{warn:{type:Boolean,required:!1,default:!1}},data:()=>({faInfoCircle:s.sqG,faExclamationTriangle:s.eHv})});o(43476);c.render=d,c.__scopeId="data-v-b3732a2e";const r=c},26786:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var a=o(55393);const i=(0,a.withScopeId)("data-v-4b49273d");(0,a.pushScopeId)("data-v-4b49273d");const n={class:"header"},l={class:"title"},d={key:0,class:"body"},s={class:"_section"},c={key:1,class:"body"};(0,a.popScopeId)();const r=i(((e,t,o,r,p,f)=>{const u=(0,a.resolveComponent)("Fa"),h=(0,a.resolveComponent)("MkModal");return(0,a.openBlock)(),(0,a.createBlock)(h,{ref:"modal",onClick:t[5]||(t[5]=t=>e.$emit("click")),onClosed:t[6]||(t[6]=t=>e.$emit("closed"))},{default:i((()=>[(0,a.createVNode)("div",{class:"ebkgoccj _popup _narrow_",onKeydown:t[4]||(t[4]=(...t)=>e.onKeydown&&e.onKeydown(...t)),style:{width:e.width+"px",height:e.height?e.height+"px":null}},[(0,a.createVNode)("div",n,[e.withOkButton?((0,a.openBlock)(),(0,a.createBlock)("button",{key:0,class:"_button",onClick:t[1]||(t[1]=t=>e.$emit("close"))},[(0,a.createVNode)(u,{icon:e.faTimes},null,8,["icon"])])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)("span",l,[(0,a.renderSlot)(e.$slots,"header")]),e.withOkButton?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)("button",{key:1,class:"_button",onClick:t[2]||(t[2]=t=>e.$emit("close"))},[(0,a.createVNode)(u,{icon:e.faTimes},null,8,["icon"])])),e.withOkButton?((0,a.openBlock)(),(0,a.createBlock)("button",{key:2,class:"_button",onClick:t[3]||(t[3]=t=>e.$emit("ok")),disabled:e.okButtonDisabled},[(0,a.createVNode)(u,{icon:e.faCheck},null,8,["icon"])],8,["disabled"])):(0,a.createCommentVNode)("",!0)]),e.padding?((0,a.openBlock)(),(0,a.createBlock)("div",d,[(0,a.createVNode)("div",s,[(0,a.renderSlot)(e.$slots,"default")])])):((0,a.openBlock)(),(0,a.createBlock)("div",c,[(0,a.renderSlot)(e.$slots,"default")]))],36)])),_:3},512)}));var p=o(51436),f=o(89939);const u=(0,a.defineComponent)({components:{MkModal:f.Z},props:{withOkButton:{type:Boolean,required:!1,default:!1},okButtonDisabled:{type:Boolean,required:!1,default:!1},padding:{type:Boolean,required:!1,default:!1},width:{type:Number,required:!1,default:400},height:{type:Number,required:!1,default:null},canClose:{type:Boolean,required:!1,default:!0}},emits:["click","close","closed","ok"],data:()=>({faTimes:p.NBC,faCheck:p.LEp}),methods:{close(){this.$refs.modal.close()},onKeydown(e){27===e.which&&(e.preventDefault(),e.stopPropagation(),this.close())}}});o(70675);u.render=r,u.__scopeId="data-v-4b49273d";const h=u},83359:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(55393);const i=(0,a.withScopeId)("data-v-07df8238");(0,a.pushScopeId)("data-v-07df8238");const n=(0,a.createVNode)("span",{class:"button"},[(0,a.createVNode)("span")],-1),l={class:"label"};(0,a.popScopeId)();const d=i(((e,t,o,i,d,s)=>((0,a.openBlock)(),(0,a.createBlock)("div",{class:["ziffeoms",{disabled:e.disabled,checked:e.checked}],role:"switch","aria-checked":e.checked,"aria-disabled":e.disabled,onClick:t[2]||(t[2]=(0,a.withModifiers)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,a.createVNode)("input",{type:"checkbox",ref:"input",disabled:e.disabled,onKeydown:t[1]||(t[1]=(0,a.withKeys)(((...t)=>e.toggle&&e.toggle(...t)),["enter"]))},null,40,["disabled"]),n,(0,a.createVNode)("span",l,[(0,a.createVNode)("span",null,[(0,a.renderSlot)(e.$slots,"default")]),(0,a.createVNode)("p",null,[(0,a.renderSlot)(e.$slots,"desc")])])],10,["aria-checked","aria-disabled"])))),s=(0,a.defineComponent)({props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{checked(){return this.value}},methods:{toggle(){this.disabled||this.$emit("update:value",!this.checked)}}});o(57483);s.render=d,s.__scopeId="data-v-07df8238";const c=s},43476:(e,t,o)=>{var a=o(57823);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("d7ae7ce2",a,!0,{})},70675:(e,t,o)=>{var a=o(84602);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("58d1b0c9",a,!0,{})},57483:(e,t,o)=>{var a=o(42842);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,o(45346).Z)("01747328",a,!0,{})}}]);