import axios from "axios";
import { defineStore } from "pinia";

export const useAutenticacionStore = defineStore("autenticacion", {
  state: () => ({
    usuario: null,
    password: null,
    token: null,
    autenticacion: false,
    userEntityDTO: {
      name: '',
      email: '',
      password: '',
      dni: null,
      accessCode: ''
    },
  }),
  actions: {
    async iniciarSesion() {
      console.log("Iniciando sesión con:", this.usuario, this.password);

      try {
        const response = await axios.post('https://ubelgrano.diegodev.net/api/login', {
          email: this.usuario,
          password: this.password,
        } )

        const data = response.data;
        if (data && data.token) {
          this.token = data.token;
          sessionStorage.setItem('token', this.token);
          this.autenticacion = true;
          console.log(this.token);
        }

      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    },
    cerrarSesion() {
      this.usuario = null;
      this.token = null;
    },
    async register() {
      try {
        const response = await axios.post('https://ubelgrano.diegodev.net/api/v1/users', 
          this.userEntityDTO
        );

        const data = response.data
        if(data) {
          console.log(data);
          return true;
        }
      } catch(error) {
        console.log(error)
        if(error.response.status === 500) {
          console.log("-> Error del servidor: ", error.response.status);
          return false;
        }
      }
    }
  },
});