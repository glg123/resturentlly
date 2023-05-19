<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'
import axios from "@axios"
import { useI18n } from "vue-i18n"
import {useThemeConfig} from "@core/composable/useThemeConfig";


const adminListStore = useAdminListStore()
const route = useRoute()
const rolesData = ref([])
const PeFaqData = ref([])
const errors = ref([])
const router = useRouter()
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
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}
const selectedType = ref()

const fetchFaqData = () => {


  axios.get('/single/'+Number(route.params.id)+'/faq', { token })
    .then(response => {
      //   console.log(response.data, 'res')
      PeFaqData.value = response.data
      selectedStatus.value = response.data.status
    })


}


const { t } = useI18n()
const selectedStatus = ref()
const status = [
  {
    title: t('active'),
    value: 'active',
  },
  {
    title: t('not_active'),
    value: 'not_active',
  },
]
watch(route, fetchFaqData, { immediate: true })
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)


const sendFrom = () => {

  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      axios.post('faq/'+Number(route.params.id), {
        title_en: PeFaqData.value.title_en,
        title_ar: PeFaqData.value.title_ar,
        description_ar: PeFaqData.value.description_ar,
        description_en: PeFaqData.value.description_en,
        status: selectedStatus.value,
        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
        router.replace(route.query.to ? String(route.query.to) : '/admin/apps/faqs/list/')
      }).catch(e => {
        console.log(e.response.data.message)

        errors.value = e.response.data.message
        isError.value = true
        loading.value = false
        disabled.value = false
      })
    } else {
      /*  setInterval( () => {
          const el = document.querySelector(".test")

          el.scrollIntoView()
        }, 1000)*/
    }


  })


}
const refForm = ref()
</script>

<template>
  <VRow>
    <VSnackbar location="top" v-model="isTrue">
      {{ $t('Done') }}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          {{ $t('Close') }}
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
          {{ $t('Close') }}
        </VBtn>
      </template>
    </VSnackbar>


    <VCol cols="12">
      <VCard :title="$t('AddNew')">


        <VCardText class="pt-2">

          <!-- 👉 Form -->
          <VForm ref="refForm" class="mt-6">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PeFaqData.title_ar"
                  :label="$t('title_ar')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="PeFaqData.title_en"
                  :label="$t('title_en')"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextarea
                  v-model="PeFaqData.description_ar"
                  :label="$t('description_ar')"
                  rows="4"
                  :rules="[required]"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextarea
                  v-model="PeFaqData.description_ar"
                  :label="$t('description_ar')"
                  rows="4"
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
 subject: faqs_edit
</route>
