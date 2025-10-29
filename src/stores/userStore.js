import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    listUsers: []
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://ubelgrano.diegodev.net/api/v1/users',
          { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}`}}
        );
        const data = response.data;

        if(data) {
          this.listUsers = data;
        }
        console.log("Usuarios obtenidos:", this.listUsers);
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
      }
    }
  },
})
