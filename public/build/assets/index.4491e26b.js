const a=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics"},{title:"eCommerce",to:"dashboards-ecommerce"},{title:"CRM",to:"dashboards-crm"}],badgeClass:"bg-light-primary text-primary"}],e=[{title:"Admins",icon:{icon:"tabler-user-minus"},children:[{title:"List",to:"admin-apps-admins-list"},{title:"AddNew",to:"admin-apps-admins-add-add_new"}]}],i=[{title:"Restaurants",to:"admin-apps-restaurants-list",icon:{icon:"tabler-window"}}],r=[{title:"Plans",icon:{icon:"tabler-businessplan"},children:[{title:"List",to:"dashboards-apps-user-list"},{title:"AddNew",to:"dashboards-apps-user-add-add_new"}]}],n=[{title:"Users",icon:{icon:"tabler-user"},children:[{title:"List",to:"dashboards-apps-user-list"},{title:"AddNew",to:"dashboards-apps-user-add-add_new"}]}],o=[{title:"Users Subscribes",to:"admin-apps-restaurants-list",icon:{icon:"tabler-subtask"}}],s=JSON.parse(localStorage.getItem("userData")||"{}"),d=s&&s.role?s.role:null;let t=[];d!=="admin"?t=[...a]:t=[...a,...e,...i,...r,...n,...o];const l=t;export{l as n};