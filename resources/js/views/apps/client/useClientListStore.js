import { defineStore } from 'pinia'
import axios from '@axios'

export const useClientListStore = defineStore('ClientListStore', {
  actions: {


    // 👉 fetch single user
    SingleClient(id) {
      return new Promise((resolve, reject) => {
        axios.get(`single/${id}/client`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
