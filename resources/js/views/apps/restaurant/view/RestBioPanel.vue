<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { useI18n } from "vue-i18n"
const { t } = useI18n()
const props = defineProps({
  restData: {
    type: Object,
    required: true,
  },
})

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
}

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const resolveUserStatusVariant = stat => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'
  
  return 'primary'
}

const resolveUserTypeVariant = type => {
  if (type === 'main')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (type === 'branch')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }


  return {
    color: 'primary',
    icon: 'tabler-user',
  }
}

</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.restData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="props.restData.avatar"
              :src="props.restData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >
              {{ avatarText(props.restData.fullName) }}
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.restData.name }}
          </h6>

          <!-- 👉 Role chip -->
          <VChip
            label
            :color="resolveUserTypeVariant(props.restData.type).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ $t(props.restData.type) }}
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
                icon="tabler-checkbox"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.restData.RestaurantStatistic.count_branch) }}
              </h6>
              <span class="text-sm">{{t('count_branch')}}</span>
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
                icon="tabler-briefcase"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.restData.RestaurantStatistic.count_emp) }}
              </h6>
              <span class="text-sm">{{t('count_emp')}}</span>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <!-- 👉 Details -->
        <VCardText>
          <p class="text-sm text-uppercase text-disabled">
            {{ $t('Details') }}
          </p>

          <!-- 👉 User Details list -->
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{t('rest_name')}}:
                  <span class="text-body-2">
                    {{ props.restData.name }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{t('rest_mobile')}}:
                  <span class="text-body-2">{{ props.restData.mobile }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{t('rest_type')}}:
                  <span class="text-capitalize text-body-2">{{ $t(props.restData.type) }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ $t('country_name') }} :
                  <span class="text-body-2">
                    {{ props.restData.country_name }} -  {{ props.restData.state_name }}  -  {{ props.restData.city_name }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>




          </VList>
        </VCardText>

      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Current Plan -->
    <VCol cols="12">
      <VCard>
        <VCardText class="d-flex">
          <!-- 👉 Standard Chip -->
          <VChip
            label
            color="primary"
            size="small"
          >
            Standard
          </VChip>

          <VSpacer />

          <!-- 👉 Current Price  -->
          <div class="d-flex align-center">
            <sup class="text-primary text-sm font-weight-regular">$</sup>
            <h3 class="text-h3 text-primary font-weight-semibold">
              99
            </h3>
            <sub class="mt-3"><h6 class="text-sm font-weight-regular">/ month</h6></sub>
          </div>
        </VCardText>

        <VCardText>
          <!-- 👉 Price Benefits -->
          <VList class="card-list">
            <VListItem
              v-for="benefit in standardPlan.benefits"
              :key="benefit"
            >
              <VIcon
                size="12"
                color="#A8AAAE"
                class="me-2"
                icon="tabler-circle"
              />
              <span>{{ benefit }}</span>
            </VListItem>
          </VList>

          <!-- 👉 Days -->
          <div class="my-6">
            <div class="d-flex font-weight-semibold mt-3 mb-2">
              <h6 class="text-base font-weight-semibold">
                Days
              </h6>
              <VSpacer />
              <h6 class="text-base font-weight-semibold">
                26 of 30 Days
              </h6>
            </div>

            <!-- 👉 Progress -->
            <VProgressLinear
              rounded
              rounded-bar
              :model-value="65"
              height="8"
              color="primary"
            />

            <p class="mt-2">
              4 days remaining
            </p>
          </div>

          <!-- 👉 Upgrade Plan -->
          <VBtn
            block
            @click="isUpgradePlanDialogVisible = true"
          >
            Upgrade Plan
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="props.restData"
  />

  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>


