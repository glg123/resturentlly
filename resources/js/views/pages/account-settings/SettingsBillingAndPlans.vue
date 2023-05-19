<script setup>
import mastercard from '@images/icons/payments/mastercard.png'
import visa from '@images/icons/payments/visa.png'
import { useI18n } from "vue-i18n"
import axios from "@axios"
import { useThemeConfig } from "@core/composable/useThemeConfig"

import CancelPlan from "@core/components/CancelPlan.vue"

const { isAppRtl } = useThemeConfig()
const selectedPaymentMethod = ref('credit-debit-atm-card')
const isConfirmDialogVisible = ref(false)
const isCardEditDialogVisible = ref(false)
const isCardDetailSaveBilling = ref(false)
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const creditCards = ref([])

const currentCardDetails = ref()
const myPlan = ref([])
const myOrder = ref([])

const openEditCardDialog = cardDetails => {
  currentCardDetails.value = cardDetails
  isCardEditDialogVisible.value = true
}

const cardNumber = ref(135632156548789)
const cardName = ref('john Doe')
const cardExpiryDate = ref('05/24')
const cardCvv = ref(420)

const resetPaymentForm = () => {
  cardNumber.value = 135632156548789
  cardName.value = 'john Doe'
  cardExpiryDate.value = '05/24'
  cardCvv.value = 420
  selectedPaymentMethod.value = 'credit-debit-atm-card'
}


let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['type'] = 'User'
axios.defaults.headers.common['role'] = 'user'
axios.defaults.headers.common['auth'] = 'Bearer ' + token

