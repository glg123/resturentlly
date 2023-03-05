import{s as u,o as h,l as g,i as s,g as e,e as o,w as t,V as w,t as p,C as m,j as c,bf as v,r as y}from"./main.990d9ea9.js";import{a as C,b as k}from"./auth-v1-top-shape.6dee6b8f.js";import{_ as B}from"./AuthProvider.ab5c13b9.js";import{b as f}from"./route-block.2f1a6263.js";import{V as _}from"./VImg.df47303b.js";import{a as N,b as R,c as V,V as T}from"./VCard.94cdd6ce.js";import{V as j}from"./VForm.81841bf1.js";import{V as P,a as n}from"./VRow.0bcdac56.js";import{V as b}from"./VTextField.eb67bf6a.js";import{V as S}from"./VCheckbox.ef218cfd.js";import{V as F}from"./VBtn.adcd713f.js";import{V as x}from"./VDivider.e5e2b0d1.js";import"./router.0858fd47.js";import"./VAvatar.40922329.js";import"./position.e5bc53dd.js";import"./VInput.1ed46ed6.js";import"./index.e3fe277e.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.1e57bd4f.js";import"./easing.36b781ab.js";import"./VCounter.02465320.js";import"./VCheckboxBtn.5a069503.js";import"./VSelectionControl.80d3fb47.js";const I={class:"auth-wrapper d-flex align-center justify-center pa-4"},L={class:"position-relative my-sm-16"},U={class:"d-flex"},D={class:"text-h5 font-weight-semibold mb-1"},E=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),$={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},M=s("span",null,"New on our platform?",-1),W=s("span",{class:"mx-4"},"or",-1),q={__name:"login-v1",setup(z){const l=u({email:"",password:"",remember:!1}),i=u(!1);return(A,a)=>{const d=y("RouterLink");return h(),g("div",I,[s("div",L,[e(_,{src:o(C),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(_,{src:o(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(T,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(N,{class:"justify-center"},{prepend:t(()=>[s("div",U,[e(o(w),{nodes:o(p).app.logo},null,8,["nodes"])])]),default:t(()=>[e(R,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(c(o(p).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-1"},{default:t(()=>[s("h5",D," Welcome to "+c(o(p).app.title)+"! \u{1F44B}\u{1F3FB} ",1),E]),_:1}),e(V,null,{default:t(()=>[e(j,{onSubmit:a[4]||(a[4]=v(()=>{},["prevent"]))},{default:t(()=>[e(P,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(b,{modelValue:o(l).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(l).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(b,{modelValue:o(l).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(l).password=r),label:"Password",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=r=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"]),s("div",$,[e(S,{modelValue:o(l).remember,"onUpdate:modelValue":a[3]||(a[3]=r=>o(l).remember=r),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v1"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e(F,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:t(()=>[M,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v1"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(x),W,e(x)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof f=="function"&&f(q);export{q as default};
