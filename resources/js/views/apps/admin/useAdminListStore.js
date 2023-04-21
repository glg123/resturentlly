import { defineStore } from 'pinia'
import axios from '@axios'
import {useThemeConfig} from "@core/composable/useThemeConfig";
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
export const useAdminListStore = defineStore('AdminListStore', {
  actions: {
    fetchFaqs(params) {


      return axios.get('/faqs/list', { params,token })
    },

    // 👉 Fetch users data
    fetchUsers(params) {


      return axios.get('/admins/list', { params,token })
    },
    fetchPlans(params) {


      return axios.get('/plans/list', { params,token })
    },
    fetchRoles(params) {


      return axios.get('/roles/list', { params,token })
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
