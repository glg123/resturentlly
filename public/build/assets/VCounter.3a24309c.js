import{a3 as i,x as r,ab as u,g as n,G as s,H as m}from"./main.078a9716.js";import{a as l}from"./index.8a0d3cc6.js";import{m as c,M as v}from"./VImg.cc893ccb.js";const V=i({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...c({transition:{component:l}})},setup(e,o){let{slots:t}=o;const a=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return u(()=>n(v,{transition:e.transition},{default:()=>[s(n("div",{class:"v-counter"},[t.default?t.default({counter:a.value,max:e.max,value:e.value}):a.value]),[[m,e.active]])]})),{}}});export{V};
