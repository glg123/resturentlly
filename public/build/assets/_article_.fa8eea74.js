import{s as m,ai as v,e as t,o as d,f as h,w as a,g as e,i as r,j as n,z as x,l as C,B as w,F as T,y as u,C as b,p as k,be as B,$ as A}from"./main.a5f2feaa.js";import{b as V}from"./route-block.2f1a6263.js";import{V as D,a as H}from"./VTabs.22977f5b.js";import{a as y,V as I}from"./VRow.11c141e1.js";import{V as N,a as j}from"./VWindowItem.9eb63964.js";import{V as z,c as f,a as L,b as R}from"./VCard.09420318.js";import{V as S}from"./VBtn.a433eeed.js";import{V as _}from"./VAvatar.17d32ef5.js";import{V as F}from"./VDivider.2bd6b130.js";import"./router.31ac10a2.js";import"./easing.36b781ab.js";import"./VSlideGroup.e271c9cb.js";import"./index.af8955da.js";import"./lazy.9cc9d935.js";import"./VImg.b81fa5df.js";import"./ssrBoot.bae8ddd1.js";import"./position.36d4d31d.js";const M={class:"text-base mb-3"},W=r("span",null,"Back to help center",-1),E={class:"d-flex justify-space-between flex-wrap mb-2"},P={class:"article-info"},U={class:"text-h6 mb-1"},$=r("p",{class:"mb-1"}," 55 People found this helpful ",-1),q=r("h6",{class:"text-h6"},[b(" Still need help? "),r("a",{href:"javascript:void(0);"},"Contact us?")],-1),G={class:"article-votes d-flex align-center gap-3"},J={__name:"[article]",setup(K){const o=B(),i=m(),l=m(o.params.article),c=m();return v(l,()=>A.get("/pages/help-center/article",{params:{article:l.value,category:o.params.category,subcategory:o.params.subcategory}}).then(p=>{i.value=p.data.activeSubcategory,c.value=p.data.activeArticle}),{immediate:!0}),(p,g)=>t(c)&&t(i)?(d(),h(I,{key:0},{default:a(()=>[e(y,{cols:"12",md:"4"},{default:a(()=>[r("h6",M,n(t(i).title),1),e(D,{modelValue:t(l),"onUpdate:modelValue":g[0]||(g[0]=s=>x(l)?l.value=s:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[(d(!0),C(T,null,w(t(i).articles,s=>(d(),h(H,{key:s.slug,value:s.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:t(o).params.category,subcategory:t(o).params.subcategory,article:s.slug}}},{default:a(()=>[b(n(s.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(y,{cols:"12",md:"8"},{default:a(()=>[e(N,null,{default:a(()=>[e(j,null,{default:a(()=>[e(z,null,{default:a(()=>[e(f,{class:"pb-0"},{default:a(()=>[e(S,{variant:"tonal",to:{name:"pages-help-center-category-subcategory",params:{category:t(o).params.category,subcategory:t(o).params.subcategory}}},{default:a(()=>[e(u,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),W]),_:1},8,["to"])]),_:1}),e(L,null,{prepend:a(()=>[e(_,{color:"primary",variant:"tonal",rounded:""},{default:a(()=>[e(u,{icon:"tabler-currency-dollar"})]),_:1})]),default:a(()=>[e(R,null,{default:a(()=>[b(n(t(c).title),1)]),_:1})]),_:1}),e(f,{innerHTML:t(c).content},null,8,["innerHTML"]),e(F),e(f,null,{default:a(()=>[r("div",E,[r("div",P,[r("h6",U,n(t(c).title),1),$]),q]),r("div",G,[e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-up"})]),_:1}),e(_,{color:"primary",variant:"tonal",rounded:"",size:"30"},{default:a(()=>[e(u,{icon:"tabler-thumb-down"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0)}};typeof V=="function"&&V(J);export{J as default};