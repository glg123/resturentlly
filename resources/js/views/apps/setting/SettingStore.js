import { defineStore } from 'pinia'
import axios from '@axios'

let token = localStorage.getItem('accessToken')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Language'] = 'ar'
axios.defaults.headers.common['type'] = 'Admin'
axios.defaults.headers.common['auth'] = 'token ' + token
export const useSettingStore = defineStore('SettingStore', {
  actions: {


    // 👉 Fetch users data
    services() {


      return axios.get('/services', { token })
    },

  },
})
