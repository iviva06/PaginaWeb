<template>
  <head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </head>
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
      <div class="asideButtons" style="text-decoration: none">
        <router-link to="/agregarestudiante">
          <button><i class="bx bxs-user"></i> Agregar estudiante</button>
        </router-link>
        <router-link to="/agregarcurso">
          <button class="addCourseButton"><i class="bx bxs-book"></i> Agregar un curso</button>
        </router-link>
      </div>


      <!-- v-model vincula la variable cursoSeleccionado -->
      <select v-model="cursoSeleccionado">
        <option disabled value="">Seleccioná un curso</option>
        <option>Programación</option>
        <option>Matemáticas</option>
        <option>Física</option>
      </select>
    </aside>


    <main>
      <div class="infoCurso">
        <div class="infoCursoText">
          <h2>Curso: {{ cursoSeleccionado }}</h2>
          <p>ID del curso:</p>
        </div>
        <div class="infoCursoButton">
          <button>Editar curso</button>
        </div>
      </div>


      <div class="tablaEstudiantesCurso">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Turno</th>
              <th>Promedio</th>
              <th>Edición</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan</td>
              <td>Pérez</td>
              <td>12345678</td>
              <td>Mañana</td>
              <td>8.5</td>
              <td>
                <button>
                  <img src="../assets/editar-texto-_2_.ico" alt="" />
                </button>
                <button>
                  <img src="../assets/eliminar.ico" alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>


<script setup>
import { ref } from "vue";


// variable reactiva vinculada al <select>
const cursoSeleccionado = ref("");
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/*---------Header---------*/


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


/*---------Sidebar---------*/


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
  min-height: 100vh;
}


.asideButtons button {
  background-color: #d3d3d3;
  color: black;
  border: 1px solid #aaa;
  padding: 10px;
  width: 180px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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


/*
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: xx-large;
  color: rgb(0, 0, 0);
  font-family: questrial, sans-serif;
  max-width: fit-content;
}
*/


main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #000;
  font-family: questrial, sans-serif;
  max-width: 100%; /* <= antes decía fit-content, eso limitaba */
  min-width: 0; /* evita overflow por hijos anchos (tabla) */
  font-size: clamp(1rem, 0.7vw + 0.9rem, 1.25rem); /* tipografía fluida */
}


.tablaEstudiantesCurso th {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  width: auto;
  background-color: #6f1515;
  color: rgb(226, 217, 217);
}


.tablaEstudiantesCurso td {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: 800px;
  background-color: #dbabab;
  justify-content: center;
}


.tablaEstudiantesCurso img {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0 5px;
  gap: 20px;
}


.tablaEstudiantesCurso button {
  background: none;
  border: none;
  margin: 10px 10px;
}


/*
.infoCurso {
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-bottom: 20px;
  height: 30vh;
}
*/
.infoCurso {
  display: grid;
  grid-template-columns: 1fr auto; /* texto ocupa, botón a la derecha */
  gap: 16px;
  align-items: start; /* 'left' no es válido, usamos start */
  margin-bottom: 20px;
  /* quitamos height fija para que se adapte */
}


/*
.infoCursoText {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-right: 400px;
}
*/
.infoCursoText {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 0; /* quitamos rigidez */
  height: 200px;
}


.infoCursoText h2 {
  font-size: clamp(2rem, 2vw + 1.5rem, 2.5rem);
  line-height: 1.2;
}
.infoCursoText p {
  font-size: clamp(1.5rem, 1.5vw + 1.5rem, 2rem);
}


.infoCursoButton button {
  padding: 10px 16px;
  border-radius: 12px;
  font-size: clamp(0.9rem, 1vw + 0.6rem, 1rem);
  background-color: #890f16;
  color: white;
  border: none;
}


.infoCursoButton button:hover {
  background-color: #6f1515;
}
@media (max-width: 768px) {
  .infoCurso {
    grid-template-columns: 1fr; /* el botón pasa abajo del texto */
  }
  .infoCursoButton {
    justify-self: start;
  }
}


/* --- TABLA RESPONSIVA --- */
.tablaEstudiantesCurso {
  width: 100%;
  overflow-x: auto; /* scroll horizontal si no entra */
}


.tablaEstudiantesCurso table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* reparte el espacio equitativamente */
  min-width: 600px; /* ancho mínimo para que no se achique demasiado */
}


.tablaEstudiantesCurso th,
.tablaEstudiantesCurso td {
  padding: 10px;
  text-align: center; /* centra el contenido */
  white-space: nowrap; /* evita saltos bruscos */
}


.tablaEstudiantesCurso th {
  background-color: #6f1515;
  color: #e2d9d9;
  position: sticky;
  top: 0; /* si hay scroll, la cabecera queda fija */
}


.tablaEstudiantesCurso td {
  background-color: #dbabab;
}


/* --- MODO "TARJETA" para móviles muy chicos (extra) --- */
@media (max-width: 480px) {
  .tablaEstudiantesCurso table {
    min-width: 0; /* ahora podemos “romper” la tabla */
  }
  .tablaEstudiantesCurso thead {
    display: none; /* ocultamos la cabecera */
  }
  .tablaEstudiantesCurso tbody tr {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
    padding: 8px;
  }
  .tablaEstudiantesCurso td {
    display: flex;
    justify-content: space-between;
    white-space: normal; /* ya permitimos salto de línea */
    background-color: transparent;
    padding: 6px 4px;
  }
  .tablaEstudiantesCurso td::before {
    content: attr(data-label); /* etiqueta de la columna */
    font-weight: 600;
    margin-right: 8px;
  }
}


/* Asegura que los bordes se “unan” prolijos */
.tablaEstudiantesCurso table {
  border-collapse: collapse;
  width: 100%;
}


/* Líneas verticales entre columnas (thead y tbody) */
.tablaEstudiantesCurso th:not(:last-child),
.tablaEstudiantesCurso td:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.15);
}


/* (Opcional) Líneas horizontales suaves */
.tablaEstudiantesCurso tr + tr td {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}


/* Centrado del contenido (si lo necesitás) */
.tablaEstudiantesCurso th,
.tablaEstudiantesCurso td {
  text-align: center;
  padding: 10px;
}


/* Si usás “modo tarjeta” en móviles, conviene quitar las líneas verticales */
@media (max-width: 480px) {
  .tablaEstudiantesCurso th,
  .tablaEstudiantesCurso td {
    border-right: none;
    border-top: none;
  }
}
</style>




