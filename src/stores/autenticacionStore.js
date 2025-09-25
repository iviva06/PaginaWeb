
import axios from "axios";
import { defineStore } from "pinia";

export const useAutenticacionStore = defineStore("autenticacion", {
  state: () => ({
    usuario: null,
    password: null,
    token: null,
    autenticacion: false,
  }),
  actions: {
    async iniciarSesion() {
      console.log("Iniciando sesión con:", this.usuario, this.password);

      try {
        const response = await axios.post('http://34.176.250.35:8080/system/api/login', {
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
  },
});

