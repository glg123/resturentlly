import{s as p,o as s,f as c,w as v,g as m,y as x,m as R,e as a,z as o,K as u,l as g,i as _,j as h,F as V,B as b}from"./main.e5722c22.js";import{V as n}from"./VRating.f88d1425.js";import{V as y}from"./VSlider.7fbad643.js";const K={__name:"DemoRatingItemSlot",setup(r){const e=p(4.5);return(i,l)=>(s(),c(n,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)?e.value=t:null)},{item:v(t=>[m(x,R(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},P={__name:"DemoRatingIncremented",setup(r){const e=p(4.5);return(i,l)=>(s(),c(n,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)?e.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},z={};function $(r,e){return s(),c(n,{hover:""})}const A=u(z,[["render",$]]),j={};function C(r,e){return s(),c(n,{readonly:"","model-value":4})}const G=u(j,[["render",C]]),U={};function w(r,e){return s(),c(n,{clearable:""})}const H=u(U,[["render",w]]),F=_("div",{class:"text-caption"}," Custom length ",-1),k={class:"font-weight-semibold mb-0"},J={__name:"DemoRatingLength",setup(r){const e=p(5),i=p(2);return(l,t)=>(s(),g(V,null,[F,m(y,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=d=>o(e)?e.value=d:null),min:1,max:7},null,8,["modelValue"]),m(n,{modelValue:a(i),"onUpdate:modelValue":t[1]||(t[1]=d=>o(i)?i.value=d:null),length:a(e)},null,8,["modelValue","length"]),_("p",k," Model: "+h(a(i)),1)],64))}},S={class:"d-flex flex-column"},O={__name:"DemoRatingSize",setup(r){const e=p(4);return(i,l)=>(s(),g("div",S,[m(n,{modelValue:a(e),"onUpdate:modelValue":l[0]||(l[0]=t=>o(e)?e.value=t:null),size:"x-small"},null,8,["modelValue"]),m(n,{modelValue:a(e),"onUpdate:modelValue":l[1]||(l[1]=t=>o(e)?e.value=t:null),size:"small"},null,8,["modelValue"]),m(n,{modelValue:a(e),"onUpdate:modelValue":l[2]||(l[2]=t=>o(e)?e.value=t:null)},null,8,["modelValue"]),m(n,{modelValue:a(e),"onUpdate:modelValue":l[3]||(l[3]=t=>o(e)?e.value=t:null),size:"large"},null,8,["modelValue"]),m(n,{modelValue:a(e),"onUpdate:modelValue":l[4]||(l[4]=t=>o(e)?e.value=t:null),size:"x-large"},null,8,["modelValue"])]))}},D={class:"d-flex flex-column"},Q={__name:"DemoRatingColors",setup(r){const e=p(4),i=["primary","secondary","success","info","warning","error"];return(l,t)=>(s(),g("div",D,[(s(),g(V,null,b(i,d=>m(n,{key:d,modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=f=>o(e)?e.value=f:null),color:d},null,8,["modelValue","color"])),64))]))}},B={};function I(r,e){return s(),c(n,{density:"compact"})}const T=u(B,[["render",I]]),M={};function L(r,e){return s(),c(n)}const W=u(M,[["render",L]]),X={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},Y={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},Z={ts:`<script lang="ts" setup>
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
`},ee={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},te={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},le={ts:`<script lang="ts" setup>
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
`},ne={ts:`<script lang="ts" setup>
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
`},ae={ts:`<script lang="ts" setup>
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
`},se={ts:`<template>
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
`},oe={ts:`<script lang="ts" setup>
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
`};export{W as _,Y as a,X as b,Z as c,ee as d,ne as e,T as f,Q as g,te as h,le as i,O as j,J as k,ae as l,H as m,G as n,A as o,P as p,K as q,se as r,oe as s};
