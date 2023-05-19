import{c as G,bg as Q,U as n,K as W,s as u,aP as Z,be as O,bF as N,o as C,f as F,w as a,g as e,e as s,z as A,C as _,j as d,l as ee,i as b,bf as ae,y as te,p as J,X as le,Y as oe,ai as se}from"./main.e5722c22.js";import{a as re}from"./formatters.ab6dea15.js";import{b as R}from"./route-block.2f1a6263.js";import{V as z}from"./VSnackbar.dc45fad4.js";import{V as k}from"./VBtn.4327307d.js";import{a as m,V as v}from"./VRow.f8de802a.js";import{V as B,c as S,a as ne,b as ue}from"./VCard.2abcdcfe.js";import{V as E}from"./VAvatar.1bc59f66.js";import{V as ie}from"./VImg.a33717ea.js";import{V as de}from"./VChip.f64a01b2.js";import{V as me}from"./VDivider.19cd6d54.js";import{V as q}from"./VForm.be976fbe.js";import{V as w}from"./VTextField.c7d5535f.js";import{V as fe}from"./VSelect.23e06609.js";import"./index.b522f886.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./scopeId.23faa331.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./index.19c19380.js";import"./VInput.1a6e2ae8.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";import"./VList.345ceaa4.js";import"./dialog-transition.738c368f.js";import"./VMenu.1340a45a.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";const{isAppRtl:ce}=G(),pe=Q("StaffListStore",{actions:{getSingleStaff(){let c=localStorage.getItem("accessToken");return n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Accept="application/json",ce.value===!0?n.defaults.headers.common.Language="ar":n.defaults.headers.common.Language="en",n.defaults.headers.common.type="User",n.defaults.headers.common.role="user",n.defaults.headers.common.auth="Bearer "+c,new Promise((i,V)=>{n.get("/staff/my/profile",{token:c}).then(f=>i(f)).catch(f=>V(f))})}}});const _e=c=>(le("data-v-717956b9"),c=c(),oe(),c),be={key:1,class:"text-5xl font-weight-semibold"},ve={class:"text-h6 mt-4"},Ve={ref:"refForm_front",class:"d-flex flex-column justify-center gap-4"},ge={class:"d-flex flex-wrap gap-2"},ye={class:"d-none d-sm-block"},he=_e(()=>b("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1)),K={__name:"UserBioPanel",props:{userData:{type:Object,required:!0},roles:{type:Object,required:!0}},setup(c){const i=c,{isAppRtl:V}=G(),f=u(),g=u(),{t:D}=Z(),p=o=>String(o).trim().length===0?D("This field is required"):!0,T=u();O();const I=u(!1);u(!1);const j=u(""),P=u({});u("");const y=u(!1),h=u(!1),$=u(!1),U=u(!1),M=o=>{const t=new FileReader,{files:l}=o.target;l&&l.length&&(t.readAsDataURL(l[0]),t.onload=()=>{typeof t.result=="string"&&(r.value.avatar=t.result)})};let L=localStorage.getItem("accessToken");n.defaults.headers.common["Content-Type"]="application/json",n.defaults.headers.common.Accept="application/json",V.value===!0?n.defaults.headers.common.Language="ar":n.defaults.headers.common.Language="en",n.defaults.headers.common.type="User",n.defaults.headers.common.role="user",n.defaults.headers.common.auth="Bearer "+L;const r=u(structuredClone(N(i.userData)));g.value=r.value.admin_role_id;const X=()=>{var o;(o=T.value)==null||o.validate().then(({valid:t})=>{console.log(t),t&&(U.value=!0,$.value=!0,n.post("staff/edit/my/profile",{first_name:r.value.first_name,last_name:r.value.last_name,email:r.value.email,mobile:r.value.mobile,avatar:r.value.avatar,password:r.value.password,token:L}).then(l=>{y.value=!0,U.value=!1,$.value=!1,console.log(l.response)}).catch(l=>{const{errors:x}=l.response.data;h.value=!0,U.value=!1,$.value=!1,P.value=x,console.error(l.response.data)}))})},Y=()=>{r.value=structuredClone(N(i.userData))},H=o=>o==="subscriber"?{color:"warning",icon:"tabler-user"}:o==="author"?{color:"success",icon:"tabler-circle-check"}:o==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:o==="editor"?{color:"info",icon:"tabler-pencil"}:o==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(o,t)=>(C(),F(v,null,{default:a(()=>[e(z,{location:"top",modelValue:s(y),"onUpdate:modelValue":t[1]||(t[1]=l=>A(y)?y.value=l:null)},{actions:a(()=>[e(k,{color:"success",onClick:t[0]||(t[0]=l=>y.value=!1)},{default:a(()=>[_(d(o.$t("Close")),1)]),_:1})]),default:a(()=>[_(d(o.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),e(z,{color:"error",location:"top",modelValue:s(h),"onUpdate:modelValue":t[3]||(t[3]=l=>A(h)?h.value=l:null)},{actions:a(()=>[e(k,{color:"success",onClick:t[2]||(t[2]=l=>h.value=!1)},{default:a(()=>[_(d(o.$t("Close")),1)]),_:1})]),default:a(()=>[_(d(s(P))+" ",1)]),_:1},8,["modelValue"]),e(m,{cols:"12"},{default:a(()=>[i.userData?(C(),F(B,{key:0},{default:a(()=>[e(S,{class:"text-center pt-15"},{default:a(()=>[e(E,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:a(()=>[i.userData.avatar?(C(),F(ie,{key:0,src:i.userData.avatar},null,8,["src"])):(C(),ee("span",be,d(s(re)(i.userData.first_name)),1))]),_:1}),b("h6",ve,d(i.userData.first_name),1),e(de,{label:"",color:H(i.userData.role).color,size:"small",class:"text-capitalize mt-4"},{default:a(()=>[_(d(o.$t(i.userData.role)),1)]),_:1},8,["color"])]),_:1}),e(me),e(ne,{class:"text-center"},{default:a(()=>[e(ue,{class:"text-h5 mb-3"},{default:a(()=>[_(d(o.$t("Edit User Information")),1)]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(q,{ref_key:"refForm",ref:T,class:"mt-6",onSubmit:ae(X,["prevent"])},{default:a(()=>[e(v,null,{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(B,{title:o.$t("avatar")},{default:a(()=>[e(S,{class:"d-flex"},{default:a(()=>[e(E,{rounded:"",size:"100",class:"me-6",image:s(r).avatar},null,8,["image"]),b("form",Ve,[b("div",ge,[e(k,{color:"primary",onClick:t[4]||(t[4]=l=>{var x;return(x=s(f))==null?void 0:x.click()})},{default:a(()=>[e(te,{icon:"tabler-cloud-upload",class:"d-sm-none"}),b("span",ye,d(o.$t("slider_back_img")),1)]),_:1}),b("input",{ref_key:"refInputEl_front",ref:f,type:"file",name:"file_back",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:M},null,544)]),he],512)]),_:1})]),_:1},8,["title"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(B,{title:o.$t("basic_information")},{default:a(()=>[e(q,null,{default:a(()=>[e(S,{class:"pt-0"},{default:a(()=>[e(v,null,{default:a(()=>[e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:s(r).first_name,"onUpdate:modelValue":t[5]||(t[5]=l=>s(r).first_name=l),label:s(D)("first_name"),rules:[p]},null,8,["modelValue","label","rules"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:s(r).last_name,"onUpdate:modelValue":t[6]||(t[6]=l=>s(r).last_name=l),label:s(D)("last_name"),rules:[p]},null,8,["modelValue","label","rules"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:s(r).email,"onUpdate:modelValue":t[7]||(t[7]=l=>s(r).email=l),label:o.$t("email"),rules:[p]},null,8,["modelValue","label","rules"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(m,{cols:"12",md:"6"},{default:a(()=>[e(fe,{modelValue:s(r).status,"onUpdate:modelValue":t[8]||(t[8]=l=>s(r).status=l),chips:"",label:o.$t("status"),rules:[p],items:["active","not_active","block"]},null,8,["modelValue","label","rules"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:s(r).mobile,"onUpdate:modelValue":t[9]||(t[9]=l=>s(r).mobile=l),label:o.$t("mobile"),rules:[p]},null,8,["modelValue","label","rules"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(v,null,{default:a(()=>[e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:s(j),"onUpdate:modelValue":t[10]||(t[10]=l=>A(j)?j.value=l:null),type:s(I)?"text":"password","append-inner-icon":s(I)?"tabler-eye-off":"tabler-eye",label:"New Password","onClick:appendInner":t[11]||(t[11]=l=>I.value=!s(I))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1}),e(m,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:a(()=>[e(k,{type:"submit",loading:s(U),disabled:s($)},{default:a(()=>[_(d(o.$t("Save changes")),1)]),_:1},8,["loading","disabled"]),e(k,{color:"secondary",variant:"tonal",onClick:Y},{default:a(()=>[_(d(o.$t("Cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})):J("",!0)]),_:1})]),_:1}))}};typeof R=="function"&&R(K);const ke=W(K,[["__scopeId","data-v-717956b9"]]),Se={__name:"my",setup(c){const i=pe(),V=O(),f=u(),g=JSON.parse(localStorage.getItem("userData")||"null");return g&&g.id&&g.id,se(V,()=>{i.getSingleStaff().then(p=>{f.value=p.data})},{immediate:!0}),(p,T)=>s(f)?(C(),F(v,{key:0},{default:a(()=>[e(m,{cols:"12",lg:"12"},{default:a(()=>[e(ke,{"user-data":s(f)},null,8,["user-data"])]),_:1})]),_:1})):J("",!0)}};typeof R=="function"&&R(Se);export{Se as default};
