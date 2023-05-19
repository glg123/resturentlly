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
import page401 from "@images/pages/401.png";
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
  <div class="misc-wrapper">
    <div class="misc-center-content text-center mb-12">
      <!-- 👉 Title and subtitle -->
      <h4 class="text-h4 font-weight-medium mb-3">
        You are not authorized! 🔐
      </h4>
      <p>You don't have permission to access this page. Go Home!</p>
      <VBtn to="/">
        Back to Home
      </VBtn>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="page401"
        alt="Coming Soon"
        :max-width="170"
        class="mx-auto"
      />
    </div>

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/misc.scss";
</style>

<route lang="yaml">
meta:
 layout: blank
 action: read
 subject: Auth
</route>
