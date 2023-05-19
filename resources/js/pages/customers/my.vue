<script setup>
import { useCustomerListStore } from '@/views/apps/customer/useCustomerListStore'
import UserBioPanel from '@/views/apps/customer/view/UserBioPanel.vue'


const customerListStore = useCustomerListStore()
const route = useRoute()
const userData = ref()
const userAuth_id = JSON.parse(localStorage.getItem('userData') || 'null')
const userId = userAuth_id && userAuth_id.id ? userAuth_id.id : null

const fetchAboutData = () => {
  customerListStore.getSingleUser(Number(userId)).then(response => {
    userData.value = response.data
  })
}

watch(route, fetchAboutData, { immediate: true })
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      lg="12"
    >
      <UserBioPanel :user-data="userData" />
    </VCol>


  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_customer
 action: read
 subject: customer_profile
</route>
