import{s as c,Z as z,x as Z,o as p,l as v,g as e,w as a,F as B,B as I,e as r,z as u,i as l,C as w,j as i,G as J,H as K,r as W,E as X,f as Y,y as L}from"./main.078a9716.js";import{_ as ee}from"./AddNewUserDrawer.18fb88ea.js";import{a as te}from"./formatters.ab6dea15.js";import{u as le}from"./useAdminListStore.e011ae80.js";import{b as R}from"./route-block.2f1a6263.js";import{a as _,V as $}from"./VRow.e13b536b.js";import{V as E,c as y}from"./VCard.3afa8a52.js";import{V as U}from"./VSelect.6ad5365d.js";import{V as P}from"./VDivider.cfe78da3.js";import{V as ae}from"./VSpacer.2ec040b3.js";import{V as se}from"./VTextField.d8a7d912.js";import{V as h}from"./VBtn.e4c558dd.js";import{V as oe}from"./VTable.bb6b7904.js";import{V as ie}from"./VPagination.015ee10f.js";import{V as A}from"./VAvatar.ecffb864.js";import{V as re}from"./VImg.cc893ccb.js";import{V as ne}from"./VChip.db307e22.js";import{V as ce}from"./VMenu.60374e62.js";import{V as ue,a as j}from"./VList.05852a98.js";import"./validators.e59f90da.js";import"./index.b522f886.js";import"./VForm.f4c68f82.js";import"./VInput.a7f379dc.js";import"./router.4bb23ac0.js";import"./index.8a0d3cc6.js";import"./forwardRefs.c003b6b8.js";import"./VNavigationDrawer.7686f4b4.js";import"./ssrBoot.64d4892f.js";import"./position.e83b1372.js";import"./dialog-transition.06e38ff2.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.83e8d540.js";import"./VSelectionControl.af7cec95.js";/* empty css                   */import"./VField.db9fd7d9.js";import"./VCounter.3a24309c.js";import"./scopeId.a984c125.js";import"./VOverlay.c04acb7b.js";import"./lazy.5006f860.js";const de={class:"d-flex align-center gap-2 my-1"},me={class:"text-h6"},pe={class:"me-3",style:{width:"80px"}},fe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ve={style:{width:"10rem"}},_e={scope:"col"},he={scope:"col"},Ve=l("th",{scope:"col"}," PLAN ",-1),be=l("th",{scope:"col"}," BILLING ",-1),xe=l("th",{scope:"col"}," STATUS ",-1),ge={scope:"col"},we={class:"d-flex align-center"},ye={key:1},Ue={class:"d-flex flex-column"},Se={class:"text-base"},ke={class:"text-sm text-disabled"},ze={class:"text-capitalize text-base"},Le={class:"text-capitalize text-base font-weight-semibold"},Pe={class:"text-base"},Ae={class:"text-center",style:{width:"5rem"}},Ce=l("tr",null,[l("td",{colspan:"7",class:"text-center"}," No data available ")],-1),De=[Ce],Ne={class:"text-sm text-disabled"},Te={__name:"index",setup(Be){const C=le(),V=c(""),b=c(),x=c(),g=c(),d=c(1),n=c(1),m=c(1),D=c(0),f=c([]),N=()=>{C.fetchUsers({q:V.value,status:g.value,plan:x.value,role:b.value,perPage:d.value,page:n.value}).then(s=>{f.value=s.data.data,m.value=s.data.total,D.value=s.data.total}).catch(s=>{console.error(s)})};z(N),z(()=>{n.value>m.value&&(n.value=m.value)});const F=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],M=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],O=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],S=s=>s==="subscriber"?{color:"warning",icon:"tabler-user"}:s==="author"?{color:"success",icon:"tabler-circle-check"}:s==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:s==="editor"?{color:"info",icon:"tabler-pencil"}:s==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"},G=s=>s==="pending"?"warning":s==="active"?"success":s==="inactive"?"secondary":"primary",k=c(!1);z(()=>{n.value>m.value&&(n.value=m.value)});const q=Z(()=>{const s=f.value.length?(n.value-1)*d.value+1:0,o=f.value.length+(n.value-1)*d.value;return`Showing ${s} to ${o} of ${D.value} entries`}),H=s=>{C.addUser(s),N()},Q=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}];return(s,o)=>{const T=W("RouterLink");return p(),v("section",null,[e($,null,{default:a(()=>[(p(),v(B,null,I(Q,t=>e(_,{key:t.title,cols:"12",sm:"6",lg:"3"},{default:a(()=>[e(E,null,{default:a(()=>[e(y,{class:"d-flex justify-space-between"},{default:a(()=>[l("div",null,[l("span",null,i(t.title),1),l("div",de,[l("h6",me,i(t.stats),1),l("span",{class:X(t.percentage>0?"text-success":"text-error")},"("+i(t.percentage)+"%)",3)]),l("span",null,i(t.subtitle),1)]),e(A,{rounded:"",variant:"tonal",color:t.color,icon:t.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),e(_,{cols:"12"},{default:a(()=>[e(E,{title:"Search Filter"},{default:a(()=>[e(y,null,{default:a(()=>[e($,null,{default:a(()=>[e(_,{cols:"12",sm:"4"},{default:a(()=>[e(U,{modelValue:r(b),"onUpdate:modelValue":o[0]||(o[0]=t=>u(b)?b.value=t:null),label:"Select Role",items:F,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"4"},{default:a(()=>[e(U,{modelValue:r(x),"onUpdate:modelValue":o[1]||(o[1]=t=>u(x)?x.value=t:null),label:"Select Plan",items:M,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"4"},{default:a(()=>[e(U,{modelValue:r(g),"onUpdate:modelValue":o[2]||(o[2]=t=>u(g)?g.value=t:null),label:"Select Status",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(P),e(y,{class:"d-flex flex-wrap py-4 gap-4"},{default:a(()=>[l("div",pe,[e(U,{modelValue:r(d),"onUpdate:modelValue":o[3]||(o[3]=t=>u(d)?d.value=t:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),e(ae),l("div",fe,[l("div",ve,[e(se,{modelValue:r(V),"onUpdate:modelValue":o[4]||(o[4]=t=>u(V)?V.value=t:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),e(h,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:a(()=>[w(" Export ")]),_:1}),e(h,null,{default:a(()=>[e(T,{to:{name:"apps-user-view-test",params:{id:20}},class:"font-weight-medium user-list-name"},{default:a(()=>[w(" Add New User ")]),_:1})]),_:1})])]),_:1}),e(P),e(oe,{class:"text-no-wrap"},{default:a(()=>[l("thead",null,[l("tr",null,[l("th",_e,i(s.$t("email")),1),l("th",he,i(s.$t("role")),1),Ve,be,xe,l("th",ge,i(s.$t("action")),1)])]),l("tbody",null,[(p(!0),v(B,null,I(r(f),t=>(p(),v("tr",{key:t.id,style:{height:"3.75rem"}},[l("td",null,[l("div",we,[e(A,{variant:"tonal",color:S(t.role).color,class:"me-3",size:"38"},{default:a(()=>[t.avatar?(p(),Y(re,{key:0,src:t.avatar},null,8,["src"])):(p(),v("span",ye,i(r(te)(t.name)),1))]),_:2},1032,["color"]),l("div",Ue,[l("h6",Se,[e(T,{to:{name:"admin-apps-admins-view-id",params:{id:t.id}},class:"font-weight-medium user-list-name"},{default:a(()=>[w(i(t.name),1)]),_:2},1032,["to"])]),l("span",ke,"@"+i(t.email),1)])])]),l("td",null,[e(A,{color:S(t.role).color,icon:S(t.role).icon,variant:"tonal",size:"30",class:"me-4"},null,8,["color","icon"]),l("span",ze,i(t.role),1)]),l("td",null,[l("span",Le,i(t.currentPlan),1)]),l("td",null,[l("span",Pe,i(t.billing),1)]),l("td",null,[e(ne,{label:"",color:G(t.status),size:"small",class:"text-capitalize"},{default:a(()=>[w(i(t.status),1)]),_:2},1032,["color"])]),l("td",Ae,[e(h,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-edit"})]),_:1}),e(h,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-trash"})]),_:1}),e(h,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-dots-vertical"}),e(ce,{activator:"parent"},{default:a(()=>[e(ue,null,{default:a(()=>[e(j,{title:"View",to:{name:"admin-apps-user-view-id",params:{id:t.id}}},null,8,["to"]),e(j,{title:"Suspend",href:"javascript:void(0)"})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),J(l("tfoot",null,De,512),[[K,!r(f).length]])]),_:1}),e(P),e(y,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:a(()=>[l("span",Ne,i(r(q)),1),e(ie,{modelValue:r(n),"onUpdate:modelValue":o[5]||(o[5]=t=>u(n)?n.value=t:null),size:"small","total-visible":5,length:r(m)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ee,{isDrawerOpen:r(k),"onUpdate:isDrawerOpen":o[6]||(o[6]=t=>u(k)?k.value=t:null),onUserData:H},null,8,["isDrawerOpen"])])}}};typeof R=="function"&&R(Te);export{Te as default};