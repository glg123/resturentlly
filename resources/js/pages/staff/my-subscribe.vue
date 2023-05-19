<script setup>
import { useTheme } from 'vuetify'
import SettingsBillingAndPlans from "@/views/pages/account-settings/SettingsBillingAndPlans.vue"
import { useI18n } from "vue-i18n"
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')
const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors
const pricing = () => {

  let router_to='/pricing/'

  router.push(router_to)
}
</script>

<template>
  <div>
    <SettingsBillingAndPlans v-if="userData.has_plan==1"  />
    <VCard v-else :title="t('select')">
      <VCol cols="12">
        <div class="d-flex flex-wrap gap-y-4">
          <VBtn
            class="me-3"
            @click="pricing"
          >
            {{t('plans')}}
          </VBtn>


        </div>
      </VCol>
    </VCard>
  </div>

</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>

<route lang="yaml">
meta:
 layout: default_client
 action: read
 subject: rest_maneger
</route>
