(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[7141],{50047:(e,t,o)=>{var n=o(23645)((function(e){return e[1]}));n.push([e.id,".cxiknjgy>.more>.button[data-v-2a5f1774]{margin-left:auto;margin-right:auto;height:48px;min-width:150px}",""]),e.exports=n},44951:(e,t,o)=>{var n=o(23645)((function(e){return e[1]}));n.push([e.id,".ruryvtyk>.announcement>._content>img[data-v-30bd004b]{display:block;max-height:300px;max-width:100%}",""]),e.exports=n},78732:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(55393);const a=(0,n.withScopeId)("data-v-2a5f1774");(0,n.pushScopeId)("data-v-2a5f1774");const c={class:"cxiknjgy"},r={class:"empty",key:"_empty_"},i={class:"more",key:"_more_"};(0,n.popScopeId)();const s=a(((e,t,o,s,l,d)=>{const p=(0,n.resolveComponent)("MkLoading"),m=(0,n.resolveComponent)("MkButton"),k=(0,n.resolveDirective)("appear");return(0,n.openBlock)(),(0,n.createBlock)("div",c,[(0,n.renderSlot)(e.$slots,"default",{items:e.items}),e.empty?((0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.renderSlot)(e.$slots,"empty")])):(0,n.createCommentVNode)("",!0),(0,n.withDirectives)((0,n.createVNode)("div",i,[(0,n.withDirectives)((0,n.createVNode)(m,{class:"button",onClick:e.fetchMore,disabled:e.moreFetching,style:{cursor:e.moreFetching?"wait":"pointer"},primary:""},{default:a((()=>[e.moreFetching?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:0},[(0,n.createTextVNode)((0,n.toDisplayString)(e.$ts.loadMore),1)],64)),e.moreFetching?((0,n.openBlock)(),(0,n.createBlock)(p,{key:1,inline:""})):(0,n.createCommentVNode)("",!0)])),_:1},8,["onClick","disabled","style"]),[[k,e.$store.state.enableInfiniteScroll?e.fetchMore:null]])],512),[[n.vShow,e.more]])])}));var l=o(42453),d=o(90381);const p=(0,n.defineComponent)({components:{MkButton:l.Z},mixins:[(0,d.Z)({})],props:{pagination:{required:!0}}});o(4708);p.render=s,p.__scopeId="data-v-2a5f1774";const m=p},27141:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g});var n=o(55393);const a=(0,n.withScopeId)("data-v-30bd004b");(0,n.pushScopeId)("data-v-30bd004b");const c={class:"_section"},r={class:"_title"},i={key:0},s={class:"_content"},l={key:0,class:"_footer"};(0,n.popScopeId)();const d=a(((e,t,o,d,p,m)=>{const k=(0,n.resolveComponent)("Mfm"),u=(0,n.resolveComponent)("Fa"),v=(0,n.resolveComponent)("MkButton"),g=(0,n.resolveComponent)("MkPagination");return(0,n.openBlock)(),(0,n.createBlock)("div",c,[(0,n.createVNode)(g,{pagination:e.pagination,class:"ruryvtyk _content"},{default:a((({items:t})=>[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(t,((o,c)=>((0,n.openBlock)(),(0,n.createBlock)("section",{class:"_card announcement _vMargin",key:o.id},[(0,n.createVNode)("div",r,[e.$i&&!o.isRead?((0,n.openBlock)(),(0,n.createBlock)("span",i,"🆕 ")):(0,n.createCommentVNode)("",!0),(0,n.createTextVNode)((0,n.toDisplayString)(o.title),1)]),(0,n.createVNode)("div",s,[(0,n.createVNode)(k,{text:o.text},null,8,["text"]),o.imageUrl?((0,n.openBlock)(),(0,n.createBlock)("img",{key:0,src:o.imageUrl},null,8,["src"])):(0,n.createCommentVNode)("",!0)]),e.$i&&!o.isRead?((0,n.openBlock)(),(0,n.createBlock)("div",l,[(0,n.createVNode)(v,{onClick:n=>e.read(t,o,c),primary:""},{default:a((()=>[(0,n.createVNode)(u,{icon:e.faCheck},null,8,["icon"]),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.$ts.gotIt),1)])),_:2},1032,["onClick"])])):(0,n.createCommentVNode)("",!0)])))),128))])),_:1},8,["pagination"])])}));var p=o(51436),m=o(78732),k=o(42453),u=o(10192);const v=(0,n.defineComponent)({components:{MkPagination:m.Z,MkButton:k.Z},data(){return{INFO:{title:this.$ts.announcements,icon:p.T07},pagination:{endpoint:"announcements",limit:10},faCheck:p.LEp}},methods:{read(e,t,o){e[o]=Object.assign(Object.assign({},t),{isRead:!0}),u.hi("i/read-announcement",{announcementId:t.id})}}});o(83058);v.render=d,v.__scopeId="data-v-30bd004b";const g=v},4708:(e,t,o)=>{var n=o(50047);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(45346).Z)("5bb49243",n,!0,{})},83058:(e,t,o)=>{var n=o(44951);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(45346).Z)("b8eb7656",n,!0,{})}}]);