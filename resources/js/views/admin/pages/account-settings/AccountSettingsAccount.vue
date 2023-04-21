<script setup>
import * as demoCode from '@/views/demos/components/alert/demoCodeAlert'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()
import { useRoute } from 'vue-router'
import axios from "@axios"
import {
  requiredValidator,
} from '@validators'
import { useI18n } from "vue-i18n";

const { t } = useI18n()
const accountData = ref({})

const router = useRoute()
const disabled = ref(false)
const loading = ref(false)

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token

const connectionData = ref([])


const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}


const fetchProjectData = () => {
  if (router.params.tab === 'account') {

    axios.get('/settings', { token })
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
      axios.post('settings', {

        slider_title_ar: accountDataLocal.value.slider_title_ar,
        slider_title_en: accountDataLocal.value.slider_title_en,
        slider_description_ar: accountDataLocal.value.slider_description_ar,
        slider_description_en: accountDataLocal.value.slider_description_en,
        about_us_ar: accountDataLocal.value.about_us_ar,
        about_us_en: accountDataLocal.value.about_us_en,
        slider_front_img: accountDataLocal.value.slider_front_img,
        slider_back_img: accountDataLocal.value.slider_back_img,
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
const changeSliderFont = file_front => {


  const fileReader = new FileReader()
  const {files} = file_front.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.slider_front_img = fileReader.result
    }
  }
}
const changeSliderBack = file_back => {


  const fileReader = new FileReader()
  const { files } = file_back.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.slider_back_img = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  console.log(accountDataLocal.value.avatar)
  console.log(accountDataLocal.avatar)
  accountDataLocal.avatar = connectionData.avatar
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
    <VCol v-show="false" v-if="errors" cols="12">

      <!-- 👉 Colors -->
      <VCard :title="$t('Site_Settings')">

        <VCardText class="d-flex">

          <VAlert color="error">
            {{ errors }}
          </VAlert>

        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard :title="$t('Site_Settings')">


        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            size="100"
            class="me-6"
            :image="connectionData.slider_back_img "
          />

          <!-- 👉 Upload Photo -->
          <form
            ref="refForm_back"
            class="d-flex flex-column justify-center gap-4"
          >
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl_back?.click()"
              >
                <VIcon
                  icon="tabler-cloud-upload"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">{{ $t('slider_back_img') }}</span>
              </VBtn>

              <input
                ref="refInputEl_back"
                type="file"
                name="file_back"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeSliderBack"
              >


            </div>

            <p class="text-body-1 mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </form>
        </VCardText>

        <VDivider/>

        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            size="100"
            class="me-6"
            :image="connectionData.slider_front_img "
          />

          <!-- 👉 Upload Photo -->
          <form
            ref="refForm_front"
            class="d-flex flex-column justify-center gap-4"
          >
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl_front?.click()"
              >
                <VIcon
                  icon="tabler-cloud-upload"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">{{ $t('slider_front_img') }}</span>
              </VBtn>

              <input
                ref="refInputEl_front"
                type="file"
                name="file_front"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeSliderFont"
              >


            </div>

            <p class="text-body-1 mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </form>
        </VCardText>

        <VDivider/>

        <VCardText class="pt-2">
          <!-- 👉 Form -->
          <VForm ref="refForm" class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.slider_title_ar"
                  :label="$t('slider_title_ar')"
                  persistent-placeholder
                  :placeholder="$t('This field is required')"
                  :rules="[required]"
                  :messages="$t('This field is required')"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="accountDataLocal.slider_title_en"
                  :label="$t('slider_title_en')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>

              <VCol cols="12">
                <VTextarea
                  v-model="accountDataLocal.slider_description_ar"
                  rows="4"
                  :label="$t('slider_description_ar')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>
              <VCol cols="12">
                <VTextarea
                  v-model="accountDataLocal.slider_description_en"
                  rows="4"
                  :label="$t('slider_description_en')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>


              <VCol cols="12">
                <VTextarea
                  v-model="accountDataLocal.about_us_ar"
                  rows="4"
                  :label="$t('about_us_ar')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>
              <VCol cols="12">
                <VTextarea
                  v-model="accountDataLocal.about_us_en"
                  rows="4"
                  :label="$t('about_us_en')"
                  persistent-placeholder
                  placeholder="This field is required"
                  :rules="[required]"
                />
              </VCol>


              <!-- 👉 Form Actions -->
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
