import{s as c,Z as D,x as R,e as i,o as _,f as z,w as l,g as t,i as e,z as x,C as m,y as d,l as b,B as F,F as O,G as j,H as q,j as n,p as G,r as H,m as k}from"./main.078a9716.js";import{u as M}from"./useInvoiceStore.7aada60a.js";import{a as Q}from"./formatters.ab6dea15.js";import{V as C}from"./VSelect.6ad5365d.js";import{V}from"./VBtn.e4c558dd.js";import{V as T}from"./VSpacer.2ec040b3.js";import{V as Z}from"./VTextField.d8a7d912.js";import{c as L,V as J}from"./VCard.3afa8a52.js";import{V as B}from"./VDivider.cfe78da3.js";import{V as K}from"./VTable.bb6b7904.js";import{V as W}from"./VPagination.015ee10f.js";import{V as X}from"./VTooltip.28460bf3.js";import{V as N}from"./VAvatar.ecffb864.js";import{V as Y}from"./VImg.cc893ccb.js";import{V as tt}from"./VChip.db307e22.js";import{V as et}from"./VMenu.60374e62.js";import{V as at,a as w,b as y}from"./VList.05852a98.js";import"./index.b522f886.js";import"./forwardRefs.c003b6b8.js";import"./dialog-transition.06e38ff2.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.83e8d540.js";import"./VSelectionControl.af7cec95.js";import"./router.4bb23ac0.js";import"./VInput.a7f379dc.js";import"./index.8a0d3cc6.js";import"./position.e83b1372.js";/* empty css                   */import"./VField.db9fd7d9.js";import"./VCounter.3a24309c.js";import"./scopeId.a984c125.js";import"./VOverlay.c04acb7b.js";import"./lazy.5006f860.js";const lt={class:"d-flex align-center",style:{width:"135px"}},ot=e("span",{class:"text-no-wrap me-3"},"Show:",-1),st={class:"me-3"},nt={class:"d-flex align-center flex-wrap gap-4"},it={class:"invoice-list-filter"},rt={class:"invoice-list-filter"},ct={class:"text-uppercase"},dt=e("th",{scope:"col"}," #ID ",-1),ut={scope:"col",class:"text-center"},pt=e("th",{scope:"col"}," CLIENT ",-1),mt=e("th",{scope:"col",class:"text-center"}," TOTAL ",-1),_t=e("th",{scope:"col"}," Issued Date ",-1),ft=e("th",{scope:"col",class:"text-center"}," BALANCE ",-1),vt=e("th",{scope:"col"}," ACTIONS ",-1),ht={class:"text-center"},xt={class:"mb-0"},Vt={class:"mb-0"},gt={class:"mb-0"},bt={class:"d-flex align-center"},wt={key:1},yt={class:"d-flex flex-column"},St={class:"text-base font-weight-medium mb-0"},Pt={class:"text-disabled text-sm"},It={class:"text-center"},Dt={class:"text-center"},zt={style:{width:"8rem"}},kt=e("tr",null,[e("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),Ct=[kt],Tt={class:"text-sm text-disabled"},pe={__name:"index",setup(Lt){const A=M(),f=c(""),v=c(),u=c(10),r=c(1),h=c(1),S=c(0),p=c([]),P=c([]);D(()=>{A.fetchInvoices({q:f.value,status:v.value,perPage:u.value,currentPage:r.value}).then(o=>{p.value=o.data.invoices,h.value=o.data.totalPage,S.value=o.data.totalInvoices}).catch(o=>{console.log(o)})}),D(()=>{r.value>h.value&&(r.value=h.value)});const E=R(()=>{const o=p.value.length?(r.value-1)*u.value+1:0,s=p.value.length+(r.value-1)*u.value;return`Showing ${o} to ${s} of ${S.value} entries`}),I=(o,s)=>o===s?{status:"Unpaid",chip:{color:"error"}}:o===0?{status:"Paid",chip:{color:"success"}}:{status:o,chip:{variant:"text"}},g=o=>o==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:o==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:o==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:o==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:o==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:o==="Past Due"?{variant:"error",icon:"tabler-alert-circle"}:{variant:"secondary",icon:"tabler-x"};return(o,s)=>{const $=H("RouterLink");return i(p)?(_(),z(J,{key:0,id:"invoice-list"},{default:l(()=>[t(L,{class:"d-flex align-center flex-wrap gap-4"},{default:l(()=>[e("div",lt,[ot,t(C,{modelValue:i(u),"onUpdate:modelValue":s[0]||(s[0]=a=>x(u)?u.value=a:null),density:"compact",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",st,[t(V,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:l(()=>[m(" Create invoice ")]),_:1})]),t(T),e("div",nt,[e("div",it,[t(Z,{modelValue:i(f),"onUpdate:modelValue":s[1]||(s[1]=a=>x(f)?f.value=a:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),e("div",rt,[t(C,{modelValue:i(v),"onUpdate:modelValue":s[2]||(s[2]=a=>x(v)?v.value=a:null),label:"Select Status",clearable:"","clear-icon":"tabler-x","single-line":"",items:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),t(B),t(K,{class:"text-no-wrap invoice-list-table"},{default:l(()=>[e("thead",ct,[e("tr",null,[dt,e("th",ut,[t(d,{icon:"tabler-trending-up"})]),pt,mt,_t,ft,vt])]),e("tbody",null,[(_(!0),b(O,null,F(i(p),a=>(_(),b("tr",{key:a.id,style:{height:"3.75rem"}},[e("td",null,[t($,{to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[m(" #"+n(a.id),1)]),_:2},1032,["to"])]),e("td",ht,[t(X,null,{activator:l(({props:U})=>[t(N,k({size:30},U,{color:g(a.invoiceStatus).variant,variant:"tonal"}),{default:l(()=>[t(d,{size:20,icon:g(a.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:l(()=>[e("p",xt,n(a.invoiceStatus),1),e("p",Vt," Balance: "+n(a.balance),1),e("p",gt," Due date: "+n(a.dueDate),1)]),_:2},1024)]),e("td",null,[e("div",bt,[t(N,{size:"34",color:g(a.invoiceStatus).variant,variant:"tonal",class:"me-3"},{default:l(()=>[a.avatar.length?(_(),z(Y,{key:0,src:a.avatar},null,8,["src"])):(_(),b("span",wt,n(i(Q)(a.client.name)),1))]),_:2},1032,["color"]),e("div",yt,[e("h6",St,n(a.client.name),1),e("span",Pt,n(a.client.companyEmail),1)])])]),e("td",It," $"+n(a.total),1),e("td",null,n(a.issuedDate),1),e("td",Dt,[t(tt,k({label:""},I(a.balance,a.total).chip,{size:"small"}),{default:l(()=>[m(n(I(a.balance,a.total).status),1)]),_:2},1040)]),e("td",zt,[t(V,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{icon:"tabler-mail",size:22})]),_:1}),t(V,{icon:"",variant:"text",color:"default",size:"x-small",to:{name:"apps-invoice-preview-id",params:{id:a.id}}},{default:l(()=>[t(d,{size:22,icon:"tabler-eye"})]),_:2},1032,["to"]),t(V,{icon:"",variant:"text",color:"default",size:"x-small"},{default:l(()=>[t(d,{size:22,icon:"tabler-dots-vertical"}),t(et,{activator:"parent"},{default:l(()=>[t(at,null,{default:l(()=>[t(w,{value:"download"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-download"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Download")]),_:1})]),_:1}),t(w,{to:{name:"apps-invoice-edit-id",params:{id:a.id}}},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-pencil"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Edit")]),_:1})]),_:2},1032,["to"]),t(w,{value:"duplicate"},{prepend:l(()=>[t(d,{size:"24",class:"me-3",icon:"tabler-stack"})]),default:l(()=>[t(y,null,{default:l(()=>[m("Duplicate")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),j(e("tfoot",null,Ct,512),[[q,!i(p).length]])]),_:1}),t(B),t(L,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:l(()=>[e("span",Tt,n(i(E)),1),t(T),t(W,{modelValue:i(r),"onUpdate:modelValue":s[3]||(s[3]=a=>x(r)?r.value=a:null),size:"small","total-visible":5,length:i(h),onNext:s[4]||(s[4]=a=>P.value=[]),onPrev:s[5]||(s[5]=a=>P.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):G("",!0)}}};export{pe as default};
