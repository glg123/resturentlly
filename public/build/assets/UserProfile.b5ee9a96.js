import{o as u,f as c,w as t,g as e,e as r,y as s,C as l,j as i,O as I,a2 as h}from"./main.990d9ea9.js";import{u as S}from"./useAppAbility.334aa7fe.js";import{V as f}from"./VBadge.641429ea.js";import{V as g}from"./VImg.df47303b.js";import{V as k}from"./VMenu.b1ba5b44.js";import{V as A,a as n,b as m,c as D}from"./VList.82c5e899.js";import{V as w}from"./VListItemAction.253d99de.js";import{V as _}from"./VAvatar.40922329.js";import{V as b}from"./VDivider.e5e2b0d1.js";import"./router.0858fd47.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.64e113c9.js";import"./VOverlay.d036f797.js";import"./lazy.6748cd50.js";import"./easing.36b781ab.js";import"./dialog-transition.8b85c9f4.js";import"./index.e3fe277e.js";const E={__name:"UserProfile",setup(z){const V=I(),y=S(),a=JSON.parse(localStorage.getItem("userData")||"null"),v=()=>{const o=JSON.parse(localStorage.getItem("userData")||"{}"),p=o&&o.role?o.role:null;let d="/dashboards/login/";p==="admin"&&(d="/admin/login"),localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),V.push(d).then(()=>{localStorage.removeItem("userAbilities"),y.update(h)})};return(o,p)=>(u(),c(f,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(_,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[r(a)&&r(a).avatar?(u(),c(g,{key:0,src:r(a).avatar},null,8,["src"])):(u(),c(s,{key:1,icon:"tabler-user"})),e(k,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(A,null,{default:t(()=>[e(n,null,{prepend:t(()=>[e(w,{start:""},{default:t(()=>[e(f,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(_,{color:"primary",variant:"tonal"},{default:t(()=>[r(a)&&r(a).avatar?(u(),c(g,{key:0,src:r(a).avatar},null,8,["src"])):(u(),c(s,{key:1,icon:"tabler-user"}))]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(m,{class:"font-weight-semibold"},{default:t(()=>[l(i(r(a).fullName),1)]),_:1}),e(D,null,{default:t(()=>[l(i(r(a).role),1)]),_:1})]),_:1}),e(b,{class:"my-2"}),e(n,{to:{name:"admin-apps-admins-view-id",params:{id:r(a).id}}},{prepend:t(()=>[e(s,{class:"me-2",icon:"tabler-user",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[l(i(o.$t("Profile")),1)]),_:1})]),_:1},8,["to"]),e(n,{to:{name:"admin-pages-account-settings-tab",params:{tab:"account"}}},{prepend:t(()=>[e(s,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[l(i(o.$t("Settings")),1)]),_:1})]),_:1}),e(n,{to:{name:"pricing"}},{prepend:t(()=>[e(s,{class:"me-2",icon:"tabler-currency-dollar",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[l(i(o.$t("Pricing")),1)]),_:1})]),_:1}),e(n,{to:{name:"admin-pages-faq"}},{prepend:t(()=>[e(s,{class:"me-2",icon:"tabler-help",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[l(i(o.$t("FAQ")),1)]),_:1})]),_:1}),e(b,{class:"my-2"}),e(n,{link:"",onClick:v},{prepend:t(()=>[e(s,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(m,null,{default:t(()=>[l(i(o.$t("logout")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{E as default};
