<template>
  <link rel="stylesheet" href="src\assets\fondo.css" />
  <div class="register">
    <div class="header">
      <img src="../assets/logo_circulo.jpg" alt="Logo" />
      <h1>Registro de usuario</h1>
    </div>


    <form>
      <div class="name">
        <label for="name">Name: </label>
        <input type="text" v-model="userEntityDTO.name" placeholder="Ingrese su nombre" id="name" name="name" required /><br />
      </div>


      <div class="dni">
        <label for="dni">DNI: </label>
        <input
          type="number"
          placeholder="Ingrese su DNI"
          max="99999999"
          id="dni"
          name="dni"
          v-model="userEntityDTO.dni"
          required
        /><br />
      </div>

      <div class="email">
        <label for="email">Email: </label>
        <input type="email" v-model="userEntityDTO.email" placeholder="Ingrese su email" id="email" name="email" required /><br />
      </div>


      <div class="password">
        <label for="password">Password: </label>
        <input
          type="text"
          placeholder="Ingrese su contraseña"
          id="password"
          name="password"
          v-model="userEntityDTO.password"
          required
        /><br />
      </div>


      <div class="accessID">
        <label for="accessID">Access code: </label>
        <input
          type="text"
          placeholder="Ingrese el código de acceso"
          id="accessID"
          name="accessID"
          v-model="userEntityDTO.accessCode"
          required
        /><br />
      </div>


      <div class="buttons">
        <button @click="register" type="button">Registrarse</button>

        <router-link to="/">
          <button type="sign in">Cancelar</button>
        </router-link>
      </div>
    </form>
  </div>
</template>


<script setup>

import { useAutenticacionStore } from '@/stores/autenticacionStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';


const router = useRouter();
const authenticationStore = useAutenticacionStore();

const { userEntityDTO } = storeToRefs(authenticationStore);

const register = () => {
  if(authenticationStore.register()) {
    router.push('/login')
  }
}

</script>


<style scoped>
/* Scoped styles ensure that the CSS only applies to this component*/
.register .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.register .header img {
  height: 3rem;
  margin-right: 2rem;
}


.register {
  background-color: white;
  padding: 1.5rem;
  width: auto;
  max-width: 90vw;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}


.register form {
  padding: 2px;
}


.register form input {
  padding: 10px;
  font-size: medium;
}


.register form .user {
  padding: 10px;
  font-size: x-large;
}


.register form .password {
  padding: 10px;
  font-size: x-large;
}


.register form .dni {
  padding: 10px;
  font-size: x-large;
}


.register form .accessID {
  padding: 10px;
  font-size: x-large;
}


.register form .name {
  padding: 10px;
  font-size: x-large;
}


.register button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.5reA;
  background-color: #890f16;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  margin-right: 1rem;
}


.register .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.register button:hover {
  background-color: #6f1515;
}


/*Sacar flechitas dni*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 480px) {
  .register {
    padding: 1rem;
    font-size: 0.9rem;
  }


  .register form {
    font-size: 1rem;
  }
}


@media (max-width: 768px) {
  .register {
    width: 100%;
  }
}
</style>



