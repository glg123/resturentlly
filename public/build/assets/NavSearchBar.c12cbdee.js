import{K as y,d as V,aP as A,c as B,s as c,Q as I,a as P,o as d,l as g,i as u,g as l,w as x,e as t,j as C,p as D,m as N,z as m,F as k,U as w,y as z,X as E,Y as L,W as R,_ as q}from"./main.e5722c22.js";import{V as O}from"./VBtn.4327307d.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";const Q=o=>(E("data-v-9c275d39"),o=o(),L(),o),T={key:0,class:"d-none d-md-flex align-center text-disabled"},U={class:"me-3"},$=Q(()=>u("span",{class:"meta-key"},"\u2318K",-1)),j=V({inheritAttrs:!1}),F=Object.assign(j,{__name:"NavSearchBar",setup(o){const{t:r}=A(),{appContentLayoutNav:_}=B(),e=c(!1),h=[{title:r("Popular Searches"),content:[{icon:"tabler-users",title:r("Admin List"),url:{name:"admin-apps-admins-list"}}]},{title:r("Apps & Pages"),content:[{icon:"tabler-user",title:r("Account Settings"),url:{name:"admin-pages-account-settings-tab",params:{tab:"account"}}}]}],f=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],n=c(""),p=c([]),v=R();I(()=>{w.get("/app-bar/search",{params:{q:n.value}}).then(a=>{p.value=a.data})});const b=a=>{v.push(a.url),e.value=!1,n.value=""},S=P(()=>q(()=>import("./AppBarSearch.2db9666e.js"),["assets/AppBarSearch.2db9666e.js","assets/main.e5722c22.js","assets/main.1294ab95.css","assets/VCard.2abcdcfe.js","assets/VAvatar.1bc59f66.js","assets/router.f3c33ba4.js","assets/router.1e6db107.css","assets/VImg.a33717ea.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.fb77405d.js","assets/position.65ee821e.css","assets/VCard.ec4d23b9.css","assets/VTextField.c7d5535f.js","assets/VField.01372b27.js","assets/index.19c19380.js","assets/VInput.1a6e2ae8.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.bc3c6bfa.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.4327307d.js","assets/VBtn.1958adaf.css","assets/VDivider.19cd6d54.js","assets/VDivider.5d6d66e0.css","assets/VList.345ceaa4.js","assets/VList.f3553822.css","assets/VRow.f8de802a.js","assets/VRow.0b79ff68.css","assets/VDialog.6304c993.js","assets/scopeId.23faa331.js","assets/VOverlay.ed5a8d46.js","assets/lazy.d1bb34b2.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.738c368f.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.35f52c5a.css"]));return(a,s)=>(d(),g(k,null,[u("div",N({class:"d-flex align-center cursor-pointer"},a.$attrs,{onClick:s[0]||(s[0]=i=>e.value=!t(e))}),[l(O,{icon:"",variant:"text",color:"default",size:"small"},{default:x(()=>[l(z,{icon:"tabler-search",size:"24"})]),_:1}),t(_)==="vertical"?(d(),g("span",T,[u("span",U,C(a.$t("Search")),1),$])):D("",!0)],16),l(t(S),{isDialogVisible:t(e),"onUpdate:isDialogVisible":s[1]||(s[1]=i=>m(e)?e.value=i:null),"search-query":t(n),"onUpdate:searchQuery":s[2]||(s[2]=i=>m(n)?n.value=i:null),"search-results":t(p),suggestions:h,"no-data-suggestion":f,onItemSelected:b},null,8,["isDialogVisible","search-query","search-results"])],64))}}),Y=y(F,[["__scopeId","data-v-9c275d39"]]);export{Y as default};
