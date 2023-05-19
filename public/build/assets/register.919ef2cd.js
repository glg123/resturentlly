import{s as n,o as B,l as T,g as e,w as t,E,i as r,e as a,V as M,t as F,bf as q,z as p,C as v,be as J,W as O,r as P,U as $}from"./main.e5722c22.js";import z from"./NavBarI18n.0fbee115.js";import W from"./watch.c419ed99.js";import{a as G,b as X,c as Y,d as H}from"./auth-v2-register-illustration-light.b833464a.js";import{u as x,m as K,a as Q}from"./useGenerateImageVariant.ae887621.js";import{u as Z}from"./useAppAbility.977f44d8.js";import{_ as ee}from"./AuthProvider.ba3beb86.js";import{r as V,f as te,e as ae}from"./validators.330a354f.js";import{b as k}from"./route-block.2f1a6263.js";import{a as l,V as g}from"./VRow.f8de802a.js";import{V as w}from"./VImg.a33717ea.js";import{V as se,c as I}from"./VCard.2abcdcfe.js";import{V as h}from"./VTextField.c7d5535f.js";import{V as oe}from"./VCheckbox.7ee7e993.js";import{V as le}from"./VInput.1a6e2ae8.js";import{V as re}from"./VBtn.4327307d.js";import{V as S}from"./VDivider.19cd6d54.js";import{V as ie}from"./VForm.be976fbe.js";import"./I18n.f7b18a27.js";import"./VMenu.1340a45a.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.23faa331.js";import"./VOverlay.ed5a8d46.js";import"./router.f3c33ba4.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./dialog-transition.738c368f.js";import"./VList.345ceaa4.js";import"./index.19c19380.js";import"./VAvatar.1bc59f66.js";import"./position.fb77405d.js";/* empty css                                                              */import"./index.b522f886.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";const ne=r("h1",{class:"text-primary-user"},"Resturentlly",-1),me=[ne],ue={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},de={class:"d-flex align-center justify-center w-100 h-100"},ce=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),pe=r("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),fe={class:"d-flex align-center mt-2 mb-4"},_e=r("span",{class:"me-1"},"I agree to",-1),Ve=r("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),ge=r("span",null,"Already have an account?",-1),he=r("span",{class:"mx-4"},"or",-1),ye={__name:"register",setup(be){const y=n(),m=n("johnDoe"),u=n("john@example.com"),d=n("john@VUEXY#123"),f=n(!0),b=J(),C=O(),L=Z(),D=n({email:void 0,password:void 0}),R=()=>{$.post("/api/register",{username:m.value,email:u.value,password:d.value}).then(i=>{const{accessToken:s,userData:_,userAbilities:o}=i.data;return localStorage.setItem("userAbilities",JSON.stringify(o)),L.update(o),localStorage.setItem("userData",JSON.stringify(_)),localStorage.setItem("accessToken",JSON.stringify(s)),C.replace(b.query.to?String(b.query.to):"/"),null}).catch(i=>{const{errors:s}=i.response.data;D.value=s,console.error(i.response.data)})},N=x(H,Y,X,G,!0),U=x(Q,K),c=n(!1),j=()=>{var i;(i=y.value)==null||i.validate().then(({valid:s})=>{s&&R()})},A=()=>{document.location.href="/"};return(i,s)=>{const _=P("RouterLink");return B(),T("div",null,[e(g,null,{default:t(()=>[e(l,{cols:"6",class:"mx-auto"},{default:t(()=>[e(z)]),_:1}),e(l,{cols:"6",md:"6",class:E(["text-center",i.dir_h1])},{default:t(()=>[r("a",{onClick:A,href:"#"},me)]),_:1},8,["class"])]),_:1}),e(g,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(l,{lg:"4",class:"d-none d-lg-flex"},{default:t(()=>[r("div",ue,[r("div",de,[e(w,{"max-width":"441",src:a(N),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(w,{class:"auth-footer-mask",src:a(U)},null,8,["src"])])]),_:1}),e(l,{lg:"4",class:"d-none d-lg-flex"},{default:t(()=>[e(W)]),_:1}),e(l,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(se,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(I,null,{default:t(()=>[e(a(M),{nodes:a(F).app.logo2,class:"mb-6"},null,8,["nodes"]),ce,pe]),_:1}),e(I,null,{default:t(()=>[e(a(ie),{ref_key:"refVForm",ref:y,onSubmit:q(j,["prevent"])},{default:t(()=>[e(g,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(h,{modelValue:a(m),"onUpdate:modelValue":s[0]||(s[0]=o=>p(m)?m.value=o:null),rules:[a(V),a(te)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(h,{modelValue:a(u),"onUpdate:modelValue":s[1]||(s[1]=o=>p(u)?u.value=o:null),rules:[a(V),a(ae)],label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(h,{modelValue:a(d),"onUpdate:modelValue":s[2]||(s[2]=o=>p(d)?d.value=o:null),rules:[a(V)],label:"Password",type:a(c)?"text":"password","append-inner-icon":a(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=o=>c.value=!a(c))},null,8,["modelValue","rules","type","append-inner-icon"]),r("div",fe,[e(oe,{id:"privacy-policy",modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=o=>p(f)?f.value=o:null),inline:""},null,8,["modelValue"]),e(le,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:t(()=>[_e,Ve]),_:1})]),e(re,{block:"",type:"submit"},{default:t(()=>[v(" Sign up ")]),_:1})]),_:1}),e(l,{cols:"12",class:"text-center text-base"},{default:t(()=>[ge,e(_,{class:"text-primary ms-2",to:{name:"dashboards-login"}},{default:t(()=>[v(" Sign in instead ")]),_:1})]),_:1}),e(l,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(S),he,e(S)]),_:1}),e(l,{cols:"12",class:"text-center"},{default:t(()=>[e(ee)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}}};typeof k=="function"&&k(ye);export{ye as default};
