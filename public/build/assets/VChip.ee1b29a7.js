import{a3 as P,am as q,a6 as A,a7 as B,a8 as _,a9 as H,aa as g,ab as M,g as l,ax as k,ar as N,as as O,ak as X,G as I,ay as J,y as u,H as K}from"./main.990d9ea9.js";import{m as Q,u as U,b as W,c as Y}from"./VBtn.adcd713f.js";import{d as x,R as Z,m as ee,a as ae,b as le,c as te,j as se,e as ne,k as ie,u as oe,f as ue,g as de,o as ce,p as re,V as d}from"./router.0858fd47.js";import{c as ve}from"./index.e3fe277e.js";import{V as S}from"./VAvatar.40922329.js";const G=Symbol.for("vuetify:v-chip-group");P({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:q},...Q({selectedClass:"v-chip--selected"}),...A(),...B(),...x({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:r}=_(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=U(e,G);return H({VChip:{color:g(e,"color"),filter:g(e,"filter"),variant:g(e,"variant")}}),M(()=>{var n;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(n=s.default)==null?void 0:n.call(s,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const ke=P({name:"VChip",directives:{Ripple:Z},props:{activeClass:String,appendAvatar:String,appendIcon:k,closable:Boolean,closeIcon:{type:k,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:k,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...ee(),...ae(),...le(),...W(),...te(),...se(),...N(),...A({tag:"span"}),...B(),...x({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:s,emit:r,slots:t}=c;const{borderClasses:v}=ne(e),{colorClasses:f,colorStyles:p,variantClasses:m}=ie(e),{densityClasses:n}=oe(e),{elevationClasses:R}=ue(e),{roundedClasses:D}=de(e),{sizeClasses:$}=O(e),{themeClasses:T}=_(e),C=X(e,"modelValue"),a=Y(e,G,!1),h=ce(e,s);function z(i){C.value=!1,r("click:close",i)}return()=>{var i;const E=h.isLink.value?"a":e.tag,F=!!(t.append||e.appendIcon||e.appendAvatar),L=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,w=!!(t.prepend||e.prependIcon||e.prependAvatar),b=!a||a.isSelected.value,o=!e.disabled&&(!!a||h.isClickable.value||e.link),j=e.link?e.link:a==null?void 0:a.toggle;return C.value&&I(l(E,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":o,"v-chip--filter":V,"v-chip--pill":e.pill},T.value,v.value,b?f.value:void 0,n.value,R.value,D.value,$.value,m.value,a==null?void 0:a.selectedClass.value],style:[b?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:o&&j},{default:()=>{var y;return[re(o,"v-chip"),V&&l(d,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(ve,null,{default:()=>[I(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(u,null,null)]),[[K,a.isSelected.value]])]})]}),w&&l(d,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(u,{start:!0},null):void 0]}),(y=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?y:e.text,F&&l(d,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(u,{end:!0},null):void 0]}),L&&l(d,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:z},[t.close?t.close():l(u,null,null)])]})]}}),[[J("ripple"),o&&e.ripple,null]])}}});export{ke as V};
