<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container-animation-register">
    <div class="register">
      <div class="header">
        <img src="../assets/logo_circulo.jpg" alt="Logo" />
        <h1>Registro de usuario</h1>
      </div>
      <form @submit.prevent="submitForm" novalidate>
        <div class="name">
          <label for="name">Nombre: </label>
          <input type="text" v-model="userEntityDTO.name" placeholder="Ingrese su nombre" id="name" name="name"
            required /><br />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div class="dni">
          <label for="dni">DNI: </label>
          <input type="text" id="dni" name="dni" v-model="userEntityDTO.dni" maxlength="8" @input="dniOnly"
            placeholder="Ingrese su DNI" required /><br />
          <span v-if="errors.dni" class="error">{{ errors.dni }}</span>
        </div>

        <div class="email">
          <label for="email">Email: </label>
          <input type="email" v-model="userEntityDTO.email" placeholder="Ingrese su email" id="email" name="email"
            required /><br />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <div class="password">
          <label for="password">Contraseña: </label>
          <input type="password" v-model="userEntityDTO.password" placeholder="Ingrese su contraseña" id="password"
            name="password" required /><br />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

        <div class="accessCode">
          <label for="accessCode">Código de acceso: </label>
          <input type="text" v-model="userEntityDTO.accessCode" id="accessCode" name="accessCode"
            placeholder="Ingrese el código de acceso" required /><br />
          <span v-if="errors.accessCode" class="error">{{ errors.accessCode }}</span>
        </div>

        <div class="buttons">
          <button type="submit">Registrarse</button>
          <router-link to="/">
            <button type="button">Cancelar</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAutenticacionStore } from "@/stores/autenticacionStore";
import { storeToRefs } from "pinia";

const router = useRouter();
const authenticationStore = useAutenticacionStore();
const { userEntityDTO } = storeToRefs(authenticationStore);

const errors = reactive({
  name: "",
  email: "",
  dni: "",
  password: "",
  // CAMBIO APLICADO: Agregar 'role' al objeto errors
  role: "",
  accessCode: "",
});

const dniOnly = (e) => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 8);
  userEntityDTO.value.dni = e.target.value;
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const submitForm = () => {
  Object.keys(errors).forEach(key => errors[key] = "");

  let isValid = true;


  if (!userEntityDTO.value.name) {
    errors.name = "El nombre es obligatorio.";
    isValid = false;
  }


  if (!userEntityDTO.value.dni) {
    errors.dni = "El DNI es obligatorio.";
    isValid = false;
  } else if (!/^\d{8}$/.test(userEntityDTO.value.dni)) {
    errors.dni = "El DNI debe tener exactamente 8 números.";
    isValid = false;
  }


  if (!userEntityDTO.value.email) {
    errors.email = "El email es obligatorio.";
    isValid = false;
  } else if (!validateEmail(userEntityDTO.value.email)) {
    errors.email = "Ingrese un correo válido.";
    isValid = false;
  }


  if (!userEntityDTO.value.password) {
    errors.password = "La contraseña es obligatoria.";
    isValid = false;
  }

  if (!userEntityDTO.value.accessCode) {
    errors.accessCode = "El código de acceso es obligatorio.";
    isValid = false;
  }


  if (!isValid) {
    return;
  }


  if (authenticationStore.register()) {
    router.push("/login");
  }
};
</script>


<style scoped>
.container-animation-register {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--color-text);
  background-color: #890f16;
  background-image:
    radial-gradient(transparent 0.6em, #890f16 0.6em),
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

.register .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
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
  color: black;
}

.register form .email {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .accessCode {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .role {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .password {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .dni {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .accessID {
  padding: 10px;
  font-size: x-large;
  color: black;
}

.register form .name {
  padding: 10px;
  font-size: x-large;
  color: black;
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

.error {
  color: red;
  font-size: 0.9em;
  display: block;
  margin-top: 5px;
}

select {
  padding: 10px;
  font-size: clamp(1rem, 0.7vw + 0.9rem, 1.25rem);
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 100%;
}

.registro-container {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family: 'Georgia', serif;
}

.registro-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
