import{K as X,s as n,aP as Y,be as H,c as Q,U as m,bF as N,ai as W,o as D,f as P,w as a,g as e,e as s,z as I,C as f,j as u,l as Z,i as c,bf as ee,y as ae,p as le,X as te,Y as oe}from"./main.e5722c22.js";import{a as se}from"./formatters.ab6dea15.js";/* empty css                                                                     */import{V as z}from"./VSnackbar.dc45fad4.js";import{V as g}from"./VBtn.4327307d.js";import{a as d,V as y}from"./VRow.f8de802a.js";import{V as U,c as w,a as re,b as ne}from"./VCard.2abcdcfe.js";import{V as E}from"./VAvatar.1bc59f66.js";import{V as ue}from"./VImg.a33717ea.js";import{V as de}from"./VChip.f64a01b2.js";import{V as ie}from"./VDivider.19cd6d54.js";import{V as x}from"./VForm.be976fbe.js";import{V as S}from"./VTextField.c7d5535f.js";import{V as q}from"./VSelect.23e06609.js";const me=p=>(te("data-v-b2b163ca"),p=p(),oe(),p),fe={key:1,class:"text-5xl font-weight-semibold"},ce={class:"text-h6 mt-4"},pe={ref:"refForm_front",class:"d-flex flex-column justify-center gap-4"},ve={class:"d-flex flex-wrap gap-2"},be={class:"d-none d-sm-block"},Ve=me(()=>c("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1)),_e={__name:"UserBioPanel",props:{userData:{type:Object,required:!0},roles:{type:Object,required:!0}},setup(p){const i=p,T=n(),v=n(),{t:B}=Y();n(!1);const b=t=>String(t).trim().length===0?B("This field is required"):!0,A=n(),G=H(),k=n(!1);n(!1);const F=n("");n("");const V=n(!1),_=n(!1),C=n(!1),h=n(!1),{isAppRtl:L}=Q(),K=t=>{const l=new FileReader,{files:o}=t.target;o&&o.length&&(l.readAsDataURL(o[0]),l.onload=()=>{typeof l.result=="string"&&(r.value.avatar=l.result)})};let R=localStorage.getItem("accessToken");m.defaults.headers.common["Content-Type"]="application/json",m.defaults.headers.common.Accept="application/json",L.value===!0?m.defaults.headers.common.Language="ar":m.defaults.headers.common.Language="en",m.defaults.headers.common.type="Admin",m.defaults.headers.common.role="Admin",m.defaults.headers.common.auth="Bearer "+R;const r=n(structuredClone(N(i.userData)));v.value=r.value.admin_role_id;const j=n([]);W(G,()=>{m.get("/roles/select",{token:R}).then(t=>{for(var l=0;l<t.data.length;l++)j.value[l]={title:t.data[l].role_name,value:t.data[l].id};console.log(j.value,"res")})},{immediate:!0});const M=()=>{var t;(t=A.value)==null||t.validate().then(({valid:l})=>{console.log(l),l&&(h.value=!0,C.value=!0,m.post("admins/"+i.userData.id,{name:r.value.name,email:r.value.email,mobile:r.value.mobile,avatar:r.value.avatar,status:r.value.status,password:r.value.password,admin_role_id:v.value,token:R}).then(o=>{V.value=!0,h.value=!1,C.value=!1,console.log(o.response)}).catch(o=>{const{errors:$}=o.response.data;_.value=!0,h.value=!1,C.value=!1,errors.value=$,console.error(o.response.data)}))})},O=()=>{r.value=structuredClone(N(i.userData))},J=t=>t==="subscriber"?{color:"warning",icon:"tabler-user"}:t==="author"?{color:"success",icon:"tabler-circle-check"}:t==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:t==="editor"?{color:"info",icon:"tabler-pencil"}:t==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(t,l)=>(D(),P(y,null,{default:a(()=>[e(z,{location:"top",modelValue:s(V),"onUpdate:modelValue":l[1]||(l[1]=o=>I(V)?V.value=o:null)},{actions:a(()=>[e(g,{color:"success",onClick:l[0]||(l[0]=o=>V.value=!1)},{default:a(()=>[f(u(t.$t("Close")),1)]),_:1})]),default:a(()=>[f(u(t.$t("Done"))+" ",1)]),_:1},8,["modelValue"]),e(z,{color:"error",location:"top",modelValue:s(_),"onUpdate:modelValue":l[3]||(l[3]=o=>I(_)?_.value=o:null)},{actions:a(()=>[e(g,{color:"success",onClick:l[2]||(l[2]=o=>_.value=!1)},{default:a(()=>[f(u(t.$t("Close")),1)]),_:1})]),default:a(()=>[f(u(t.errors)+" ",1)]),_:1},8,["modelValue"]),e(d,{cols:"12"},{default:a(()=>[i.userData?(D(),P(U,{key:0},{default:a(()=>[e(w,{class:"text-center pt-15"},{default:a(()=>[e(E,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:a(()=>[i.userData.avatar?(D(),P(ue,{key:0,src:i.userData.avatar},null,8,["src"])):(D(),Z("span",fe,u(s(se)(i.userData.name)),1))]),_:1}),c("h6",ce,u(i.userData.name),1),e(de,{label:"",color:J(i.userData.role).color,size:"small",class:"text-capitalize mt-4"},{default:a(()=>[f(u(t.$t(i.userData.role)),1)]),_:1},8,["color"])]),_:1}),e(ie),e(re,{class:"text-center"},{default:a(()=>[e(ne,{class:"text-h5 mb-3"},{default:a(()=>[f(u(t.$t("Edit User Information")),1)]),_:1})]),_:1}),e(w,null,{default:a(()=>[e(x,{ref_key:"refForm",ref:A,class:"mt-6",onSubmit:ee(M,["prevent"])},{default:a(()=>[e(y,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(U,{title:t.$t("avatar")},{default:a(()=>[e(w,{class:"d-flex"},{default:a(()=>[e(E,{rounded:"",size:"100",class:"me-6",image:s(r).avatar},null,8,["image"]),c("form",pe,[c("div",ve,[e(g,{color:"primary",onClick:l[4]||(l[4]=o=>{var $;return($=s(T))==null?void 0:$.click()})},{default:a(()=>[e(ae,{icon:"tabler-cloud-upload",class:"d-sm-none"}),c("span",be,u(t.$t("slider_back_img")),1)]),_:1}),c("input",{ref_key:"refInputEl_front",ref:T,type:"file",name:"file_back",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:K},null,544)]),Ve],512)]),_:1})]),_:1},8,["title"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(U,{title:t.$t("basic_information")},{default:a(()=>[e(x,null,{default:a(()=>[e(w,{class:"pt-0"},{default:a(()=>[e(y,null,{default:a(()=>[e(d,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:s(r).name,"onUpdate:modelValue":l[5]||(l[5]=o=>s(r).name=o),label:s(B)("name"),rules:[b]},null,8,["modelValue","label","rules"])]),_:1}),e(d,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:s(r).email,"onUpdate:modelValue":l[6]||(l[6]=o=>s(r).email=o),label:t.$t("email"),rules:[b]},null,8,["modelValue","label","rules"])]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(d,{cols:"12",md:"6"},{default:a(()=>[e(q,{modelValue:s(r).status,"onUpdate:modelValue":l[7]||(l[7]=o=>s(r).status=o),chips:"",label:t.$t("status"),rules:[b],items:["active","not_active","block"]},null,8,["modelValue","label","rules"])]),_:1}),e(d,{cols:"12",md:"6"},{default:a(()=>[e(q,{modelValue:s(v),"onUpdate:modelValue":l[8]||(l[8]=o=>I(v)?v.value=o:null),chips:"",label:t.$t("Select Role"),rules:[b],items:s(j)},null,8,["modelValue","label","rules","items"])]),_:1}),e(d,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:s(r).mobile,"onUpdate:modelValue":l[9]||(l[9]=o=>s(r).mobile=o),label:t.$t("mobile"),rules:[b]},null,8,["modelValue","label","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(U,{title:t.$t("Change_Password")},{default:a(()=>[e(x,null,{default:a(()=>[e(w,{class:"pt-0"},{default:a(()=>[e(y,null,{default:a(()=>[e(d,{cols:"12",md:"6"},{default:a(()=>[e(S,{modelValue:s(F),"onUpdate:modelValue":l[10]||(l[10]=o=>I(F)?F.value=o:null),type:s(k)?"text":"password","append-inner-icon":s(k)?"tabler-eye-off":"tabler-eye",label:"New Password","onClick:appendInner":l[11]||(l[11]=o=>k.value=!s(k))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1}),e(d,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:a(()=>[e(g,{type:"submit",loading:s(h),disabled:s(C)},{default:a(()=>[f(u(t.$t("Save changes")),1)]),_:1},8,["loading","disabled"]),e(g,{color:"secondary",variant:"tonal",onClick:O},{default:a(()=>[f(u(t.$t("Cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})):le("",!0)]),_:1})]),_:1}))}},xe=X(_e,[["__scopeId","data-v-b2b163ca"]]);export{xe as U};
