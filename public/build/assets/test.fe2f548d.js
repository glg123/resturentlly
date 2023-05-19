import{s as A,ai as B,aP as D,U as m,o as p,f as b,w as t,g as o,C as u,j as d,e as s,i as F,l as N,B as h,F as E,bf as L,be as j}from"./main.e5722c22.js";import{u as I}from"./useAdminListStore.251ab28b.js";import{b as g}from"./route-block.2f1a6263.js";import{V as f}from"./VBtn.4327307d.js";import{V as k}from"./VSnackbar.dc45fad4.js";import{V as C,c as v}from"./VCard.2abcdcfe.js";import{V as R}from"./VForm.be976fbe.js";import{V as S,a as i}from"./VRow.f8de802a.js";import{V as $}from"./VTextField.c7d5535f.js";import{V as q}from"./VSelect.23e06609.js";import{V as _}from"./VCheckbox.7ee7e993.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const M={class:"demo-space-x"},P={__name:"test",setup(z){const T=I(),V=j(),r=A();B(V,()=>{T.getSingleRole(Number(V.params.id)).then(e=>{r.value=e.data})},{immediate:!0});const{t:n}=D(),U=[{title:n("active"),value:"active"},{title:n("not_active"),value:"not_active"}];let w=localStorage.getItem("accessToken");m.defaults.headers.common["Content-Type"]="application/json",m.defaults.headers.common.Accept="application/json",m.defaults.headers.common.Language="ar",m.defaults.headers.common.type="Admin",m.defaults.headers.common.auth="token "+w;const c=e=>String(e).trim().length==0?n("This field is required"):!0;return(e,l)=>(p(),b(S,null,{default:t(()=>[o(k,{location:"top",modelValue:e.isTrue,"onUpdate:modelValue":l[1]||(l[1]=a=>e.isTrue=a)},{actions:t(()=>[o(f,{color:"success",onClick:l[0]||(l[0]=a=>e.isTrue=!1)},{default:t(()=>[u(d(e.$t("Close")),1)]),_:1})]),default:t(()=>[u(d(e.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),o(k,{color:"error",location:"top",modelValue:e.isError,"onUpdate:modelValue":l[3]||(l[3]=a=>e.isError=a)},{actions:t(()=>[o(f,{color:"success",onClick:l[2]||(l[2]=a=>e.isError=!1)},{default:t(()=>[u(d(e.$t("Close")),1)]),_:1})]),default:t(()=>[u(d(e.errors)+" ",1)]),_:1},8,["modelValue"]),o(i,{cols:"12"},{default:t(()=>[o(C,{title:e.$t("AddNew")},{default:t(()=>[o(v,{class:"pt-2"},{default:t(()=>[o(R,{ref:"refForm",class:"mt-6"},{default:t(()=>[o(S,null,{default:t(()=>[o(i,{md:"6",cols:"12"},{default:t(()=>[o($,{modelValue:s(r).role_name_ar,"onUpdate:modelValue":l[4]||(l[4]=a=>s(r).role_name_ar=a),label:e.$t("title_ar"),rules:[c]},null,8,["modelValue","label","rules"])]),_:1}),o(i,{md:"6",cols:"12"},{default:t(()=>[o($,{modelValue:s(r).role_name_en,"onUpdate:modelValue":l[5]||(l[5]=a=>s(r).role_name_en=a),label:e.$t("title_en"),rules:[c]},null,8,["modelValue","label","rules"])]),_:1}),o(i,{md:"6",cols:"12"},{default:t(()=>[o(q,{modelValue:s(r).status,"onUpdate:modelValue":l[6]||(l[6]=a=>s(r).status=a),label:e.$t("Select Status"),items:U,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),o(i,{cols:"12"},{default:t(()=>[o(C,{title:e.$t("roles")},{default:t(()=>[o(v,{class:"pt-0"},{default:t(()=>[F("div",M,[(p(!0),N(E,null,h(e.rolesData,a=>(p(),b(_,{key:a.id,modelValue:e.selectedCheckbox,"onUpdate:modelValue":l[7]||(l[7]=y=>e.selectedCheckbox=y),label:a.title,value:a.slug},null,8,["modelValue","label","value"]))),128))])]),_:1})]),_:1},8,["title"])]),_:1}),o(i,{cols:"12"},{default:t(()=>[o(f,{type:"submit",loading:e.loading,disabled:e.disabled,onClick:L(e.sendFrom,["prevent"])},{default:t(()=>[u(d(e.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof g=="function"&&g(P);export{P as default};
