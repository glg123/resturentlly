import { defineStore } from 'pinia'
import axios from '@axios'
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()
export const useRestListStore = defineStore('RestListStore', {
  actions: {


    // 👉 fetch single user
    SingleRest(id) {
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
      axios.defaults.headers.common['type'] = 'Admin'
      axios.defaults.headers.common['role'] = 'Admin'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      return new Promise((resolve, reject) => {
        axios.get(`single/${id}/restaurant`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
