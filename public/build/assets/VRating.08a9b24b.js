import{aq as H,ax as k,ar as q,a6 as D,a7 as E,aC as U,a8 as j,ak as G,x as r,b9 as J,cP as K,s as _,ae as O,ab as Q,g as t,F as B,C as W}from"./main.990d9ea9.js";import{a as X}from"./router.0858fd47.js";import{V as Y}from"./VBtn.adcd713f.js";const ne=H()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:k,default:"$ratingEmpty"},fullIcon:{type:k,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...X(),...q(),...D(),...E()},emits:{"update:modelValue":e=>!0},setup(e,F){let{slots:c}=F;const{t:P}=U(),{themeClasses:R}=j(e),L=G(e,"modelValue"),d=r(()=>J(parseFloat(L.value),0,+e.length)),x=r(()=>K(Number(e.length),1)),I=r(()=>x.value.flatMap(n=>e.halfIncrements?[n-.5,n]:[n])),m=_(-1),g=_(-1),M=_();let b=!1;const h=r(()=>I.value.map(n=>{var f;const i=e.hover&&m.value>-1,l=d.value>=n,a=m.value>=n,u=(i?a:l)?e.fullIcon:e.emptyIcon,s=(f=e.activeColor)!=null?f:e.color,y=l||a?s:e.color;return{isFilled:l,isHovered:a,icon:u,color:y}})),w=r(()=>[0,...I.value].map(n=>{function i(){m.value=n}function l(){m.value=-1}function a(){if(n===0&&d.value===0){var s;(s=M.value)==null||s.focus()}else g.value=n}function o(){b||(g.value=-1)}function u(){e.disabled||e.readonly||(L.value=d.value===n&&e.clearable?0:n)}return{onMouseenter:e.hover?i:void 0,onMouseleave:e.hover?l:void 0,onFocus:a,onBlur:o,onClick:u}}));function N(){b=!0}function z(){b=!1}const S=r(()=>{var n;return(n=e.name)!=null?n:`v-rating-${O()}`});function v(n){var i,l;let{value:a,index:o,showStar:u=!0}=n;const{onMouseenter:s,onMouseleave:y,onFocus:f,onBlur:A,onClick:T}=w.value[o+1],$=`${S.value}-${String(a).replace(".","-")}`,C={color:(i=h.value[o])==null?void 0:i.color,density:e.density,disabled:e.disabled,icon:(l=h.value[o])==null?void 0:l.icon,ripple:e.ripple,size:e.size,tag:"span",variant:"plain"};return t(B,null,[t("label",{for:$,class:{"v-rating__item--half":e.halfIncrements&&a%1>0,"v-rating__item--full":e.halfIncrements&&a%1===0},onMousedown:N,onMouseup:z,onMouseenter:s,onMouseleave:y},[t("span",{class:"v-rating__hidden"},[P(e.itemAriaLabel,a,e.length)]),u?c.item?c.item({...h.value[o],props:C,value:a,index:o}):t(Y,C,null):void 0]),t("input",{class:"v-rating__hidden",name:S.value,id:$,type:"radio",value:a,checked:d.value===a,onClick:T,onFocus:f,onBlur:A,ref:o===0?M:void 0,readonly:e.readonly,disabled:e.disabled},null)])}function V(n){return c["item-label"]?c["item-label"](n):n.label?t("span",null,[n.label]):t("span",null,[W("\xA0")])}return Q(()=>{var n;const i=!!((n=e.itemLabels)!=null&&n.length)||c["item-label"];return t(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},R.value]},{default:()=>[t(v,{value:0,index:-1,showStar:!1},null),x.value.map((l,a)=>{var o,u;return t("div",{class:"v-rating__wrapper"},[i&&e.itemLabelPosition==="top"?V({value:l,index:a,label:(o=e.itemLabels)==null?void 0:o[a]}):void 0,t("div",{class:["v-rating__item",{"v-rating__item--focused":Math.ceil(g.value)===l}]},[e.halfIncrements?t(B,null,[t(v,{value:l-.5,index:a*2},null),t(v,{value:l,index:a*2+1},null)]):t(v,{value:l,index:a},null)]),i&&e.itemLabelPosition==="bottom"?V({value:l,index:a,label:(u=e.itemLabels)==null?void 0:u[a]}):void 0])})]})}),{}}});export{ne as V};
