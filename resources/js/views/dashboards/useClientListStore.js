import { defineStore } from 'pinia'
import axios from '@axios'
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()


export const useClientListStore = defineStore('ClientListStore', {
  actions: {
    getSingleUser() {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }


      axios.defaults.headers.common['type'] = 'User'
      axios.defaults.headers.common['role'] = 'user'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      return new Promise((resolve, reject) => {
        axios.get('/client/my/profile',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
    getMyBranches() {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }


      axios.defaults.headers.common['type'] = 'User'
      axios.defaults.headers.common['role'] = 'user'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      return new Promise((resolve, reject) => {
        axios.get('/client/my/manager/branches',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
    getMyPlan() {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }


      axios.defaults.headers.common['type'] = 'User'
      axios.defaults.headers.common['role'] = 'user'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      return new Promise((resolve, reject) => {
        axios.get('/client/my/plan',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
    getSingleStaff() {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }


      axios.defaults.headers.common['type'] = 'User'
      axios.defaults.headers.common['role'] = 'user'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      return new Promise((resolve, reject) => {
        axios.get('/staff/my/profile',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
