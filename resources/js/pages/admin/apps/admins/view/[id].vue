<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'


const adminListStore = useAdminListStore()
const route = useRoute()
const userData = ref()
const userTab = ref(null)


adminListStore.getSingleUser(Number(route.params.id)).then(response => {
  userData.value = response.data
})
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
</route>
