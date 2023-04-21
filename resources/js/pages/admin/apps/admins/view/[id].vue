<script setup>
import { useAdminListStore } from '@/views/apps/admin/useAdminListStore'
import UserBioPanel from '@/views/apps/admin/view/UserBioPanel.vue'
import axios from "@axios"
import { useRoute } from "vue-router"
const router = useRoute()
let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
const adminListStore = useAdminListStore()
const route = useRoute()
const userData = ref()
const roles = ref([])

const fetchAboutData = () => {
  adminListStore.getSingleUser(Number(route.params.id)).then(response => {
    userData.value = response.data
  })
}

watch(route, fetchAboutData, { immediate: true })

const fetchProjectData = () => {


  axios.get('/roles/list', { token })
    .then(response => {

      for (var i=0 ; i< response.data.length;i++)
      {

        roles.value[i]={ title: response.data[i].role_name, value: response.data[i].id }
      }
      console.log(roles.value, 'res')

    })


}

watch(router, fetchProjectData, { immediate: true })
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      lg="12"
    >
      <UserBioPanel
        :roles="roles"
        :user-data="userData" />
    </VCol>


  </VRow>
</template>

<route lang="yaml">
meta:
 layout: default_admin
 action: read
 subject: admins_edit
</route>
