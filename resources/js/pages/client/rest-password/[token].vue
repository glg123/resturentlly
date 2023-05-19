<script setup>
import { onMounted } from "vue"

import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg'
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useI18n } from "vue-i18n"
import axios from "@axios"
import VueCookies from "vue-cookies"
import { useThemeConfig } from "@core/composable/useThemeConfig"
import NavBarI18n from "@/layouts/components/NavBarI18n.vue"
import { VForm } from "vuetify/components"

const { isAppRtl } = useThemeConfig()



const isPasswordVisible = ref(false)
const newPassword = ref('')
const confirmPassword = ref('')
const isConfirmPasswordVisible = ref(false)
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const pass_token = ref(route.params.token)
const errors = ref([])
const wellcome_email = ref('')
const refVForm = ref()
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


axios.defaults.headers.common['type'] = 'Customer'
const check_token = () => {
  axios.post('/check-token', {
    token: pass_token.value,



  }).then(r => {
    wellcome_email.value=r.data.email
    console.log(r.data)
  }).catch(e => {
    const { errors: formErrors } = e.response.data

    errors.value = e.response.data.message
    console.error(e.response.data.message,'ddd')
  })
}

const home_click = ()  => {
  document.location.href = '/'
}

onMounted(() => {
  check_token()
})

const newPasswordSend = () => {
  axios.post('/rest-password', {
    token: pass_token.value,
    email: wellcome_email.value,
    password: newPassword.value,
    password_confirmation: confirmPassword.value,



  }).then(r => {


    router.replace(route.query.to ? String(route.query.to) : '/customers/login')

    return null
  }).catch(e => {
    errors.value = e.response.data.message
  })
}
const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      newPasswordSend()
  })
}
</script>

<template>
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
  <div  class="auth-wrapper d-flex align-center justify-center pa-4">


    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->
      <VImg
        :src="authV1TopShape"
        class="auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 👉 Bottom shape -->
      <VImg
        :src="authV1BottomShape"
        class="auth-v1-bottom-shape d-none d-sm-block"
      />

      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo2" />
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h5 py-1">
            {{ themeConfig.app.title }}
          </VCardTitle>

        </VCardItem>

        <VCardText class="pt-2">
          <h5 class="text-h5 font-weight-semibold mb-1">
            {{t('Reset_Password')}} 🔒
          </h5>
          <p class="mb-0">
            {{t('for')}} <span class="font-weight-bold">{{ wellcome_email }}</span>
          </p>
          <VCardText v-if="errors.length" class="text-danger">
            {{errors }}
          </VCardText>
        </VCardText>

        <VCardText v-if="!errors.length">
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="newPassword"
                  :label="t('New Password')"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <!-- Confirm Password -->
              <VCol cols="12">
                <VTextField
                  v-model="confirmPassword"
                  :label="t('Confirm Password')"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <!-- reset password -->
              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                >
                  {{t('Set New Password')}}
                </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <RouterLink
                  class="d-flex align-center justify-center"
                  :to="{ name: 'pages-authentication-login-v1' }"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    class="flip-in-rtl"
                  />
                  <span>{{ t('Back to login') }}</span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>

  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
.text-danger
{
  color: red !important;
}
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
