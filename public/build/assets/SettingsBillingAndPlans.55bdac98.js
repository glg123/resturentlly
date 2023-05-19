import{c as z,s as d,aP as H,be as O,W as G,U as _,ai as J,o as f,f as p,w as o,g as t,e,i as s,j as a,C as u,p as b,z as q,bf as K,l as Q,F as X,B as Z}from"./main.e5722c22.js";import{v as ee,m as ae,_ as te}from"./visa.23fbd83d.js";import{_ as se}from"./CancelPlan.06f2b586.js";import{a as c,V}from"./VRow.f8de802a.js";import{V as C,c as w}from"./VCard.2abcdcfe.js";import{V as E}from"./VChip.f64a01b2.js";import{V as D,a as P}from"./VAlert.7beea02f.js";import{V as x}from"./VSpacer.8e0d4c8c.js";import{V as k}from"./position.fb77405d.js";import{V as h}from"./VBtn.4327307d.js";import{V as le}from"./VForm.be976fbe.js";import{V as oe}from"./VImg.a33717ea.js";const ne={class:"mb-6"},ie={class:"text-base font-weight-medium mb-1"},re={class:"text-base"},de={class:"mb-6"},ue={class:"text-base font-weight-medium mb-1"},ce={class:"text-base"},me={class:"text-base font-weight-medium mb-1"},_e={class:"me-3"},fe={class:"text-base mb-0"},pe={class:"d-flex font-weight-semibold text-base mt-4 mb-2"},he={class:"text-base mt-2 mb-0"},be={class:"d-flex font-weight-semibold text-base mt-4 mb-2"},ge={class:"text-base mt-2 mb-0"},ye={class:"d-flex font-weight-semibold text-base mt-4 mb-2"},ve={class:"text-base mt-2 mb-0"},xe={class:"d-flex flex-wrap gap-y-4"},Ve={class:"text-base font-weight-medium mb-3"},Ce={class:"d-flex flex-column gap-y-4"},we={class:"text-no-wrap"},De={class:"my-3"},Pe={class:"text-base"},ke={class:"d-flex flex-column text-sm-end"},Se={class:"d-flex flex-wrap gap-4 order-sm-0 order-1"},Be={class:"text-sm mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0"},Ue={__name:"SettingsBillingAndPlans",setup(Ae){const{isAppRtl:R}=z(),T=d("credit-debit-atm-card"),g=d(!1),y=d(!1);d(!1);const{t:l}=H();O();const S=G(),B=d([]),A=d(),v=d([]),n=d([]),j=i=>{A.value=i,y.value=!0},W=d(0x7b5b5282deb5),Y=d("john Doe"),$=d("05/24"),F=d(420),I=()=>{W.value=0x7b5b5282deb5,Y.value="john Doe",$.value="05/24",F.value=420,T.value="credit-debit-atm-card"};let N=localStorage.getItem("accessToken");_.defaults.headers.common["Content-Type"]="application/json",_.defaults.headers.common.Accept="application/json",_.defaults.headers.common.type="User",_.defaults.headers.common.role="user",_.defaults.headers.common.auth="Bearer "+N;const L=()=>{R.value===!0?_.defaults.headers.common.Language="ar":_.defaults.headers.common.Language="en",_.get("/client/my/plan",{token:N}).then(i=>{n.value=i.data,v.value=i.data.plan,B.value[0]={name:i.data.cardHolder,number:i.data.cardNumber,expiry:i.data.monthSelection+"/"+i.data.yearSelection,isPrimary:!0,type:i.data.card_type,cvv:i.data.cvv,image:i.data.card_type==="visa"?ee:ae}})},M=()=>{let i="/pricing/";S.push(i)};return J(S,L,{immediate:!0}),(i,m)=>{const U=te;return f(),p(V,null,{default:o(()=>[t(c,{cols:"12"},{default:o(()=>[t(C,{title:e(l)("Current_Plan")},{default:o(()=>[t(w,null,{default:o(()=>[t(V,null,{default:o(()=>[t(c,{cols:"12",md:"6"},{default:o(()=>[s("div",null,[s("div",ne,[s("h3",ie,a(e(l)("Your_Current_Plan_is"))+" "+a(e(v).name),1),s("p",re,a(e(v).description),1)]),s("div",de,[s("h3",ue,a(e(l)("Active_until"))+" "+a(e(n).end_date),1),s("p",ce,a(e(l)("We will send you a notification upon Subscription expiration")),1)]),s("div",null,[s("h3",me,[s("span",_e,"$"+a(e(n).price)+" "+a(e(l)("Per_Year")),1),e(v).is_popular==="1"?(f(),p(E,{key:0,color:"primary",size:"small",label:""},{default:o(()=>[u(a(e(l)("Popular")),1)]),_:1})):b("",!0)]),s("p",fe,a(e(l)("Standard plan for small to medium businesses")),1)])])]),_:1}),t(c,{cols:"12",md:"6"},{default:o(()=>[e(n).diff_days<=10?(f(),p(D,{key:0,color:"warning",variant:"tonal"},{default:o(()=>[t(P,{class:"mb-1"},{default:o(()=>[u(a(e(l)("We need your attention!")),1)]),_:1}),s("span",null,a(e(l)("Your plan requires update")),1)]),_:1})):b("",!0),s("h6",pe,[s("span",null,a(e(l)("Days")),1),t(x),s("span",null,a(e(n).diff_days)+" "+a(e(l)("ofs"))+" "+a(e(n).diff_days_plan)+" "+a(e(l)("Days")),1)]),t(k,{color:"primary",rounded:"",height:"12","model-value":(e(n).diff_days_plan-e(n).diff_days)/e(n).diff_days_plan*100},null,8,["model-value"]),s("p",he,a(e(n).diff_days_plan)+" "+a(e(l)("days remaining until your plan requires update")),1)]),_:1}),t(c,{cols:"12",md:"6"},{default:o(()=>[e(n).count_emp<=1?(f(),p(D,{key:0,color:"warning",variant:"tonal"},{default:o(()=>[t(P,{class:"mb-1"},{default:o(()=>[u(a(e(l)("We need your attention!")),1)]),_:1}),s("span",null,a(e(l)("Your plan requires update")),1)]),_:1})):b("",!0),s("h6",be,[s("span",null,a(e(l)("count_emp")),1),t(x),s("span",null,a(e(n).count_emp_remain)+" "+a(e(l)("ofs"))+" "+a(e(n).count_emp)+" "+a(e(l)("count_emp")),1)]),t(k,{color:"primary",rounded:"",height:"12","model-value":(e(n).count_emp-e(n).count_emp_remain)/e(n).count_emp*100},null,8,["model-value"]),s("p",ge,a(e(n).count_emp_remain)+" "+a(e(l)("emp remaining until your plan requires update")),1)]),_:1}),t(c,{cols:"12",md:"6"},{default:o(()=>[e(n).count_emp_remain<=1?(f(),p(D,{key:0,color:"warning",variant:"tonal"},{default:o(()=>[t(P,{class:"mb-1"},{default:o(()=>[u(a(e(l)("We need your attention!")),1)]),_:1}),s("span",null,a(e(l)("Your plan requires update")),1)]),_:1})):b("",!0),s("h6",ye,[s("span",null,a(e(l)("Branches")),1),t(x),s("span",null,a(e(n).count_branch_remain)+" "+a(e(l)("ofs"))+" "+a(e(n).count_branch)+" "+a(e(l)("Branches")),1)]),t(k,{color:"primary",rounded:"",height:"12","model-value":(e(n).count_branch-e(n).count_branch_remain)/e(n).count_branch*100},null,8,["model-value"]),s("p",ve,a(e(n).count_branch_remain)+" "+a(e(l)("branches remaining until your plan requires update")),1)]),_:1}),t(c,{cols:"12"},{default:o(()=>[s("div",xe,[t(h,{class:"me-3",onClick:M},{default:o(()=>[u(a(e(l)("upgradePlan")),1)]),_:1}),t(h,{color:"secondary",variant:"tonal",onClick:m[0]||(m[0]=r=>g.value=!0)},{default:o(()=>[u(a(e(l)("CancelSubscription")),1)]),_:1})])]),_:1})]),_:1}),t(se,{isDialogVisible:e(g),"onUpdate:isDialogVisible":m[1]||(m[1]=r=>q(g)?g.value=r:null),"confirmation-msg":e(l)("Are you sure to cancel your subscription?")},null,8,["isDialogVisible","confirmation-msg"])]),_:1})]),_:1},8,["title"])]),_:1}),t(c,{cols:"12"},{default:o(()=>[t(C,{title:e(l)("PaymentMethods")},{default:o(()=>[t(w,null,{default:o(()=>[t(le,{onSubmit:m[3]||(m[3]=K(()=>{},["prevent"]))},{default:o(()=>[t(V,null,{default:o(()=>[t(c,{cols:"12",md:"12"},{default:o(()=>[s("h6",Ve,a(e(l)("MyCards")),1),s("div",Ce,[(f(!0),Q(X,null,Z(e(B),r=>(f(),p(C,{key:r.name,flat:"",variant:"tonal"},{default:o(()=>[t(w,{class:"d-flex flex-sm-row flex-column pa-4"},{default:o(()=>[s("div",we,[t(oe,{src:r.image,width:"46"},null,8,["src"]),s("h4",De,[u(a(r.name)+" ",1),r.isPrimary?(f(),p(E,{key:0,label:"",color:"primary",size:"small"},{default:o(()=>[u(" Primary ")]),_:1})):b("",!0)]),s("span",Pe,"**** **** **** "+a(r.number.substring(r.number.length-4)),1)]),t(x),s("div",ke,[s("div",Se,[t(h,{variant:"tonal",onClick:Ne=>j(r)},{default:o(()=>[u(" Edit ")]),_:2},1032,["onClick"]),t(h,{color:"secondary",variant:"tonal"},{default:o(()=>[u(" Delete ")]),_:1})]),s("span",Be,a(e(l)("Card expires at"))+" "+a(r.expiry),1)])]),_:2},1024)]),_:2},1024))),128))]),t(U,{isDialogVisible:e(y),"onUpdate:isDialogVisible":m[2]||(m[2]=r=>q(y)?y.value=r:null),"card-details":e(A),class:"v-dialog-lg"},null,8,["isDialogVisible","card-details"])]),_:1}),t(c,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:o(()=>[t(h,{type:"submit"},{default:o(()=>[u(a(e(l)("Save changes")),1)]),_:1}),t(h,{color:"secondary",variant:"tonal",onClick:I},{default:o(()=>[u(a(e(l)("Reset")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})}}};export{Ue as _};