<<<<<<< HEAD
<template>
  <main>
    <h2>Bienvenido a la Gestión de Cursos</h2>
    <p>Elija la opción que desee</p>
  </main>
=======


<template>
  <header>
    <img src="../assets/logo_header.jpg" alt="Logo Circular UB" />
    <h1>Universidad de Belgrano</h1>


    <div style="margin-left: auto" class="logoutButton">
      <router-link to="/">
        <button>Cerrar sesión <i class="bx bxs-door-open"></i></button>
      </router-link>
    </div>
  </header>


  <div class="sidebar">
    <aside>
      <router-link to="/agregarestudiante">
        <button><i class="bx bxs-user"></i> Agregar estudiante</button>
      </router-link>
      <router-link to="/agregarcurso">
        <button class="addCourseButton"><i class="bx bxs-book"></i> Agregar un curso</button>
      </router-link>
      <router-link to="/mostrarcursos">
        <button class="addCourseButton"><i class="bx bxs-book"></i> Mostrar Cursos</button>
      </router-link>
    </aside>


    <main>
      <h2>Bienvenido a la Gestión de Cursos</h2>
      <p>Elija la opción que desee</p>
    </main>
  </div>

>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597

  <main class="page-content">
    <slot></slot>
  </main>
</template>

<<<<<<< HEAD
<script setup></script>
=======

<script setup></script>

>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597

<style scoped>
* {
  box-sizing: border-box;
}

<<<<<<< HEAD
=======

header button {
  background-color: #6f1515;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 16px;
  font-family: questrial, sans-serif;
}


.logoutButton button {
  display: flex;
  align-items: center;
  gap: 3px;
}


.logoutButton a {
  text-decoration: none;
}


header {
  background-color: #6f1515; /* rojo UB */
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
}


header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}


.sidebar {
  display: flex;
}
aside {
  background-color: #d3d3d3;
  margin: 0;
  padding: 0;
  width: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;


  height: 100vh;
}


aside button {
  background-color: #d3d3d3;
  color: black;
  border: 1px solid #aaa;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 7px;
  border-radius: 16px;
  font-family: questrial, sans-serif;
  width: 180px;
}


aside select {
  padding: 10px;
  border: 1px solid #464141;
  background-color: rgba(123, 115, 115, 0.226);
  font-family: questrial, sans-serif;
  border-radius: 16px;
}


>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: xx-large;
  color: lightslategray;
  font-family: questrial, sans-serif;
}
</style>




