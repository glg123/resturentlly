import{s as n,e as l,o as p,f as V,w as o,g as t,z as u,l as b,B as g,F as k,p as B,be as v,y as w,i as y,j as $}from"./main.a5f2feaa.js";import{u as N}from"./useAdminListStore.5ae2e1c6.js";import{U as S,_ as U,a as C,b as L,c as R,d as T}from"./UserTabSecurity.11d9173e.js";import{a as c,V as x}from"./VRow.11c141e1.js";import{V as z,a as D}from"./VTabs.22977f5b.js";import{V as F,a}from"./VWindowItem.9eb63964.js";import"./DialogCloseBtn.09800171.js";import"./VBtn.a433eeed.js";import"./router.31ac10a2.js";import"./position.36d4d31d.js";import"./VCard.09420318.js";import"./VAvatar.17d32ef5.js";import"./VImg.b81fa5df.js";import"./VForm.6997ee7f.js";import"./VInput.7d0ef3f1.js";import"./index.af8955da.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.0a298259.js";/* empty css                   */import"./VField.a1ac0317.js";import"./easing.36b781ab.js";import"./VCounter.bcb299c1.js";import"./VSelect.d5a260e9.js";import"./VList.89546436.js";import"./VDivider.2bd6b130.js";import"./dialog-transition.e2294cd8.js";import"./VMenu.dac15267.js";import"./scopeId.2cacba18.js";import"./VOverlay.215e4470.js";import"./lazy.9cc9d935.js";import"./VCheckboxBtn.cbe8e216.js";import"./VSelectionControl.79576fb2.js";import"./VChip.d1d16c5d.js";import"./VSwitch.38e29110.js";import"./VDialog.a8636a34.js";import"./formatters.ab6dea15.js";import"./index.b522f886.js";import"./VSpacer.79b97f0f.js";import"./VTextarea.57fc4411.js";import"./EnableOneTimePasswordDialog.3410e5e6.js";import"./VAlert.f0d4fef6.js";import"./VTable.f886bc78.js";import"./VCheckbox.c6078b71.js";import"./useInvoiceStore.c0062281.js";import"./VTooltip.587326a6.js";import"./VPagination.b3f9df6e.js";import"./xamarin.9738782b.js";import"./VTimelineItem.12524495.js";import"./VSlideGroup.e271c9cb.js";import"./ssrBoot.bae8ddd1.js";const zt={__name:"[id]",setup(I){const d=N(),f=v(),m=n(),i=n(null),_=[{icon:"tabler-user-check",title:"Overview"},{icon:"tabler-lock",title:"Security"},{icon:"tabler-currency-dollar",title:"Billing & Plan"},{icon:"tabler-bell",title:"Notifications"},{icon:"tabler-link",title:"Connections"}];return d.getSingleUser(Number(f.params.id)).then(s=>{m.value=s.data}),(s,r)=>l(m)?(p(),V(x,{key:0},{default:o(()=>[t(c,{cols:"12",md:"5",lg:"4"},{default:o(()=>[t(S,{"user-data":l(m)},null,8,["user-data"])]),_:1}),t(c,{cols:"12",md:"7",lg:"8"},{default:o(()=>[t(z,{modelValue:l(i),"onUpdate:modelValue":r[0]||(r[0]=e=>u(i)?i.value=e:null),class:"v-tabs-pill"},{default:o(()=>[(p(),b(k,null,g(_,e=>t(D,{key:e.icon},{default:o(()=>[t(w,{size:18,icon:e.icon,class:"me-1"},null,8,["icon"]),y("span",null,$(s.$t(e.title)),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),t(F,{modelValue:l(i),"onUpdate:modelValue":r[1]||(r[1]=e=>u(i)?i.value=e:null),class:"mt-6 disable-tab-transition",touch:!1},{default:o(()=>[t(a,null,{default:o(()=>[t(U)]),_:1}),t(a,null,{default:o(()=>[t(C)]),_:1}),t(a,null,{default:o(()=>[t(L)]),_:1}),t(a,null,{default:o(()=>[t(R)]),_:1}),t(a,null,{default:o(()=>[t(T)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):B("",!0)}};export{zt as default};