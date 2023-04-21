import{V as f,c as p,e as m}from"./VCard.09420318.js";import{V as o}from"./VBtn.a433eeed.js";import{V as g}from"./VDialog.a8636a34.js";import{o as V,f as _,w as e,g as a,i as r,j as x,C as l}from"./main.a5f2feaa.js";const C=r("span",{class:"text-5xl"},"!",-1),h={class:"text-lg font-weight-medium"},B={__name:"ConfirmDialog",props:{confirmationMsg:{type:String,required:!0},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","confirm"],setup(c,{emit:t}){const i=c,s=n=>{t("update:isDialogVisible",n)},d=()=>{t("confirm",!0),s(!1)},u=()=>{t("confirm",!1),t("update:isDialogVisible",!1)};return(n,D)=>(V(),_(g,{"max-width":"500","model-value":i.isDialogVisible,"onUpdate:modelValue":s},{default:e(()=>[a(f,{class:"text-center px-10 py-6"},{default:e(()=>[a(p,null,{default:e(()=>[a(o,{icon:"",variant:"outlined",color:"warning",class:"mb-4",style:{width:"88px",height:"88px","pointer-events":"none"}},{default:e(()=>[C]),_:1}),r("h6",h,x(i.confirmationMsg),1)]),_:1}),a(m,{class:"align-center justify-center gap-2"},{default:e(()=>[a(o,{variant:"elevated",onClick:d},{default:e(()=>[l(" Confirm ")]),_:1}),a(o,{color:"secondary",variant:"tonal",onClick:u},{default:e(()=>[l(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}};export{B as _};