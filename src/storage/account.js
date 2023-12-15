import { defineStore } from 'pinia'
import axios from 'axios'

export const useAccountStore = defineStore('account', {
  state: () => ({
    isLoggedin: false,
    user: {
      mem_email: '',
      mem_password: '',
      mem_id: null
    }
  }),
  actions: {
    async signInEmail() {
      await axios.get(`${import.meta.env.VITE_API}/login`)
    },
  }
})
