<script setup>
import axios from "@axios"
import { useI18n } from "vue-i18n"
import {useThemeConfig} from "@core/composable/useThemeConfig";
const { t } = useI18n()
const props = defineProps({
  restId: {
    type: Number,
    required: true,
  },
})
const rest=ref([])
const errors =ref([])
const { isAppRtl } = useThemeConfig()
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
if(isAppRtl.value===true)
{
  axios.defaults.headers.common['Language'] = 'ar'
}
else
{
  axios.defaults.headers.common['Language'] = 'en'
}
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['role'] = 'Admin'
axios.defaults.headers.common['auth'] = 'Bearer ' + token
const router = useRouter()
const selectedStatus = ref()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const refForm = ref()
const status = [
  {
    title: t('block'),
    value: 'block',
  },
  {
    title: t('active'),
    value: 'active',
  },
  {
    title: t('not_active'),
    value: 'not_active',
  },
]
const fetchProjectData = () => {


  axios.get('single/'+props.restId+'/restaurant', { token })
    .then(response => {

      rest.value=response.data
      selectedStatus.value=response.data.status

    })


}

watch(router, fetchProjectData, { immediate: true })


const required = val => {

  if (String(val).trim().length === 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const sendFrom = () => {



  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('single/'+props.restId+'/restaurant', {

        name_en: rest.value.name_en,
        name_ar: rest.value.name_ar,
        website: rest.value.website,
        mobile: rest.value.mobile,
        about_ar: rest.value.about_ar,
        about_en: rest.value.about_en,
        note_ar: rest.value.note_ar,
        note_en: rest.value.note_en,
        status: selectedStatus.value,
        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/restaurants/view/'+props.restId)
      }).catch(e => {
     //   const { errors: formErrors } = e.response

      //  errors.value = e.data

     //   isError.value = true
      //  loading.value = false
      //  disabled.value = false
      })
    } else {

    }


  })


}
</script>

<template>
  <VRow>
    <VSnackbar location="top" v-model="isTrue">
      {{$t('Done')}}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          {{$t('Close')}}
        </VBtn>
      </template>
    </VSnackbar>
    <VSnackbar color="error" location="top" v-model="isError">
      {{ errors }}

      <template #actions>
        <VBtn
          color="success"
          @click="isError = false"

        >
          {{$t('Close')}}
        </VBtn>
      </template>
    </VSnackbar>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard :title="$t('basic_information')">
        <VCardText>


          <VForm ref="refForm">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.name_ar"
                  :label="t('name_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.name_en"
                  :label="t('name_en')"
                  :rules="[required]"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <a :href="rest.website">{{$t('website')}}</a>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.owner_name"
                  :label="t('owner_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.country_name"
                  :label="t('country_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.state_name"
                  :label="t('state_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="rest.city_name"
                  :label="t('city_name')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VSelect
                  v-model="selectedStatus"
                  :label="$t('Select Status')"
                  :items="status"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="rest.created_at"
                  :label="t('created_at')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="rest.mobile"
                  :label="t('mobile')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextarea
                  v-model="rest.about_ar"
                  :label="t('about_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextarea
                  v-model="rest.about_en"
                  :label="t('about_en')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextarea
                  v-model="rest.note_ar"
                  :label="t('note_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextarea
                  v-model="rest.note_en"
                  :label="t('note_en')"
                  :rules="[required]"
                />
              </VCol>

              <VCol cols="12">
                <VBtn
                  type="submit"
                  :loading="loading"
                  :disabled="disabled"
                  @click.prevent="sendFrom"
                >{{ $t('Save changes') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: restaurants_view
</route>
