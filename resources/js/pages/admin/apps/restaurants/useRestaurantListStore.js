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
axios.defaults.headers.common['Language'] = 'en'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
export const useRestaurantListStore = defineStore('RestaurantListStore', {
  actions: {


    // 👉 Fetch users data
    fetchRest(params) {


      return axios.get('/restaurants', { params,token })
    },
    fetchStates(params) {


      return axios.get('/states', { params,token })
    },

    fetchCountries(params) {


      return axios.get('/countries', { params,token })
    },



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
    getSingleUser(id) {
      return new Promise((resolve, reject) => {
        axios.get('/admins/'+id+'/get',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
    getSingleRole(id) {
      return new Promise((resolve, reject) => {
        axios.get('/roles/'+id+'/get',{ token }).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
