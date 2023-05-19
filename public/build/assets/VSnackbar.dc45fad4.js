import{i as y,c as w,d as S,n as g,k as C,g as _,p as T,V as A}from"./router.f3c33ba4.js";import{a as L,c as O}from"./position.fb77405d.js";import{aq as R,aA as x,ak as B,s as N,ai as l,al as I,ab as M,g as o,m as c}from"./main.e5722c22.js";import{u as h}from"./scopeId.23faa331.js";import{f as q}from"./forwardRefs.c003b6b8.js";import{m as D,f as U,a as $}from"./VOverlay.ed5a8d46.js";const J=R()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...y({location:"bottom"}),...L(),...w(),...S(),...x(D({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":a=>!0},setup(a,u){let{slots:t}=u;const e=B(a,"modelValue"),{locationStyles:m}=g(a),{positionClasses:v}=O(a),{scopeId:d}=h(),{colorClasses:f,colorStyles:k,variantClasses:P}=C(a),{roundedClasses:V}=_(a),i=N();l(e,n),l(()=>a.timeout,n),I(()=>{e.value&&n()});let r=-1;function n(){window.clearTimeout(r);const s=Number(a.timeout);!e.value||s===-1||(r=window.setTimeout(()=>{e.value=!1},s))}function b(){window.clearTimeout(r)}return M(()=>{const[s]=U(a);return o($,c({ref:i,class:["v-snackbar",{"v-snackbar--active":e.value,"v-snackbar--multi-line":a.multiLine&&!a.vertical,"v-snackbar--vertical":a.vertical},v.value]},s,{modelValue:e.value,"onUpdate:modelValue":p=>e.value=p,contentProps:c({style:m.value},s.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none"},d),{default:()=>[o("div",{class:["v-snackbar__wrapper",f.value,V.value,P.value],style:[k.value],onPointerenter:b,onPointerleave:n},[T(!1,"v-snackbar"),t.default&&o("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&o(A,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[o("div",{class:"v-snackbar__actions"},[t.actions()])]})])],activator:t.activator})}),q({},i)}});export{J as V};