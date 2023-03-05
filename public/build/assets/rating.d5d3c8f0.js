import{s as f,o as c,f as g,w as l,g as e,y as D,m as U,e as r,z as u,U as v,l as V,i as n,j,F as R,B as S,C as s}from"./main.078a9716.js";import{V as i}from"./VRating.1c9f646c.js";import{V as k}from"./VSlider.8a037eed.js";import{_ as F}from"./AppCardCode.6c7e2fb6.js";import{a as p,V as I}from"./VRow.e13b536b.js";import"./router.4bb23ac0.js";import"./VBtn.e4c558dd.js";import"./position.e83b1372.js";import"./VSliderTrack.ed661a39.js";import"./index.8a0d3cc6.js";import"./VInput.a7f379dc.js";import"./VImg.cc893ccb.js";import"./vue.runtime.esm-bundler.5d6fa1a1.js";import"./VCard.3afa8a52.js";import"./VAvatar.ecffb864.js";import"./VDivider.cfe78da3.js";const B={__name:"DemoRatingItemSlot",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null)},{item:l(o=>[e(D,U(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},T={__name:"DemoRatingIncremented",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},L={};function M(m,t){return c(),g(i,{hover:""})}const N=v(L,[["render",M]]),H={};function P(m,t){return c(),g(i,{readonly:"","model-value":4})}const A=v(H,[["render",P]]),E={};function q(m,t){return c(),g(i,{clearable:""})}const G=v(E,[["render",q]]),J=n("div",{class:"text-caption"}," Custom length ",-1),K={class:"font-weight-semibold mb-0"},O={__name:"DemoRatingLength",setup(m){const t=f(5),d=f(2);return(a,o)=>(c(),V(R,null,[J,e(k,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=_=>u(t)?t.value=_:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:r(d),"onUpdate:modelValue":o[1]||(o[1]=_=>u(d)?d.value=_:null),length:r(t)},null,8,["modelValue","length"]),n("p",K," Model: "+j(r(d)),1)],64))}},Q={class:"d-flex flex-column"},W={__name:"DemoRatingSize",setup(m){const t=f(4);return(d,a)=>(c(),V("div",Q,[e(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[1]||(a[1]=o=>u(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[2]||(a[2]=o=>u(t)?t.value=o:null)},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[3]||(a[3]=o=>u(t)?t.value=o:null),size:"large"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[4]||(a[4]=o=>u(t)?t.value=o:null),size:"x-large"},null,8,["modelValue"])]))}},X={class:"d-flex flex-column"},Y={__name:"DemoRatingColors",setup(m){const t=f(4),d=["primary","secondary","success","info","warning","error"];return(a,o)=>(c(),V("div",X,[(c(),V(R,null,S(d,_=>e(i,{key:_,modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=h=>u(t)?t.value=h:null),color:_},null,8,["modelValue","color"])),64))]))}},Z={};function ee(m,t){return c(),g(i,{density:"compact"})}const te=v(Z,[["render",ee]]),oe={};function le(m,t){return c(),g(i)}const ne=v(oe,[["render",le]]),ae={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},se={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ce={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},_e={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},ge=n("p",null,[s("The "),n("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),fe=n("p",null,[s("Control the space occupied by "),n("code",null,"v-rating"),s(" items using the "),n("code",null,"density"),s(" prop.")],-1),ve=n("p",null,[s("The "),n("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),Ve=n("p",null,[s("Utilize the same sizing classes available in "),n("code",null,"v-icon"),s(" or provide your own with the "),n("code",null,"size"),s(" prop.")],-1),he=n("p",null,[s("Change the number of items by modifying the the "),n("code",null,"length"),s(" prop.")],-1),Re=n("p",null,[s("Use "),n("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),xe=n("p",null,[s("For ratings that are not meant to be changed you can use "),n("code",null,"readonly"),s(" prop.")],-1),ye=n("p",null,"Provides visual feedback when hovering over icons",-1),be=n("p",null,[s("The "),n("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),ze=n("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),Pe={__name:"rating",setup(m){return(t,d)=>{const a=ne,o=F,_=te,h=Y,x=W,y=O,b=G,z=A,C=N,w=T,$=B;return c(),g(I,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Basic",code:ae},{default:l(()=>[ge,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Density",code:re},{default:l(()=>[fe,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Colors",code:ie},{default:l(()=>[ve,e(h)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Size",code:_e},{default:l(()=>[Ve,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Length",code:pe},{default:l(()=>[he,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Clearable",code:se},{default:l(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Readonly",code:ue},{default:l(()=>[xe,e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Hover",code:ce},{default:l(()=>[ye,e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Incremented",code:me},{default:l(()=>[be,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Item slot",code:de},{default:l(()=>[ze,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
