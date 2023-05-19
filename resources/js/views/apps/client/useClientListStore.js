import { defineStore } from 'pinia'
import axios from '@axios'
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()
let token = localStorage.getItem('accessToken')
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
export const useClientListStore = defineStore('ClientListStore', {
  actions: {


    // 👉 fetch single user
    SingleClient(id) {
      return new Promise((resolve, reject) => {
        axios.get(`single/${id}/client`,{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
