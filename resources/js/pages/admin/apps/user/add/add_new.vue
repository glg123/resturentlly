<script setup>
import * as demoCode from '@/views/demos/forms/form-validation/demoCodeFormValidation'
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router";
import axios from "@axios";
import {useThemeConfig} from "@core/composable/useThemeConfig";
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
const sendFrom = () => {

  refForm.value?.validate().then(({valid: isValid}) => {
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

const connectionData = ref([])
const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
const { t } = useI18n()
const router = useRoute()
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
      <VCard :title="$t('Site_Settings')">
      <!-- 👉 Validation Types -->
        <VForm ref="refForm" class="mt-6">
        <VRow>
          <VCol
            md="6"
            cols="12"
          >
            <VTextField
              v-model="requiredField"
              persistent-placeholder
              placeholder="This field is required"
              :rules="[required]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="numberBetween10to20"
              persistent-placeholder
              placeholder="Enter Number between 10 & 20"
              :rules="[required, betweenValidator(numberBetween10to20, 10, 20)]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="onlyConsistNumber"
              persistent-placeholder
              placeholder="Must only consist of numbers"
              :rules="[required, integerValidator]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="matchRegularEx"
              persistent-placeholder
              placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
              :rules="[required, regexValidator(matchRegularEx, '^([0-9]+)$')]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="onlyAlphabeticCharacters"
              persistent-placeholder
              placeholder="Only alphabetic characters"
              :rules="[required, alphaValidator]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="specifiedLength"
              persistent-placeholder
              placeholder="Length should not be less than the specified length : 3"
              :rules="[required, lengthValidator(specifiedLength, 3)]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="password"
              persistent-placeholder
              placeholder="Password Input Field"
              type="password"
              :rules="[required, passwordValidator]"
              autocomplete="on"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="digits"
              persistent-placeholder
              placeholder="The digits field must be numeric and exactly contain 3 digits"
              :rules="[required, lengthValidator(digits, 3), integerValidator]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="repeatPassword"
              persistent-placeholder
              placeholder="Repeat password must match"
              type="password"
              :rules="[required, confirmedValidator(repeatPassword, password)]"
              autocomplete="on"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="onlyAlphabeticNumbersDashesUnderscores"
              persistent-placeholder
              placeholder="Only alphabetic characters, numbers, dashes or underscores"
              :rules="[required, alphaDashValidator]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="email"
              persistent-placeholder
              placeholder="Must be a valid email"
              :rules="[required, emailValidator]"
            />
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VTextField
              v-model="validURL"
              persistent-placeholder
              placeholder="Must be a valid url"
              :rules="[required, urlValidator]"
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
      </VCard>
    </VCol>

  </VRow>
</template>
