import{m as R,V as C,a as S,f as $,b as k}from"./VSelectionControl.af7cec95.js";import{a3 as c,ab as m,g as a,m as u,aA as A,ax as p,ae as G,x,ak as O,aB as h,F as U}from"./main.078a9716.js";import{m as F,f as N,V as _,a as B}from"./VInput.a7f379dc.js";const q=c({name:"VRadio",props:{...R({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,l){let{slots:r}=l;return m(()=>a(C,u(e,{class:"v-radio",type:"radio"}),r)),{}}});const w=c({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...F(),...A(S(),["multiple"]),trueIcon:{type:p,default:"$radioOn"},falseIcon:{type:p,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:r,slots:t}=l;const f=G(),n=x(()=>e.id||`radio-group-${f}`),o=O(e,"modelValue");return m(()=>{const[V,b]=h(r),[v,D]=N(e),[I,L]=$({...e,multiple:!1}),d=t.label?t.label({label:e.label,props:{for:n.value}}):e.label;return a(B,u({class:"v-radio-group"},V,v,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:n.value}),{...t,default:s=>{let{id:i,isDisabled:g,isReadonly:y}=s;return a(U,null,[d&&a(_,{for:i.value,clickable:!0},{default:()=>[d]}),a(k,u(I,{id:i.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:g.value,readonly:y.value},b,{modelValue:o.value,"onUpdate:modelValue":P=>o.value=P}),t)])}})}),{}}});export{w as V,q as a};