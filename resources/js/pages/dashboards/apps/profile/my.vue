<script setup>
import { useClientListStore } from '@/views/dashboards/useClientListStore'
import UserBioPanel from '@/views/dashboards/apps/my/UserBioPanel.vue'


const clientListStore = useClientListStore()
const route = useRoute()
const userData = ref()
const userAuth_id = JSON.parse(localStorage.getItem('userData') || 'null')
const userId = userAuth_id && userAuth_id.id ? userAuth_id.id : null

const fetchAboutData = () => {
  clientListStore.getSingleUser().then(response => {
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
 layout: default_client
 action: read
 subject: rest_maneger
</route>
