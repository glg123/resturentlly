import{s as h,e,o as x,l as w,g as s,w as n,i as t,V as C,t as y,j as o,F as T,B as I,C as d,z as v,p as B,be as N}from"./main.990d9ea9.js";import{a as O,_ as P}from"./InvoiceSendInvoiceDrawer.5de16289.js";import{u as $}from"./useInvoiceStore.99792c3a.js";import{a as g,V as A}from"./VRow.0bcdac56.js";import{V as D,c as m}from"./VCard.94cdd6ce.js";import{V as f}from"./VDivider.e5e2b0d1.js";import{V as E}from"./VTable.de7ac809.js";import{V as p}from"./VBtn.adcd713f.js";import"./AppDateTimePicker.09cf8635.js";import"./VField.1e57bd4f.js";import"./index.e3fe277e.js";import"./VInput.1ed46ed6.js";import"./router.0858fd47.js";import"./VImg.df47303b.js";import"./position.e5bc53dd.js";import"./easing.36b781ab.js";import"./VSpacer.c7fc94bf.js";import"./VAvatar.40922329.js";import"./VForm.81841bf1.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.eb67bf6a.js";/* empty css                   */import"./VCounter.02465320.js";import"./VSelect.a0834e11.js";import"./VList.82c5e899.js";import"./dialog-transition.8b85c9f4.js";import"./VMenu.b1ba5b44.js";import"./scopeId.64e113c9.js";import"./VOverlay.d036f797.js";import"./lazy.6748cd50.js";import"./VCheckboxBtn.5a069503.js";import"./VSelectionControl.80d3fb47.js";import"./VChip.ee1b29a7.js";import"./VTextarea.ebbdde99.js";import"./VNavigationDrawer.0a1b8969.js";import"./ssrBoot.23a93ce4.js";const R={key:0},j={class:"ma-sm-4"},q={class:"d-flex align-center mb-6"},U={class:"font-weight-bold text-xl"},W=t("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),F=t("p",{class:"mb-0"}," San Diego County, CA 91905, USA ",-1),L=t("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),M={class:"mt-4 ma-sm-4"},z={class:"font-weight-medium text-xl mb-6"},Y={class:"mb-2"},H=t("span",null,"Date Issued: ",-1),J={class:"font-weight-semibold"},Q={class:"mb-2"},G=t("span",null,"Due Date: ",-1),K={class:"font-weight-semibold"},X={class:"ma-sm-4"},Z=t("h6",{class:"text-sm font-weight-semibold mb-3"}," Invoice To: ",-1),tt={class:"mb-1"},st={class:"mb-1"},et={class:"mb-1"},ot={class:"mb-1"},nt={class:"mb-0"},lt={class:"mt-4 ma-sm-4"},at=t("h6",{class:"text-sm font-weight-semibold mb-3"}," Bill To: ",-1),it=t("td",{class:"pe-6"}," Total Due: ",-1),ct=t("td",{class:"pe-6"}," Bank Name: ",-1),rt=t("td",{class:"pe-6"}," Country: ",-1),dt=t("td",{class:"pe-6"}," IBAN: ",-1),mt=t("td",{class:"pe-6"}," SWIFT Code: ",-1),pt=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ITEM "),t("th",{scope:"col"}," DESCRIPTION "),t("th",{scope:"col",class:"text-center"}," HOURS "),t("th",{scope:"col",class:"text-center"}," QTY "),t("th",{scope:"col",class:"text-center"}," TOTAL ")])],-1),ut={class:"text-no-wrap"},_t={class:"text-no-wrap"},ht={class:"text-center"},ft={class:"text-center"},bt={class:"text-center"},xt=t("div",{class:"my-2 mx-sm-4"},[t("div",{class:"d-flex align-center mb-1"},[t("h6",{class:"text-sm font-weight-semibold me-1"}," Salesperson: "),t("span",null,"Jenny Parker")]),t("p",null,"Thanks for your business")],-1),wt=t("div",{class:"my-2 mx-sm-4"},[t("table",null,[t("tr",null,[t("td",{class:"text-end"},[t("div",{class:"me-5"},[t("p",{class:"mb-2"}," Subtotal: "),t("p",{class:"mb-2"}," Discount: "),t("p",{class:"mb-2"}," Tax: "),t("p",{class:"mb-2"}," Total: ")])]),t("td",{class:"font-weight-semibold"},[t("p",{class:"mb-2"}," $154.25 "),t("p",{class:"mb-2"}," $00.00 "),t("p",{class:"mb-2"}," $50.00 "),t("p",{class:"mb-2"}," $204.25 ")])])])],-1),yt=t("div",{class:"d-flex mx-sm-4"},[t("h6",{class:"text-sm font-weight-semibold me-1"}," Note: "),t("span",null,"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")],-1),ns={__name:"[id]",setup(vt){const k=$(),b=N(),a=h(),c=h(),u=h(!1),_=h(!1);k.fetchInvoice(Number(b.params.id)).then(r=>{a.value=r.data.invoice,c.value=r.data.paymentDetails}).catch(r=>{console.log(r)});const V=[{name:"Premium Branding Package",description:"Branding & Promotion",qty:1,hours:15,price:32},{name:"SMM",description:"Social media templates",qty:1,hours:14,price:28},{name:"Web Design",description:"Web designing package",qty:1,hours:12,price:24},{name:"SEO",description:"Search engine optimization",qty:1,hours:5,price:22}],S=()=>{window.print()};return(r,i)=>e(a)?(x(),w("section",R,[s(A,null,{default:n(()=>[s(g,{cols:"12",md:"9"},{default:n(()=>[s(D,null,{default:n(()=>[s(m,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row"},{default:n(()=>[t("div",j,[t("div",q,[s(e(C),{nodes:e(y).app.logo,class:"me-3"},null,8,["nodes"]),t("h6",U,o(e(y).app.title),1)]),W,F,L]),t("div",M,[t("h6",z," Invoice #"+o(e(a).id),1),t("p",Y,[H,t("span",J,o(e(a).issuedDate),1)]),t("p",Q,[G,t("span",K,o(e(a).dueDate),1)])])]),_:1}),s(f),s(m,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row"},{default:n(()=>[t("div",X,[Z,t("p",tt,o(e(a).client.name),1),t("p",st,o(e(a).client.company),1),t("p",et,o(e(a).client.address)+", "+o(e(a).client.country),1),t("p",ot,o(e(a).client.contact),1),t("p",nt,o(e(a).client.companyEmail),1)]),t("div",lt,[at,t("table",null,[t("tr",null,[it,t("td",null,o(e(c).totalDue),1)]),t("tr",null,[ct,t("td",null,o(e(c).bankName),1)]),t("tr",null,[rt,t("td",null,o(e(c).country),1)]),t("tr",null,[dt,t("td",null,o(e(c).iban),1)]),t("tr",null,[mt,t("td",null,o(e(c).swiftCode),1)])])])]),_:1}),s(f),s(E,null,{default:n(()=>[pt,t("tbody",null,[(x(),w(T,null,I(V,l=>t("tr",{key:l.name},[t("td",ut,o(l.name),1),t("td",_t,o(l.description),1),t("td",ht,o(l.hours),1),t("td",ft,o(l.qty),1),t("td",bt," $"+o(l.price),1)])),64))])]),_:1}),s(f,{class:"my-2"}),s(m,{class:"d-flex justify-space-between flex-column flex-sm-row print-row"},{default:n(()=>[xt,wt]),_:1}),s(f),s(m,null,{default:n(()=>[yt]),_:1})]),_:1})]),_:1}),s(g,{cols:"12",md:"3",class:"d-print-none"},{default:n(()=>[s(D,null,{default:n(()=>[s(m,null,{default:n(()=>[s(p,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:i[0]||(i[0]=l=>_.value=!0)},{default:n(()=>[d(" Send Invoice ")]),_:1}),s(p,{block:"",variant:"tonal",color:"secondary",class:"mb-2"},{default:n(()=>[d(" Download ")]),_:1}),s(p,{block:"",variant:"tonal",color:"secondary",class:"mb-2",onClick:S},{default:n(()=>[d(" Print ")]),_:1}),s(p,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-edit-id",params:{id:e(b).params.id}}},{default:n(()=>[d(" Edit Invoice ")]),_:1},8,["to"]),s(p,{block:"","prepend-icon":"tabler-currency-dollar",onClick:i[1]||(i[1]=l=>u.value=!0)},{default:n(()=>[d(" Add Payment ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(O,{isDrawerOpen:e(u),"onUpdate:isDrawerOpen":i[2]||(i[2]=l=>v(u)?u.value=l:null)},null,8,["isDrawerOpen"]),s(P,{isDrawerOpen:e(_),"onUpdate:isDrawerOpen":i[3]||(i[3]=l=>v(_)?_.value=l:null)},null,8,["isDrawerOpen"])])):B("",!0)}};export{ns as default};
