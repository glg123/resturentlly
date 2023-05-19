<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})
const counter = ref(0)
const hide_btn = ref(1)



const isUpgradePlanDialogVisible = ref(false)
//'delivery','take_away','table'
const resolveOrderTypeVariant = stat => {
  if (stat === 'delivery')
    return 'warning'
  if (stat === 'take_away')
    return 'success'
  if (stat === 'table')
    return 'secondary'
  
  return 'primary'
}
//'active','watting','cancel','done','in_progress'
const resolveOrderStatusVariant = status => {
  if (status === 'active')
    return {
      color: 'warning',
      icon: 'tabler-user',
    }
  if (status === 'watting')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (status === 'cancel')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }
  if (status === 'done')
    return {
      color: 'info',
      icon: 'tabler-pencil',
    }
  if (status === 'in_progress')
    return {
      color: 'secondary',
      icon: 'tabler-server-2',
    }
  
  return {
    color: 'primary',
    icon: 'tabler-user',
  }
}

watch(() => counter.value, () => {
  if(counter.value===10)
  {
    hide_btn.value=0

  }

})
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="props.userData.meal_avatar"
              :src="props.userData.meal_avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >
              {{ avatarText(props.userData.meal_name) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.userData.meal_name }}
          </h6>

          <!-- 👉 Role chip -->
          <VChip
            label
            :color="resolveOrderStatusVariant(props.userData.status).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ $t(props.userData.status) }}
          </VChip>
        </VCardText>

        <VCardText class="d-flex justify-center flex-wrap mt-3">
          <!-- 👉 Done task -->
          <div class="d-flex align-center me-8 mb-2">
            <VAvatar
              :size="38"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="24"
                icon="tabler-calendar"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.userData.price) }}
              </h6>
              <span class="text-sm">{{ $t('price_before_dis') }}</span>
            </div>
          </div>

          <!-- 👉 Done Project -->
          <div class="d-flex align-center me-4 mb-2">
            <VAvatar
              :size="38"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="24"
                icon="tabler-calendar"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.userData.total_price) }}
              </h6>
              <span class="text-sm">{{ $t('price_after_dis') }}</span>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <!-- 👉 Details -->
        <VCardText>
          <p class="text-sm text-uppercase text-disabled">
            {{$t('meal_order_details')}}
          </p>

          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{$t('restaurant_name') }}:
                  <span class="text-body-2">
                    {{ props.userData.restaurant_name }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ $t('staff_name') }}:
                  <span class="text-body-2">{{ props.userData.staff_name }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{$t('type_order') }}:

                  <VChip
                    label
                    size="small"
                    :color="resolveOrderTypeVariant(props.userData.type_order)"
                    class="text-capitalize"
                  >
                    {{ props.userData.type_order_name }}
                  </VChip>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ $t('meal_id') }}:
                  <span class="text-body-2">
                    {{ props.userData.meal_id }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ $t('restaurant_mobile') }}:
                  <span class="text-body-2">{{ props.userData.restaurant_mobile }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>



            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ $t('discount') }}:
                  <span class="text-body-2">{{ props.userData.discount }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>

      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Current Plan -->
    <VCol v-if="props.userData.have_rate!==1 && hide_btn===1" cols="12">
      <VCard>


        <VCardText>

          <VBtn
            block
            @click="isUpgradePlanDialogVisible = true"
          >
            {{$t('rate_meal_order') }}
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Upgrade plan dialog -->
  <UserRateOrderDialog v-model:counter="counter" v-model:orderRestaurantName="props.userData.restaurant_name" v-model:orderMealName="props.userData.meal_name" v-model:orderId="props.userData.id" v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>


