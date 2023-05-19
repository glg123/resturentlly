<script setup>
import { VForm } from 'vuetify/components'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'

import Watch from '@/layouts/components/watch.vue'


const home_click = ()  => {
  document.location.href = '/'
}
const required = val => {

  if (String(val).trim().length == 0) {
    return t('This field is required')
  } else {
    return true
  }

}

const emailValidator = value => {
  if (isEmpty(value))
    return true
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || t('The Email field must be a valid email')

  return re.test(String(value)) || t('The Email field must be a valid email')
}
const integerValidator = value => {
  if (isEmpty(value))
    return true
  if (Array.isArray(value))
    return value.every(val => /^-?[0-9]+$/.test(String(val))) || t('This field must be an integer')

  return /^-?[0-9]+$/.test(String(value)) || t('This field must be an integer')
}
const mobileValidator = value => {
  if (isEmpty(value))
    return true
  if (Array.isArray(value))
    return value.every(val => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(val))) || t('This field must be an integer')

  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(String(value)) || t('This field must be an integer')
}
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'


const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
import VueCookies from "vue-cookies"
import { isEmpty } from "@core/utils"
import { useI18n } from "vue-i18n"
const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()
const { t } = useI18n()
const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)
const login = () => {
  axios.post('staff/login', {
    email: email.value,
    password: password.value,
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data


    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', accessToken)
    VueCookies.set('auth', accessToken)
    isTrue.value = true
    loading.value = false
    disabled.value = false
    router.replace(route.query.to ? String(route.query.to) : '/staff/analytics')
  }).catch(e => {
    console.log(e.response.data.message)
    errors.value = e.response.data.message
    isError.value = true
    loading.value = false
    disabled.value = false

  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
    {
      loading.value = true
      disabled.value = true
      login()
    }

  })
}

</script>

<template>
  <div>
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
      <VCol
        cols="6"
        class="mx-auto"
      >
        <NavBarI18n/>
      </VCol>
      <VCol
        cols="6"
        md="6"
        class="text-center"
        :class="dir_h1"
      >
        <a @click="home_click" href="#"><h1 class="text-primary-user">Resturentlly</h1></a>
      </VCol>
    </VRow>
    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="4"
        class="d-none d-lg-flex"
      >
        <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
          <div class="d-flex align-center justify-center w-100 h-100">
            <VImg
              max-width="505"
              :src="authThemeImg"
              class="auth-illustration mt-16 mb-2"
            />
          </div>

          <VImg
            :src="authThemeMask"
            class="auth-footer-mask"
          />
        </div>
      </VCol>
      <VCol lg="4"
            class="d-none d-lg-flex">
        <Watch/>
      </VCol>
      <VCol
        cols="12"
        lg="4"
        class="d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText>
            <VNodeRenderer
              :nodes="themeConfig.app.logo2"
              class="mb-6"
            />

            <h5 class="text-h5 font-weight-semibold mb-1">
              {{t('Welcome_to')}} {{ themeConfig.app.title }}! 👋🏻
            </h5>
            <p class="mb-0">
              {{t('Please sign-in to your account and start the adventure')}}
            </p>
          </VCardText>
          <VCardText>
          </VCardText>
          <VCardText>
            <VForm
              ref="refVForm"
              @submit.prevent="onSubmit"
            >
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    :rules="[required, emailValidator]"
                    :label="t('email')"
                    type="email"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    :label="t('password')"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :error-messages="errors.password"
                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                    <VCheckbox
                      v-model="rememberMe"
                      :label="t('Remember_me')"
                    />
                    <RouterLink
                      class="text-primary ms-2 mb-1"
                      :to="{ name: 'dashboards-forgot-password' }"
                    >
                      {{t('Forgot_Password')}}
                    </RouterLink>
                  </div>

                  <VBtn
                    block
                    type="submit"
                  >
                    {{t('login')}}
                  </VBtn>
                </VCol>

                <!-- create account -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <span>{{t('New on our platform?')}}</span>
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'register' }"
                  >
                    {{t('Create an account')}}
                  </RouterLink>
                </VCol>


                <!-- auth providers -->

              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>

</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
.text-primary-user
{

  color: #FEA116 !important;

}
</style>

<route lang="yaml">
meta:
 layout: blank
 action: read
 subject: Auth
 redirectIfLoggedIn: true
</route>
