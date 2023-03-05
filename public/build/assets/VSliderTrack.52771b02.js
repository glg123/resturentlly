import{ac as ne,aM as ue,x as a,aa as V,s as U,cP as ce,af as de,b9 as W,a3 as ee,ag as te,at as ve,ab as le,av as E,g as c,G as J,ay as me,H as fe,cQ as he,az as Z}from"./main.990d9ea9.js";import{d as be}from"./index.e3fe277e.js";import{c as ke,b as pe,R as ye,f as ge,g as Se}from"./router.0858fd47.js";const H=Symbol.for("vuetify:v-slider");function we(l,t,f){const p=f==="vertical",m=t.getBoundingClientRect(),y="touches"in l?l.touches[0]:l;return p?y.clientY-(m.top+m.height/2):y.clientX-(m.left+m.width/2)}function Ce(l,t){return"touches"in l&&l.touches.length?l.touches[0][t]:"changedTouches"in l&&l.changedTouches.length?l.changedTouches[0][t]:l[t]}const ze=ne({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:l=>typeof l=="boolean"||l==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:l=>typeof l=="boolean"||l==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:l=>["vertical","horizontal"].includes(l)},reverse:Boolean,...ke(),...pe({elevation:2})},"slider"),xe=l=>{let{props:t,handleSliderMouseUp:f,handleMouseMove:p,getActiveThumb:m}=l;const{isRtl:y}=ue(),g=a(()=>y.value!==t.reverse),F=a(()=>{let e=y.value?"rtl":"ltr";return t.reverse&&(e=e==="rtl"?"ltr":"rtl"),e}),n=a(()=>parseFloat(t.min)),h=a(()=>parseFloat(t.max)),u=a(()=>t.step>0?parseFloat(t.step):0),L=a(()=>{const e=u.value.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0}),P=a(()=>parseInt(t.thumbSize,10)),S=a(()=>parseInt(t.tickSize,10)),$=a(()=>parseInt(t.trackSize,10)),T=a(()=>(h.value-n.value)/u.value),K=V(t,"disabled"),A=a(()=>t.direction==="vertical"),B=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.thumbColor)!=null?e:t.color}),D=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.trackColor)!=null?e:t.color}),I=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.trackFillColor)!=null?e:t.color}),w=U(!1),d=U(0),M=U(),v=U();function z(e){if(u.value<=0)return e;const o=W(e,n.value,h.value),N=n.value%u.value,Y=Math.round((o-N)/u.value)*u.value+N;return parseFloat(Math.min(Y,h.value).toFixed(L.value))}function C(e){var o;const N=t.direction==="vertical",Y=N?"top":"left",ae=N?"height":"width",re=N?"clientY":"clientX",{[Y]:se,[ae]:oe}=(o=M.value)==null?void 0:o.$el.getBoundingClientRect(),ie=Ce(e,re);let G=Math.min(Math.max((ie-se-d.value)/oe,0),1)||0;return(N||g.value)&&(G=1-G),z(n.value+G*(h.value-n.value))}let b=!1;const i=e=>{b||(d.value=0,f(C(e))),w.value=!1,b=!1,d.value=0},O=e=>{v.value=m(e),v.value&&(v.value.focus(),w.value=!0,v.value.contains(e.target)?(b=!0,d.value=we(e,v.value,t.direction)):(d.value=0,p(C(e))))},_={passive:!0,capture:!0};function x(e){b=!0,p(C(e))}function r(e){e.stopPropagation(),e.preventDefault(),i(e),window.removeEventListener("mousemove",x,_),window.removeEventListener("mouseup",r)}function s(e){var o;i(e),window.removeEventListener("touchmove",x,_),(o=e.target)==null||o.removeEventListener("touchend",s)}function R(e){var o;O(e),window.addEventListener("touchmove",x,_),(o=e.target)==null||o.addEventListener("touchend",s,{passive:!1})}function q(e){e.preventDefault(),O(e),window.addEventListener("mousemove",x,_),window.addEventListener("mouseup",r,{passive:!1})}const k=e=>{const o=(e-n.value)/(h.value-n.value)*100;return W(isNaN(o)?0:o,0,100)},j=a(()=>t.ticks?Array.isArray(t.ticks)?t.ticks.map(e=>({value:e,position:k(e),label:e.toString()})):Object.keys(t.ticks).map(e=>({value:parseFloat(e),position:k(parseFloat(e)),label:t.ticks[e]})):T.value!==1/0?ce(T.value+1).map(e=>{const o=n.value+e*u.value;return{value:o,position:k(o)}}):[]),X=a(()=>j.value.some(e=>{let{label:o}=e;return!!o})),Q={activeThumbRef:v,color:V(t,"color"),decimals:L,disabled:K,direction:V(t,"direction"),elevation:V(t,"elevation"),hasLabels:X,horizontalDirection:F,isReversed:g,min:n,max:h,mousePressed:w,numTicks:T,onSliderMousedown:q,onSliderTouchstart:R,parsedTicks:j,parseMouseMove:C,position:k,readonly:V(t,"readonly"),rounded:V(t,"rounded"),roundValue:z,showTicks:V(t,"showTicks"),startOffset:d,step:u,thumbSize:P,thumbColor:B,thumbLabel:V(t,"thumbLabel"),ticks:V(t,"ticks"),tickSize:S,trackColor:D,trackContainerRef:M,trackFillColor:I,trackSize:$,vertical:A};return de(H,Q),Q},Fe=ee({name:"VSliderThumb",directives:{Ripple:ye},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":l=>!0},setup(l,t){let{slots:f,emit:p}=t;const m=te(H);if(!m)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:y,step:g,vertical:F,disabled:n,thumbSize:h,thumbLabel:u,direction:L,readonly:P,elevation:S,isReversed:$,horizontalDirection:T,mousePressed:K,decimals:A}=m,{textColorClasses:B,textColorStyles:D}=ve(y),{pageup:I,pagedown:w,end:d,home:M,left:v,right:z,down:C,up:b}=he,i=[I,w,d,M,v,z,C,b],O=a(()=>g.value?[1,2,3]:[1,5,10]);function _(r,s){if(!i.includes(r.key))return;r.preventDefault();const R=g.value||.1,q=(l.max-l.min)/R;if([v,z,C,b].includes(r.key)){const j=($.value?[v,b]:[z,b]).includes(r.key)?1:-1,X=r.shiftKey?2:r.ctrlKey?1:0;s=s+j*R*O.value[X]}else if(r.key===M)s=l.min;else if(r.key===d)s=l.max;else{const k=r.key===w?1:-1;s=s-k*R*(q>100?q/10:10)}return Math.max(l.min,Math.min(l.max,s))}function x(r){const s=_(r,l.modelValue);s!=null&&p("update:modelValue",s)}return le(()=>{var r;const s=E(F.value?100-l.position:l.position,"%"),R=F.value?"block":"inline",{elevationClasses:q}=ge(a(()=>n.value?void 0:S.value));return c("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":l.focused,"v-slider-thumb--pressed":l.focused&&K.value}],style:{[`inset-${R}-start`]:`calc(${s} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":E(h.value),direction:F.value?void 0:T.value},role:"slider",tabindex:n.value?-1:0,"aria-valuemin":l.min,"aria-valuemax":l.max,"aria-valuenow":l.modelValue,"aria-readonly":P.value,"aria-orientation":L.value,onKeydown:P.value?void 0:x},[c("div",{class:["v-slider-thumb__surface",B.value,q.value],style:{...D.value}},null),J(c("div",{class:["v-slider-thumb__ripple",B.value],style:D.value},null),[[me("ripple"),!0,null,{circle:!0,center:!0}]]),c(be,{origin:"bottom center"},{default:()=>{var k;return[J(c("div",{class:"v-slider-thumb__label-container"},[c("div",{class:["v-slider-thumb__label"]},[c("div",null,[(k=(r=f["thumb-label"])==null?void 0:r.call(f,{modelValue:l.modelValue}))!=null?k:l.modelValue.toFixed(g.value?A.value:1)])])]),[[fe,u.value&&l.focused||u.value==="always"]])]}})])}),{}}});const Le=ee({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(l,t){let{slots:f}=t;const p=te(H);if(!p)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:m,horizontalDirection:y,parsedTicks:g,rounded:F,showTicks:n,tickSize:h,trackColor:u,trackFillColor:L,trackSize:P,vertical:S,min:$,max:T}=p,{roundedClasses:K}=Se(F),{backgroundColorClasses:A,backgroundColorStyles:B}=Z(L),{backgroundColorClasses:D,backgroundColorStyles:I}=Z(u),w=a(()=>`inset-${S.value?"block-end":"inline-start"}`),d=a(()=>S.value?"height":"width"),M=a(()=>({[w.value]:"0%",[d.value]:"100%"})),v=a(()=>l.stop-l.start),z=a(()=>({[w.value]:E(l.start,"%"),[d.value]:E(v.value,"%")})),C=a(()=>(S.value?g.value.slice().reverse():g.value).map((i,O)=>{var s;var _;const x=S.value?"bottom":"margin-inline-start",r=i.value!==$.value&&i.value!==T.value?E(i.position,"%"):void 0;return c("div",{key:i.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":i.position>=l.start&&i.position<=l.stop,"v-slider-track__tick--first":i.value===$.value,"v-slider-track__tick--last":i.value===T.value}],style:{[x]:r}},[(i.label||f["tick-label"])&&c("div",{class:"v-slider-track__tick-label"},[(s=(_=f["tick-label"])==null?void 0:_.call(f,{tick:i,index:O}))!=null?s:i.label])])}));return le(()=>c("div",{class:["v-slider-track",K.value],style:{"--v-slider-track-size":E(P.value),"--v-slider-tick-size":E(h.value),direction:S.value?void 0:y.value}},[c("div",{class:["v-slider-track__background",D.value,{"v-slider-track__background--opacity":!!m.value||!L.value}],style:{...M.value,...I.value}},null),c("div",{class:["v-slider-track__fill",A.value],style:{...z.value,...B.value}},null),n.value&&c("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":n.value==="always"}]},[C.value])])),{}}});export{Le as V,Fe as a,we as g,ze as m,xe as u};
