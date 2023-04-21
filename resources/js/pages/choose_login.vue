<script setup>
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'

import NavBarI18n from '@/layouts/components/NavBarI18n.vue'


import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'

import authV2LoginIllustrationBorderedDark2 from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight2 from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2LoginIllustrationDark2 from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2LoginIllustrationLight2 from '@images/pages/auth-v2-register-illustration-light.png'


import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

const authThemeImg2 = useGenerateImageVariant(authV2LoginIllustrationLight2, authV2LoginIllustrationDark2, authV2LoginIllustrationBorderedLight2, authV2LoginIllustrationBorderedDark2, true)
const authThemeMask2 = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)


import VueCookies from "vue-cookies"
import Watch from "@/layouts/components/watch.vue";
const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()
const email = ref('admin@demo.com')
const password = ref('admin')
const rememberMe = ref(false)

const login = () => {
  axios.post('admin/login', {
    email: email.value,
    password: password.value,
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data


    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', accessToken)
    VueCookies.set('auth', accessToken)
    // Redirect to `to` query if exist or redirect to index route
    router.replace(route.query.to ? String(route.query.to) : '/admin/')
  }).catch(e => {
    const { errors: formErrors } = e.response.data

    errors.value = formErrors
    console.error(e.response.data)
  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}
const home_click = ()  => {
  document.location.href = '/'
}
</script>

<template>
  <div>
    <VRow>

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
          <a href="/dashboards/login"><h1 class="text-center text-primary-user">{{ $t('client') }}</h1></a>
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
        lg="4"
        class="d-none d-lg-flex"
      >

        <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
          <a href="/customers/login"><h1 class="text-center text-primary-user">{{ $t('customer') }}</h1></a>
          <div class="d-flex align-center justify-center w-100 h-100">
            <VImg
              max-width="505"
              :src="authThemeImg2"
              class="auth-illustration mt-16 mb-2"
            />
          </div>

          <VImg
            :src="authThemeMask2"
            class="auth-footer-mask"
          />
        </div>
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
