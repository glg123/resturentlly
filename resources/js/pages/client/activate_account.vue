<script setup>
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-two-step-illustration-dark.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-two-step-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

import { useI18n } from "vue-i18n"
import EmailOtpInput from "@core/components/EmailOtpInput.vue"
import NavBarI18n from "@/layouts/components/NavBarI18n.vue"

const authThemeImg = useGenerateImageVariant(authV2ForgotPasswordIllustrationLight, authV2ForgotPasswordIllustrationDark)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const { t } = useI18n()
const home_click = ()  => {
  document.location.href = '/'
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
  <VRow
    class="auth-wrapper"
    no-gutters
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="418"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />

          <h5 class="text-h5 font-weight-semibold mb-1">
            {{ t('activate_account') }} 💬
          </h5>
          <p class="mb-2">
            {{t('activate_msg')}}
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <EmailOtpInput />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
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
