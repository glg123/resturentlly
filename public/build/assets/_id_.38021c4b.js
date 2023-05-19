import{s as u,c as z,U as d,aP as E,ai as M,o as x,f as J,w as t,g as l,C as _,j as i,e as r,z as C,i as y,y as K,bf as W,be as H,W as O}from"./main.e5722c22.js";import{u as Q}from"./useAdminListStore.251ab28b.js";/* empty css                                                                     */import{b as F}from"./route-block.2f1a6263.js";import{V as S}from"./VBtn.4327307d.js";import{V as I}from"./VSnackbar.dc45fad4.js";import{V as X,c as R}from"./VCard.2abcdcfe.js";import{V as Y}from"./VForm.be976fbe.js";import{V as h,a as n}from"./VRow.f8de802a.js";import{V as Z}from"./VAvatar.1bc59f66.js";import{V as p}from"./VTextField.c7d5535f.js";import{V as N}from"./VSelect.23e06609.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VInput.1a6e2ae8.js";import"./index.19c19380.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./VDivider.19cd6d54.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";import"./VChip.f64a01b2.js";const ee={ref:"refForm_front",class:"d-flex flex-column justify-center gap-4"},le={class:"d-flex flex-wrap gap-2"},ae={class:"d-none d-sm-block"},oe=y("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1),te={__name:"[id]",setup(se){Q();const f=H();u([]);const s=u([]),j=O(),{isAppRtl:P}=z();let U=localStorage.getItem("accessToken");d.defaults.headers.common["Content-Type"]="application/json",d.defaults.headers.common.Accept="application/json",P.value===!0?d.defaults.headers.common.Language="ar":d.defaults.headers.common.Language="en",d.defaults.headers.common.type="Admin",d.defaults.headers.common.role="Admin",d.defaults.headers.common.auth="Bearer "+U;const m=o=>String(o).trim().length==0?v("This field is required"):!0,c=u(),B=()=>{d.get("/single/"+Number(f.params.id)+"/plan",{token:U}).then(o=>{s.value=o.data,V.value=o.data.status,c.value=o.data.type})},{t:v}=E(),V=u(),D=[{title:v("active"),value:"active"},{title:v("not_active"),value:"not_active"}];M(f,B,{immediate:!0});const L=[{title:v("free"),value:"free"},{title:v("paid"),value:"paid"}],g=u(!1),b=u(!1),$=u(!1),k=u(!1),T=u(),q=o=>{const e=new FileReader,{files:a}=o.target;a&&a.length&&(e.readAsDataURL(a[0]),e.onload=()=>{typeof e.result=="string"&&(s.logo.value=e.result)})},G=()=>{var o;(o=w.value)==null||o.validate().then(({valid:e})=>{console.log(e),e&&(k.value=!0,$.value=!0,d.post("plan/"+Number(f.params.id),{name_en:s.value.name_en,name_ar:s.value.name_ar,price:s.value.price,count_emp:s.value.count_emp,count_branch:s.value.count_branch,count_interval:s.value.count_interval,logo:s.value.logo,status:V.value,type:c.value,token:U}).then(a=>{console.log(a.data),g.value=!0,k.value=!1,$.value=!1,j.replace(f.query.to?String(f.query.to):"/admin/apps/plans/list/")}).catch(a=>{console.log(a.response.data.message),errors.value=a.response.data.message,b.value=!0,k.value=!1,$.value=!1}))})},w=u();return(o,e)=>(x(),J(h,null,{default:t(()=>[l(I,{location:"top",modelValue:r(g),"onUpdate:modelValue":e[1]||(e[1]=a=>C(g)?g.value=a:null)},{actions:t(()=>[l(S,{color:"success",onClick:e[0]||(e[0]=a=>g.value=!1)},{default:t(()=>[_(i(o.$t("Close")),1)]),_:1})]),default:t(()=>[_(i(o.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),l(I,{color:"error",location:"top",modelValue:r(b),"onUpdate:modelValue":e[3]||(e[3]=a=>C(b)?b.value=a:null)},{actions:t(()=>[l(S,{color:"success",onClick:e[2]||(e[2]=a=>b.value=!1)},{default:t(()=>[_(i(o.$t("Close")),1)]),_:1})]),default:t(()=>[_(i(o.errors)+" ",1)]),_:1},8,["modelValue"]),l(n,{cols:"12"},{default:t(()=>[l(X,{title:o.$t("AddNew")},{default:t(()=>[l(R,{class:"pt-2"},{default:t(()=>[l(Y,{ref_key:"refForm",ref:w,class:"mt-6"},{default:t(()=>[l(h,null,{default:t(()=>[l(n,{md:"12",cols:"12"},{default:t(()=>[l(R,{class:"d-flex"},{default:t(()=>[l(Z,{rounded:"",size:"100",class:"me-6",image:r(s).logo},null,8,["image"]),y("form",ee,[y("div",le,[l(S,{color:"primary",onClick:e[4]||(e[4]=a=>{var A;return(A=r(T))==null?void 0:A.click()})},{default:t(()=>[l(K,{icon:"tabler-cloud-upload",class:"d-sm-none"}),y("span",ae,i(o.$t("logo")),1)]),_:1}),y("input",{ref_key:"refInputEl_logo",ref:T,type:"file",name:"file_back",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:q},null,544)]),oe],512)]),_:1})]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).name_ar,"onUpdate:modelValue":e[5]||(e[5]=a=>r(s).name_ar=a),label:o.$t("name_ar"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).name_en,"onUpdate:modelValue":e[6]||(e[6]=a=>r(s).name_en=a),label:o.$t("name_en"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).price,"onUpdate:modelValue":e[7]||(e[7]=a=>r(s).price=a),label:o.$t("price"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).count_emp,"onUpdate:modelValue":e[8]||(e[8]=a=>r(s).count_emp=a),label:o.$t("count_emp"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).count_interval,"onUpdate:modelValue":e[9]||(e[9]=a=>r(s).count_interval=a),label:o.$t("count_interval"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(p,{modelValue:r(s).count_branch,"onUpdate:modelValue":e[10]||(e[10]=a=>r(s).count_branch=a),label:o.$t("count_branch"),rules:[m]},null,8,["modelValue","label","rules"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(N,{modelValue:r(V),"onUpdate:modelValue":e[11]||(e[11]=a=>C(V)?V.value=a:null),label:o.$t("Select Status"),items:D,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),l(n,{md:"6",cols:"12"},{default:t(()=>[l(N,{modelValue:r(c),"onUpdate:modelValue":e[12]||(e[12]=a=>C(c)?c.value=a:null),label:o.$t("Select Type"),items:L,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1}),l(n,{cols:"12"},{default:t(()=>[l(S,{type:"submit",loading:r(k),disabled:r($),onClick:W(G,["prevent"])},{default:t(()=>[_(i(o.$t("Save changes")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}))}};typeof F=="function"&&F(te);export{te as default};