<script setup>
import { useAdminListStore } from "@/views/apps/admin/useAdminListStore"
import { useI18n } from "vue-i18n"
const { t } = useI18n()
import axios from "@axios"
import { useRoute } from "vue-router"
const route = useRoute()
const router = useRouter()
const props = defineProps({
  xs: {
    type: [
      Number,
      String,
    ],
    required: false,
  },
  sm: {
    type: [
      Number,
      String,
    ],
    required: false,
  },
  md: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
  lg: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
  xl: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
})
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'


axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token

const userListStore = useAdminListStore()
const pricingPlans = ref([])



const fetchPlanData = () => {
  if(isAppRtl.value===true)
  {
    axios.defaults.headers.common['Language'] = 'ar'
  }
  else
  {

    axios.defaults.headers.common['Language'] = 'en'
  }

  axios.get('/plans/home/list', { token })
    .then(response => {

      for (var i=0 ; i< response.data.length;i++)
      {
        let count_emp=  t('count_emp')+' : '+response.data[i].count_emp
        let count_branch=  t('count_branch')+' : '+response.data[i].count_branch
        let count_interval=  t('count_interval')+' : '+response.data[i].count_interval
        pricingPlans.value[i]={
          id: response.data[i].id,
          name: response.data[i].name,
          tagLine: response.data[i].description ,
          logo: response.data[i].logo ,
          isPopular: response.data[i].is_popular ,
          yearlyPrice: response.data[i].price ,
          features: [
            count_emp,
            count_branch,
            count_interval,
          ],
        }
      }


    })


}

watch(router, fetchPlanData, { immediate: true })
watch(() => isAppRtl.value, () => {
  fetchPlanData()
})

const selectPlan = id  => {
  let user= localStorage.getItem('userData')
  let accessToken= localStorage.getItem('accessToken')





}
</script>

<template>
  <!-- 👉 Title and subtitle -->
  <div class="text-center">
    <h4 class="text-h4 pricing-title mb-4">
      {{t('plans')}}
    </h4>
    <p> {{t('Choose the best plan to fit your needs.')}}</p>
  </div>

  <!-- 👉 Annual and monthly price toggler -->


  <!-- SECTION pricing plans -->
  <VRow>
    <VCol
      v-for="plan in pricingPlans"
      :key="plan.logo"
      v-bind="props"
      cols="12"
    >
      <!-- 👉  Card -->
      <VCard
        flat
        border
        :class="plan.isPopular==='1' ? 'border-primary border-opacity-100' : ''"
      >
        <VCardText
          style="height: 4.125rem;"
          class="text-end"
        >
          <!-- 👉 Popular -->
          <VChip
            v-if="plan.isPopular==='1'"
            label
            color="primary"
            size="small"
          >
            {{ t('Popular') }}
          </VChip>
        </VCardText>

        <!-- 👉 Plan logo -->
        <VCardText class="text-center">
          <VImg
            :height="140"
            :src="plan.logo"
            class="mx-auto mb-5"
          />

          <!-- 👉 Plan name -->
          <h5 class="text-h5 mb-2">
            {{ plan.name }}
          </h5>
          <p class="mb-0">
            {{ plan.tagLine }}
          </p>
        </VCardText>

        <!-- 👉 Plan price  -->
        <VCardText class="position-relative text-center">


          <!-- 👉 Annual Price -->
          <span

            class="position-absolute text-caption font-weight-medium mt-1 bold"
            style="inset-inline: 0;"
          >
            {{ plan.yearlyPrice === '0' ? t('free') : ` ${plan.yearlyPrice}/`+ t('USD') +' '+ t('year') }}
          </span>
        </VCardText>

        <!-- 👉 Plan features -->
        <VCardText class="mt-5">
          <VList class="card-list">
            <VListItem
              v-for="feature in plan.features"
              :key="feature"
            >
              <template #prepend>
                <VIcon
                  :size="14"
                  icon="tabler-circle"
                  class="me-3"
                />
              </template>

              <VListItemTitle>
                {{ feature }}
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Plan actions -->
        <VCardActions>
          <VBtn
            block
            :color="plan.current ? 'success' : 'primary'"
            :variant="plan.isPopular==='1' ? 'elevated' : 'tonal'"
            @click.prevent="selectPlan(plan.id)"
          >
            {{ plan.yearlyPrice === '0' ? t('free_plan') : t('select') }}
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
  <!-- !SECTION  -->
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.75rem;
}

.save-upto-chip {
  inset-block-start: -1.5rem;
  inset-inline-end: -7rem;
}
</style>
