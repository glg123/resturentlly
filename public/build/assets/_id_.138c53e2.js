import{c as I,s as n,U as u,aP as A,ai as L,o as w,f as y,w as t,g as a,C as v,j as b,e as s,z as $,p as M,bf as h,be as z,W as E}from"./main.e5722c22.js";import{e as J}from"./validators.330a354f.js";import{b as D}from"./route-block.2f1a6263.js";import{V as S}from"./VBtn.4327307d.js";import{V as T}from"./VSnackbar.dc45fad4.js";import{V as O,c as W}from"./VCard.2abcdcfe.js";import{V as G}from"./VForm.be976fbe.js";import{V as N,a as m}from"./VRow.f8de802a.js";import{V as i}from"./VTextField.c7d5535f.js";import{V as H}from"./VSelect.23e06609.js";import"./index.b522f886.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const K={__name:"[id]",setup(Q){const{isAppRtl:R}=I(),F=JSON.parse(localStorage.getItem("userData")||"null"),p=z(),r=n([]),P=E();let k=localStorage.getItem("accessToken");u.defaults.headers.common["Content-Type"]="application/json",u.defaults.headers.common.Accept="application/json",R.value===!0?u.defaults.headers.common.Language="ar":u.defaults.headers.common.Language="en",u.defaults.headers.common.type="User",u.defaults.headers.common.role="user",u.defaults.headers.common.auth="Bearer "+k;const d=o=>String(o).trim().length===0?g("This field is required"):!0,j=()=>{u.get("/client/single/manager/"+Number(p.params.id)+"/branche",{token:k}).then(o=>{r.value=o.data,f.value=o.data.status})},{t:g}=A(),f=n(),q=[{title:g("active"),value:"active"},{title:g("not_active"),value:"not_active"}],U=n(),V=n(!1),c=n(!1),C=n(!1),_=n(!1);L(p,j,{immediate:!0});const B=()=>{var o;(o=U.value)==null||o.validate().then(({valid:e})=>{console.log(e),e&&(_.value=!0,C.value=!0,u.post("edit/"+Number(p.params.id)+"/roles/permissions",{role_name_ar:PerRolesData.value.role_name_ar,role_name_en:PerRolesData.value.role_name_en,status:f.value,permissions:selectedCheckbox.value,token:k}).then(l=>{console.log(l.data),V.value=!0,_.value=!1,C.value=!1,P.replace(p.query.to?String(p.query.to):"/admin/apps/permission/list/")}).catch(l=>{console.log(l.response.data.message),errors.value=l.response.data.message,c.value=!0,_.value=!1,C.value=!1}))})};return(o,e)=>(w(),y(N,null,{default:t(()=>[a(T,{location:"top",modelValue:s(V),"onUpdate:modelValue":e[1]||(e[1]=l=>$(V)?V.value=l:null)},{actions:t(()=>[a(S,{color:"success",onClick:e[0]||(e[0]=l=>V.value=!1)},{default:t(()=>[v(b(o.$t("Close")),1)]),_:1})]),default:t(()=>[v(b(o.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),a(T,{color:"error",location:"top",modelValue:s(c),"onUpdate:modelValue":e[3]||(e[3]=l=>$(c)?c.value=l:null)},{actions:t(()=>[a(S,{color:"success",onClick:e[2]||(e[2]=l=>c.value=!1)},{default:t(()=>[v(b(o.$t("Close")),1)]),_:1})]),default:t(()=>[v(b(o.errors)+" ",1)]),_:1},8,["modelValue"]),a(m,{cols:"12"},{default:t(()=>[a(O,{title:o.$t("AddNew")},{default:t(()=>[a(W,{class:"pt-2"},{default:t(()=>[a(G,{ref_key:"refForm",ref:U,class:"mt-6"},{default:t(()=>[a(N,null,{default:t(()=>[a(m,{md:"6",cols:"12"},{default:t(()=>[a(i,{modelValue:s(r).first_name,"onUpdate:modelValue":e[4]||(e[4]=l=>s(r).first_name=l),label:o.$t("first_name"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1}),a(m,{md:"6",cols:"12"},{default:t(()=>[a(i,{modelValue:s(r).last_name,"onUpdate:modelValue":e[5]||(e[5]=l=>s(r).last_name=l),label:o.$t("last_name"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1}),a(m,{md:"6",cols:"12"},{default:t(()=>[a(H,{modelValue:s(f),"onUpdate:modelValue":e[6]||(e[6]=l=>$(f)?f.value=l:null),label:o.$t("Select Status"),items:q,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),a(m,{cols:"12",md:"6"},{default:t(()=>[a(i,{modelValue:s(r).email,"onUpdate:modelValue":e[7]||(e[7]=l=>s(r).email=l),label:o.$t("email"),rules:[d,s(J)]},null,8,["modelValue","label","rules"])]),_:1}),a(m,{md:"6",cols:"12"},{default:t(()=>[a(i,{modelValue:s(r).mobile,"onUpdate:modelValue":e[8]||(e[8]=l=>s(r).mobile=l),rules:[d,o.mobileValidator],label:s(g)("mobile")},null,8,["modelValue","rules","label"])]),_:1}),s(F).can_add_emp?(w(),y(m,{key:0,md:"6",cols:"12"},{default:t(()=>[a(i,{modelValue:s(r).count_emp,"onUpdate:modelValue":e[9]||(e[9]=l=>s(r).count_emp=l),label:o.$t("count_emp"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1})):M("",!0),a(m,{cols:"12",md:"6"},{default:t(()=>[a(i,{modelValue:s(r).password,"onUpdate:modelValue":e[10]||(e[10]=l=>s(r).password=l),label:o.$t("password"),type:"password",rules:[d],autocomplete:"on"},null,8,["modelValue","label","rules"])]),_:1}),a(m,{cols:"12"},{default:t(()=>[a(S,{type:"submit",loading:s(_),disabled:s(C),onClick:h(B,["prevent"])},{default:t(()=>[v(b(o.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof D=="function"&&D(K);export{K as default};