(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[5486],{44315:(e,s,t)=>{var o=t(23645)((function(e){return e[1]}));o.push([e.id,'.mk-messaging-room>.body>.empty[data-v-53885de0]{width:100%;margin:0;padding:16px 8px 8px;text-align:center;font-size:.8em;opacity:.5}.mk-messaging-room>.body>.empty [data-icon][data-v-53885de0]{margin-right:4px}.mk-messaging-room>.body>.no-history[data-v-53885de0]{display:block;margin:0;padding:16px;text-align:center;font-size:.8em;color:var(--messagingRoomInfo);opacity:.5}.mk-messaging-room>.body>.no-history [data-icon][data-v-53885de0]{margin-right:4px}.mk-messaging-room>.body>.more[data-v-53885de0]{display:block;margin:16px auto;padding:0 12px;line-height:24px;color:#fff;background:rgba(0,0,0,.3);border-radius:12px}.mk-messaging-room>.body>.more[data-v-53885de0]:hover{background:rgba(0,0,0,.4)}.mk-messaging-room>.body>.more[data-v-53885de0]:active{background:rgba(0,0,0,.5)}.mk-messaging-room>.body>.more.fetching[data-v-53885de0]{cursor:wait}.mk-messaging-room>.body>.more>[data-icon][data-v-53885de0]{margin-right:4px}.mk-messaging-room>.body>.messages[data-v-53885de0]> *{margin-bottom:16px}.mk-messaging-room>footer[data-v-53885de0]{width:100%;position:relative}.mk-messaging-room>footer>.new-message[data-v-53885de0]{position:absolute;top:-48px;width:100%;padding:8px 0;text-align:center}.mk-messaging-room>footer>.new-message>button[data-v-53885de0]{display:inline-block;margin:0;padding:0 12px 0 30px;line-height:32px;font-size:12px;border-radius:16px}.mk-messaging-room>footer>.new-message>button>i[data-v-53885de0]{position:absolute;top:0;left:10px;line-height:32px;font-size:16px}.mk-messaging-room>footer>.typers[data-v-53885de0]{position:absolute;bottom:100%;padding:0 8px;font-size:.9em;color:var(--fgTransparentWeak)}.mk-messaging-room>footer>.typers>.users>.user+.user[data-v-53885de0]:before{content:", ";font-weight:400}.mk-messaging-room>footer>.typers>.users>.user[data-v-53885de0]:last-of-type:after{content:" "}.fade-enter-active[data-v-53885de0],.fade-leave-active[data-v-53885de0]{transition:opacity .1s}.fade-enter-from[data-v-53885de0],.fade-leave-to[data-v-53885de0]{transition:opacity .5s;opacity:0}',""]),e.exports=o},95486:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>w});var o=t(55393);const i=(0,o.withScopeId)("data-v-53885de0");(0,o.pushScopeId)("data-v-53885de0");const n={class:"_content mk-messaging-room"},r={class:"body"},a={key:1,class:"empty"},d={key:2,class:"no-history"},c={key:0,class:"typers"},g={class:"new-message"};(0,o.popScopeId)();const h=i(((e,s,t,h,m,l)=>{const p=(0,o.resolveComponent)("MkLoading"),f=(0,o.resolveComponent)("Fa"),u=(0,o.resolveComponent)("XMessage"),v=(0,o.resolveComponent)("XList"),y=(0,o.resolveComponent)("I18n"),k=(0,o.resolveComponent)("MkEllipsis"),M=(0,o.resolveComponent)("XForm");return(0,o.openBlock)(),(0,o.createBlock)("div",{class:"_section",onDragover:s[3]||(s[3]=(0,o.withModifiers)(((...s)=>e.onDragover&&e.onDragover(...s)),["prevent","stop"])),onDrop:s[4]||(s[4]=(0,o.withModifiers)(((...s)=>e.onDrop&&e.onDrop(...s)),["prevent","stop"]))},[(0,o.createVNode)("div",n,[(0,o.createVNode)("div",r,[e.fetching?((0,o.openBlock)(),(0,o.createBlock)(p,{key:0})):(0,o.createCommentVNode)("",!0),e.fetching||0!=e.messages.length?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)("p",a,[(0,o.createVNode)(f,{icon:e.faInfoCircle},null,8,["icon"]),(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.noMessagesYet),1)])),!e.fetching&&e.messages.length>0&&!e.existMoreMessages?((0,o.openBlock)(),(0,o.createBlock)("p",d,[(0,o.createVNode)(f,{icon:e.faFlag},null,8,["icon"]),(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.noMoreHistory),1)])):(0,o.createCommentVNode)("",!0),(0,o.withDirectives)((0,o.createVNode)("button",{class:["more _button",{fetching:e.fetchingMoreMessages}],ref:"loadMore",onClick:s[1]||(s[1]=(...s)=>e.fetchMoreMessages&&e.fetchMoreMessages(...s)),disabled:e.fetchingMoreMessages},[e.fetchingMoreMessages?((0,o.openBlock)(),(0,o.createBlock)(f,{key:0,icon:"spinner",pulse:"","fixed-width":""})):(0,o.createCommentVNode)("",!0),(0,o.createTextVNode)((0,o.toDisplayString)(e.fetchingMoreMessages?e.$ts.loading:e.$ts.loadMore),1)],10,["disabled"]),[[o.vShow,e.existMoreMessages]]),(0,o.createVNode)(v,{class:"messages",items:e.messages,direction:"up",reversed:""},{default:i((({item:s})=>[(0,o.createVNode)(u,{message:s,"is-group":null!=e.group,key:s.id},null,8,["message","is-group"])])),_:1},8,["items"])]),(0,o.createVNode)("footer",null,[e.typers.length>0?((0,o.openBlock)(),(0,o.createBlock)("div",c,[(0,o.createVNode)(y,{src:e.$ts.typingUsers,"text-tag":"span",class:"users"},{users:i((()=>[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.typers,(e=>((0,o.openBlock)(),(0,o.createBlock)("b",{key:e.id,class:"user"},(0,o.toDisplayString)(e.username),1)))),128))])),_:1},8,["src"]),(0,o.createVNode)(k)])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(o.Transition,{name:"fade"},{default:i((()=>[(0,o.withDirectives)((0,o.createVNode)("div",g,[(0,o.createVNode)("button",{class:"_buttonPrimary",onClick:s[2]||(s[2]=(...s)=>e.onIndicatorClick&&e.onIndicatorClick(...s))},[(0,o.createVNode)("i",null,[(0,o.createVNode)(f,{icon:e.faArrowCircleDown},null,8,["icon"])]),(0,o.createTextVNode)((0,o.toDisplayString)(e.$ts.newMessageExists),1)])],512),[[o.vShow,e.showIndicator]])])),_:1}),e.fetching?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createBlock)(M,{key:1,user:e.user,group:e.group,ref:"form"},null,8,["user","group"]))])])],32)}));var m=t(51436),l=t(56024),p=t(8914),f=t(18635),u=t(71127),v=t(77127),y=t(51533),k=t(10192),M=t(14979),b=t(56858);const x=(0,o.defineComponent)({components:{XMessage:f.default,XForm:u.default,XList:p.Z},inject:["inWindow"],props:{userAcct:{type:String,required:!1},groupId:{type:String,required:!1}},data(){return{INFO:(0,o.computed)((()=>this.fetching?null:this.user?{userName:this.user,avatar:this.user,action:{icon:m.cNd,handler:this.menu}}:{title:this.group.name,icon:m.FVb,action:{icon:m.cNd,handler:this.menu}})),fetching:!0,user:null,group:null,fetchingMoreMessages:!1,messages:[],existMoreMessages:!1,connection:null,showIndicator:!1,timer:null,typers:[],ilObserver:new IntersectionObserver((e=>e.some((e=>e.isIntersecting))&&!this.fetching&&!this.fetchingMoreMessages&&this.existMoreMessages&&this.fetchMoreMessages())),faArrowCircleDown:m.DY,faFlag:m.RrC,faInfoCircle:m.sqG}},computed:{form(){return this.$refs.form}},watch:{userAcct:"fetch",groupId:"fetch"},mounted(){this.fetch(),this.$store.state.enableInfiniteScroll&&this.$nextTick((()=>this.ilObserver.observe(this.$refs.loadMore)))},beforeUnmount(){this.connection.dispose(),document.removeEventListener("visibilitychange",this.onVisibilitychange),this.ilObserver.disconnect()},methods:{async fetch(){if(this.fetching=!0,this.userAcct){const e=await k.hi("users/show",(0,v.Z)(this.userAcct));this.user=e}else{const e=await k.hi("users/groups/show",{groupId:this.groupId});this.group=e}this.connection=k.Vw.connectToChannel("messaging",{otherparty:this.user?this.user.id:void 0,group:this.group?this.group.id:void 0}),this.connection.on("message",this.onMessage),this.connection.on("read",this.onRead),this.connection.on("deleted",this.onDeleted),this.connection.on("typers",(e=>{this.typers=e.filter((e=>e.id!==this.$i.id))})),document.addEventListener("visibilitychange",this.onVisibilitychange),this.fetchMessages().then((()=>{this.scrollToBottom(),setTimeout((()=>this.fetching=!1),300)}))},onDragover(e){const s="file"==e.dataTransfer.items[0].kind,t="mk_drive_file"==e.dataTransfer.types[0];e.dataTransfer.dropEffect=s||t?"all"==e.dataTransfer.effectAllowed?"copy":"move":"none"},onDrop(e){if(1==e.dataTransfer.files.length)return void this.form.upload(e.dataTransfer.files[0]);if(e.dataTransfer.files.length>1)return void k.WZ({type:"error",text:this.$ts.onlyOneFileCanBeAttached});const s=e.dataTransfer.getData("mk_drive_file");if(null!=s&&""!=s){const e=JSON.parse(s);this.form.file=e}},fetchMessages(){return new Promise(((e,s)=>{const t=this.existMoreMessages?20:10;k.hi("messaging/messages",{userId:this.user?this.user.id:void 0,groupId:this.group?this.group.id:void 0,limit:t+1,untilId:this.existMoreMessages?this.messages[0].id:void 0}).then((s=>{s.length==t+1?(this.existMoreMessages=!0,s.pop()):this.existMoreMessages=!1,this.messages.unshift.apply(this.messages,s.reverse()),e()}))}))},fetchMoreMessages(){this.fetchingMoreMessages=!0,this.fetchMessages().then((()=>{this.fetchingMoreMessages=!1}))},onMessage(e){b.h("chat");const s=(0,y.Kx)(this.$el,64);this.messages.push(e),e.userId==this.$i.id||document.hidden||this.connection.send("read",{id:e.id}),s?this.$nextTick((()=>{this.scrollToBottom()})):e.userId!=this.$i.id&&this.notifyNewMessage()},onRead(e){if(this.user){Array.isArray(e)||(e=[e]);for(const s of e)if(this.messages.some((e=>e.id==s))){const e=this.messages.map((e=>e.id)).indexOf(s);this.messages[e]=Object.assign(Object.assign({},this.messages[e]),{isRead:!0})}}else if(this.group)for(const s of e.ids)if(this.messages.some((e=>e.id==s))){const t=this.messages.map((e=>e.id)).indexOf(s);this.messages[t]=Object.assign(Object.assign({},this.messages[t]),{reads:[...this.messages[t].reads,e.userId]})}},onDeleted(e){const s=this.messages.find((s=>s.id===e));s&&(this.messages=this.messages.filter((e=>e.id!==s.id)))},scrollToBottom(){(0,y.AR)(this.$el,this.$el.offsetHeight)},onIndicatorClick(){this.showIndicator=!1,this.scrollToBottom()},notifyNewMessage(){this.showIndicator=!0,(0,y.Gs)(this.$el,(()=>{this.showIndicator=!1})),this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showIndicator=!1}),4e3)},onVisibilitychange(){if(!document.hidden)for(const e of this.messages)e.userId===this.$i.id||e.isRead||this.connection.send("read",{id:e.id})},menu(e){const s=this.groupId?"/my/messaging/group/"+this.groupId:"/my/messaging/"+this.userAcct;k.n4([this.inWindow?void 0:{text:this.$ts.openInWindow,icon:l.iA,action:()=>{k.$(s),this.$router.back()}},this.inWindow?void 0:{text:this.$ts.popout,icon:m.Xjp,action:()=>{(0,M.a)(s),this.$router.back()}}],e.currentTarget||e.target)}}});t(6488);x.render=h,x.__scopeId="data-v-53885de0";const w=x},6488:(e,s,t)=>{var o=t(44315);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,t(45346).Z)("027cf34c",o,!0,{})}}]);