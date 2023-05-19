import{K as M,d5 as N,s as y,bF as f,ai as A,Q as j,o as l,f as V,w as t,g as a,e as r,z as E,cP as B,y as u,i as n,j as m,P as X,G as C,l as p,F as v,B as x,C as I,q as D,H as w,p as z,X as G,Y as H}from"./main.e5722c22.js";import{V as O,c as $}from"./VCard.2abcdcfe.js";import{V as Y}from"./VTextField.c7d5535f.js";import{V as L}from"./VBtn.4327307d.js";import{V as J}from"./VDivider.19cd6d54.js";import{V as Q,d as W,a as R,b as Z}from"./VList.345ceaa4.js";import{V as ee,a as se}from"./VRow.f8de802a.js";import{V as te}from"./VDialog.6304c993.js";import"./VAvatar.1bc59f66.js";import"./router.f3c33ba4.js";import"./VImg.a33717ea.js";import"./position.fb77405d.js";/* empty css                   */import"./VField.01372b27.js";import"./index.19c19380.js";import"./VInput.1a6e2ae8.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.bc3c6bfa.js";import"./scopeId.23faa331.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./dialog-transition.738c368f.js";const ae=_=>(G("data-v-814c9d96"),_=_(),H(),_),re={class:"d-flex align-center"},le={class:"h-100"},ie={class:"text-xs text-disabled text-uppercase"},oe={class:"h-100"},ne={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ce={class:"text-h6 my-3"},ue={key:0,class:"mt-8"},pe=ae(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),de=["onClick"],he={class:"text-sm"},fe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(_,{emit:g}){const i=_,{ctrl_k:K,meta_k:F}=N(),k=y(),o=y(structuredClone(f(i.searchQuery))),T=y(),S=y(structuredClone(f(i.isDialogVisible))),d=y(structuredClone(f(i.searchResults)));A(i,()=>{S.value=structuredClone(f(i.isDialogVisible)),d.value=structuredClone(f(i.searchResults)),o.value=structuredClone(f(i.searchQuery))}),A([K,F],()=>{S.value=!0,g("update:isDialogVisible",!0)});const b=()=>{g("update:isDialogVisible",!1),g("update:searchQuery","")};j(()=>{o.value.length||(d.value=[])});const q=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},P=e=>{g("update:isDialogVisible",e),g("update:searchQuery","")},U=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(l(),V(te,{"max-width":"600","model-value":r(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":P,onKeyup:B(b,["esc"])},{default:t(()=>[a(O,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a($,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(Y,{ref_key:"refSearchInput",ref:T,modelValue:r(o),"onUpdate:modelValue":[c[0]||(c[0]=s=>E(o)?o.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(o)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:B(b,["esc"]),onKeydown:q},{"prepend-inner":t(()=>[a(L,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",re,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:b}," ["+m(e.$t("esc"))+"] ",1),a(L,{icon:"",variant:"text",color:"default",size:"x-small",onClick:b},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(J),a(r(X),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[C(a(r(Q),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),p(v,null,x(r(d),s=>(l(),p(v,{key:s.title},["header"in s?(l(),V(r(W),{key:0,class:"text-disabled"},{default:t(()=>[I(m(U(s.title)),1)]),_:2},1024)):D(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(R),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(Z,null,{default:t(()=>[I(m(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[w,r(o).length&&!!r(d).length]]),C(n("div",le,[D(e.$slots,"suggestions",{},()=>[a($,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),V(ee,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),p(v,null,x(i.suggestions,s=>(l(),V(se,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",ie,m(s.title),1),a(r(Q),{class:"card-list"},{default:t(()=>[(l(!0),p(v,null,x(s.content,h=>(l(),V(r(R),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:me=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):z("",!0)]),_:1})],!0)],512),[[w,!!r(d)&&!r(o)]]),C(n("div",oe,[D(e.$slots,"noData",{},()=>[a($,{class:"h-100"},{default:t(()=>[n("div",ne,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ce,' No Result For "'+m(r(o))+'" ',1),i.noDataSuggestion?(l(),p("div",ue,[pe,(l(!0),p(v,null,x(i.noDataSuggestion,s=>(l(),p("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",he,m(s.title),1)],8,de))),128))])):z("",!0)])]),_:1})],!0)],512),[[w,!r(d).length&&r(o).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}},qe=M(fe,[["__scopeId","data-v-814c9d96"]]);export{qe as default};
