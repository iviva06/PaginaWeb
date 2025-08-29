<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <link rel="stylesheet" href="src\assets\fondo.css" />
  <div class="login">
    <img src="/src/assets/logo_login.jpg" alt="logo_login" />
    <form>
      <div class="user">
        <label for="user">Username: </label>
        <input type="text" placeholder="Ingrese su usuario" id="user" name="user" required /><br />
      </div>
      <div class="password">
        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          id="password"
          name="password"
          required
        /><br />
      </div>
<<<<<<< HEAD

      <div class="buttons">
        <RouterLink class="btn" :to="{ name: 'HomePrincipal' }"><button>Login</button></RouterLink>
        <router-link to="register"><button>Registrarse</button> </router-link>
      </div>
=======
      <router-link to="/homeprincipal">
        <button type="submit">Login</button>
      </router-link>


      <router-link to="/register">
        <button type="sign in">Registrarse</button>
      </router-link>
>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597
    </form>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  // You can add data, methods, and other component options here
};
</script>


<style scoped>
/* Scoped styles ensure that the CSS only applies to this component*/
.login {
  background-color: white;
  text-align: center;
  padding: 1.5rem;
  width: auto;
  max-width: 90vw;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
  font-size: xx-large;
}


.login form .password {
  padding: 10px;
  font-size: xx-large;
}

<<<<<<< HEAD
.buttons button {
=======

.login button {
>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597
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
</style>



