<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'


const adminListStore = useAdminListStore()
const route = useRoute()
const userData = ref()
const userAuth_id = JSON.parse(localStorage.getItem('userData') || 'null')
const userId = userAuth_id && userAuth_id.id ? userAuth_id.id : null

const fetchAboutData = () => {
  adminListStore.getSingleUser(Number(userId)).then(response => {
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
 layout: default_admin
 action: read
 subject: Auth
</route>
