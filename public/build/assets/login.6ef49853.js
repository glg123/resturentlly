import{s as m,o as B,l as P,g as e,w as t,i as a,e as s,V as E,t as x,j as F,bf as M,z as _,C as i,be as j,O,r as $,$ as q}from"./main.078a9716.js";import{u as J}from"./useAppAbility.190776ab.js";import{_ as U}from"./AuthProvider.a065cb23.js";import{u as y,m as z,a as G}from"./useGenerateImageVariant.ac9d5a80.js";import W from"./NavBarI18n.63fa3ae6.js";import H from"./test3.a691e199.js";import{r as v,f as K}from"./validators.e59f90da.js";import{a as Q,b as X,c as Y,d as Z}from"./auth-v2-login-illustration-light.bdce81f1.js";import{b as w}from"./route-block.2f1a6263.js";import{a as n,V as k}from"./VRow.e13b536b.js";import{V as I}from"./VImg.cc893ccb.js";import{V as ee,c as V}from"./VCard.3afa8a52.js";import{V as te}from"./VAlert.901d9b16.js";import{V as C}from"./VTextField.d8a7d912.js";import{V as se}from"./VCheckbox.876e9264.js";import{V as oe}from"./VBtn.e4c558dd.js";import{V as S}from"./VDivider.cfe78da3.js";import{V as ae}from"./VForm.f4c68f82.js";import"./I18n.de9e55c5.js";import"./VMenu.60374e62.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.a984c125.js";import"./VOverlay.c04acb7b.js";import"./router.4bb23ac0.js";import"./lazy.5006f860.js";import"./easing.36b781ab.js";import"./dialog-transition.06e38ff2.js";import"./VList.05852a98.js";import"./index.8a0d3cc6.js";import"./VAvatar.ecffb864.js";import"./position.e83b1372.js";import"./index.b522f886.js";/* empty css                   */import"./VField.db9fd7d9.js";import"./VInput.a7f379dc.js";import"./VCounter.3a24309c.js";import"./VCheckboxBtn.83e8d540.js";import"./VSelectionControl.af7cec95.js";const re={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},le={class:"d-flex align-center justify-center w-100 h-100"},ne={class:"text-h5 font-weight-semibold mb-1"},ie=a("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),me=a("p",{class:"text-caption mb-2"},[i(" Admin Email: "),a("strong",null,"admin@demo.com"),i(" / Pass: "),a("strong",null,"admin")],-1),ue=a("p",{class:"text-caption mb-0"},[i(" Client Email: "),a("strong",null,"client@demo.com"),i(" / Pass: "),a("strong",null,"client")],-1),de={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},ce=a("span",null,"New on our platform?",-1),pe=a("span",{class:"mx-4"},"or",-1),fe={__name:"login",setup(ge){const L=y(Z,Y,X,Q,!0),N=y(G,z),u=m(!1),b=j(),R=O(),T=J(),f=m({email:void 0,password:void 0}),h=m(),d=m("admin@demo.com"),c=m("admin"),g=m(!1),D=()=>{q.post("/login",{email:d.value,password:c.value}).then(r=>{const{accessToken:o,userData:p,userAbilities:l}=r.data;console.log(r.data,"test"),localStorage.setItem("userAbilities",JSON.stringify(l)),T.update(l),localStorage.setItem("userData",JSON.stringify(p)),localStorage.setItem("accessToken",JSON.stringify(o)),R.replace(b.query.to?String(b.query.to):"/dashboards/")}).catch(r=>{const{errors:o}=r.response.data;f.value=o,console.error(r.response.data)})},A=()=>{var r;(r=h.value)==null||r.validate().then(({valid:o})=>{o&&D()})};return(r,o)=>{const p=$("RouterLink");return B(),P("div",null,[e(W),e(k,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(n,{lg:"4",class:"d-none d-lg-flex"},{default:t(()=>[a("div",re,[a("div",le,[e(I,{"max-width":"505",src:s(L),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(I,{src:s(N),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(n,{lg:"4",class:"d-none d-lg-flex"},{default:t(()=>[e(H)]),_:1}),e(n,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(ee,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(V,null,{default:t(()=>[e(s(E),{nodes:s(x).app.logo2,class:"mb-6"},null,8,["nodes"]),a("h5",ne," Welcome to "+F(s(x).app.title)+"! \u{1F44B}\u{1F3FB} ",1),ie]),_:1}),e(V,null,{default:t(()=>[e(te,{color:"primary",variant:"tonal"},{default:t(()=>[me,ue]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(s(ae),{ref_key:"refVForm",ref:h,onSubmit:M(A,["prevent"])},{default:t(()=>[e(k,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(C,{modelValue:s(d),"onUpdate:modelValue":o[0]||(o[0]=l=>_(d)?d.value=l:null),label:"Email",type:"email",rules:[s(v),s(K)],"error-messages":s(f).email},null,8,["modelValue","rules","error-messages"])]),_:1}),e(n,{cols:"12"},{default:t(()=>[e(C,{modelValue:s(c),"onUpdate:modelValue":o[1]||(o[1]=l=>_(c)?c.value=l:null),label:"Password",rules:[s(v)],type:s(u)?"text":"password","error-messages":s(f).password,"append-inner-icon":s(u)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=l=>u.value=!s(u))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),a("div",de,[e(se,{modelValue:s(g),"onUpdate:modelValue":o[3]||(o[3]=l=>_(g)?g.value=l:null),label:"Remember me"},null,8,["modelValue"]),e(p,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(oe,{block:"",type:"submit"},{default:t(()=>[i(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[ce,e(p,{class:"text-primary ms-2",to:{name:"register"}},{default:t(()=>[i(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(S),pe,e(S)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:t(()=>[e(U)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}}};typeof w=="function"&&w(fe);export{fe as default};
