<script setup>
import { VForm } from 'vuetify/components'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import Watch from '@/layouts/components/watch.vue'

import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
  alphaDashValidator,
} from '@validators'

import { isEmpty } from "@core/utils"
import { useI18n } from "vue-i18n"
import VueCookies from "vue-cookies"
const changeAvatarFrom = ref()
const refVForm = ref()
const username = ref('')
const mobile = ref('')
const first_name = ref('')
const last_name = ref('')
const email = ref('')
const avatar = ref()
const password = ref('')
const privacyPolicies = ref(true)
const typeUser = ref('client')
const { t } = useI18n()
// Router
const route = useRoute()
const router = useRouter()
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'

const changeAvatar_from = avatar_file => {


  const fileReader = new FileReader()
  const { files } = avatar_file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        avatar.value = fileReader.result
    }
  }
}
// Ability


// Form Errors
const errors = ref([])

const register = () => {
  axios.post('/register', {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
    type: typeUser.value,
    avatar: avatar.value,


  }).then(r => {
    if(r.data==='customer')
    {
      router.replace(route.query.to ? String(route.query.to) : '/customers/activate_account')

    }
    else
    {
      router.replace(route.query.to ? String(route.query.to) : '/dashboards/activate_account')

    }

  }).catch(e => {

    errors.value = e.response.data.message
  })
}
const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      register()
  })
}
const imageVariant = useGenerateImageVariant(authV2RegisterIllustrationLight, authV2RegisterIllustrationDark, authV2RegisterIllustrationBorderedLight, authV2RegisterIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)


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

          <div class="d-flex align-center justify-center w-100 h-100">

            <VImg
              max-width="441"
              :src="imageVariant"
              class="auth-illustration mt-16 mb-2"
            />

          </div>

          <VImg
            class="auth-footer-mask"
            :src="authThemeMask"
          />
        </div>
      </VCol>
      <VCol   lg="4"
              class="d-none d-lg-flex">
        <Watch />
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
              {{t('register_with_us') }}
            </h5>
            <p class="mb-0">
              {{t('Experience the digital experience of restaurants') }}
            </p>
          </VCardText>

          <VCardText>
            <VForm
              ref="refVForm"
              @submit.prevent="onSubmit"
            >
              <VRow>
                <VCol
                  md="12"
                  cols="12"
                >
                  <VCardText class="d-flex">
                    <!-- 👉 Avatar -->
                    <VAvatar
                      rounded
                      size="100"
                      class="me-6"
                      :image="avatar"
                    />

                    <!-- 👉 Upload Photo -->
                    <form
                      ref="refForm_front"
                      class="d-flex flex-column justify-center gap-4"
                    >
                      <div class="d-flex flex-wrap gap-2">
                        <VBtn
                          color="primary"
                          @click="changeAvatarFrom?.click()"
                        >
                          <VIcon
                            icon="tabler-cloud-upload"
                            class="d-sm-none"
                          />
                          <span class="d-none d-sm-block">{{ $t('avatar') }}</span>
                        </VBtn>

                        <input
                          ref="changeAvatarFrom"
                          type="file"
                          name="file_back"
                          accept=".jpeg,.png,.jpg,GIF"
                          hidden
                          @input="changeAvatar_from"
                        >


                      </div>
                    </form>
                  </VCardText>
                </VCol>
                <!-- Username -->
                <VCol cols="12">
                  <VTextField
                    v-model="mobile"
                    :rules="[required,mobileValidator]"
                    :label="t('mobile')"
                  />
                </VCol>

                <VCol cols="6">
                  <VTextField
                    v-model="first_name"
                    :rules="[required, alphaDashValidator]"
                    :label="t('first_name')"
                  />
                </VCol>
                <VCol cols="6">
                  <VTextField
                    v-model="last_name"
                    :rules="[required, alphaDashValidator]"
                    :label="t('last_name')"
                  />
                </VCol>

                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    :rules="[required, emailValidator]"
                    :label="t('email')"
                    type="email"
                  />
                </VCol>
                <VCol cols="12">
                  <VRadioGroup
                    v-model="typeUser"
                    inline
                  >
                    <VRadio
                      :label="$t('client')"
                      value="client"
                      density="compact"
                    />
                    <VRadio
                      :label="$t('customer')"
                      value="customer"
                      density="compact"
                    />
                  </VRadioGroup>
                </VCol>
                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    :rules="[required]"
                    :label="t('password')"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center mt-2 mb-4">
                    <VCheckbox
                      id="privacy-policy"
                      v-model="privacyPolicies"
                      inline
                    />
                    <VLabel
                      for="privacy-policy"
                      class="pb-1"
                      style="opacity: 1;"
                    >
                      <span class="me-1">{{t('I_agree_to')}}</span>
                      <a
                        href="javascript:void(0)"
                        class="text-primary"
                      >{{t('privacy_policy_terms')}}</a>
                    </VLabel>
                  </div>

                  <VBtn
                    block
                    type="submit"
                  >
                    {{t('register')}}
                  </VBtn>
                </VCol>


                <!-- create account -->
                <VCol
                  cols="12"
                  class="text-center text-base"
                >
                  <span>{{t('Already have an account?')}}</span>
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'choose_login' }"
                  >
                    {{t('login')}}
                  </RouterLink>
                </VCol>

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
