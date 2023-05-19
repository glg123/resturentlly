import{c as z,s as u,U as r,aP as M,ai as B,o as h,f as F,w as l,g as o,C as v,j as V,e as s,z as k,i as W,l as G,B as H,F as J,bf as K,be as O,W as Q}from"./main.e5722c22.js";import{u as X}from"./useAdminListStore.251ab28b.js";/* empty css                                                                     */import{b as U}from"./route-block.2f1a6263.js";import{V as S}from"./VBtn.4327307d.js";import{V as w}from"./VSnackbar.dc45fad4.js";import{V as A,c as D}from"./VCard.2abcdcfe.js";import{V as Y}from"./VForm.be976fbe.js";import{V as N,a as m}from"./VRow.f8de802a.js";import{V as R}from"./VTextField.c7d5535f.js";import{V as Z}from"./VSelect.23e06609.js";import{V as ee}from"./VCheckbox.7ee7e993.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const ae={class:"demo-space-x"},te={__name:"[id]",setup(le){const{isAppRtl:j}=z();X();const n=O(),$=u([]),i=u([]),q=Q();let g=localStorage.getItem("accessToken");r.defaults.headers.common["Content-Type"]="application/json",r.defaults.headers.common.Accept="application/json",j.value===!0?r.defaults.headers.common.Language="ar":r.defaults.headers.common.Language="en",r.defaults.headers.common.type="Admin",r.defaults.headers.common.role="Admin",r.defaults.headers.common.auth="Bearer "+g;const y=a=>String(a).trim().length==0?C("This field is required"):!0,d=u([]),L=()=>{r.get("/roles/"+Number(n.params.id)+"/get",{token:g}).then(a=>{i.value=a.data,p.value=a.data.status;for(var e=0;e<a.data.role_permissions.abilities.length;e++)d.value.push(a.data.role_permissions.abilities[e].subject)})},P=()=>{r.get("/admins/permissions/list",{token:g}).then(a=>{$.value=a.data})},{t:C}=M(),p=u(),I=[{title:C("active"),value:"active"},{title:C("not_active"),value:"not_active"}],T=u(),f=u(!1),c=u(!1),b=u(!1),_=u(!1);B(n,L,{immediate:!0}),B(n,P,{immediate:!0});const E=()=>{var a;(a=T.value)==null||a.validate().then(({valid:e})=>{console.log(e),e&&(_.value=!0,b.value=!0,r.post("edit/"+Number(n.params.id)+"/roles/permissions",{role_name_ar:i.value.role_name_ar,role_name_en:i.value.role_name_en,status:p.value,permissions:d.value,token:g}).then(t=>{console.log(t.data),f.value=!0,_.value=!1,b.value=!1,q.replace(n.query.to?String(n.query.to):"/admin/apps/permission/list/")}).catch(t=>{console.log(t.response.data.message),errors.value=t.response.data.message,c.value=!0,_.value=!1,b.value=!1}))})};return(a,e)=>(h(),F(N,null,{default:l(()=>[o(w,{location:"top",modelValue:s(f),"onUpdate:modelValue":e[1]||(e[1]=t=>k(f)?f.value=t:null)},{actions:l(()=>[o(S,{color:"success",onClick:e[0]||(e[0]=t=>f.value=!1)},{default:l(()=>[v(V(a.$t("Close")),1)]),_:1})]),default:l(()=>[v(V(a.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),o(w,{color:"error",location:"top",modelValue:s(c),"onUpdate:modelValue":e[3]||(e[3]=t=>k(c)?c.value=t:null)},{actions:l(()=>[o(S,{color:"success",onClick:e[2]||(e[2]=t=>c.value=!1)},{default:l(()=>[v(V(a.$t("Close")),1)]),_:1})]),default:l(()=>[v(V(a.errors)+" ",1)]),_:1},8,["modelValue"]),o(m,{cols:"12"},{default:l(()=>[o(A,{title:a.$t("AddNew")},{default:l(()=>[o(D,{class:"pt-2"},{default:l(()=>[o(Y,{ref_key:"refForm",ref:T,class:"mt-6"},{default:l(()=>[o(N,null,{default:l(()=>[o(m,{md:"6",cols:"12"},{default:l(()=>[o(R,{modelValue:s(i).role_name_ar,"onUpdate:modelValue":e[4]||(e[4]=t=>s(i).role_name_ar=t),label:a.$t("title_ar"),rules:[y]},null,8,["modelValue","label","rules"])]),_:1}),o(m,{md:"6",cols:"12"},{default:l(()=>[o(R,{modelValue:s(i).role_name_en,"onUpdate:modelValue":e[5]||(e[5]=t=>s(i).role_name_en=t),label:a.$t("title_en"),rules:[y]},null,8,["modelValue","label","rules"])]),_:1}),o(m,{md:"6",cols:"12"},{default:l(()=>[o(Z,{modelValue:s(p),"onUpdate:modelValue":e[6]||(e[6]=t=>k(p)?p.value=t:null),label:a.$t("Select Status"),items:I,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),o(m,{cols:"12"},{default:l(()=>[o(A,{title:a.$t("roles")},{default:l(()=>[o(D,{class:"pt-0"},{default:l(()=>[W("div",ae,[(h(!0),G(J,null,H(s($),t=>(h(),F(ee,{key:t.id,modelValue:s(d),"onUpdate:modelValue":e[7]||(e[7]=x=>k(d)?d.value=x:null),label:t.title,value:t.slug},null,8,["modelValue","label","value"]))),128))])]),_:1})]),_:1},8,["title"])]),_:1}),o(m,{cols:"12"},{default:l(()=>[o(S,{type:"submit",loading:s(_),disabled:s(b),onClick:K(E,["prevent"])},{default:l(()=>[v(V(a.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof U=="function"&&U(te);export{te as default};
