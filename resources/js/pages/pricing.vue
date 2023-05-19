<script setup>
import laptopGirl from '@images/illustrations/laptop-girl.png'
import NavBarI18n from "@/layouts/components/NavBarI18n.vue"
import { useI18n } from "vue-i18n"
import axios from "@axios"
import { useRoute } from "vue-router"
import PlanPricing from "@core/components/PlanPricing.vue"
import { useThemeConfig } from "@core/composable/useThemeConfig"
const dir_h1 = ref('')
const { isAppRtl } = useThemeConfig()
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
if(isAppRtl.value===true)
{
  axios.defaults.headers.common['Language'] = 'ar'
  dir_h1.value='text-left'
}
else
{
  axios.defaults.headers.common['Language'] = 'en'
  dir_h1.value='text-left'
}

axios.defaults.headers.common['type'] = 'User'
axios.defaults.headers.common['auth'] = 'token ' + token
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const isTrue = ref(false)
const isError = ref(false)
const disabled = ref(false)
const loading = ref(false)


const faqs = ref({})

const fetchFaqData = () => {


  axios.get('/faqs/home/list', { token })
    .then(response => {
      console.log(response.data,'dd')
      for (var i = 0; i < response.data.length; i++) {

        faqs.value[i] = { question: response.data[i].title, answer: response.data[i].description}
      }

    })


}

watch(router, fetchFaqData, { immediate: true })

const home_click = ()  => {
  document.location.href = '/'
}
</script>

<template>
  <VCard class="pt-6">

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


    <VCardText class="pt-12 mb-16 pb-16">

      <!-- 👉 App Pricing components -->
      <VRow>
        <VCol
          cols="12"
          sm="8"
          md="12"
          lg="10"
          class="mx-auto"
        >
          <PlanPricing :plan-data="features" md="4"/>
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Free trial Banner -->
    <VRow class="page-pricing-free-trial-banner-bg">
      <VCol
        cols="12"
        md="10"
        class="d-flex align-center flex-md-row flex-column position-relative mx-auto"
      >
        <div class="text-center text-md-start py-10 px-10 px-sm-0">
          <h3 class="text-h5 text-primary mb-2">
            {{t('Still not convinced? Start with a FREE trial!')}}
          </h3>
          <p class="text-sm">
            {{t('You will get full access to all the features for 14 days.')}}
          </p>

          <VBtn class="mt-4">
           {{t('Start-14-day FREE trial')}}
          </VBtn>
        </div>

        <div class="free-trial-illustrator">
          <VImg
            :src="laptopGirl"
            :width="230"
          />
        </div>
      </VCol>
    </VRow>

    <!-- 👉 Plans -->


    <!-- 👉 Features & Tables -->


    <!-- 👉 FAQ -->
    <div>
      <VCardText class="bg-var-theme-background py-16">
        <div class="text-center">
          <h4 class="text-h4 mb-2">
           {{t('FAQS')}}
          </h4>
          <p>
            {{t('Let us help answer the most common questions.')}}
          </p>
        </div>

        <VExpansionPanels class="py-6 px-16">
          <VExpansionPanel
            v-for="faq in faqs"
            :key="faq.question"
            :title="faq.question"
            :text="faq.answer"
          />
        </VExpansionPanels>
      </VCardText>
    </div>
  </VCard>
</template>

<route lang="yaml">
meta:
 layout: blank
 action: read
 subject: Auth
</route>

<style lang="scss">
.page-pricing-free-trial-banner-bg {
  /* stylelint-disable-next-line color-function-notation */
  background-color: rgba(var(--v-theme-primary), var(--v-selected-opacity));
}

@media screen and (min-width: 960px) {
  .free-trial-illustrator {
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 10%;
  }
}

@media screen and (max-width: 959px) {
  .free-trial-illustrator {
    position: relative;
    inset-block-end: -11px;
  }
}
.text-primary-user
{

  color: #FEA116 !important;

}
</style>
