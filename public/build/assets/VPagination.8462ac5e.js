import{s as R,c5 as E,a3 as W,ax as P,ar as K,a6 as q,a7 as G,ak as O,aC as Q,aM as U,a8 as X,a9 as S,au as j,x as m,cP as k,aa as f,ab as H,g as o,m as L,cQ as A,aw as $}from"./main.990d9ea9.js";import{m as J,a as Y,b as Z,c as aa,d as ea}from"./router.0858fd47.js";import{V as h}from"./VBtn.adcd713f.js";function ta(){const a=R([]);E(()=>a.value=[]);function V(s,_){a.value[_]=s}return{refs:a,updateRef:V}}const sa=W({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:P,default:"$first"},prevIcon:{type:P,default:"$prev"},nextIcon:{type:P,default:"$next"},lastIcon:{type:P,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...J(),...Y(),...Z(),...aa(),...K(),...q({tag:"nav"}),...G(),...ea({variant:"text"})},emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:s,emit:_}=V;const i=O(a,"modelValue"),{t:g,n:B}=Q(),{isRtl:x}=U(),{themeClasses:C}=X(a),I=R(-1);S(void 0,{scoped:!0});const{resizeRef:w}=j(e=>{if(!e.length)return;const{target:t,contentRect:l}=e[0],u=t.querySelector(".v-pagination__list > *");if(!u)return;const v=l.width,b=u.offsetWidth+parseFloat(getComputedStyle(u).marginRight)*2,T=a.showFirstLastPage?5:3;I.value=Math.max(0,Math.floor(+((v-b*T)/b).toFixed(2)))}),n=m(()=>parseInt(a.length,10)),r=m(()=>parseInt(a.start,10)),c=m(()=>a.totalVisible?parseInt(a.totalVisible,10):I.value>=0?I.value:n.value),F=m(()=>{if(n.value<=0||isNaN(n.value)||n.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=1)return[i.value];if(n.value<=c.value)return k(n.value,r.value);const e=c.value%2===0,t=e?c.value/2:Math.floor(c.value/2),l=e?t:t+1,u=n.value-t;if(l-i.value>=0)return[...k(Math.max(1,c.value-1),r.value),a.ellipsis,n.value];if(i.value-u>=(e?1:0)){const v=c.value-1,b=n.value-v+r.value;return[r.value,a.ellipsis,...k(v,b)]}else{const v=Math.max(1,c.value-3),b=v===1?i.value:i.value-Math.ceil(v/2)+r.value;return[r.value,a.ellipsis,...k(v,b),a.ellipsis,n.value]}});function y(e,t,l){e.preventDefault(),i.value=t,l&&_(l,t)}const{refs:D,updateRef:M}=ta();S({VPaginationBtn:{color:f(a,"color"),border:f(a,"border"),density:f(a,"density"),size:f(a,"size"),variant:f(a,"variant"),rounded:f(a,"rounded"),elevation:f(a,"elevation")}});const N=m(()=>F.value.map((e,t)=>{const l=u=>M(u,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const u=e===i.value;return{isActive:u,key:e,page:B(e),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!a.disabled||a.length<2,color:u?a.activeColor:a.color,ariaCurrent:u,ariaLabel:g(u?a.currentPageAriaLabel:a.pageAriaLabel,t+1),onClick:v=>y(v,e)}}}})),d=m(()=>{const e=!!a.disabled||i.value<=r.value,t=!!a.disabled||i.value>=r.value+n.value-1;return{first:a.showFirstLastPage?{icon:x.value?a.lastIcon:a.firstIcon,onClick:l=>y(l,r.value,"first"),disabled:e,ariaLabel:g(a.firstAriaLabel),ariaDisabled:e}:void 0,prev:{icon:x.value?a.nextIcon:a.prevIcon,onClick:l=>y(l,i.value-1,"prev"),disabled:e,ariaLabel:g(a.previousAriaLabel),ariaDisabled:e},next:{icon:x.value?a.prevIcon:a.nextIcon,onClick:l=>y(l,i.value+1,"next"),disabled:t,ariaLabel:g(a.nextAriaLabel),ariaDisabled:t},last:a.showFirstLastPage?{icon:x.value?a.firstIcon:a.lastIcon,onClick:l=>y(l,r.value+n.value-1,"last"),disabled:t,ariaLabel:g(a.lastAriaLabel),ariaDisabled:t}:void 0}});function p(){var e;const t=i.value-r.value;(e=D.value[t])==null||e.$el.focus()}function z(e){e.key===A.left&&!a.disabled&&i.value>a.start?(i.value=i.value-1,$(p)):e.key===A.right&&!a.disabled&&i.value<r.value+n.value-1&&(i.value=i.value+1,$(p))}return H(()=>o(a.tag,{ref:w,class:["v-pagination",C.value],role:"navigation","aria-label":g(a.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[s.first?s.first(d.value.first):o(h,L({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[s.prev?s.prev(d.value.prev):o(h,L({_as:"VPaginationBtn"},d.value.prev),null)]),N.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[s.item?s.item(e):o(h,L({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[s.next?s.next(d.value.next):o(h,L({_as:"VPaginationBtn"},d.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[s.last?s.last(d.value.last):o(h,L({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{sa as V};
