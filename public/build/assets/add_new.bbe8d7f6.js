import{c as M,s,U as m,aP as O,o as R,f as q,w as o,g as a,C as v,j as b,e as r,z as u,p as P,bf as W,be as G,W as H}from"./main.e5722c22.js";import{e as K}from"./validators.330a354f.js";import{c as Q}from"./index.b522f886.js";import{b as B}from"./route-block.2f1a6263.js";import{V as T}from"./VBtn.4327307d.js";import{V as D}from"./VSnackbar.dc45fad4.js";import{V as X,c as Y}from"./VCard.2abcdcfe.js";import{V as Z}from"./VForm.be976fbe.js";import{V as I,a as n}from"./VRow.f8de802a.js";import{V as p}from"./VTextField.c7d5535f.js";import{V as x}from"./VSelect.23e06609.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const ee={__name:"add_new",setup(le){const{isAppRtl:j}=M(),_=G(),E=H();s([]),s([]);const A=s({}),L=JSON.parse(localStorage.getItem("userData")||"null");let F=localStorage.getItem("accessToken");m.defaults.headers.common["Content-Type"]="application/json",m.defaults.headers.common.Accept="application/json",j.value===!0?m.defaults.headers.common.Language="ar":m.defaults.headers.common.Language="en",m.defaults.headers.common.type="User",m.defaults.headers.common.role="user",m.defaults.headers.common.auth="Bearer "+F;const d=t=>String(t).trim().length==0?i("This field is required"):!0,h=t=>Q(t)?!0:Array.isArray(t)?t.every(e=>/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(e)))||i("This field must be an integer"):/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(t))||i("This field must be an integer"),g=s(""),$=s(""),f=s(""),y=s(""),C=s(""),S=s(""),N=s(),k=s(),{t:i}=O(),z=[{title:i("active"),value:"active"},{title:i("not_active"),value:"not_active"}];s();const c=s(!1),V=s(!1),U=s(!1),w=s(!1);s([]);const J=()=>{var t;(t=N.value)==null||t.validate().then(({valid:e})=>{console.log(e),e&&(w.value=!0,U.value=!0,m.post("client/add/manager/branche",{first_name:g.value,last_name:$.value,count_emp:f.value?f.value:null,password:y.value,email:C.value,mobile:S.value,status:k.value,token:F}).then(l=>{console.log(l.data),c.value=!0,w.value=!1,U.value=!1,E.replace(_.query.to?String(_.query.to):"/dashboards/apps/branches/list/")}).catch(l=>{console.log(l.response.data.message),A.value=l.response.data.message,V.value=!0,w.value=!1,U.value=!1}))})};return(t,e)=>(R(),q(I,null,{default:o(()=>[a(D,{location:"top",modelValue:r(c),"onUpdate:modelValue":e[1]||(e[1]=l=>u(c)?c.value=l:null)},{actions:o(()=>[a(T,{color:"success",onClick:e[0]||(e[0]=l=>c.value=!1)},{default:o(()=>[v(b(t.$t("Close")),1)]),_:1})]),default:o(()=>[v(b(t.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),a(D,{color:"error",location:"top",modelValue:r(V),"onUpdate:modelValue":e[3]||(e[3]=l=>u(V)?V.value=l:null)},{actions:o(()=>[a(T,{color:"success",onClick:e[2]||(e[2]=l=>V.value=!1)},{default:o(()=>[v(b(t.$t("Close")),1)]),_:1})]),default:o(()=>[v(b(r(A))+" ",1)]),_:1},8,["modelValue"]),a(n,{cols:"12"},{default:o(()=>[a(X,{title:t.$t("AddNew")},{default:o(()=>[a(Y,{class:"pt-2"},{default:o(()=>[a(Z,{ref_key:"refForm",ref:N,class:"mt-6"},{default:o(()=>[a(I,null,{default:o(()=>[a(n,{md:"6",cols:"12"},{default:o(()=>[a(p,{modelValue:r(g),"onUpdate:modelValue":e[4]||(e[4]=l=>u(g)?g.value=l:null),label:t.$t("first_name"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1}),a(n,{md:"6",cols:"12"},{default:o(()=>[a(p,{modelValue:r($),"onUpdate:modelValue":e[5]||(e[5]=l=>u($)?$.value=l:null),label:t.$t("last_name"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1}),a(n,{md:"6",cols:"12"},{default:o(()=>[a(x,{modelValue:r(k),"onUpdate:modelValue":e[6]||(e[6]=l=>u(k)?k.value=l:null),label:t.$t("Select Status"),items:z,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),a(n,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:r(C),"onUpdate:modelValue":e[7]||(e[7]=l=>u(C)?C.value=l:null),label:t.$t("email"),rules:[d,r(K)]},null,8,["modelValue","label","rules"])]),_:1}),a(n,{md:"6",cols:"12"},{default:o(()=>[a(p,{modelValue:r(S),"onUpdate:modelValue":e[8]||(e[8]=l=>u(S)?S.value=l:null),rules:[d,h],label:r(i)("mobile")},null,8,["modelValue","rules","label"])]),_:1}),r(L).can_add_emp?(R(),q(n,{key:0,md:"6",cols:"12"},{default:o(()=>[a(p,{modelValue:r(f),"onUpdate:modelValue":e[9]||(e[9]=l=>u(f)?f.value=l:null),label:t.$t("count_emp"),rules:[d]},null,8,["modelValue","label","rules"])]),_:1})):P("",!0),a(n,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:r(y),"onUpdate:modelValue":e[10]||(e[10]=l=>u(y)?y.value=l:null),label:t.$t("password"),type:"password",rules:[d],autocomplete:"on"},null,8,["modelValue","label","rules"])]),_:1}),a(n,{cols:"12"},{default:o(()=>[a(T,{type:"submit",loading:r(w),disabled:r(U),onClick:W(J,["prevent"])},{default:o(()=>[v(b(t.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof B=="function"&&B(ee);export{ee as default};
