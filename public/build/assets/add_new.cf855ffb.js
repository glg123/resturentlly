import{$ as m,s as r,aP as O,o as q,f as B,w as o,g as e,C as f,j as i,e as s,z as n,G as Q,p as W,i as g,y as X,bf as Y,be as Z,O as ee,H as le}from"./main.a5f2feaa.js";import{f as ae,a as oe,d as te}from"./validators.e59f90da.js";import{b as D}from"./route-block.2f1a6263.js";import{V as R}from"./VBtn.a433eeed.js";import{V as E}from"./VSnackbar.fa1e60a2.js";import{a as u,V as P}from"./VRow.11c141e1.js";import{c as I,V as z}from"./VCard.09420318.js";import{V as se}from"./VAlert.f0d4fef6.js";import{V as re}from"./VForm.6997ee7f.js";import{V as ue}from"./VAvatar.17d32ef5.js";import{V as b}from"./VTextField.0a298259.js";import{V as x}from"./VSelect.d5a260e9.js";import"./index.b522f886.js";import"./router.31ac10a2.js";import"./position.36d4d31d.js";import"./scopeId.2cacba18.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.215e4470.js";import"./lazy.9cc9d935.js";import"./easing.36b781ab.js";import"./VImg.b81fa5df.js";import"./VInput.7d0ef3f1.js";import"./index.af8955da.js";/* empty css                   */import"./VField.a1ac0317.js";import"./VCounter.bcb299c1.js";import"./VList.89546436.js";import"./VDivider.2bd6b130.js";import"./dialog-transition.e2294cd8.js";import"./VMenu.dac15267.js";import"./VCheckboxBtn.cbe8e216.js";import"./VSelectionControl.79576fb2.js";import"./VChip.d1d16c5d.js";const ne={ref:"refForm_front",class:"d-flex flex-column justify-center gap-4"},de={class:"d-flex flex-wrap gap-2"},ie={class:"d-none d-sm-block"},me=g("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),fe={__name:"add_new",setup(pe){const A=Z(),L=ee();let T=localStorage.getItem("accessToken");m.defaults.headers.common["Content-Type"]="application/json",m.defaults.headers.common.Accept="application/json",m.defaults.headers.common.Language="ar",m.defaults.headers.common.type="Admin",m.defaults.headers.common.auth="token "+T;const p=t=>String(t).trim().length==0?d("This field is required"):!0,M=()=>{var t;(t=j.value)==null||t.validate().then(({valid:l})=>{console.log(l),l&&(F.value=!0,C.value=!0,m.post("add/admins",{name:k.value,mobile:$.value,password:c.value,email:y.value,role:_.value,status:S.value,avatar:U.value,token:T}).then(a=>{console.log(a.data),V.value=!0,F.value=!1,C.value=!1,L.replace(A.query.to?String(A.query.to):"/admin/apps/admins/list/")}).catch(a=>{console.log(a.response.data.message),errors.value=a.response.data.message,v.value=!0,F.value=!1,C.value=!1}))})},k=r(""),$=r(""),h=r(""),c=r(""),w=r(""),y=r(""),j=r(),_=r(),S=r(),U=r(),{t:d}=O(),H=[{title:d("admin"),value:"admin"},{title:d("editor"),value:"editor"},{title:d("maintainer"),value:"maintainer"},{title:d("subscriber"),value:"subscriber"}],J=[{title:d("block"),value:"block"},{title:d("active"),value:"active"},{title:d("not_active"),value:"not_active"}],N=r(),V=r(!1),v=r(!1),C=r(!1),F=r(!1),K=t=>{const l=new FileReader,{files:a}=t.target;a&&a.length&&(l.readAsDataURL(a[0]),l.onload=()=>{typeof l.result=="string"&&(U.value=l.result)})};return(t,l)=>(q(),B(P,null,{default:o(()=>[e(E,{location:"top",modelValue:s(V),"onUpdate:modelValue":l[1]||(l[1]=a=>n(V)?V.value=a:null)},{actions:o(()=>[e(R,{color:"success",onClick:l[0]||(l[0]=a=>V.value=!1)},{default:o(()=>[f(i(t.$t("Close")),1)]),_:1})]),default:o(()=>[f(i(t.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),e(E,{color:"error",location:"top",modelValue:s(v),"onUpdate:modelValue":l[3]||(l[3]=a=>n(v)?v.value=a:null)},{actions:o(()=>[e(R,{color:"success",onClick:l[2]||(l[2]=a=>v.value=!1)},{default:o(()=>[f(i(t.$t("Close")),1)]),_:1})]),default:o(()=>[f(i(t.errors)+" ",1)]),_:1},8,["modelValue"]),t.errors?Q((q(),B(u,{key:0,cols:"12"},{default:o(()=>[e(z,{title:t.$t("Site_Settings")},{default:o(()=>[e(I,{class:"d-flex"},{default:o(()=>[e(se,{color:"error"},{default:o(()=>[f(i(t.errors),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},512)),[[le,!1]]):W("",!0),e(u,{cols:"12"},{default:o(()=>[e(z,{title:t.$t("AddNew")},{default:o(()=>[e(I,{class:"pt-2"},{default:o(()=>[e(re,{ref_key:"refForm",ref:j,class:"mt-6"},{default:o(()=>[e(P,null,{default:o(()=>[e(u,{md:"12",cols:"12"},{default:o(()=>[e(I,{class:"d-flex"},{default:o(()=>[e(ue,{rounded:"",size:"100",class:"me-6",image:s(U)},null,8,["image"]),g("form",ne,[g("div",de,[e(R,{color:"primary",onClick:l[4]||(l[4]=a=>{var G;return(G=s(N))==null?void 0:G.click()})},{default:o(()=>[e(X,{icon:"tabler-cloud-upload",class:"d-sm-none"}),g("span",ie,i(t.$t("slider_back_img")),1)]),_:1}),g("input",{ref_key:"refInputEl_front",ref:N,type:"file",name:"file_back",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:K},null,544)]),me],512)]),_:1})]),_:1}),e(u,{md:"6",cols:"12"},{default:o(()=>[e(b,{modelValue:s(k),"onUpdate:modelValue":l[5]||(l[5]=a=>n(k)?k.value=a:null),label:t.$t("Full_name"),rules:[p]},null,8,["modelValue","label","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:s(y),"onUpdate:modelValue":l[6]||(l[6]=a=>n(y)?y.value=a:null),label:t.$t("email"),rules:[p,s(ae)]},null,8,["modelValue","label","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:o(()=>[e(x,{modelValue:s(_),"onUpdate:modelValue":l[7]||(l[7]=a=>n(_)?_.value=a:null),label:t.$t("Select Role"),items:H,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:s($),"onUpdate:modelValue":l[8]||(l[8]=a=>n($)?$.value=a:null),label:t.$t("mobile"),rules:[p,s(oe)(s(h),"^([0-9]+)$")]},null,8,["modelValue","label","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:o(()=>[e(x,{modelValue:s(S),"onUpdate:modelValue":l[9]||(l[9]=a=>n(S)?S.value=a:null),label:t.$t("Select Status"),items:J,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:s(c),"onUpdate:modelValue":l[10]||(l[10]=a=>n(c)?c.value=a:null),label:t.$t("password"),type:"password",rules:[p],autocomplete:"on"},null,8,["modelValue","label","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(b,{modelValue:s(w),"onUpdate:modelValue":l[11]||(l[11]=a=>n(w)?w.value=a:null),label:t.$t("password_confirm"),type:"password",rules:[p,s(te)(s(w),s(c))],autocomplete:"on"},null,8,["modelValue","label","rules"])]),_:1}),e(u,{cols:"12"},{default:o(()=>[e(R,{type:"submit",loading:s(F),disabled:s(C),onClick:Y(M,["prevent"])},{default:o(()=>[f(i(t.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof D=="function"&&D(fe);export{fe as default};
