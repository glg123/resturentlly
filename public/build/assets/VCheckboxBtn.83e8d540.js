import{m,V as d}from"./VSelectionControl.af7cec95.js";import{ac as f,ax as k,a3 as x,ak as o,x as c,ab as b,g as I,m as h,aI as V}from"./main.078a9716.js";const v=f({indeterminate:Boolean,indeterminateIcon:{type:k,default:"$checkboxIndeterminate"},...m({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),C=x({name:"VCheckboxBtn",props:v(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:r}=i;const n=o(e,"indeterminate"),t=o(e,"modelValue");function l(a){n.value&&(n.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),s=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return b(()=>I(d,h(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,l],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:s.value,"aria-checked":e.indeterminate?"mixed":void 0}),r)),{}}});function p(e){return V(e,Object.keys(C.props))}export{C as V,p as f,v as m};
