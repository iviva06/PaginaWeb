<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-animation">
    <div class="login">
      <img src="/src/assets/logo_login.jpg" alt="logo_login" />
      <form @submit.prevent="login">
        <div class="user">
          <label for="user">Usuario </label>
          <input
            v-model="usuario"
            type="text"
            placeholder="Ingrese su usuario"
            id="user"
            name="user"
            required
          /><br />
        </div>
        <div class="password">
          <label for="password">Contraseña </label>
          <input
            v-model="password"
            type="password"
            placeholder="Ingrese su contraseña"
            id="password"
            name="password"
            required
          /><br />
        </div>

        <div class="buttons">
          <button class="btn" type="submit" @click="login">Login</button>
          <router-link to="register"><button>Registrarse</button> </router-link>
        </div>
      </form>
    </div>

    <div v-if="mostrarError" class="popup">
      <div class="popup-contenido">
        <span class="cerrar" @click="mostrarError = false">&times;</span>
        <p>Usuario o contraseña incorrectos</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAutenticacionStore } from "@/stores/autenticacionStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";

const autenticacionStore = useAutenticacionStore();
const { usuario, password } = storeToRefs(autenticacionStore);
const router = useRouter();
const mostrarError = ref(false);


const login = async () => {
  await autenticacionStore.iniciarSesion();
  if (autenticacionStore.autenticacion) {
    router.push({ name: "HomePrincipal" });
    console.log("Login exitoso");
  } else {
    mostrarError.value = true;
  }
};
</script>

<style scoped>
.login {
  background-color: white;
  text-align: center;
  padding: 1.5rem;
  width: auto;
  max-width: 90vw;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color : black
}

.container-animation {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--color-text);
  background-color: #890f16;
  background-image: radial-gradient(transparent 0.6em, #890f16 0.6em),
    conic-gradient(at 1em 1em, transparent 270deg, #890f16 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4204 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4205 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4206 270deg);
  background-size: 1em 1em, 4em 4em, 4em 4em, 4em 4em, 4em 4em;
  animation: bpx 20s infinite, bpy 20s -3.75s infinite;
  min-height: 100vh;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: color 0.5s, background-color 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
}
.popup-contenido {
  background: #fff;
  margin: 15% auto;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  z-index: 10000;
  color: black;
}

.cerrar {
  float: right;
  cursor: pointer;
}

@keyframes bpx {
  0%,
  7.5%,
  100% {
    background-position-x: 0, 0em, 1em, 2em, 3em;
  }
  12.5%,
  20% {
    background-position-x: 0, 1em, 0, 3em, 2em;
  }
  25%,
  32.5% {
    background-position-x: 0, -1em, -2em, 5em, 4em;
  }
  37.5%,
  45% {
    background-position-x: 0, -2em, -1em, 4em, 3em;
  }
  50%,
  57.5% {
    background-position-x: 0, -2em, -5em, 5em, 0;
  }
  62.5%,
  70% {
    background-position-x: 0, -3em, -4em, 7em, 6em;
  }
  75%,
  82.5% {
    background-position-x: 0, -2em, -1em, 2em, 5em;
  }
  87.5%,
  95% {
    background-position-x: 0, -3em, 0, 3em, 6em;
  }
}

@keyframes bpy {
  0%,
  7.5%,
  100% {
    background-position-y: 0, 0em, 1em, 2em, 3em;
  }
  12.5%,
  20% {
    background-position-y: 0, 1em, 0, 3em, 2em;
  }
  25%,
  32.5% {
    background-position-y: 0, -1em, -2em, 5em, 4em;
  }
  37.5%,
  45% {
    background-position-y: 0, -2em, -1em, 4em, 3em;
  }
  50%,
  57.5% {
    background-position-y: 0, -2em, -5em, 5em, 0;
  }
  62.5%,
  70% {
    background-position-y: 0, -3em, -4em, 7em, 6em;
  }
  75%,
  82.5% {
    background-position-y: 0, -2em, -1em, 2em, 5em;
  }
  87.5%,
  95% {
    background-position-y: 0, -3em, 0, 3em, 6em;
  }
}

.login img {
  display: block;
  max-width: 80%;
  height: auto;
  margin: 0 auto 0.2rem;
  border-radius: 8px;
}

.login form {
  padding: 2px;
}

.login form input {
  padding: 10px;
  font-size: large;
}

.login form .user {
  padding: 10px;
  font-size:xx-large;
}

.login form .password {
  padding: 10px;
  font-size: xx-large;
}

.buttons button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #890f16;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  margin-right: 1rem;
}

.login button:hover {
  background-color: #6f1515;
}

@media (max-width: 480px) {
  .login {
    padding: 1rem;
    font-size: 0.9rem;
  }

  .login form {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .login {
    width: 95%;
  }
}

.login form {
  grid-template-columns: 150px minmax(250px, 400px);
  column-gap: 16px;
  row-gap: 14px;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  color: black;
  text-align: left;
}
.login form .buttons {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1rem;
}

.login form > div {
  display: contents;
}

.login form label {
  justify-self: end;
  font-weight: 600;
  font-size: 1.1rem;
}

.login form input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  box-sizing: border-box;
}

.login form {

  grid-template-columns: 150px minmax(250px, 400px); 
  column-gap: 16px;
  row-gap: 14px;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  color: black;
  text-align: left;
}
.login form .buttons {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1rem;
}

.login form > div {
  display: contents;
}

.login form label {
  justify-self: end;
  font-weight: 600;
  font-size: 1.1rem;
}

.login form input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  box-sizing: border-box;
}


.login form label {
  font-size: 1.5rem;
}

.login form input {
  font-size: 1.3rem;
  padding: 12px 14px;
}

.buttons {
  margin-top: 16px;
}

</style>
