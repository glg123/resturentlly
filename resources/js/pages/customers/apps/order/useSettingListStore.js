import { defineStore } from 'pinia'
import axios from '@axios'
import { useThemeConfig } from "@core/composable/useThemeConfig"
const { isAppRtl } = useThemeConfig()


export const useSettingListStore = defineStore('SettingListStore', {
  actions: {


    // 👉 Fetch users data
    myOrders(params) {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['type'] = 'Customer'
      axios.defaults.headers.common['role'] = 'customer'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }

      return axios.get('/my/orders', { params,token })
    },

    getSingleOrder(id) {
      let token = localStorage.getItem('accessToken')
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['type'] = 'Customer'
      axios.defaults.headers.common['role'] = 'customer'
      axios.defaults.headers.common['auth'] = 'Bearer ' + token
      if(isAppRtl.value===true)
      {
        axios.defaults.headers.common['Language'] = 'ar'
      }
      else
      {
        axios.defaults.headers.common['Language'] = 'en'
      }
      return new Promise((resolve, reject) => {
        axios.get('customer/single/'+id+'/order',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
