(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[502],{48278:(e,t,a)=>{var i=a(23645)((function(e){return e[1]}));i.push([e.id,".ztzhwixg[data-v-36925b6a]{position:relative}.ztzhwixg>.icon[data-v-36925b6a]{position:absolute;top:0;left:0;width:24px;text-align:center;line-height:32px}.ztzhwixg>.icon:not(:empty)+.input[data-v-36925b6a]{margin-left:28px}.ztzhwixg>.input[data-v-36925b6a]{position:relative}.ztzhwixg>.input>input[data-v-36925b6a]{display:block;height:52px;width:100%;margin:0;padding:0 16px;font:inherit;font-weight:400;font-size:1em;line-height:52px;color:var(--inputText);background:transparent;border:none;border-radius:0;outline:none;box-shadow:none;box-sizing:border-box}.ztzhwixg>.input>input[type=file][data-v-36925b6a]{display:none}.ztzhwixg>.input>.prefix[data-v-36925b6a],.ztzhwixg>.input>.suffix[data-v-36925b6a]{display:block;position:absolute;z-index:1;top:0;padding:0 16px;font-size:1em;line-height:52px;color:var(--inputLabel);pointer-events:none}.ztzhwixg>.input>.prefix[data-v-36925b6a]:empty,.ztzhwixg>.input>.suffix[data-v-36925b6a]:empty{display:none}.ztzhwixg>.input>.prefix>*[data-v-36925b6a],.ztzhwixg>.input>.suffix>*[data-v-36925b6a]{display:inline-block;min-width:16px;max-width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ztzhwixg>.input>.prefix[data-v-36925b6a]{left:0;padding-right:8px}.ztzhwixg>.input>.suffix[data-v-36925b6a]{right:0;padding-left:8px}.ztzhwixg.inline[data-v-36925b6a]{display:inline-block;margin:0}.ztzhwixg.disabled[data-v-36925b6a]{opacity:.7}.ztzhwixg.disabled[data-v-36925b6a],.ztzhwixg.disabled *[data-v-36925b6a]{cursor:not-allowed!important}",""]),e.exports=i},49520:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var i=a(55393);const o=(0,i.withScopeId)("data-v-36925b6a");(0,i.pushScopeId)("data-v-36925b6a");const n={class:"icon",ref:"icon"},l={class:"input _formPanel"},r={class:"prefix",ref:"prefixEl"},d={class:"suffix",ref:"suffixEl"};(0,i.popScopeId)();const s=o(((e,t,a,s,p,u)=>{const c=(0,i.resolveComponent)("Fa"),v=(0,i.resolveComponent)("FormButton"),f=(0,i.resolveComponent)("FormGroup");return(0,i.openBlock)(),(0,i.createBlock)(f,{class:"_formItem"},{label:o((()=>[(0,i.renderSlot)(e.$slots,"default")])),caption:o((()=>[(0,i.renderSlot)(e.$slots,"desc")])),default:o((()=>[(0,i.createVNode)("div",{class:["ztzhwixg _formItem",{inline:e.inline,disabled:e.disabled}]},[(0,i.createVNode)("div",n,[(0,i.renderSlot)(e.$slots,"icon")],512),(0,i.createVNode)("div",l,[(0,i.createVNode)("div",r,[(0,i.renderSlot)(e.$slots,"prefix")],512),(0,i.withDirectives)((0,i.createVNode)("input",{ref:"inputEl",type:e.type,"onUpdate:modelValue":t[1]||(t[1]=t=>e.v=t),disabled:e.disabled,required:e.required,readonly:e.readonly,placeholder:e.placeholder,pattern:e.pattern,autocomplete:e.autocomplete,spellcheck:e.spellcheck,step:e.step,onFocus:t[2]||(t[2]=t=>e.focused=!0),onBlur:t[3]||(t[3]=t=>e.focused=!1),onKeydown:t[4]||(t[4]=t=>e.onKeydown(t)),onInput:t[5]||(t[5]=(...t)=>e.onInput&&e.onInput(...t)),list:e.id},null,40,["type","disabled","required","readonly","placeholder","pattern","autocomplete","spellcheck","step","list"]),[[i.vModelDynamic,e.v]]),e.datalist?((0,i.openBlock)(),(0,i.createBlock)("datalist",{key:0,id:e.id},[((0,i.openBlock)(!0),(0,i.createBlock)(i.Fragment,null,(0,i.renderList)(e.datalist,(e=>((0,i.openBlock)(),(0,i.createBlock)("option",{value:e},null,8,["value"])))),256))],8,["id"])):(0,i.createCommentVNode)("",!0),(0,i.createVNode)("div",d,[(0,i.renderSlot)(e.$slots,"suffix")],512)])],2),e.manualSave&&e.changed?((0,i.openBlock)(),(0,i.createBlock)(v,{key:0,onClick:e.updated,primary:""},{default:o((()=>[(0,i.createVNode)(c,{icon:e.faSave},null,8,["icon"]),(0,i.createTextVNode)(" "+(0,i.toDisplayString)(e.$ts.save),1)])),_:1},8,["onClick"])):(0,i.createCommentVNode)("",!0)])),_:3})}));var p=a(51436),u=(a(23090),a(11937)),c=a(42519);const v=(0,i.defineComponent)({components:{FormGroup:c.Z,FormButton:u.Z},props:{value:{required:!1},type:{type:String,required:!1},required:{type:Boolean,required:!1},readonly:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},pattern:{type:String,required:!1},placeholder:{type:String,required:!1},autofocus:{type:Boolean,required:!1,default:!1},autocomplete:{required:!1},spellcheck:{required:!1},step:{required:!1},datalist:{type:Array,required:!1},inline:{type:Boolean,required:!1,default:!1},manualSave:{type:Boolean,required:!1,default:!1}},emits:["change","keydown","enter"],setup(e,t){const{value:a,type:o,autofocus:n}=(0,i.toRefs)(e),l=(0,i.ref)(a.value),r=Math.random().toString(),d=(0,i.ref)(!1),s=(0,i.ref)(!1),u=(0,i.ref)(!1),c=(0,i.computed)((()=>""!==l.value&&null!=l.value)),v=(0,i.ref)(null),f=(0,i.ref)(null),m=(0,i.ref)(null),h=()=>v.value.focus(),x=()=>{s.value=!1,"number"===(null==o?void 0:o.value)?t.emit("update:value",parseFloat(l.value)):t.emit("update:value",l.value)};return(0,i.watch)(a,(e=>{l.value=e})),(0,i.watch)(l,(t=>{e.manualSave||x(),u.value=v.value.validity.badInput})),(0,i.onMounted)((()=>{(0,i.nextTick)((()=>{n.value&&h();const e=setInterval((()=>{f.value&&f.value.offsetWidth&&(v.value.style.paddingLeft=f.value.offsetWidth+"px"),m.value&&m.value.offsetWidth&&(v.value.style.paddingRight=m.value.offsetWidth+"px")}),100);(0,i.onUnmounted)((()=>{clearInterval(e)}))}))})),{id:r,v:l,focused:d,invalid:u,changed:s,filled:c,inputEl:v,prefixEl:f,suffixEl:m,focus:h,onInput:e=>{s.value=!0,t.emit("change",e)},onKeydown:e=>{t.emit("keydown",e),"Enter"===e.code&&t.emit("enter")},updated:x,faExclamationCircle:p.RLE,faSave:p.r6l}}});a(37567);v.render=s,v.__scopeId="data-v-36925b6a";const f=v},6054:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var i=a(55393);var o=a(51436),n=a(56024),l=a(11937),r=a(49520),d=a(30320),s=a(42519),p=a(10192);const u=(0,i.defineComponent)({components:{FormBase:d.Z,FormInput:r.Z,FormButton:l.Z,FormGroup:s.Z},emits:["info"],data(){return{INFO:{title:this.$ts.emailAddress,icon:n.FU},emailAddress:null,code:null,faCog:o.b7W}},created(){this.emailAddress=this.$i.email},mounted(){this.$emit("info",this.INFO)},methods:{save(){p.WZ({title:this.$ts.password,input:{type:"password"}}).then((({canceled:e,result:t})=>{e||p.Zv("i/update-email",{password:t,email:this.emailAddress})}))}}});u.render=function(e,t,a,o,n,l){const r=(0,i.resolveComponent)("FormInput"),d=(0,i.resolveComponent)("FormGroup"),s=(0,i.resolveComponent)("FormButton"),p=(0,i.resolveComponent)("FormBase");return(0,i.openBlock)(),(0,i.createBlock)(p,null,{default:(0,i.withCtx)((()=>[(0,i.createVNode)(d,null,{default:(0,i.withCtx)((()=>[(0,i.createVNode)(r,{value:e.emailAddress,"onUpdate:value":t[1]||(t[1]=t=>e.emailAddress=t),type:"email"},(0,i.createSlots)({default:(0,i.withCtx)((()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.$ts.emailAddress)+" ",1)])),_:2},[e.$i.email&&!e.$i.emailVerified?{name:"desc",fn:(0,i.withCtx)((()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.$ts.verificationEmailSent),1)]))}:e.emailAddress===e.$i.email&&e.$i.emailVerified?{name:"desc",fn:(0,i.withCtx)((()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.$ts.emailVerified),1)]))}:void 0]),1032,["value"])])),_:1}),(0,i.createVNode)(s,{onClick:e.save,primary:""},{default:(0,i.withCtx)((()=>[(0,i.createTextVNode)((0,i.toDisplayString)(e.$ts.save),1)])),_:1},8,["onClick"])])),_:1})};const c=u},37567:(e,t,a)=>{var i=a(48278);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,a(45346).Z)("0c28e782",i,!0,{})}}]);