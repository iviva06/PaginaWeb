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
      <button class="addCourseButton"><i class="bx bxs-book"></i> Agregar un curso</button>
      <router-link to="/mostrarcursos">
        <button class="addCourseButton"><i class="bx bxs-book"></i> Mostrar Cursos</button>
      </router-link>
    </aside>
    <main>
      <h1>Agregar un nuevo curso</h1>
      <form>
        <div class="ID">
          <label for="ID">ID </label><br />
          <input
            type="text"
            placeholder="Ingrese el ID del curso"
            id="ID"
            name="ID"
            required
          /><br />
        </div>
        <div class="nombre">
          <label for="nombre">Nombre del curso </label><br />
          <input
            type="text"
            placeholder="Ingrese el nombre del curso"
            id="nombre"
            name="nombre"
            required
          /><br />
        </div>
      </form>
      <div class="saveButton">
        <button type="button" @click="guardar">Guardar</button>
      </div>
      <div v-if="mostrarPopup" class="modal" @click.self="cerrarPopup">
        <div class="modal-content">
          <p>✅ El Curso se guardó correctamente</p>
          <button @click="cerrarPopup">Aceptar</button>
        </div>
      </div>
    </main>
  </div>

  <main class="page-content">
    <slot></slot>
  </main>
</template>

<script setup>
import { ref } from "vue";

const mostrarPopup = ref(false);

function guardar() {
  //  lógica real de guardado (API)
  mostrarPopup.value = true;
  /*
  // autocerrar después de 2 segundos
  setTimeout(() => {
    mostrarPopup.value = false;
  }, 2000);
  */
}

function cerrarPopup() {
  mostrarPopup.value = false;
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

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
  text-decoration: none; /* para borrar la linea azul de hipervinculo */
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
  width: 180px;
  cursor: pointer;
  text-align: left;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  gap: 7px;
  border-radius: 16px;
  font-family: questrial, sans-serif;
}

aside select {
  padding: 10px;
  border: 1px solid #464141;
  background-color: rgba(123, 115, 115, 0.226);
  font-family: questrial, sans-serif;
  border-radius: 16px;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20x;
  font-size: xx-large;
  color: rgb(0, 0, 0);
  font-family: questrial, sans-serif;
  padding: 5px;
  font-size: xx-large;
  margin-bottom: 200px;
  line-height: 50px;
}
.saveButton button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #890f16; /* normal */
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  margin-right: 1rem;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.saveButton button:hover {
  background-color: #6f1515; /* distinto al normal */
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

form input {
  padding: 10px;
  font-size: xx-large;
  border: 1px solid #000000;
  background-color: rgba(214, 209, 209, 0.315);
  font-family: questrial, sans-serif;
  width: 600px;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: #ffffff;
  padding: 20px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
}

.modal-content button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #890f16; /* normal */
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  margin-right: 1rem;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.modal-content button:hover {
  background-color: #6f1515; /* distinto al normal */
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal-content p {
  font-size: 22px;
}
</style>
