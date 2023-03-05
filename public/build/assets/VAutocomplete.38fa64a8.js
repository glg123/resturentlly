import{m as Q}from"./VSelect.6ad5365d.js";import{m as W,u as X}from"./filter.0965a2a0.js";import{m as Y}from"./VImg.cc893ccb.js";import{f as Z}from"./forwardRefs.c003b6b8.js";import{u as ee,V as le,a as M}from"./VList.05852a98.js";import{aq as te,aA as ae,aC as ne,s as h,ak as x,an as ue,x as D,ai as N,aw as O,ab as oe,g as u,F as U,m as _,C as se}from"./main.078a9716.js";import{m as ie,f as re,V as ce}from"./VTextField.d8a7d912.js";import{V as ve}from"./VMenu.60374e62.js";import{V as me}from"./VCheckboxBtn.83e8d540.js";import{V as de}from"./router.4bb23ac0.js";import{V as fe}from"./VChip.db307e22.js";function pe(e,v,t){if(Array.isArray(v))throw new Error("Multiple matches is not implemented");return typeof v=="number"&&~v?u(U,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,v)]),u("span",{class:"v-autocomplete__mask"},[e.substr(v,t)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(v+t)])]):e}const Ae=te()({name:"VAutocomplete",props:{search:String,...W({filterKeys:["title"]}),...Q(),...ae(ie({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Y({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:t}=v;const{t:K}=ne(),w=h(),d=h(!1),m=h(!0),s=x(e,"menu"),{items:F,transformIn:B,transformOut:R}=ee(e),i=x(e,"search",""),r=x(e,"modelValue",[],l=>B(ue(l)),l=>{var n;const a=R(l);return e.multiple?a:(n=a[0])!=null?n:null}),{filteredItems:P}=X(e,F,D(()=>m.value?void 0:i.value)),k=D(()=>r.value.map(l=>F.value.find(a=>a.value===l.value)||l)),b=D(()=>k.value.map(l=>l.props.value)),A=h();function $(l){r.value=[],e.openOnClear&&(s.value=!0),i.value=""}function T(){e.hideNoData&&!F.value.length||e.readonly||(s.value=!0)}function q(l){if(!e.readonly){if(["Enter","ArrowDown"].includes(l.key)&&(s.value=!0),["Escape"].includes(l.key)&&(s.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(m.value=!0),l.key==="ArrowDown"){var a;l.preventDefault(),(a=A.value)==null||a.focus("next")}else if(l.key==="ArrowUp"){var n;l.preventDefault(),(n=A.value)==null||n.focus("prev")}}}function z(l){i.value=l.target.value}function j(){d.value&&(m.value=!0)}function G(l){d.value=!0}function H(l){if(l.relatedTarget==null){var a;(a=w.value)==null||a.focus()}}const f=h(!1);function C(l){if(e.multiple){const a=b.value.findIndex(n=>n===l.value);if(a===-1)r.value=[...r.value,l],i.value="";else{const n=[...r.value];n.splice(a,1),r.value=n}}else r.value=[l],f.value=!0,t.selection||(i.value=l.title),s.value=!1,m.value=!0,O(()=>f.value=!1)}return N(d,l=>{var n;if(l){var a;f.value=!0,i.value=e.multiple||!!t.selection?"":String((n=(a=k.value.at(-1))==null?void 0:a.props.title)!=null?n:""),m.value=!0,O(()=>f.value=!1)}else s.value=!1,i.value=""}),N(i,l=>{!d.value||f.value||(l&&(s.value=!0),m.value=!l)}),oe(()=>{const l=!!(e.chips||t.chip),[a]=re(e);return u(ce,_({ref:w},a,{modelValue:i.value,"onUpdate:modelValue":n=>{n==null&&(r.value=[])},validationValue:r.externalValue,dirty:r.value.length>0,onInput:z,class:["v-autocomplete",{"v-autocomplete--active-menu":s.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!t.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":$,"onClick:control":T,"onClick:input":T,onFocus:()=>d.value=!0,onBlur:()=>d.value=!1,onKeydown:q}),{...t,default:()=>{var n,S,E;return u(U,null,[u(ve,_({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:j},e.menuProps),{default:()=>[u(le,{ref:A,selected:b.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:G,onFocusout:H},{default:()=>{var o;return[!P.value.length&&!e.hideNoData&&((o=(n=t["no-data"])==null?void 0:n.call(t))!=null?o:u(M,{title:K(e.noDataText)},null)),(S=t["prepend-item"])==null?void 0:S.call(t),P.value.map((p,g)=>{var L;var V;let{item:c,matches:J}=p;return(L=(V=t.item)==null?void 0:V.call(t,{item:c,index:g,props:_(c.props,{onClick:()=>C(c)})}))!=null?L:u(M,_({key:g},c.props,{onClick:()=>C(c)}),{prepend:y=>{let{isSelected:I}=y;return e.multiple&&!e.hideSelected?u(me,{modelValue:I,ripple:!1},null):void 0},title:()=>{var I;var y;return m.value?c.title:pe(c.title,J.title,(I=(y=i.value)==null?void 0:y.length)!=null?I:0)}})}),(E=t["append-item"])==null?void 0:E.call(t)]}})]}),k.value.map((o,p)=>{function g(c){c.stopPropagation(),c.preventDefault(),C(o)}const V={"onClick:close":g,modelValue:!0,"onUpdate:modelValue":void 0};return u("div",{key:o.value,class:"v-autocomplete__selection"},[l?u(de,{defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[t.chip?t.chip({item:o,index:p,props:V}):u(fe,V,null)]}):t.selection?t.selection({item:o,index:p}):u("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&p<k.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[se(",")])])])})])}})}),Z({isFocused:d,isPristine:m,menu:s,search:i,filteredItems:P,select:C},w)}});export{Ae as V};