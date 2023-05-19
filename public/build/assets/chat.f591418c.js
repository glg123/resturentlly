import{aN as P,s as f,ai as T,o as m,f as x,w as a,g as e,e as s,z as p,l as C,i as r,y as c,j as b,F as I,B as M,P as E,bf as F,C as U,E as j,aw as A}from"./main.e5722c22.js";import{u as R,_ as q,a as G,b as H,c as J,d as K}from"./ChatUserProfileSidebarContent.a908fc64.js";import{u as Q,V as W,a as X}from"./useResponsiveSidebar.7962a56c.js";import{a as Y}from"./formatters.ab6dea15.js";import{b as B}from"./route-block.2f1a6263.js";import{V as w}from"./VNavigationDrawer.c44d2637.js";import{V as u}from"./VBtn.4327307d.js";import{V as Z}from"./VBadge.4246b3b2.js";import{V as L}from"./VAvatar.1bc59f66.js";import{V as ee}from"./VImg.a33717ea.js";import{V as te}from"./VSpacer.8e0d4c8c.js";import{V as ae}from"./VMenu.1340a45a.js";import{V as oe,a as se,b as le}from"./VList.345ceaa4.js";import{V as ie}from"./VDivider.19cd6d54.js";import{V as ne}from"./VForm.be976fbe.js";import{V as re}from"./VTextField.c7d5535f.js";import"./VTextarea.fa7fc197.js";/* empty css                   */import"./VField.01372b27.js";import"./index.19c19380.js";import"./VInput.1a6e2ae8.js";import"./router.f3c33ba4.js";import"./position.fb77405d.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.bc3c6bfa.js";import"./VRadioGroup.b0ad932a.js";import"./VSelectionControl.336d6e11.js";import"./ssrBoot.15e4635b.js";import"./index.b522f886.js";import"./scopeId.23faa331.js";import"./VOverlay.ed5a8d46.js";import"./lazy.d1bb34b2.js";import"./dialog-transition.738c368f.js";const ce={key:0,class:"d-flex flex-column h-100"},ue={class:"active-chat-header d-flex align-center text-medium-emphasis"},de={key:1},me={class:"flex-grow-1 ms-4 overflow-hidden"},fe={class:"text-base font-weight-regular"},pe={class:"d-block text-sm text-truncate text-disabled"},ve={class:"d-sm-flex align-center d-none"},he={key:1,class:"d-flex h-100 align-center justify-center flex-column"},Ve={__name:"chat",setup(ge){const y=P(),l=R(),{isLeftSidebarOpen:n}=Q(y.smAndDown),{resolveAvatarBadgeVariant:k}=K(),_=f(),z=()=>{const i=_.value.$el||_.value;i.scrollTop=i.scrollHeight},g=f("");T(g,i=>l.fetchChatsAndContacts(i),{immediate:!0});const N=()=>{y.mdAndUp.value||(n.value=!0)},d=f(""),$=async()=>{!d.value||(await l.sendMsg(d.value),d.value="",A(()=>{z()}))},O=async i=>{await l.getChat(i),d.value="";const t=l.chatsContacts.find(o=>o.id===i);t&&(t.chat.unseenMsgs=0),y.smAndDown.value&&(n.value=!1),A(()=>{z()})},v=f(!1),h=f(!1),S=f();return(i,t)=>(m(),x(X,{class:"chat-app-layout bg-surface"},{default:a(()=>[e(w,{modelValue:s(v),"onUpdate:modelValue":t[1]||(t[1]=o=>p(v)?v.value=o:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:a(()=>[e(q,{onClose:t[0]||(t[0]=o=>v.value=!1)})]),_:1},8,["modelValue"]),e(w,{modelValue:s(h),"onUpdate:modelValue":t[3]||(t[3]=o=>p(h)?h.value=o:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:a(()=>[e(G,{onClose:t[2]||(t[2]=o=>h.value=!1)})]),_:1},8,["modelValue"]),e(w,{modelValue:s(n),"onUpdate:modelValue":t[8]||(t[8]=o=>p(n)?n.value=o:null),absolute:"",touchless:"",location:"start",width:"370",temporary:i.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:i.$vuetify.display.mdAndUp},{default:a(()=>[e(H,{isDrawerOpen:s(n),"onUpdate:isDrawerOpen":t[4]||(t[4]=o=>p(n)?n.value=o:null),search:s(g),"onUpdate:search":t[5]||(t[5]=o=>p(g)?g.value=o:null),onOpenChatOfContact:O,onShowUserProfile:t[6]||(t[6]=o=>v.value=!0),onClose:t[7]||(t[7]=o=>n.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),e(W,{class:"chat-content-container"},{default:a(()=>[s(l).activeChat?(m(),C("div",ce,[r("div",ue,[e(u,{variant:"text",color:"default",icon:"",size:"small",class:"d-md-none me-3",onClick:t[9]||(t[9]=o=>n.value=!0)},{default:a(()=>[e(c,{size:"24",icon:"tabler-menu-2"})]),_:1}),r("div",{class:"d-flex align-center cursor-pointer",onClick:t[10]||(t[10]=o=>h.value=!0)},[e(Z,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:s(k)(s(l).activeChat.contact.status),bordered:""},{default:a(()=>[e(L,{size:"40",variant:"tonal",color:s(k)(s(l).activeChat.contact.status),class:"cursor-pointer"},{default:a(()=>[s(l).activeChat.contact.avatar?(m(),x(ee,{key:0,src:s(l).activeChat.contact.avatar,alt:s(l).activeChat.contact.fullName},null,8,["src","alt"])):(m(),C("span",de,b(s(Y)(s(l).activeChat.contact.fullName)),1))]),_:1},8,["color"])]),_:1},8,["color"]),r("div",me,[r("h6",fe,b(s(l).activeChat.contact.fullName),1),r("span",pe,b(s(l).activeChat.contact.role),1)])]),e(te),r("div",ve,[e(u,{variant:"text",color:"default",icon:"",size:"small"},{default:a(()=>[e(c,{size:"22",icon:"tabler-phone"})]),_:1}),e(u,{variant:"text",color:"default",icon:"",size:"small"},{default:a(()=>[e(c,{size:"22",icon:"tabler-video"})]),_:1}),e(u,{variant:"text",color:"default",icon:"",size:"small"},{default:a(()=>[e(c,{size:"22",icon:"tabler-search"})]),_:1})]),e(u,{variant:"text",color:"default",icon:"",size:"small"},{default:a(()=>[e(c,{size:"22",icon:"tabler-dots-vertical"}),e(ae,{activator:"parent"},{default:a(()=>[e(oe,null,{default:a(()=>[(m(),C(I,null,M(["View Contact","Mute Notifications","Block Contact","Clear Chat","Report"],(o,V)=>e(se,{key:V,value:V},{default:a(()=>[e(le,null,{default:a(()=>[U(b(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),e(ie),e(s(E),{ref_key:"chatLogPS",ref:_,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:a(()=>[e(J)]),_:1},512),e(ne,{class:"chat-log-message-form mb-5 mx-5",onSubmit:F($,["prevent"])},{default:a(()=>{var o;return[(m(),x(re,{key:(o=s(l).activeChat)==null?void 0:o.contact.id,modelValue:s(d),"onUpdate:modelValue":t[12]||(t[12]=V=>p(d)?d.value=V:null),variant:"solo",class:"chat-message-input",placeholder:"Type your message...",density:"default",autofocus:""},{"append-inner":a(()=>[e(u,{icon:"",size:"small",variant:"text",color:"default"},{default:a(()=>[e(c,{size:"22",icon:"tabler-microphone"})]),_:1}),e(u,{icon:"",size:"small",variant:"text",color:"default",class:"me-4",onClick:t[11]||(t[11]=V=>{var D;return(D=s(S))==null?void 0:D.click()})},{default:a(()=>[e(c,{size:"22",icon:"tabler-link"})]),_:1}),e(u,{onClick:$},{default:a(()=>[U(" Send ")]),_:1})]),_:1},8,["modelValue"])),r("input",{ref_key:"refInputEl",ref:S,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1},8,["onSubmit"])])):(m(),C("div",he,[e(L,{size:"109",class:"elevation-3 mb-6 bg-surface"},{default:a(()=>[e(c,{size:"50",class:"rounded-0 text-high-emphasis",icon:"tabler-message"})]),_:1}),r("p",{class:j(["mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text-high-emphasis bg-surface",[{"cursor-pointer":i.$vuetify.display.smAndDown}]]),onClick:N}," Start Conversation ",2)]))]),_:1})]),_:1}))}};typeof B=="function"&&B(Ve);export{Ve as default};