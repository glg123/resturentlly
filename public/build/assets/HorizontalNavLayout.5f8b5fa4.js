import{o as n,l,F as _,B as h,f,k as y,$ as p,a0 as $,a1 as b,b as k,W as w,s as g,a2 as z,i as e,q as o,g as B,e as t,E as v}from"./main.e5722c22.js";const N={class:"nav-items"},C={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(c){const i=r=>"children"in r?p:$;return(r,u)=>(n(),l("ul",N,[(n(!0),l(_,null,h(c.navItems,(a,d)=>(n(),f(y(i(a)),{key:d,item:a},null,8,["item"]))),128))]))}},E={class:"layout-navbar"},I={class:"navbar-content-container"},S={class:"layout-horizontal-nav"},L={class:"horizontal-nav-content-container"},W={class:"layout-page-content"},q={class:"layout-footer"},F={class:"footer-content-container"},D={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(c){const{y:i}=b(),{width:r}=k(),u=w(),a=g(!1);u.beforeEach(()=>{a.value=!0}),u.afterEach(()=>{a.value=!1});const{_layoutClasses:d,isNavbarBlurEnabled:m}=z();return(s,H)=>(n(),l("div",{class:v(["layout-wrapper",t(d)(t(r),t(i))])},[e("div",{class:v(["layout-navbar-and-nav-container",t(m)&&"header-blur"])},[e("div",E,[e("div",I,[o(s.$slots,"navbar")])]),e("div",S,[e("div",L,[B(t(C),{"nav-items":c.navItems},null,8,["nav-items"])])])],2),e("main",W,[s.$slots["content-loading"]?(n(),l(_,{key:0},[t(a)?o(s.$slots,"content-loading",{key:0}):o(s.$slots,"default",{key:1})],64)):o(s.$slots,"default",{key:1})]),e("footer",q,[e("div",F,[o(s.$slots,"footer")])])],2))}};export{D as _};
