(self.webpackChunkmisskey=self.webpackChunkmisskey||[]).push([[7505],{17505:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var i=o(55393);const a={width:"224",height:"128"};var s=o(2212);const n=(0,i.defineComponent)({data:()=>({selected:null,objectHeight:0,orbitRadius:5}),mounted(){const t=this.$el,e=t.width,o=t.height,i=new s.xsS,a=new s.CP7({canvas:t,antialias:!0,alpha:!1});a.setPixelRatio(window.devicePixelRatio),a.setSize(e,o),a.setClearColor(0),a.autoClear=!1,a.shadowMap.enabled=!0,a.shadowMap.cullFace=s.tm_;const n=new s.cPb(75,e/o,.1,100);n.zoom=10,n.position.x=0,n.position.y=2,n.position.z=0,n.updateProjectionMatrix(),i.add(n);const c=new s.Mig(16777215,1);c.castShadow=!1,i.add(c);const h=new s.cek(16777215,1,100);h.position.set(3,3,3),i.add(h);const r=new s.VLJ(5,16,4473924,2236962);i.add(r);const d=()=>{const t=4e-4*Date.now();requestAnimationFrame(d),n.position.y=Math.sin(Math.PI/6)*this.orbitRadius,n.position.z=Math.cos(t)*this.orbitRadius,n.position.x=Math.sin(t)*this.orbitRadius,n.lookAt(new s.Pa4(0,this.objectHeight/2,0)),a.render(i,n)};this.selected=t=>{const e=t.clone(),o=i.getObjectByName("obj");null!=o&&i.remove(o),e.name="obj",e.position.x=0,e.position.y=0,e.position.z=0,e.rotation.x=0,e.rotation.y=0,e.rotation.z=0,e.traverse((t=>{if(t instanceof s.Kj0)return t.material=t.material.clone(),t.material.emissive.setHex(0)}));const a=(new s.ZzF).setFromObject(e);this.objectHeight=a.max.y-a.min.y;const c=a.max.x-a.min.x,h=a.max.z-a.min.z,r=Math.hypot(c,h)/n.aspect;this.orbitRadius=Math.max(r,this.objectHeight)*n.zoom*.625/Math.tan(.5*n.fov*(Math.PI/180)),i.add(e)},d()}});n.render=function(t,e,o,s,n,c){return(0,i.openBlock)(),(0,i.createBlock)("canvas",a)};const c=n}}]);