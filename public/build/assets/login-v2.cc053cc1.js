import{s as u,o as v,f as y,w as t,g as e,i as l,e as a,V as k,t as p,j as C,bf as L,C as m,r as I}from"./main.a5f2feaa.js";import{a as B,b as D,c as N,d as R}from"./auth-v2-login-illustration-light.bdce81f1.js";import{u as c,m as T,a as j}from"./useGenerateImageVariant.98942df7.js";import{_ as M}from"./AuthProvider.049f008d.js";import{b as f}from"./route-block.2f1a6263.js";import{V as _}from"./VImg.b81fa5df.js";import{a as s,V}from"./VRow.11c141e1.js";import{V as P,c as g}from"./VCard.09420318.js";import{V as F}from"./VForm.6997ee7f.js";import{V as b}from"./VTextField.0a298259.js";import{V as U}from"./VCheckbox.c6078b71.js";import{V as S}from"./VBtn.a433eeed.js";import{V as h}from"./VDivider.2bd6b130.js";import"./router.31ac10a2.js";import"./VAvatar.17d32ef5.js";import"./position.36d4d31d.js";import"./VInput.7d0ef3f1.js";import"./index.af8955da.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.a1ac0317.js";import"./easing.36b781ab.js";import"./VCounter.bcb299c1.js";import"./VCheckboxBtn.cbe8e216.js";import"./VSelectionControl.79576fb2.js";const $={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},E={class:"d-flex align-center justify-center w-100 h-100"},G={class:"text-h5 font-weight-semibold mb-1"},W=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),q={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},z=l("span",null,"New on our platform?",-1),A=l("span",{class:"mx-4"},"or",-1),H={__name:"login-v2",setup(J){const r=u({email:"",password:"",remember:!1}),i=u(!1),x=c(R,N,D,B,!0),w=c(j,T);return(K,o)=>{const d=I("RouterLink");return v(),y(V,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(s,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",$,[l("div",E,[e(_,{"max-width":"505",src:a(x),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(_,{class:"auth-footer-mask",src:a(w)},null,8,["src"])])]),_:1}),e(s,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(P,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(g,null,{default:t(()=>[e(a(k),{nodes:a(p).app.logo,class:"mb-6"},null,8,["nodes"]),l("h5",G," Welcome to "+C(a(p).app.title)+"! \u{1F44B}\u{1F3FB} ",1),W]),_:1}),e(g,null,{default:t(()=>[e(F,{onSubmit:o[4]||(o[4]=L(()=>{},["prevent"]))},{default:t(()=>[e(V,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(b,{modelValue:a(r).email,"onUpdate:modelValue":o[0]||(o[0]=n=>a(r).email=n),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(b,{modelValue:a(r).password,"onUpdate:modelValue":o[1]||(o[1]=n=>a(r).password=n),label:"Password",type:a(i)?"text":"password","append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=n=>i.value=!a(i))},null,8,["modelValue","type","append-inner-icon"]),l("div",q,[e(U,{modelValue:a(r).remember,"onUpdate:modelValue":o[3]||(o[3]=n=>a(r).remember=n),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v2"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e(S,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(s,{cols:"12",class:"text-center text-base"},{default:t(()=>[z,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v2"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(h),A,e(h)]),_:1}),e(s,{cols:"12",class:"text-center"},{default:t(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof f=="function"&&f(H);export{H as default};