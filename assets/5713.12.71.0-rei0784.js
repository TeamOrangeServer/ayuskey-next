(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[5713],{10810:(e,t,a)=>{var o=a(23645)((function(e){return e[1]}));o.push([e.id,".ijnpvmgr>.main[data-v-3d67d1ea]{position:relative;display:flex;padding:16px;cursor:pointer}.ijnpvmgr>.main>*[data-v-3d67d1ea]{user-select:none}.ijnpvmgr>.main.disabled[data-v-3d67d1ea]{opacity:.6;cursor:not-allowed}.ijnpvmgr>.main.checked>.button[data-v-3d67d1ea]{background-color:var(--X10);border-color:var(--X10)}.ijnpvmgr>.main.checked>.button>*[data-v-3d67d1ea]{background-color:var(--accent);transform:translateX(14px)}.ijnpvmgr>.main>input[data-v-3d67d1ea]{position:absolute;width:0;height:0;opacity:0;margin:0}.ijnpvmgr>.main>.button[data-v-3d67d1ea]{position:relative;display:inline-block;flex-shrink:0;margin:3px 0 0;width:34px;height:14px;background:var(--X6);outline:none;border-radius:14px;transition:all .3s;cursor:pointer}.ijnpvmgr>.main>.button>*[data-v-3d67d1ea]{position:absolute;top:-3px;left:0;border-radius:100%;transition:background-color .3s,transform .3s;width:20px;height:20px;background-color:#fff;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.ijnpvmgr>.main>.label[data-v-3d67d1ea]{margin-left:12px;display:block;transition:inherit;color:var(--fg)}.ijnpvmgr>.main>.label>span[data-v-3d67d1ea]{display:block;line-height:20px;transition:inherit}",""]),e.exports=o},44983:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var o=a(55393);const i=(0,o.withScopeId)("data-v-3d67d1ea");(0,o.pushScopeId)("data-v-3d67d1ea");const n={class:"ijnpvmgr _formItem"},r=(0,o.createVNode)("span",{class:"button"},[(0,o.createVNode)("span")],-1),d={class:"label"},l={class:"_formCaption"};(0,o.popScopeId)();const s=i(((e,t,a,i,s,c)=>((0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)("div",{class:["main _formPanel _formClickable",{disabled:e.disabled,checked:e.checked}],"aria-checked":e.checked,"aria-disabled":e.disabled,onClick:t[2]||(t[2]=(0,o.withModifiers)(((...t)=>e.toggle&&e.toggle(...t)),["prevent"]))},[(0,o.createVNode)("input",{type:"checkbox",ref:"input",disabled:e.disabled,onKeydown:t[1]||(t[1]=(0,o.withKeys)(((...t)=>e.toggle&&e.toggle(...t)),["enter"]))},null,40,["disabled"]),r,(0,o.createVNode)("span",d,[(0,o.createVNode)("span",null,[(0,o.renderSlot)(e.$slots,"default")])])],10,["aria-checked","aria-disabled"]),(0,o.createVNode)("div",l,[(0,o.renderSlot)(e.$slots,"desc")])]))));a(23090);const c=(0,o.defineComponent)({props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{checked(){return this.value}},methods:{toggle(){this.disabled||this.$emit("update:value",!this.checked)}}});a(93817);c.render=s,c.__scopeId="data-v-3d67d1ea";const p=c},57506:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var o=a(55393);var i=a(51436),n=a(56024),r=a(11937),d=a(90705),l=a(30320),s=a(42519),c=a(44983),p=a(10192);const m=(0,o.defineComponent)({components:{FormBase:l.Z,FormLink:d.Z,FormButton:r.Z,FormSwitch:c.Z,FormGroup:s.Z},emits:["info"],data(){return{INFO:{title:this.$ts.email,icon:n.FU},faCog:i.b7W,faExclamationTriangle:i.eHv,faCheck:i.LEp,faBell:n.qm}},mounted(){this.$emit("info",this.INFO)},methods:{onChangeReceiveAnnouncementEmail(e){p.hi("i/update",{receiveAnnouncementEmail:e})}}});m.render=function(e,t,a,i,n,r){const d=(0,o.resolveComponent)("Fa"),l=(0,o.resolveComponent)("FormLink"),s=(0,o.resolveComponent)("FormGroup"),c=(0,o.resolveComponent)("FormSwitch"),p=(0,o.resolveComponent)("FormBase");return(0,o.openBlock)(),(0,o.createBlock)(p,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s,null,{label:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.emailAddress),1)])),default:(0,o.withCtx)((()=>[(0,o.createVNode)(l,{to:"/settings/email/address"},(0,o.createSlots)({default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.$i.email||e.$ts.notSet),1)])),_:2},[e.$i.email&&!e.$i.emailVerified?{name:"icon",fn:(0,o.withCtx)((()=>[(0,o.createVNode)(d,{icon:e.faExclamationTriangle,style:{color:"var(--warn)"}},null,8,["icon"])]))}:e.$i.email&&e.$i.emailVerified?{name:"icon",fn:(0,o.withCtx)((()=>[(0,o.createVNode)(d,{icon:e.faCheck,style:{color:"var(--success)"}},null,8,["icon"])]))}:void 0]),1024)])),_:1}),(0,o.createVNode)(l,{to:"/settings/email/notification"},{icon:(0,o.withCtx)((()=>[(0,o.createVNode)(d,{icon:e.faBell},null,8,["icon"])])),default:(0,o.withCtx)((()=>[(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.$ts.emailNotification),1)])),_:1}),(0,o.createVNode)(c,{value:e.$i.receiveAnnouncementEmail,"onUpdate:value":e.onChangeReceiveAnnouncementEmail},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.receiveAnnouncementFromInstance),1)])),_:1},8,["value","onUpdate:value"])])),_:1})};const u=m},93817:(e,t,a)=>{var o=a(10810);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,a(45346).Z)("2942c08b",o,!0,{})}}]);