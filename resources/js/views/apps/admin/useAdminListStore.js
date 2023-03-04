import { defineStore } from 'pinia'
import axios from '@axios'

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
export const useAdminListStore = defineStore('AdminListStore', {
  actions: {


    // 👉 Fetch users data
    fetchUsers(params) {


      return axios.get('/admins/list', { params,token })
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
  },
})
