import{c as z,s as l,aP as A,U as r,al as E,o as v,l as M,g as t,w as o,E as D,i as n,e,V as W,t as x,C as V,j as i,f as C,p as P,bf as G,z as R,y as H,F as J,be as K,W as O,r as Q}from"./main.e5722c22.js";import{a as X,b as Y}from"./auth-v1-top-shape.6dee6b8f.js";import"./vue-cookies.aacfa879.js";import Z from"./NavBarI18n.0fbee115.js";import{b as S}from"./route-block.2f1a6263.js";import{a as c,V as I}from"./VRow.f8de802a.js";import{V as T}from"./VImg.a33717ea.js";import{a as ee,b as te,c as k,V as oe}from"./VCard.2abcdcfe.js";import{V as B}from"./VTextField.c7d5535f.js";import{V as se}from"./VBtn.4327307d.js";import{V as ae}from"./VForm.be976fbe.js";import"./I18n.f7b18a27.js";import"./VMenu.1340a45a.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.23faa331.js";import"./VOverlay.ed5a8d46.js";import"./router.f3c33ba4.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./dialog-transition.738c368f.js";import"./VList.345ceaa4.js";import"./index.19c19380.js";import"./VAvatar.1bc59f66.js";import"./VDivider.19cd6d54.js";import"./position.fb77405d.js";/* empty css                   */import"./VField.01372b27.js";import"./VInput.1a6e2ae8.js";import"./VCounter.bc3c6bfa.js";const ne=n("h1",{class:"text-primary-user"},"Resturentlly",-1),le=[ne],re={class:"auth-wrapper d-flex align-center justify-center pa-4"},ie={class:"position-relative my-sm-16"},de={class:"d-flex"},ce={class:"text-h5 font-weight-semibold mb-1"},pe={class:"mb-0"},me={class:"font-weight-bold"},ue={__name:"[token]",setup(fe){const{isAppRtl:N}=z(),u=l(!1),f=l(""),_=l(""),h=l(!1),{t:d}=A(),g=K(),j=O(),w=l(g.params.token),p=l([]),b=l(""),y=l();localStorage.getItem("accessToken"),r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Accept="application/json",N.value===!0?r.defaults.headers.common.Language="ar":r.defaults.headers.common.Language="en",r.defaults.headers.common.type="Customer";const F=()=>{r.post("/check-token",{token:w.value}).then(s=>{b.value=s.data.email,console.log(s.data)}).catch(s=>{s.response.data,p.value=s.response.data.message,console.error(s.response.data.message,"ddd")})},L=()=>{document.location.href="/"};E(()=>{F()});const U=()=>{r.post("/rest-password",{token:w.value,email:b.value,password:f.value,password_confirmation:_.value}).then(s=>(j.replace(g.query.to?String(g.query.to):"/customers/login"),null)).catch(s=>{p.value=s.response.data.message})},$=()=>{var s;(s=y.value)==null||s.validate().then(({valid:a})=>{a&&U()})};return(s,a)=>{const q=Q("RouterLink");return v(),M(J,null,[t(I,null,{default:o(()=>[t(c,{cols:"6",class:"mx-auto"},{default:o(()=>[t(Z)]),_:1}),t(c,{cols:"6",md:"6",class:D(["text-center",s.dir_h1])},{default:o(()=>[n("a",{onClick:L,href:"#"},le)]),_:1},8,["class"])]),_:1}),n("div",re,[n("div",ie,[t(T,{src:e(X),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),t(T,{src:e(Y),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),t(oe,{class:"auth-card pa-4","max-width":"448"},{default:o(()=>[t(ee,{class:"justify-center"},{prepend:o(()=>[n("div",de,[t(e(W),{nodes:e(x).app.logo2},null,8,["nodes"])])]),default:o(()=>[t(te,{class:"font-weight-bold text-h5 py-1"},{default:o(()=>[V(i(e(x).app.title),1)]),_:1})]),_:1}),t(k,{class:"pt-2"},{default:o(()=>[n("h5",ce,i(e(d)("Reset_Password"))+" \u{1F512} ",1),n("p",pe,[V(i(e(d)("for"))+" ",1),n("span",me,i(e(b)),1)]),e(p).length?(v(),C(k,{key:0,class:"text-danger"},{default:o(()=>[V(i(e(p)),1)]),_:1})):P("",!0)]),_:1}),e(p).length?P("",!0):(v(),C(k,{key:0},{default:o(()=>[t(e(ae),{ref_key:"refVForm",ref:y,onSubmit:G($,["prevent"])},{default:o(()=>[t(I,null,{default:o(()=>[t(c,{cols:"12"},{default:o(()=>[t(B,{modelValue:e(f),"onUpdate:modelValue":a[0]||(a[0]=m=>R(f)?f.value=m:null),label:e(d)("New Password"),type:e(u)?"text":"password","append-inner-icon":e(u)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[1]||(a[1]=m=>u.value=!e(u))},null,8,["modelValue","label","type","append-inner-icon"])]),_:1}),t(c,{cols:"12"},{default:o(()=>[t(B,{modelValue:e(_),"onUpdate:modelValue":a[2]||(a[2]=m=>R(_)?_.value=m:null),label:e(d)("Confirm Password"),type:e(h)?"text":"password","append-inner-icon":e(h)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[3]||(a[3]=m=>h.value=!e(h))},null,8,["modelValue","label","type","append-inner-icon"])]),_:1}),t(c,{cols:"12"},{default:o(()=>[t(se,{block:"",type:"submit"},{default:o(()=>[V(i(e(d)("Set New Password")),1)]),_:1})]),_:1}),t(c,{cols:"12"},{default:o(()=>[t(q,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:o(()=>[t(H,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),n("span",null,i(e(d)("Back to login")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}))]),_:1})])])],64)}}};typeof S=="function"&&S(ue);export{ue as default};