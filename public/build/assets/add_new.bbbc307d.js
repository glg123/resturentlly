import{c as x,s,U as u,ai as z,aP as M,o as $,f as B,w as a,g as t,C as f,j as c,e as r,z as i,i as W,l as G,B as H,F as J,bf as K,be as O,W as Q}from"./main.e5722c22.js";import{b as F}from"./route-block.2f1a6263.js";import{V as S}from"./VBtn.4327307d.js";import{V as j}from"./VSnackbar.dc45fad4.js";import{V as A,c as D}from"./VCard.2abcdcfe.js";import{V as X}from"./VForm.be976fbe.js";import{V as R,a as m}from"./VRow.f8de802a.js";import{V as q}from"./VTextField.c7d5535f.js";import{V as Y}from"./VSelect.23e06609.js";import{V as N}from"./VCheckbox.7ee7e993.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const Z={class:"demo-space-x"},ee={__name:"add_new",setup(le){const{isAppRtl:I}=x(),y=O(),T=Q(),U=s([]);s([]);let _=localStorage.getItem("accessToken");u.defaults.headers.common["Content-Type"]="application/json",u.defaults.headers.common.Accept="application/json",I.value===!0?u.defaults.headers.common.Language="ar":u.defaults.headers.common.Language="en",u.defaults.headers.common.type="Admin",u.defaults.headers.common.role="Admin",u.defaults.headers.common.auth="Bearer "+_;const h=o=>String(o).trim().length==0?b("This field is required"):!0;z(T,()=>{u.get("/admins/permissions/list",{token:_}).then(o=>{U.value=o.data})},{immediate:!0});const v=s(""),V=s(""),w=s(),g=s(),{t:b}=M(),L=[{title:b("active"),value:"active"},{title:b("not_active"),value:"not_active"}];s();const d=s(!1),p=s(!1),k=s(!1),C=s(!1),n=s([]),P=()=>{var o;(o=w.value)==null||o.validate().then(({valid:l})=>{console.log(l),l&&(C.value=!0,k.value=!0,u.post("roles/permissions",{role_name_en:v.value,role_name_ar:V.value,status:g.value,permissions:n.value,token:_}).then(e=>{console.log(e.data),d.value=!0,C.value=!1,k.value=!1,T.replace(y.query.to?String(y.query.to):"/admin/apps/permission/list/")}).catch(e=>{console.log(e.response.data.message),errors.value=e.response.data.message,p.value=!0,C.value=!1,k.value=!1}))})};return(o,l)=>($(),B(R,null,{default:a(()=>[t(j,{location:"top",modelValue:r(d),"onUpdate:modelValue":l[1]||(l[1]=e=>i(d)?d.value=e:null)},{actions:a(()=>[t(S,{color:"success",onClick:l[0]||(l[0]=e=>d.value=!1)},{default:a(()=>[f(c(o.$t("Close")),1)]),_:1})]),default:a(()=>[f(c(o.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),t(j,{color:"error",location:"top",modelValue:r(p),"onUpdate:modelValue":l[3]||(l[3]=e=>i(p)?p.value=e:null)},{actions:a(()=>[t(S,{color:"success",onClick:l[2]||(l[2]=e=>p.value=!1)},{default:a(()=>[f(c(o.$t("Close")),1)]),_:1})]),default:a(()=>[f(c(o.errors)+" ",1)]),_:1},8,["modelValue"]),t(m,{cols:"12"},{default:a(()=>[t(A,{title:o.$t("AddNew")},{default:a(()=>[t(D,{class:"pt-2"},{default:a(()=>[t(X,{ref_key:"refForm",ref:w,class:"mt-6"},{default:a(()=>[t(R,null,{default:a(()=>[t(m,{md:"6",cols:"12"},{default:a(()=>[t(q,{modelValue:r(v),"onUpdate:modelValue":l[4]||(l[4]=e=>i(v)?v.value=e:null),label:o.$t("title_ar"),rules:[h]},null,8,["modelValue","label","rules"])]),_:1}),t(m,{md:"6",cols:"12"},{default:a(()=>[t(q,{modelValue:r(V),"onUpdate:modelValue":l[5]||(l[5]=e=>i(V)?V.value=e:null),label:o.$t("title_en"),rules:[h]},null,8,["modelValue","label","rules"])]),_:1}),t(m,{md:"6",cols:"12"},{default:a(()=>[t(Y,{modelValue:r(g),"onUpdate:modelValue":l[6]||(l[6]=e=>i(g)?g.value=e:null),label:o.$t("Select Status"),items:L,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),t(m,{cols:"12"},{default:a(()=>[t(A,{title:o.$t("roles")},{default:a(()=>[t(D,{class:"pt-0"},{default:a(()=>[W("div",Z,[t(N,{modelValue:r(n),"onUpdate:modelValue":l[7]||(l[7]=e=>i(n)?n.value=e:null),label:r(b)("all"),value:0},null,8,["modelValue","label"]),($(!0),G(J,null,H(r(U),e=>($(),B(N,{key:e.id,modelValue:r(n),"onUpdate:modelValue":l[8]||(l[8]=E=>i(n)?n.value=E:null),label:e.title,value:e.slug},null,8,["modelValue","label","value"]))),128))])]),_:1})]),_:1},8,["title"])]),_:1}),t(m,{cols:"12"},{default:a(()=>[t(S,{type:"submit",loading:r(C),disabled:r(k),onClick:K(P,["prevent"])},{default:a(()=>[f(c(o.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof F=="function"&&F(ee);export{ee as default};
