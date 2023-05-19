<script setup>
import { useSettingListStore } from "../../order/useSettingListStore"

import UserOrderBioPanel from "@/views/apps/user_order/UserOrderBioPanel.vue"

const settingListStore = useSettingListStore()
const route = useRoute()
const userData = ref()



settingListStore.getSingleOrder(Number(route.params.id)).then(response => {
  userData.value = response.data
})
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"

    >
      <UserOrderBioPanel :user-data="userData" />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_customer
 action: read
 subject: customer_profile
</route>
