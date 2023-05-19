import{aP as te,s as r,U as f,Q as U,x as ae,ai as le,o as u,l as h,g as t,w as o,F as O,B as E,e as d,z as v,i as l,C as x,j as n,f as Q,p as se,G as oe,H as ne,W as ie,r as re,y as q}from"./main.e5722c22.js";import{_ as de}from"./AddNewUserDrawer.905088ab.js";import{a as ce}from"./formatters.ab6dea15.js";import{u as ue}from"./useAdminListStore.251ab28b.js";/* empty css                                                       */import{b as G}from"./route-block.2f1a6263.js";import{a as w,V as H}from"./VRow.f8de802a.js";import{V as M,c as y}from"./VCard.2abcdcfe.js";import{V as z}from"./VSelect.23e06609.js";import{V as D}from"./VDivider.19cd6d54.js";import{V as me}from"./VSpacer.8e0d4c8c.js";import{V as pe}from"./VTextField.c7d5535f.js";import{V as k}from"./VBtn.4327307d.js";import{V as fe}from"./VTable.045acce0.js";import{V as ve}from"./VPagination.f1c00294.js";import{V as P}from"./VAvatar.1bc59f66.js";import{V as _e}from"./VImg.a33717ea.js";import{V as he}from"./VChip.f64a01b2.js";import"./validators.330a354f.js";import"./index.b522f886.js";import"./VForm.be976fbe.js";import"./VInput.1a6e2ae8.js";import"./router.f3c33ba4.js";import"./index.19c19380.js";import"./forwardRefs.c003b6b8.js";import"./VNavigationDrawer.c44d2637.js";import"./ssrBoot.15e4635b.js";import"./position.fb77405d.js";import"./VList.345ceaa4.js";import"./dialog-transition.738c368f.js";import"./easing.36b781ab.js";import"./VMenu.1340a45a.js";import"./scopeId.23faa331.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./VCheckboxBtn.d3981e2f.js";import"./VSelectionControl.336d6e11.js";/* empty css                   */import"./VField.01372b27.js";import"./VCounter.bc3c6bfa.js";const Ve={class:"d-flex align-center gap-2 my-1"},ge={class:"text-h6"},be={class:"me-3",style:{width:"80px"}},xe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},we={style:{width:"10rem"}},ye={scope:"col"},ke={scope:"col"},$e={scope:"col"},Se={scope:"col"},Ue={class:"d-flex align-center"},ze={key:1},De={class:"d-flex flex-column"},Pe={class:"text-base"},je={class:"text-sm text-disabled"},Ce={class:"text-capitalize text-base"},Ne={class:"text-center",style:{width:"5rem"}},Ie={colspan:"7",class:"text-center"},Le={class:"text-sm text-disabled"},Re={__name:"index",setup(Te){const{t:i}=te(),j=ue(),V=r(""),g=r(),W=r(),b=r(),m=r(1),c=r(1),p=r(1),C=r(0),_=r([]),N=r(1),I=r(1),L=r(1),R=r(1),J=ie();let T=localStorage.getItem("accessToken");f.defaults.headers.common["Content-Type"]="application/json",f.defaults.headers.common.Accept="application/json",f.defaults.headers.common.Language="ar",f.defaults.headers.common.type="Admin",f.defaults.headers.common.auth="token "+T;const A=()=>{j.fetchUsers({q:V.value,status:b.value,plan:W.value,admin_role_id:g.value,perPage:m.value,page:c.value}).then(e=>{_.value=e.data.admins.data,I.value=e.data.admins.data.length,p.value=e.data.admins.total,C.value=e.data.admins.total,N.value=e.data.admins_active,L.value=e.data.admins_not_active,R.value=e.data.admins_block}).catch(e=>{console.error(e)})};U(A),U(()=>{c.value>p.value&&(c.value=p.value)});const $=r([]),K=[{title:i("block"),value:"block"},{title:i("active"),value:"active"},{title:i("not_active"),value:"not_active"}],X=e=>e==="pending"?"warning":e==="active"?"success":e==="inactive"?"secondary":"primary",S=r(!1);U(()=>{c.value>p.value&&(c.value=p.value)});const Y=ae(()=>{const e=_.value.length?(c.value-1)*m.value+1:0,s=_.value.length+(c.value-1)*m.value;return` ${i("Showing")} ${e} ${i("to")} ${s} ${i("of")} ${C.value} ${i("entries")}`}),Z=e=>{j.addUser(e),A()},ee=[{icon:"tabler-user",color:"primary",title:i("total_user"),stats:I,percentage:29,subtitle:i("total_user")},{icon:"tabler-user-plus",color:"error",title:i("not_active_user"),stats:L,percentage:18,subtitle:i("not_active_user")},{icon:"tabler-user-check",color:"success",title:i("active_user"),stats:N,percentage:-14,subtitle:i("active_user")},{icon:"tabler-user-exclamation",color:"warning",title:i("block_user"),stats:R,percentage:42,subtitle:i("block_user")}],B={action:"read",subject:"admins_add"};return le(J,()=>{f.get("/roles/list",{token:T}).then(e=>{for(var s=0;s<e.data.length;s++)console.log(e.data[s].id,"res"),console.log(e.data[s].role_name,"res"),$.value[s]={title:e.data[s].role_name,value:e.data[s].id};console.log($.value,"res")})},{immediate:!0}),(e,s)=>{const F=re("RouterLink");return u(),h("section",null,[t(H,null,{default:o(()=>[(u(),h(O,null,E(ee,a=>t(w,{key:a.title,cols:"12",sm:"6",lg:"3"},{default:o(()=>[t(M,null,{default:o(()=>[t(y,{class:"d-flex justify-space-between"},{default:o(()=>[l("div",null,[l("span",null,n(a.title),1),l("div",Ve,[l("h6",ge,n(a.stats),1)]),l("span",null,n(a.subtitle),1)]),t(P,{rounded:"",variant:"tonal",color:a.color,icon:a.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),t(w,{cols:"12"},{default:o(()=>[t(M,{title:e.$t("Search Filter")},{default:o(()=>[t(y,null,{default:o(()=>[t(H,null,{default:o(()=>[t(w,{cols:"12",sm:"4"},{default:o(()=>[t(z,{modelValue:d(g),"onUpdate:modelValue":s[0]||(s[0]=a=>v(g)?g.value=a:null),label:e.$t("Select Role"),items:d($),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label","items"])]),_:1}),t(w,{cols:"12",sm:"4"},{default:o(()=>[t(z,{modelValue:d(b),"onUpdate:modelValue":s[1]||(s[1]=a=>v(b)?b.value=a:null),label:e.$t("Select Status"),items:K,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),t(D),t(y,{class:"d-flex flex-wrap py-4 gap-4"},{default:o(()=>[l("div",be,[t(z,{modelValue:d(m),"onUpdate:modelValue":s[2]||(s[2]=a=>v(m)?m.value=a:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),t(me),l("div",xe,[l("div",we,[t(pe,{modelValue:d(V),"onUpdate:modelValue":s[3]||(s[3]=a=>v(V)?V.value=a:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),t(k,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:o(()=>[x(n(e.$t("export")),1)]),_:1}),e.$can(B.action,B.subject)?(u(),Q(k,{key:0},{default:o(()=>[t(F,{to:{name:"admin-apps-admins-add-add_new"},class:"font-weight-medium user-list-name"},{default:o(()=>[x(n(e.$t("AddNew")),1)]),_:1})]),_:1})):se("",!0)])]),_:1}),t(D),t(fe,{class:"text-no-wrap"},{default:o(()=>[l("thead",null,[l("tr",null,[l("th",ye,n(e.$t("email")),1),l("th",ke,n(e.$t("role")),1),l("th",$e,n(e.$t("status")),1),l("th",Se,n(e.$t("action")),1)])]),l("tbody",null,[(u(!0),h(O,null,E(d(_),a=>(u(),h("tr",{key:a.id,style:{height:"3.75rem"}},[l("td",null,[l("div",Ue,[t(P,{variant:"tonal",class:"me-3",size:"38"},{default:o(()=>[a.avatar?(u(),Q(_e,{key:0,src:a.avatar},null,8,["src"])):(u(),h("span",ze,n(d(ce)(a.name)),1))]),_:2},1024),l("div",De,[l("h6",Pe,[t(F,{to:{name:"admin-apps-admins-view-id",params:{id:a.id}},class:"font-weight-medium user-list-name"},{default:o(()=>[x(n(a.name),1)]),_:2},1032,["to"])]),l("span",je,"@"+n(a.email),1)])])]),l("td",null,[t(P,{color:"secondary",icon:"tabler-device-laptop",variant:"tonal",size:"30",class:"me-4"}),l("span",Ce,n(e.$t(a.role)),1)]),l("td",null,[t(he,{label:"",color:X(a.status),size:"small",class:"text-capitalize"},{default:o(()=>[x(n(e.$t(a.status)),1)]),_:2},1032,["color"])]),l("td",Ne,[t(k,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"admin-apps-admins-view-id",params:{id:a.id}}},{default:o(()=>[t(q,{size:"22",icon:"tabler-edit"})]),_:2},1032,["to"]),t(k,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"admin-apps-admins-view-id",params:{id:a.id}}},{default:o(()=>[t(q,{size:"22",icon:"tabler-trash"})]),_:2},1032,["to"])])]))),128))]),oe(l("tfoot",null,[l("tr",null,[l("td",Ie,n(e.$t("No data available")),1)])],512),[[ne,!d(_).length]])]),_:1}),t(D),t(y,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:o(()=>[l("span",Le,n(d(Y)),1),t(ve,{modelValue:d(c),"onUpdate:modelValue":s[4]||(s[4]=a=>v(c)?c.value=a:null),size:"small","total-visible":5,length:d(p)},null,8,["modelValue","length"])]),_:1})]),_:1},8,["title"])]),_:1})]),_:1}),t(de,{isDrawerOpen:d(S),"onUpdate:isDrawerOpen":s[5]||(s[5]=a=>v(S)?S.value=a:null),onUserData:Z},null,8,["isDrawerOpen"])])}}};typeof G=="function"&&G(Re);export{Re as default};
