import{s as c,Z as z,x as Q,o as m,l as v,g as e,w as a,F as D,B as I,e as r,z as u,i as l,C as y,G as Z,H as J,j as i,r as K,E as W,f as X,y as L}from"./main.078a9716.js";import{_ as Y}from"./AddNewUserDrawer.18fb88ea.js";import{u as ee}from"./useUserListStore.db763695.js";import{a as te}from"./formatters.ab6dea15.js";import{a as _,V as R}from"./VRow.e13b536b.js";import{V as B,c as U}from"./VCard.3afa8a52.js";import{V as S}from"./VSelect.6ad5365d.js";import{V as P}from"./VDivider.cfe78da3.js";import{V as le}from"./VSpacer.2ec040b3.js";import{V as ae}from"./VTextField.d8a7d912.js";import{V}from"./VBtn.e4c558dd.js";import{V as se}from"./VTable.bb6b7904.js";import{V as oe}from"./VPagination.015ee10f.js";import{V as N}from"./VAvatar.ecffb864.js";import{V as re}from"./VImg.cc893ccb.js";import{V as ie}from"./VChip.db307e22.js";import{V as ne}from"./VMenu.60374e62.js";import{V as ce,a as E}from"./VList.05852a98.js";import"./validators.e59f90da.js";import"./index.b522f886.js";import"./VForm.f4c68f82.js";import"./VInput.a7f379dc.js";import"./router.4bb23ac0.js";import"./index.8a0d3cc6.js";import"./forwardRefs.c003b6b8.js";import"./VNavigationDrawer.7686f4b4.js";import"./ssrBoot.64d4892f.js";import"./position.e83b1372.js";import"./dialog-transition.06e38ff2.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.83e8d540.js";import"./VSelectionControl.af7cec95.js";/* empty css                   */import"./VField.db9fd7d9.js";import"./VCounter.3a24309c.js";import"./scopeId.a984c125.js";import"./VOverlay.c04acb7b.js";import"./lazy.5006f860.js";const ue={class:"d-flex align-center gap-2 my-1"},de={class:"text-h6"},pe={class:"me-3",style:{width:"80px"}},me={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},fe={style:{width:"10rem"}},ve=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," USER "),l("th",{scope:"col"}," ROLE "),l("th",{scope:"col"}," PLAN "),l("th",{scope:"col"}," BILLING "),l("th",{scope:"col"}," STATUS "),l("th",{scope:"col"}," ACTIONS ")])],-1),_e={class:"d-flex align-center"},Ve={key:1},xe={class:"d-flex flex-column"},be={class:"text-base"},he={class:"text-sm text-disabled"},ge={class:"text-capitalize text-base"},we={class:"text-capitalize text-base font-weight-semibold"},ye={class:"text-base"},Ue={class:"text-center",style:{width:"5rem"}},Se=l("tr",null,[l("td",{colspan:"7",class:"text-center"}," No data available ")],-1),ke=[Se],ze={class:"text-sm text-disabled"},mt={__name:"indexOld",setup(Le){const C=ee(),x=c(""),b=c(),h=c(),g=c(),d=c(10),n=c(1),p=c(1),A=c(0),f=c([]),T=()=>{C.fetchUsers({q:x.value,status:g.value,plan:h.value,role:b.value,perPage:d.value,currentPage:n.value}).then(s=>{f.value=s.data.users,p.value=s.data.totalPage,A.value=s.data.totalUsers}).catch(s=>{console.error(s)})};z(T),z(()=>{n.value>p.value&&(n.value=p.value)});const O=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],$=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],j=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],k=s=>s==="subscriber"?{color:"warning",icon:"tabler-user"}:s==="author"?{color:"success",icon:"tabler-circle-check"}:s==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:s==="editor"?{color:"info",icon:"tabler-pencil"}:s==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"},F=s=>s==="pending"?"warning":s==="active"?"success":s==="inactive"?"secondary":"primary",w=c(!1);z(()=>{n.value>p.value&&(n.value=p.value)});const M=Q(()=>{const s=f.value.length?(n.value-1)*d.value+1:0,o=f.value.length+(n.value-1)*d.value;return`Showing ${s} to ${o} of ${A.value} entries`}),G=s=>{C.addUser(s),T()},q=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}];return(s,o)=>{const H=K("RouterLink");return m(),v("section",null,[e(R,null,{default:a(()=>[(m(),v(D,null,I(q,t=>e(_,{key:t.title,cols:"12",sm:"6",lg:"3"},{default:a(()=>[e(B,null,{default:a(()=>[e(U,{class:"d-flex justify-space-between"},{default:a(()=>[l("div",null,[l("span",null,i(t.title),1),l("div",ue,[l("h6",de,i(t.stats),1),l("span",{class:W(t.percentage>0?"text-success":"text-error")},"("+i(t.percentage)+"%)",3)]),l("span",null,i(t.subtitle),1)]),e(N,{rounded:"",variant:"tonal",color:t.color,icon:t.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),e(_,{cols:"12"},{default:a(()=>[e(B,{title:"Search Filter"},{default:a(()=>[e(U,null,{default:a(()=>[e(R,null,{default:a(()=>[e(_,{cols:"12",sm:"4"},{default:a(()=>[e(S,{modelValue:r(b),"onUpdate:modelValue":o[0]||(o[0]=t=>u(b)?b.value=t:null),label:"Select Role",items:O,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"4"},{default:a(()=>[e(S,{modelValue:r(h),"onUpdate:modelValue":o[1]||(o[1]=t=>u(h)?h.value=t:null),label:"Select Plan",items:$,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"4"},{default:a(()=>[e(S,{modelValue:r(g),"onUpdate:modelValue":o[2]||(o[2]=t=>u(g)?g.value=t:null),label:"Select Status",items:j,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(P),e(U,{class:"d-flex flex-wrap py-4 gap-4"},{default:a(()=>[l("div",pe,[e(S,{modelValue:r(d),"onUpdate:modelValue":o[3]||(o[3]=t=>u(d)?d.value=t:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),e(le),l("div",me,[l("div",fe,[e(ae,{modelValue:r(x),"onUpdate:modelValue":o[4]||(o[4]=t=>u(x)?x.value=t:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),e(V,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:a(()=>[y(" Export ")]),_:1}),e(V,{"prepend-icon":"tabler-plus",onClick:o[5]||(o[5]=t=>w.value=!0)},{default:a(()=>[y(" Add New User ")]),_:1})])]),_:1}),e(P),e(se,{class:"text-no-wrap"},{default:a(()=>[ve,l("tbody",null,[(m(!0),v(D,null,I(r(f),t=>(m(),v("tr",{key:t.id,style:{height:"3.75rem"}},[l("td",null,[l("div",_e,[e(N,{variant:"tonal",color:k(t.role).color,class:"me-3",size:"38"},{default:a(()=>[t.avatar?(m(),X(re,{key:0,src:t.avatar},null,8,["src"])):(m(),v("span",Ve,i(r(te)(t.fullName)),1))]),_:2},1032,["color"]),l("div",xe,[l("h6",be,[e(H,{to:{name:"apps-user-view-id",params:{id:t.id}},class:"font-weight-medium user-list-name"},{default:a(()=>[y(i(t.fullName),1)]),_:2},1032,["to"])]),l("span",he,"@"+i(t.email),1)])])]),l("td",null,[e(N,{color:k(t.role).color,icon:k(t.role).icon,variant:"tonal",size:"30",class:"me-4"},null,8,["color","icon"]),l("span",ge,i(t.role),1)]),l("td",null,[l("span",we,i(t.currentPlan),1)]),l("td",null,[l("span",ye,i(t.billing),1)]),l("td",null,[e(ie,{label:"",color:F(t.status),size:"small",class:"text-capitalize"},{default:a(()=>[y(i(t.status),1)]),_:2},1032,["color"])]),l("td",Ue,[e(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-edit"})]),_:1}),e(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-trash"})]),_:1}),e(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(L,{size:"22",icon:"tabler-dots-vertical"}),e(ne,{activator:"parent"},{default:a(()=>[e(ce,null,{default:a(()=>[e(E,{title:"View",to:{name:"apps-user-view-id",params:{id:t.id}}},null,8,["to"]),e(E,{title:"Suspend",href:"javascript:void(0)"})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),Z(l("tfoot",null,ke,512),[[J,!r(f).length]])]),_:1}),e(P),e(U,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:a(()=>[l("span",ze,i(r(M)),1),e(oe,{modelValue:r(n),"onUpdate:modelValue":o[6]||(o[6]=t=>u(n)?n.value=t:null),size:"small","total-visible":5,length:r(p)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Y,{isDrawerOpen:r(w),"onUpdate:isDrawerOpen":o[7]||(o[7]=t=>u(w)?w.value=t:null),onUserData:G},null,8,["isDrawerOpen"])])}}};export{mt as default};
