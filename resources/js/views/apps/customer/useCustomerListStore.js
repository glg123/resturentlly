import { defineStore } from 'pinia'
import axios from '@axios'
import { useThemeConfig } from "@core/composable/useThemeConfig"

const { isAppRtl } = useThemeConfig()

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


axios.defaults.headers.common['type'] = 'Customer'
axios.defaults.headers.common['role'] = 'customer'
axios.defaults.headers.common['auth'] = 'Bearer ' + token
export const useCustomerListStore = defineStore('CustomerListStore', {
  actions: {


    // 👉 Add User
    addUser(userData) {
      return new Promise((resolve, reject) => {
        axios.post('/apps/users/user', {
          user: userData,
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single user
    getSingleUser() {
      return new Promise((resolve, reject) => {
        axios.get('my/profile',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
