import{s as b,o as l,l as m,g as t,w as i,F as f,B as d,e as n,z as p,be as _,y as V,C as v,j as g}from"./main.078a9716.js";import{_ as y,A as k,a as x,b as w,c as B}from"./AccountSettingsSecurity.72311428.js";import{b as s}from"./route-block.2f1a6263.js";import{V as S,a as T}from"./VTabs.b0850871.js";import{a as r,V as $}from"./VWindowItem.f156bf0d.js";import"./ConfirmDialog.43d7d068.js";import"./VCard.3afa8a52.js";import"./VAvatar.ecffb864.js";import"./router.4bb23ac0.js";import"./VImg.cc893ccb.js";import"./position.e83b1372.js";import"./VBtn.e4c558dd.js";import"./VDialog.451cfc56.js";import"./scopeId.a984c125.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.c04acb7b.js";import"./lazy.5006f860.js";import"./easing.36b781ab.js";import"./dialog-transition.06e38ff2.js";import"./VRow.e13b536b.js";import"./VDivider.cfe78da3.js";import"./VForm.f4c68f82.js";import"./VInput.a7f379dc.js";import"./index.8a0d3cc6.js";import"./VTextField.d8a7d912.js";/* empty css                   */import"./VField.db9fd7d9.js";import"./VCounter.3a24309c.js";import"./VSelect.6ad5365d.js";import"./VList.05852a98.js";import"./VMenu.60374e62.js";import"./VCheckboxBtn.83e8d540.js";import"./VSelectionControl.af7cec95.js";import"./VChip.db307e22.js";import"./VAlert.901d9b16.js";import"./VCheckbox.876e9264.js";import"./twitter.46d455c5.js";import"./DialogCloseBtn.44842ff7.js";import"./VSwitch.747c7569.js";import"./AppPricing.f8a5de35.js";import"./useInvoiceStore.7aada60a.js";import"./formatters.ab6dea15.js";import"./index.b522f886.js";import"./VSpacer.2ec040b3.js";import"./VTable.bb6b7904.js";import"./VTooltip.28460bf3.js";import"./VPagination.015ee10f.js";import"./VRadioGroup.613eb00f.js";import"./VListItemAction.0e764161.js";import"./EnableOneTimePasswordDialog.2fbf2aaa.js";import"./laptop-girl.7179f0df.js";import"./VSlideGroup.2e8d2473.js";import"./ssrBoot.64d4892f.js";const A={__name:"[tab]",setup(C){const c=_(),a=b(c.params.tab),u=[{title:"Account",icon:"tabler-users",tab:"account"},{title:"Security",icon:"tabler-lock",tab:"security"},{title:"Billing & Plans",icon:"tabler-file-text",tab:"billing-plans"},{title:"Notifications",icon:"tabler-bell",tab:"notification"},{title:"Connections",icon:"tabler-link",tab:"connection"}];return(N,e)=>(l(),m("div",null,[t(S,{modelValue:n(a),"onUpdate:modelValue":e[0]||(e[0]=o=>p(a)?a.value=o:null),class:"v-tabs-pill"},{default:i(()=>[(l(),m(f,null,d(u,o=>t(T,{key:o.icon,value:o.tab,to:{name:"pages-account-settings-tab",params:{tab:o.tab}}},{default:i(()=>[t(V,{size:"20",start:"",icon:o.icon},null,8,["icon"]),v(" "+g(o.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),t($,{modelValue:n(a),"onUpdate:modelValue":e[1]||(e[1]=o=>p(a)?a.value=o:null),class:"mt-6 disable-tab-transition",touch:!1},{default:i(()=>[t(r,{value:"account"},{default:i(()=>[t(y)]),_:1}),t(r,{value:"security"},{default:i(()=>[t(k)]),_:1}),t(r,{value:"billing-plans"},{default:i(()=>[t(x)]),_:1}),t(r,{value:"notification"},{default:i(()=>[t(w)]),_:1}),t(r,{value:"connection"},{default:i(()=>[t(B)]),_:1})]),_:1},8,["modelValue"])]))}};typeof s=="function"&&s(A);export{A as default};