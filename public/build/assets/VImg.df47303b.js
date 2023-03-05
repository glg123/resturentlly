import{a3 as j,ab as O,g as a,x as b,aT as p,ac as k,h as x,m as D,T as H,s as _,ai as N,aE as M,aw as q,G as V,ay as A,F as L,av as U,H as G}from"./main.990d9ea9.js";import{h as J,l as K}from"./router.0858fd47.js";function Q(e){return{aspectStyles:b(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const X=j({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...J()},setup(e,s){let{slots:l}=s;const{aspectStyles:t}=Q(e),{dimensionStyles:c}=K(e);return O(()=>{var i;return a("div",{class:"v-responsive",style:c.value},[a("div",{class:"v-responsive__sizer",style:t.value},null),(i=l.additional)==null?void 0:i.call(l),l.default&&a("div",{class:["v-responsive__content",e.contentClass]},[l.default()])])}),{}}});function Y(e,s){if(!p)return;const l=s.modifiers||{},t=s.value,{handler:c,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!v)return;const f=g.some(S=>S.isIntersecting);c&&(!l.quiet||v.init)&&(!l.once||f||v.init)&&c(f,g,o),f&&l.once?B(e,s):v.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:r},r.observe(e)}function B(e,s){var l;const t=(l=e._observe)==null?void 0:l[s.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const Z={mounted:Y,unmounted:B},ee=Z,te=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,s)=>{let{slots:l}=s;const{transition:t,...c}=e,{component:i=H,...r}=typeof t=="object"?t:{};return x(i,D(typeof t=="string"?{name:t}:r,c),l)},re=j({name:"VImg",directives:{intersect:ee},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...te()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:l,slots:t}=s;const c=_(""),i=_(),r=_(e.eager?"loading":"idle"),d=_(),g=_(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>o.value.aspect||d.value/g.value||0);N(()=>e.src,()=>{f(r.value!=="idle")}),M(()=>f());function f(n){if(!(e.eager&&n)&&!(p&&!n&&!e.eager)){if(r.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,y(u,null)}!o.value.src||q(()=>{var u,m;if(l("loadstart",((u=i.value)==null?void 0:u.currentSrc)||o.value.src),(m=i.value)!=null&&m.complete){if(i.value.naturalWidth||z(),r.value==="error")return;v.value||y(i.value,null),S()}else v.value||y(i.value),$()})}}function S(){var n;$(),r.value="loaded",l("load",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function z(){var n;r.value="error",l("error",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function $(){const n=i.value;n&&(c.value=n.currentSrc||n.src)}function y(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{const{naturalHeight:T,naturalWidth:w}=n;T||w?(d.value=w,g.value=T):!n.complete&&r.value==="loading"&&u!=null?setTimeout(m,u):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const I=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var n;if(!o.value.src||r.value==="idle")return null;const u=a("img",{class:["v-img__img",I.value],src:o.value.src,srcset:o.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:S,onError:z},null),m=(n=t.sources)==null?void 0:n.call(t);return a(h,{transition:e.transition,appear:!0},{default:()=>[V(m?a("picture",{class:"v-img__picture"},[m,u]):u,[[G,r.value==="loaded"]])]})},P=()=>a(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&r.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",I.value],src:o.value.lazySrc,alt:""},null)]}),W=()=>t.placeholder?a(h,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&a("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,C=()=>t.error?a(h,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&a("div",{class:"v-img__error"},[t.error()])]}):null,E=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=_(!1);{const n=N(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{R.value=!0})}),n())})}return O(()=>V(a(X,{class:["v-img",{"v-img--booting":!R.value}],style:{width:U(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(L,null,[a(F,null,null),a(P,null,null),a(E,null,null),a(W,null,null),a(C,null,null)]),default:t.default}),[[A("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:i,state:r,naturalWidth:d,naturalHeight:g}}});export{ee as I,h as M,re as V,X as a,te as m};
