import{m as ae}from"./VSelect.a0834e11.js";import{m as ne,u as ue}from"./filter.162b2e51.js";import{m as oe}from"./VImg.df47303b.js";import{u as ie,t as A,V as se,a as M}from"./VList.82c5e899.js";import{f as re}from"./forwardRefs.c003b6b8.js";import{aq as ce,aA as ve,aC as me,s as g,ak as U,x as C,at as fe,an as de,ai as T,aw as K,ab as pe,g as o,F as j,m as S,C as be}from"./main.990d9ea9.js";import{m as he,f as Ve,V as ke}from"./VTextField.eb67bf6a.js";import{V as xe}from"./VMenu.b1ba5b44.js";import{V as ge}from"./VCheckboxBtn.5a069503.js";import{V as Ce}from"./router.0858fd47.js";import{V as ye}from"./VChip.ee1b29a7.js";function _e(l,f,y){if(Array.isArray(f))throw new Error("Multiple matches is not implemented");return typeof f=="number"&&~f?o(j,null,[o("span",{class:"v-combobox__unmask"},[l.substr(0,f)]),o("span",{class:"v-combobox__mask"},[l.substr(f,y)]),o("span",{class:"v-combobox__unmask"},[l.substr(f+y)])]):l}const Le=ce()({name:"VCombobox",props:{delimiters:Array,...ne({filterKeys:["title"]}),...ae({hideNoData:!0,returnObject:!0}),...ve(he({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...oe({transition:!1})},emits:{"update:modelValue":l=>!0,"update:search":l=>!0,"update:menu":l=>!0},setup(l,f){var O;var y;let{emit:q,slots:s}=f;const{t:z}=me(),d=g(),p=g(!1),b=g(!0),c=U(l,"menu"),a=g(-1),G=C(()=>{var e;return(e=d.value)==null?void 0:e.color}),{items:E,transformIn:H,transformOut:J}=ie(l),{textColorClasses:Q,textColorStyles:W}=fe(G),i=U(l,"modelValue",[],e=>H(de(e||[])),e=>{var t;const n=J(e);return l.multiple?n:(t=n[0])!=null?t:null}),k=g(l.multiple?"":(O=(y=i.value[0])==null?void 0:y.title)!=null?O:""),r=C({get:()=>k.value,set:e=>{var n;if(k.value=e,l.multiple||(i.value=[A(l,e)]),e&&l.multiple&&(n=l.delimiters)!=null&&n.length){const t=e.split(new RegExp(`(?:${l.delimiters.join("|")})+`));t.length>1&&(t.forEach(v=>{v=v.trim(),v&&h(A(l,v))}),k.value="")}e||(a.value=-1),p.value&&(c.value=!0),b.value=!e}});T(k,e=>{q("update:search",e)}),T(i,e=>{var t;if(!l.multiple){var n;k.value=(t=(n=e[0])==null?void 0:n.title)!=null?t:""}});const{filteredItems:D}=ue(l,E,C(()=>b.value?void 0:r.value)),x=C(()=>i.value.map(e=>E.value.find(n=>n.value===e.value)||e)),$=C(()=>x.value.map(e=>e.props.value)),L=C(()=>x.value[a.value]),R=g();function X(e){i.value=[],l.openOnClear&&(c.value=!0)}function N(){l.hideNoData&&!E.value.length||l.readonly||(c.value=!0)}function Y(e){if(l.readonly)return;const n=d.value.selectionStart,t=$.value.length;if(a.value>-1&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(c.value=!0),["Escape"].includes(e.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(b.value=!0),e.key==="ArrowDown"){var v;e.preventDefault(),(v=R.value)==null||v.focus("next")}else if(e.key==="ArrowUp"){var _;e.preventDefault(),(_=R.value)==null||_.focus("prev")}if(!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(a.value<0){e.key==="Backspace"&&!r.value&&(a.value=t-1);return}h(L.value),K(()=>!L.value&&(a.value=t-2))}if(e.key==="ArrowLeft"){if(a.value<0&&n>0)return;const u=a.value>-1?a.value-1:t-1;x.value[u]?a.value=u:(a.value=-1,d.value.setSelectionRange(r.value.length,r.value.length))}if(e.key==="ArrowRight"){if(a.value<0)return;const u=a.value+1;x.value[u]?a.value=u:(a.value=-1,d.value.setSelectionRange(0,0))}e.key==="Enter"&&(h(A(l,r.value)),r.value="")}}function Z(){p.value&&(b.value=!0)}function h(e){if(l.multiple){const n=$.value.findIndex(t=>t===e.value);if(n===-1)i.value=[...i.value,e];else{const t=[...i.value];t.splice(n,1),i.value=t}r.value=""}else i.value=[e],k.value=e.title,K(()=>{c.value=!1,b.value=!0})}function ee(e){p.value=!0}function le(e){if(e.relatedTarget==null){var n;(n=d.value)==null||n.focus()}}return T(D,e=>{!e.length&&l.hideNoData&&(c.value=!1)}),T(p,e=>{if(e)a.value=-1;else{if(c.value=!1,!l.multiple||!r.value)return;i.value=[...i.value,A(l,r.value)],r.value=""}}),pe(()=>{const e=!!(l.chips||s.chip),[n]=Ve(l);return o(ke,S({ref:d},n,{modelValue:r.value,"onUpdate:modelValue":[t=>r.value=t,t=>{t==null&&(i.value=[])}],validationValue:i.externalValue,dirty:i.value.length>0,class:["v-combobox",{"v-combobox--active-menu":c.value,"v-combobox--chips":!!l.chips,"v-combobox--selecting-index":a.value>-1,[`v-combobox--${l.multiple?"multiple":"single"}`]:!0}],appendInnerIcon:l.items.length?l.menuIcon:void 0,readonly:l.readonly,"onClick:clear":X,"onClick:control":N,"onClick:input":N,onFocus:()=>p.value=!0,onBlur:()=>p.value=!1,onKeydown:Y}),{...s,default:()=>{var t,v,_;return o(j,null,[o(xe,S({modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,activator:"parent",contentClass:"v-combobox__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:Z},l.menuProps),{default:()=>[o(se,{ref:R,selected:$.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onFocusin:ee,onFocusout:le},{default:()=>{var u;return[!D.value.length&&!l.hideNoData&&((u=(t=s["no-data"])==null?void 0:t.call(s))!=null?u:o(M,{title:z(l.noDataText)},null)),(v=s["prepend-item"])==null?void 0:v.call(s),D.value.map((V,F)=>{var B;var w;let{item:m,matches:te}=V;return(B=(w=s.item)==null?void 0:w.call(s,{item:m,index:F,props:S(m.props,{onClick:()=>h(m)})}))!=null?B:o(M,S({key:F},m.props,{onClick:()=>h(m)}),{prepend:I=>{let{isSelected:P}=I;return l.multiple&&!l.hideSelected?o(ge,{modelValue:P,ripple:!1},null):void 0},title:()=>{var P;var I;return b.value?m.title:_e(m.title,te.title,(P=(I=r.value)==null?void 0:I.length)!=null?P:0)}})}),(_=s["append-item"])==null?void 0:_.call(s)]}})]}),x.value.map((u,V)=>{function F(m){m.stopPropagation(),m.preventDefault(),h(u)}const w={"onClick:close":F,modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:u.value,class:["v-combobox__selection",V===a.value&&["v-combobox__selection--selected",Q.value]],style:V===a.value?W.value:{}},[e?o(Ce,{defaults:{VChip:{closable:l.closableChips,size:"small",text:u.title}}},{default:()=>[s.chip?s.chip({item:u,index:V,props:w}):o(ye,w,null)]}):s.selection?s.selection({item:u,index:V}):o("span",{class:"v-combobox__selection-text"},[u.title,l.multiple&&V<x.value.length-1&&o("span",{class:"v-combobox__selection-comma"},[be(",")])])])})])}})}),re({isFocused:p,isPristine:b,menu:c,search:r,selectionIndex:a,filteredItems:D,select:h},d)}});export{Le as V};
