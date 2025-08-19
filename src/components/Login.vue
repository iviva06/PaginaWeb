<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <img src="/src/assets/logo_login.jpg" alt="logo_login" />
    <form>
      <div class="user">
        <label for="user">Username: </label>
        <input type="text" id="user" name="user" required /><br />
      </div>
      <div class="password">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" required /><br />
      </div>
      <button type="submit">Login</button>
      <button type="sign in">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  // You can add data, methods, and other component options here
};
</script>

<style scoped>
/* Scoped styles ensure that the CSS only applies to this component vhvhvmjngv*/
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

.login button {
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
  background-color: #890f16;
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
