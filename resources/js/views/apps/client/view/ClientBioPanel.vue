<script setup>
import {
  avatarText,
} from '@core/utils/formatters'
import { useI18n } from "vue-i18n"

const props = defineProps({
  clientData: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()


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
  if (type === 'manager')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (type === 'staff')
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
    <VCol cols="12">
      <VCard v-if="props.clientData">
        <VCardText class="text-center pt-15">
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="props.clientData.avatar"
              :src="props.clientData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >{{ avatarText(props.clientData.full_name) }}</span>
          </VAvatar>
          <h6 class="text-h6 mt-4">
            {{ props.clientData.full_name }}
          </h6>
          <VChip
            label
            :color="resolveUserTypeVariant(props.clientData.type).color"
            size="small"
            class="text-capitalize mt-4"
          >
            {{ props.clientData.type }}
          </VChip>
        </VCardText>
        <VDivider/>
        <VCardText>
          <p class="text-sm text-uppercase text-disabled">
            {{ t('Details') }}
          </p>
          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ t('name') }}:
                  <span class="text-body-2">
                    {{ props.clientData.full_name }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ t('mobile') }} :
                  <span class="text-body-2">{{ props.clientData.mobile }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VListItemTitle>
                <h6 class="text-base font-weight-semibold">
                  {{ t('user_type') }} :
                  <span class="text-capitalize text-body-2">{{ t(props.clientData.type) }}</span>
                </h6>
              </VListItemTitle>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>


