import{_ as m}from"./AppCardActions.19f3f1df.js";import{c as a}from"./VCard.2abcdcfe.js";import{V as _}from"./VTable.045acce0.js";import{a as c,V as h}from"./VRow.f8de802a.js";import{o as u,f as C,w as t,g as o,i as e,l as b,B as R,F as V,C as l,y as s,j as p}from"./main.e5722c22.js";import{V as g}from"./VChip.f64a01b2.js";import"./index.19c19380.js";import"./VBtn.4327307d.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VAvatar.1bc59f66.js";const v=e("thead",null,[e("tr",null,[e("th",{scope:"col"}," ACTION "),e("th",{scope:"col"}," ICON "),e("th",{scope:"col"}," DETAILS ")])],-1),y=e("p",null,[l("You can specifically add collapsible action using "),e("code",null,"actionCollapse"),l(" prop")],-1),k=e("p",null,[l("You can specifically add refresh action using "),e("code",null,"actionRefresh"),l(" prop")],-1),x=e("p",null,[l("You can specifically add remove action using "),e("code",null,"actionRemove"),l(" prop")],-1),T=e("p",null,[e("code",null,"app-card-actions"),l(" also provides "),e("code",null,"before-actions"),l(" and "),e("code",null,"after-actions"),l(" slot")],-1),z=e("span",null,"You can find more details in our documentation",-1),H={__name:"card-actions",setup(A){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],r=d=>{setTimeout(d,3e3)};return(d,B)=>{const n=m;return u(),C(h,null,{default:t(()=>[o(c,{cols:"12"},{default:t(()=>[o(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[o(a,null,{default:t(()=>[o(_,null,{default:t(()=>[v,e("tbody",null,[(u(),b(V,null,R(f,i=>e("tr",{key:i.icon},[e("td",null,p(i.action),1),e("td",null,[o(s,{size:"20",icon:i.icon},null,8,["icon"])]),e("td",null,p(i.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),o(c,{cols:"12",md:"6"},{default:t(()=>[o(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[o(a,null,{default:t(()=>[y,e("span",null,[l("Click on "),o(s,{size:"20",icon:"tabler-chevron-up"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),o(c,{cols:"12",md:"6"},{default:t(()=>[o(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[o(a,null,{default:t(()=>[k,e("span",null,[l("Click on "),o(s,{size:"20",icon:"tabler-refresh"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),o(c,{cols:"12",md:"6"},{default:t(()=>[o(n,{title:"Remove Card","action-remove":""},{default:t(()=>[o(a,null,{default:t(()=>[x,e("span",null,[l("Click on "),o(s,{size:"20",icon:"tabler-x"}),l(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),o(c,{cols:"12",md:"6"},{default:t(()=>[o(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[o(g,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[l(" 3 Updates ")]),_:1})]),default:t(()=>[o(a,null,{default:t(()=>[T,z]),_:1})]),_:1})]),_:1})]),_:1})}}};export{H as default};