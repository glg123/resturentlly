<script setup>
import * as demoCode from '@/views/demos/components/alert/demoCodeAlert'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()
import { useRoute } from 'vue-router'
import axios from "@axios"
import {
  requiredValidator,
} from '@validators'
import { useI18n } from "vue-i18n"


const accountData = ref({})

const router = useRoute()
const disabled = ref(false)
const loading = ref(false)

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


const connectionData = ref([])
const { t } = useI18n()

const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}


const fetchProjectData = () => {
  if (router.params.tab === 'service') {

    axios.get('/services', { token })
      .then(response => {
        console.log(response.data, 'res')
        connectionData.value = response.data
      })
      .catch(error => reject(error))


  }
}

watch(router, fetchProjectData, { immediate: true })


const refInputEl_front = ref()
const errors = ref('')
const refInputEl_back = ref()
const isConfirmDialogOpen = ref(false)

const refForm = ref()
let accountDataLocal = connectionData
const isTrue = ref(false)
const isError = ref(false)

const resetForm = () => {
  fetchProjectData()
}

const sendFrom = () => {

  refForm.value?.validate().then(({ valid: isValid }) => {
    console.log(isValid)
    if (isValid) {
      loading.value = true
      disabled.value = true
      console.log(accountDataLocal.value[0].id,'ffff')
      axios.post('services', {

        title_ar_0: accountDataLocal.value[0].title_ar,
        description_ar_0: accountDataLocal.value[0].description_ar,
        title_en_0: accountDataLocal.value[0].title_en,
        description_en_0: accountDataLocal.value[0].description_en,


        title_ar_1: accountDataLocal.value[1].title_ar,
        description_ar_1: accountDataLocal.value[1].description_ar,
        title_en_1: accountDataLocal.value[1].title_en,
        description_en_1: accountDataLocal.value[1].description_en,


        title_ar_2: accountDataLocal.value[2].title_ar,
        description_ar_2: accountDataLocal.value[2].description_ar,
        title_en_2: accountDataLocal.value[2].title_en,
        description_en_2: accountDataLocal.value[2].description_en,


        title_ar_3: accountDataLocal.value[3].title_ar,
        description_ar_3: accountDataLocal.value[3].description_ar,
        title_en_3: accountDataLocal.value[3].title_en,
        description_en_3: accountDataLocal.value[3].description_en,
        token,
      }).then(r => {

        console.log(r.data)
        isTrue.value = true
        loading.value = false
        disabled.value = false
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
</script>

<template>
  <VRow >
    <VSnackbar location="top" v-model="isTrue">
      {{$t('Done')}}

      <template #actions>
        <VBtn
          color="success"
          @click="isTrue = false"
        >
          Close
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
      <VCard :title="$t('Site_Settings')">


        <VCardText class="pt-2">
          <!-- 👉 Form -->
          <VForm ref="refForm" class="mt-6">

            <VRow
              v-for="(service, index) in accountDataLocal"
              :key="index">


                <VCol cols="6">
                  <VTextField
                    :key="index"
                    v-model="service.title_ar"

                    :label="$t('slider_title_ar')"
                    persistent-placeholder
                    :placeholder="$t('This field is required')"
                    :rules="[required]"
                    :messages="$t('This field is required')"
                  />
                </VCol>
              <VCol cols="6">
                <VTextField
                  :key="index"
                  v-model="service.title_en"
                  :label="$t('slider_title_ar')"
                  persistent-placeholder
                  :rules="[required]"
                  :messages="$t('This field is required')"
                />
              </VCol>

                <VCol cols="6">
                  <VTextarea
                    :key="index"
                    v-model="service.description_ar"
                    rows="4"
                    :label="$t('slider_description_ar')"
                    persistent-placeholder
                    placeholder="This field is required"
                    :rules="[required]"
                  />
                </VCol>

              <VCol cols="6">
                <VTextarea
                  :key="index"
                  v-model="service.description_en"
                  rows="4"
                  :label="$t('slider_description_ar')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>


              <!-- 👉 First Name -->



              <!-- 👉 Form Actions -->

            </VRow>

            <VRow>
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn
                  :loading="loading"
                  :disabled="disabled"
                  @click.prevent="sendFrom"
                >{{ $t('Save changes') }}
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  {{ $t('Reset') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

  </VRow>

  <!-- Confirm Dialog -->
  <ConfirmDialog
    v-model:isDialogVisible="isConfirmDialogOpen"
    confirmation-msg="Are you sure you want to deactivate your account?"
  />
</template>
