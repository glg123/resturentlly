import{s as V,bC as n,o as _,f as C,w as a,g as e,C as s,bf as g,e as w,z as v,i as x}from"./main.990d9ea9.js";import{_ as y}from"./DialogCloseBtn.f34cf941.js";import{V as N,a as D,b as h,d as S,c as B}from"./VCard.94cdd6ce.js";import{V as T}from"./VForm.81841bf1.js";import{V as k}from"./VTextField.eb67bf6a.js";import{V as d}from"./VBtn.adcd713f.js";import{V as M}from"./VDialog.45942417.js";const P=x("p",{class:"mb-6"}," Enter your mobile phone number with country code and we will send you a verification code. ",-1),z={__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{type:String,required:!1},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(b,{emit:l}){const i=b,o=V(structuredClone(n(i.mobileNumber))),f=()=>{o.value&&(l("submit",o.value),l("update:isDialogVisible",!1))},p=()=>{o.value=structuredClone(n(i.mobileNumber)),l("update:isDialogVisible",!1)},r=u=>{l("update:isDialogVisible",u)};return(u,t)=>{const c=y;return _(),C(M,{"max-width":"600","model-value":i.isDialogVisible,"onUpdate:modelValue":r},{default:a(()=>[e(c,{onClick:t[0]||(t[0]=m=>r(!1))}),e(N,{class:"pa-5 pa-sm-15"},{default:a(()=>[e(D,{class:"text-center"},{default:a(()=>[e(h,{class:"text-h5 font-weight-medium"},{default:a(()=>[s(" Enable One Time Password ")]),_:1}),e(S,{class:"mt-3"},{default:a(()=>[s(" Verify Your Mobile Number for SMS ")]),_:1})]),_:1}),e(B,{class:"pt-6"},{default:a(()=>[P,e(T,{onSubmit:t[2]||(t[2]=g(()=>{},["prevent"]))},{default:a(()=>[e(k,{modelValue:w(o),"onUpdate:modelValue":t[1]||(t[1]=m=>v(o)?o.value=m:null),dirty:"",name:"mobile",type:"number",prefix:"+1",label:"Phone Number",placeholder:"202 555 0111",class:"mb-5"},null,8,["modelValue"]),e(d,{type:"submit",class:"me-3",onClick:f},{default:a(()=>[s(" Submit ")]),_:1}),e(d,{color:"secondary",variant:"tonal",onClick:p},{default:a(()=>[s(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}};export{z as _};
