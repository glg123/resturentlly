import{c as r,bg as c,U as e}from"./main.e5722c22.js";const{isAppRtl:n}=r(),m=c("ClientListStore",{actions:{getSingleUser(){let t=localStorage.getItem("accessToken");return e.defaults.headers.common["Content-Type"]="application/json",e.defaults.headers.common.Accept="application/json",n.value===!0?e.defaults.headers.common.Language="ar":e.defaults.headers.common.Language="en",e.defaults.headers.common.type="User",e.defaults.headers.common.role="user",e.defaults.headers.common.auth="Bearer "+t,new Promise((o,s)=>{e.get("/client/my/profile",{token:t}).then(a=>o(a)).catch(a=>s(a))})},getMyBranches(){let t=localStorage.getItem("accessToken");return e.defaults.headers.common["Content-Type"]="application/json",e.defaults.headers.common.Accept="application/json",n.value===!0?e.defaults.headers.common.Language="ar":e.defaults.headers.common.Language="en",e.defaults.headers.common.type="User",e.defaults.headers.common.role="user",e.defaults.headers.common.auth="Bearer "+t,new Promise((o,s)=>{e.get("/client/my/manager/branches",{token:t}).then(a=>o(a)).catch(a=>s(a))})},getMyPlan(){let t=localStorage.getItem("accessToken");return e.defaults.headers.common["Content-Type"]="application/json",e.defaults.headers.common.Accept="application/json",n.value===!0?e.defaults.headers.common.Language="ar":e.defaults.headers.common.Language="en",e.defaults.headers.common.type="User",e.defaults.headers.common.role="user",e.defaults.headers.common.auth="Bearer "+t,new Promise((o,s)=>{e.get("/client/my/plan",{token:t}).then(a=>o(a)).catch(a=>s(a))})},getSingleStaff(){let t=localStorage.getItem("accessToken");return e.defaults.headers.common["Content-Type"]="application/json",e.defaults.headers.common.Accept="application/json",n.value===!0?e.defaults.headers.common.Language="ar":e.defaults.headers.common.Language="en",e.defaults.headers.common.type="User",e.defaults.headers.common.role="user",e.defaults.headers.common.auth="Bearer "+t,new Promise((o,s)=>{e.get("/staff/my/profile",{token:t}).then(a=>o(a)).catch(a=>s(a))})}}});export{m as u};
