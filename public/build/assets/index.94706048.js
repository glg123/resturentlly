import{o as n,l,F as p,B as y,f,k as g,K as w,L as $,M as k,b as N,O as C,s as I,Q as S,i as e,q as o,g as z,e as t,E as v}from"./main.078a9716.js";const B={class:"nav-items"},L={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(i){const c=r=>"children"in r?w:$;return(r,d)=>(n(),l("ul",B,[(n(!0),l(p,null,y(i.navItems,(s,u)=>(n(),f(g(c(s)),{key:u,item:s},null,8,["item"]))),128))]))}},E={class:"layout-navbar"},A={class:"navbar-content-container"},D={class:"layout-horizontal-nav"},q={class:"horizontal-nav-content-container"},R={class:"layout-page-content"},W={class:"layout-footer"},F={class:"footer-content-container"},V={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(i){const{y:c}=k(),{width:r}=N(),d=C(),s=I(!1);d.beforeEach(()=>{s.value=!0}),d.afterEach(()=>{s.value=!1});const{_layoutClasses:u,isNavbarBlurEnabled:b}=S();return(a,O)=>(n(),l("div",{class:v(["layout-wrapper",t(u)(t(r),t(c))])},[e("div",{class:v(["layout-navbar-and-nav-container",t(b)&&"header-blur"])},[e("div",E,[e("div",A,[o(a.$slots,"navbar")])]),e("div",D,[e("div",q,[z(t(L),{"nav-items":i.navItems},null,8,["nav-items"])])])],2),e("main",R,[a.$slots["content-loading"]?(n(),l(p,{key:0},[t(s)?o(a.$slots,"content-loading",{key:0}):o(a.$slots,"default",{key:1})],64)):o(a.$slots,"default",{key:1})]),e("footer",W,[e("div",F,[o(a.$slots,"footer")])])],2))}},_=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics",icon:{icon:"tabler-chart-bar"}},{title:"eCommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-shopping-cart"}},{title:"CRM",to:"dashboards-crm",icon:{icon:"tabler-heart-rate-monitor"}}]}],H=[{heading:"Admins & Permission"},{title:"Admins",icon:{icon:"tabler-user"},children:[{title:"List",to:"dashboards-apps-user-list"},{title:"AddNew",to:"dashboards-apps-user-add-add_new"}]}],m=JSON.parse(localStorage.getItem("userData")||"{}"),M=m&&m.role?m.role:null;let h=[];M!=="admin"?h=[..._]:h=[..._,...H];const J=h;export{V as _,J as n};