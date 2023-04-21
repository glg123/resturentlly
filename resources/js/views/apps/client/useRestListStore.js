import { defineStore } from 'pinia'
import axios from '@axios'

export const useRestListStore = defineStore('RestListStore', {
  actions: {


    // 👉 fetch single user
    SingleRest(id) {
      return new Promise((resolve, reject) => {
        axios.get(`single/${id}/restaurant`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
