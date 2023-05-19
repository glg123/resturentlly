<script setup>
import { useI18n } from "vue-i18n"
import axios from "@axios"
import { themeConfig } from '@themeConfig'
import { useThemeConfig } from "@core/composable/useThemeConfig"
import VueCookies from "vue-cookies";
import {useAppAbility} from "@/plugins/casl/useAppAbility";
import {VForm} from "vuetify/components";

const { isAppRtl } = useThemeConfig()
const route = useRoute()
const router = useRouter()

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
if (isAppRtl.value === true) {
  axios.defaults.headers.common['Language'] = 'ar'
} else {
  axios.defaults.headers.common['Language'] = 'en'
}


axios.defaults.headers.common['type'] = 'Customer'

const props = defineProps({
  totalInput: {
    type: Number,
    required: false,
    default: 6,
  },
  default: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits(['updateOtp'])

const digits = ref([])
const refOtpComp = ref(null)
const ability = useAppAbility()
digits.value = props.default.split('')

const defaultStyle = { style: 'max-width: 54px; text-align: center;' }

// eslint-disable-next-line sonarjs/cognitive-complexity
const handleKeyDown = (event, index) => {
  if (event.code !== 'Tab' && event.code !== 'ArrowRight' && event.code !== 'ArrowLeft')
    event.preventDefault()
  if (event.code === 'Backspace') {
    digits.value[index - 1] = ''
    if (refOtpComp.value !== null && index > 1) {
      const inputEl = refOtpComp.value.children[index - 2].querySelector('input')
      if (inputEl)
        inputEl.focus()
    }
  }
  const numberRegExp = /^([0-9])$/
  if (numberRegExp.test(event.key)) {
    digits.value[index - 1] = event.key
    if (refOtpComp.value !== null && index !== 0 && index < refOtpComp.value.children.length) {
      const inputEl = refOtpComp.value.children[index].querySelector('input')
      if (inputEl)
        inputEl.focus()
    }
  }
  console.log(digits.value.join(''))
  emit('updateOtp', digits.value.join(''))
}

const { t } = useI18n()

const activateAccount = () => {
  axios.post('/activate-account', {
    code: digits.value.join(''),
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data


    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', accessToken)
    VueCookies.set('auth', accessToken)



    if(userData.role==='client')
    {
      router.replace(route.query.to ? String(route.query.to) : '/dashboards/apps/profile/my')
    }
    else
    {
      router.replace(route.query.to ? String(route.query.to) : '/customers/my')

    }




    return null
  }).catch(e => {
    errors.value = e.response.data.message
  })
}
const onSubmit = () => {

  activateAccount()
}
</script>

<template>
  <div>
    <h6 class="text-base font-weight-bold mb-3">
      {{ t('Type your 6 digit security code') }}
    </h6>
    <div
      ref="refOtpComp"

      class="d-flex align-center gap-4"
    >
      <VTextField
        v-for="i in props.totalInput"
        :key="i"
        :model-value="digits[i - 1]"
        v-bind="defaultStyle"
        maxlength="1"
        @keydown="handleKeyDown($event, i)"
      />
    </div>
    <VCol cols="12">
      <VBtn
        block
        @click="onSubmit"
        type="submit"
      >
        {{ t('Verify my account') }}
      </VBtn>
    </VCol>
    <VCol cols="12">
      <div class="d-flex justify-center align-center flex-wrap">
        <span class="me-1">{{ t('Didnt get the code?') }}</span>
        <a href="#">{{ t('Resend') }}</a>
      </div>
    </VCol>
  </div>
</template>

<style lang="scss">
.v-field__field {
  input {
    padding: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
  }
}
</style>
