import{a3 as v,ax as h,ak as w,aC as y,s as B,ai as d,al as p,ab as f,g as a,F as D,m as x,av as F}from"./main.a5f2feaa.js";import{V as I}from"./router.31ac10a2.js";import{V as C}from"./VBtn.a433eeed.js";import{V as S}from"./position.36d4d31d.js";import{V as T,a as k}from"./VWindowItem.9eb63964.js";import{V as A}from"./VImg.b81fa5df.js";const R=v({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:h,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:e=>typeof e=="boolean"||e==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const s=w(e,"modelValue"),{t:b}=y(),n=B();let u=-1;d(s,c),d(()=>e.interval,c),d(()=>e.cycle,i=>{i?c():window.clearTimeout(u)}),p(m);function m(){!e.cycle||!n.value||(u=window.setTimeout(n.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(u),window.requestAnimationFrame(m)}return f(()=>a(T,{ref:n,modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:F(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:t.default,additional:i=>{let{group:l}=i;return a(D,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[l.items.value.length>0&&a(I,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[l.items.value.map((r,V)=>{const g={"aria-label":b("$vuetify.carousel.ariaLabel.delimiter",V+1,l.items.value.length),class:[l.isSelected(r.id)&&"v-btn--active"],onClick:()=>l.select(r.id,!0)};return t.item?t.item({props:g,item:r}):a(C,x(r,g),null)})]})]),e.progress&&a(S,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(l.getItemIndex(s.value)+1)/l.items.value.length*100},null)])},prev:t.prev,next:t.next})),{}}}),U=v({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,o){let{slots:t,attrs:s}=o;f(()=>a(k,{class:"v-carousel-item",value:e.value},{default:()=>[a(A,s,t)]}))}}),W="/build/assets/au.5380d9be.png",q="/build/assets/br.36ca37c4.png",z="/build/assets/cn.afd5c222.png",j="/build/assets/fr.90409c73.png",E="/build/assets/in.08eaaccd.png",G="/build/assets/us.bfe9c650.png",H="/build/assets/sidebar-pic-1.24754ce8.png",J="/build/assets/sidebar-pic-2.a64f09c4.png",K="/build/assets/sidebar-pic-3.c8e8b9bf.png";export{R as V,W as a,q as b,z as c,U as d,J as e,j as f,K as g,E as i,H as s,G as u};