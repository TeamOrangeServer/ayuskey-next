(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[780],{94168:(e,t,s)=>{var i=s(23645)((function(e){return e[1]}));i.push([e.id,".kvausudm[data-v-e5dbb238]{position:relative}.kvausudm>div[data-v-e5dbb238]{width:100%;height:100%;cursor:pointer}.kvausudm>div>p[data-v-e5dbb238]{display:block;margin:1em;text-align:center;color:#888}.kvausudm>div>*[data-v-e5dbb238]{pointer-events:none}.kvausudm>div>.slide[data-v-e5dbb238]{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:50%}.kvausudm>div>.slide.b[data-v-e5dbb238]{opacity:0}.kvausudm>div>.slide.anime[data-v-e5dbb238]{transition:opacity 1s;opacity:1}",""]),e.exports=i},46397:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var i=s(55393),o=s(51084),a=s(10192);function d(e){return(0,i.defineComponent)({props:{widget:{type:Object,required:!1},settingCallback:{required:!1}},emits:["updateProps"],data(){return{props:this.widget?JSON.parse(JSON.stringify(this.widget.data)):{},save:(0,o.P)(3e3,(()=>{this.$emit("updateProps",this.props)}))}},computed:{id(){return this.widget?this.widget.id:null}},created(){this.mergeProps(),this.$watch("props",(()=>{this.mergeProps()}),{deep:!0}),this.settingCallback&&this.settingCallback(this.setting)},methods:{mergeProps(){if(e.props){const t=e.props();for(const e of Object.keys(t))this.props.hasOwnProperty(e)||(this.props[e]=t[e].default)}},async setting(){const t=e.props();for(const e of Object.keys(t))t[e].default=this.props[e];const{canceled:s,result:i}=await a.cr(e.name,t);if(!s){for(const e of Object.keys(i))this.props[e]=i[e];this.save()}}}})}},10780:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var i=s(55393);const o=(0,i.withScopeId)("data-v-e5dbb238");(0,i.pushScopeId)("data-v-e5dbb238");const a={class:"kvausudm _panel"},d={key:0},r={key:1},l={ref:"slideA",class:"slide a"},n={ref:"slideB",class:"slide b"};(0,i.popScopeId)();const c=o(((e,t,s,o,c,p)=>((0,i.openBlock)(),(0,i.createBlock)("div",a,[(0,i.createVNode)("div",{onClick:t[1]||(t[1]=(...t)=>e.choose&&e.choose(...t))},[null==e.props.folderId?((0,i.openBlock)(),(0,i.createBlock)("p",d,[e.isCustomizeMode?((0,i.openBlock)(),(0,i.createBlock)(i.Fragment,{key:0},[(0,i.createTextVNode)((0,i.toDisplayString)(e.$t("folder-customize-mode")),1)],64)):((0,i.openBlock)(),(0,i.createBlock)(i.Fragment,{key:1},[(0,i.createTextVNode)((0,i.toDisplayString)(e.$ts.folder),1)],64))])):(0,i.createCommentVNode)("",!0),null==e.props.folderId||0!==e.images.length||e.fetching?(0,i.createCommentVNode)("",!0):((0,i.openBlock)(),(0,i.createBlock)("p",r,(0,i.toDisplayString)(e.$t("no-image")),1)),(0,i.createVNode)("div",l,null,512),(0,i.createVNode)("div",n,null,512)])]))));var p=s(46397),h=s(10192);const u=(0,p.Z)({name:"slideshow",props:()=>({height:{type:"number",default:300},folderId:{type:"string",default:null,hidden:!0}})}),g=(0,i.defineComponent)({extends:u,data:()=>({images:[],fetching:!0,clock:null}),mounted(){this.$nextTick((()=>{this.applySize()})),null!=this.props.folderId&&this.fetch(),this.clock=setInterval(this.change,1e4)},beforeUnmount(){clearInterval(this.clock)},methods:{applySize(){let e;e=1==this.props.size?250:170,this.$el.style.height=e+"px"},resize(){1==this.props.size?this.props.size=0:this.props.size++,this.save(),this.applySize()},change(){if(0==this.images.length)return;const e=Math.floor(Math.random()*this.images.length),t=`url(${this.images[e].url})`;this.$refs.slideB.style.backgroundImage=t,this.$refs.slideB.classList.add("anime"),setTimeout((()=>{null!=this.$refs.slideA&&(this.$refs.slideA.style.backgroundImage=t,this.$refs.slideB.classList.remove("anime"))}),1e3)},fetch(){this.fetching=!0,h.hi("drive/files",{folderId:this.props.folderId,type:"image/*",limit:100}).then((e=>{this.images=e,this.fetching=!1,this.$refs.slideA.style.backgroundImage="",this.$refs.slideB.style.backgroundImage="",this.change()}))},choose(){h.LD(!1).then((e=>{null!=e&&(this.props.folderId=e.id,this.save(),this.fetch())}))}}});s(282);g.render=c,g.__scopeId="data-v-e5dbb238";const m=g},282:(e,t,s)=>{var i=s(94168);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,s(45346).Z)("39a9352e",i,!0,{})}}]);