const fetchPlanData = () => {
  if (isAppRtl.value === true) {
    axios.defaults.headers.common['Language'] = 'ar'
  }
  else {

    axios.defaults.headers.common['Language'] = 'en'
  }

  axios.get('/client/my/plan', { token })
    .then(response => {



      myOrder.value=  response.data
      myPlan.value=  response.data.plan
      creditCards.value[0]={
        name: response.data.cardHolder,
        number: response.data.cardNumber,
        expiry: response.data.monthSelection+'/'+response.data.yearSelection,
        isPrimary: true,
        type: response.data.card_type,
        cvv: response.data.cvv,
        image: response.data.card_type==='visa'?visa : mastercard,
      }
    })


}
const pricing = () => {

  let router_to='/pricing/'

  router.push(router_to)
}
watch(router, fetchPlanData, { immediate: true })
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard :title="t('Current_Plan')">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <div>
                <div class="mb-6">
                  <h3 class="text-base font-weight-medium mb-1">
                    {{ t('Your_Current_Plan_is') }} {{myPlan.name}}
                  </h3>
                  <p class="text-base">
                    {{myPlan.description}}
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-base font-weight-medium mb-1">
                    {{t('Active_until')}} {{myOrder.end_date}}
                  </h3>
                  <p class="text-base">
                    {{t('We will send you a notification upon Subscription expiration')}}
                  </p>
                </div>

                <div>
                  <h3 class="text-base font-weight-medium mb-1">
                    <span class="me-3">${{myOrder.price}} {{t('Per_Year')}}</span>
                    <VChip
                      v-if="myPlan.is_popular==='1'"
                      color="primary"
                      size="small"
                      label
                    >
                      {{t('Popular')}}
                    </VChip>
                  </h3>
                  <p class="text-base mb-0">
                    {{t('Standard plan for small to medium businesses')}}
                  </p>
                </div>
              </div>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAlert v-if="myOrder.diff_days<=10"
                color="warning"
                variant="tonal"
              >
                <VAlertTitle class="mb-1">
                  {{t('We need your attention!')}}
                </VAlertTitle>

                <span>{{t('Your plan requires update')}}</span>
              </VAlert>

              <!-- progress -->
              <h6 class="d-flex font-weight-semibold text-base mt-4 mb-2">
                <span>{{t('Days')}}</span>
                <VSpacer/>
                <span>{{ myOrder.diff_days }} {{t('ofs')}} {{ myOrder.diff_days_plan }} {{t('Days')}}</span>
              </h6>

              <VProgressLinear
                color="primary"
                rounded
                height="12"
                :model-value="((myOrder.diff_days_plan-myOrder.diff_days)/myOrder.diff_days_plan)*100"
              />


              <p class="text-base mt-2 mb-0">
                {{ myOrder.diff_days_plan }} {{t('days remaining until your plan requires update')}}
              </p>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAlert v-if="myOrder.count_emp<=1"
                      color="warning"
                      variant="tonal"
              >
                <VAlertTitle class="mb-1">
                  {{t('We need your attention!')}}
                </VAlertTitle>

                <span>{{t('Your plan requires update')}}</span>
              </VAlert>

              <!-- progress -->
              <h6 class="d-flex font-weight-semibold text-base mt-4 mb-2">
                <span>{{t('count_emp')}}</span>
                <VSpacer/>
                <span>{{ myOrder.count_emp_remain }} {{t('ofs')}} {{ myOrder.count_emp }} {{t('count_emp')}}</span>
              </h6>

              <VProgressLinear
                color="primary"
                rounded
                height="12"
                :model-value="((myOrder.count_emp-myOrder.count_emp_remain)/myOrder.count_emp)*100"
              />


              <p class="text-base mt-2 mb-0">
                {{ myOrder.count_emp_remain }} {{t('emp remaining until your plan requires update')}}
              </p>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAlert v-if="myOrder.count_emp_remain<=1"
                      color="warning"
                      variant="tonal"
              >
                <VAlertTitle class="mb-1">
                  {{t('We need your attention!')}}
                </VAlertTitle>

                <span>{{t('Your plan requires update')}}</span>
              </VAlert>

              <!-- progress -->
              <h6 class="d-flex font-weight-semibold text-base mt-4 mb-2">
                <span>{{t('Branches')}}</span>
                <VSpacer/>
                <span>{{ myOrder.count_branch_remain }} {{t('ofs')}} {{ myOrder.count_branch }} {{t('Branches')}}</span>
              </h6>

              <VProgressLinear
                color="primary"
                rounded
                height="12"
                :model-value="((myOrder.count_branch-myOrder.count_branch_remain)/myOrder.count_branch)*100"
              />


              <p class="text-base mt-2 mb-0">
                {{myOrder.count_branch_remain }} {{t('branches remaining until your plan requires update')}}
              </p>
            </VCol>
            <VCol cols="12">
              <div class="d-flex flex-wrap gap-y-4">
                <VBtn
                  class="me-3"
                  @click="pricing"
                >
                {{t('upgradePlan')}}
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="isConfirmDialogVisible = true"
                >
                  {{t('CancelSubscription')}}

                </VBtn>
              </div>
            </VCol>
          </VRow>

          <!-- 👉 Confirm Dialog -->

          <CancelPlan
            v-model:isDialogVisible="isConfirmDialogVisible"
            :confirmation-msg="t('Are you sure to cancel your subscription?')"
          />
          <!-- 👉 plan and pricing dialog -->

        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Payment Methods -->
    <VCol cols="12">
      <VCard :title="t('PaymentMethods')">
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>


              <!-- 👉 Saved Cards -->
              <VCol
                cols="12"
                md="12"
              >
                <h6 class="text-base font-weight-medium mb-3">
                 {{t('MyCards')}}
                </h6>

                <div class="d-flex flex-column gap-y-4">
                  <VCard
                    v-for="card in creditCards"
                    :key="card.name"
                    flat
                    variant="tonal"
                  >
                    <VCardText class="d-flex flex-sm-row flex-column pa-4">
                      <div class="text-no-wrap">
                        <VImg
                          :src="card.image"
                          width="46"
                        />
                        <h4 class="my-3">
                          {{ card.name }}
                          <VChip
                            v-if="card.isPrimary"
                            label
                            color="primary"
                            size="small"
                          >
                            Primary
                          </VChip>
                        </h4>
                        <span class="text-base">**** **** **** {{
                            card.number.substring(card.number.length - 4)
                          }}</span>
                      </div>

                      <VSpacer/>

                      <div class="d-flex flex-column text-sm-end">
                        <div class="d-flex flex-wrap gap-4 order-sm-0 order-1">
                          <VBtn
                            variant="tonal"
                            @click="openEditCardDialog(card)"
                          >
                            Edit
                          </VBtn>
                          <VBtn
                            color="secondary"
                            variant="tonal"
                          >
                            Delete
                          </VBtn>
                        </div>
                        <span class="text-sm mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0">{{t('Card expires at')}} {{
                            card.expiry
                          }}</span>
                      </div>
                    </VCardText>
                  </VCard>
                </div>

                <!-- 👉 Add Edit Card Dialog -->
                <CardAddEditDialog
                  v-model:isDialogVisible="isCardEditDialogVisible"
                  :card-details="currentCardDetails"
                  class="v-dialog-lg"
                />
              </VCol>

              <!-- 👉 Payment method action button -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn type="submit">
                  {{ t('Save changes') }}
                </VBtn>
                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="resetPaymentForm"
                >
                  {{ t('Reset') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

  </VRow>
</template>

<style lang="scss">
.pricing-dialog {
  .pricing-title {
    font-size: 1.5rem !important;
  }

  .v-card {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    box-shadow: none;
  }
}
</style>
