import{m as ne,f as ae,V as oe}from"./VField.01372b27.js";import{m as ie,f as se,a as ce}from"./VInput.1a6e2ae8.js";import{f as ue}from"./forwardRefs.c003b6b8.js";import{a3 as pe,an as re,aC as de,ak as me,x as y,c$ as T,s as I,ab as _e,aB as fe,g as e,m as N,F as j,b3 as E,aw as he,ai as ve,o as p,f as r,e as R,z as O,w as a,l as Ve,B as Fe,C as t,j as be,K as V,i as n}from"./main.e5722c22.js";import{V as H}from"./VChip.f64a01b2.js";import{V as ge}from"./VCounter.bc3c6bfa.js";import{a as c,V as Y}from"./VRow.f8de802a.js";import{_ as Ie}from"./AppCardCode.5e396fb9.js";import"./index.19c19380.js";import"./position.fb77405d.js";import"./router.f3c33ba4.js";import"./easing.36b781ab.js";import"./VImg.a33717ea.js";import"./VBtn.4327307d.js";import"./VAvatar.1bc59f66.js";import"./vue.runtime.esm-bundler.61188ad3.js";import"./VCard.2abcdcfe.js";import"./VDivider.19cd6d54.js";const u=pe({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...ie({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>re(l).every(i=>i!=null&&typeof i=="object")},...ne({clearable:!0})},emits:{"click:control":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:d,emit:F,slots:o}=i;const{t:h}=de(),m=me(l,"modelValue"),k=y(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=y(()=>{var s;return((s=m.value)!=null?s:[]).reduce((_,v)=>{let{size:w=0}=v;return _+w},0)}),$=y(()=>T(S.value,k.value)),C=y(()=>{var s;return((s=m.value)!=null?s:[]).map(_=>{const{name:v="",size:w=0}=_;return l.showSize?`${v} (${T(w,k.value)})`:v})}),x=y(()=>{var v;var s;const _=(v=(s=m.value)==null?void 0:s.length)!=null?v:0;return l.showSize?h(l.counterSizeString,_,$.value):h(l.counterString,_)}),B=I(),D=I(),b=I(!1),f=I(),K=y(()=>l.messages.length?l.messages:l.persistentHint?l.hint:"");function A(){if(f.value!==document.activeElement){var s;(s=f.value)==null||s.focus()}b.value||(b.value=!0)}function W(s){E(l["onClick:prepend"],s),L(s)}function L(s){var _;(_=f.value)==null||_.click(),F("click:control",s)}function q(s){s.stopPropagation(),A(),he(()=>{m.value=[],f!=null&&f.value&&(f.value.value=""),E(l["onClick:clear"],s)})}return _e(()=>{const s=!!(o.counter||l.counter),_=!!(s||o.details),[v,w]=fe(d),[{modelValue:yl,...G}]=se(l),[J]=ae(l);return e(ce,N({ref:B,modelValue:m.value,"onUpdate:modelValue":z=>m.value=z,class:"v-file-input","onClick:prepend":W,"onClick:append":l["onClick:append"]},v,G,{focused:b.value,messages:K.value}),{...o,default:z=>{let{isDisabled:P,isDirty:U,isReadonly:Q,isValid:X}=z;return e(oe,N({ref:D,"prepend-icon":l.prependIcon,"onClick:control":L,"onClick:clear":q,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},J,{active:U.value||b.value,dirty:U.value,focused:b.value,error:X.value===!1}),{...o,default:Z=>{let{props:{class:ee,...le}}=Z;return e(j,null,[e("input",N({ref:f,type:"file",readonly:Q.value,disabled:P.value,multiple:l.multiple,name:l.name,onClick:g=>{g.stopPropagation(),A()},onChange:g=>{var M;if(!g.target)return;const te=g.target;m.value=[...(M=te.files)!=null?M:[]]},onFocus:A,onBlur:()=>b.value=!1},le,w),null),e("div",{class:ee},[m.value.length>0&&(o.selection?o.selection({fileNames:C.value,totalBytes:S.value,totalBytesReadable:$.value}):l.chips?C.value.map(g=>e(H,{key:g,size:"small",color:l.color},{default:()=>[g]})):C.value.join(", "))])])}})},details:_?z=>{var P;return e(j,null,[(P=o.details)==null?void 0:P.call(o,z),s&&e(j,null,[e("span",null,null),e(ge,{active:!!m.value.length,value:x.value},o.counter)])])}:void 0})}),ue({},B,D,f)}}),ye={__name:"DemoFileInputLoading",setup(l){const i=I(),d=I(!0);return ve(i,()=>{d.value=!i.value[0]}),(F,o)=>(p(),r(u,{modelValue:R(i),"onUpdate:modelValue":o[0]||(o[0]=h=>O(i)?i.value=h:null),loading:R(d),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},Ce={__name:"DemoFileInputSelectionSlot",setup(l){const i=I([]);return(d,F)=>(p(),r(u,{modelValue:R(i),"onUpdate:modelValue":F[0]||(F[0]=o=>O(i)?i.value=o:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:a(({fileNames:o})=>[(p(!0),Ve(j,null,Fe(o,h=>(p(),r(H,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:a(()=>[t(be(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},we={__name:"DemoFileInputValidation",setup(l){const i=[d=>!d||!d.length||d[0].size<1e6||"Avatar size should be less than 1 MB!"];return(d,F)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}},ze={};function ke(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const Se=V(ze,[["render",ke]]),$e={};function Be(l,i){return p(),r(u,{label:"File input","prepend-icon":"tabler-camera"})}const De=V($e,[["render",Be]]),Pe={};function je(l,i){return p(),r(u,{multiple:"",label:"File input"})}const xe=V(Pe,[["render",je]]),Ae={};function Ne(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Re=V(Ae,[["render",Ne]]),Le={};function Ue(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Me=V(Le,[["render",Ue]]),Te={};function Ee(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const Oe=V(Te,[["render",Ee]]),He={};function Ye(l,i){return p(),r(Y,null,{default:a(()=>[e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const Ke=V(He,[["render",Ye]]),We={};function qe(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Ge=V(We,[["render",qe]]),Je={};function Qe(l,i){return p(),r(u,{label:"File input"})}const Xe=V(Je,[["render",Qe]]),Ze={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},el={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},ll={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},tl={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},nl={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},al={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},ol={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},il={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},sl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},cl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ul={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},pl={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},rl=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),dl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),ml=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),_l=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),fl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),hl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),vl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),Vl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Fl=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),bl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),gl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),Il=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),El={__name:"file-input",setup(l){return(i,d)=>{const F=Xe,o=Ie,h=Ge,m=Ke,k=Oe,S=Me,$=Re,C=xe,x=De,B=Se,D=we,b=Ce,f=ye;return p(),r(Y,{class:"match-height"},{default:a(()=>[e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:el},{default:a(()=>[rl,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Density",code:nl},{default:a(()=>[dl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(o,{title:"Variant",code:pl},{default:a(()=>[ml,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Accept",code:Ze},{default:a(()=>[_l,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Chips",code:ll},{default:a(()=>[fl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Counter",code:tl},{default:a(()=>[hl,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Multiple",code:ol},{default:a(()=>[vl,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Prepend icon",code:il},{default:a(()=>[Vl,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Show size",code:cl},{default:a(()=>[Fl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Validation",code:ul},{default:a(()=>[bl,e(D)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Selection slot",code:sl},{default:a(()=>[gl,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Loading",code:al},{default:a(()=>[Il,e(f)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{El as default};
