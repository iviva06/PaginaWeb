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
        <option v-for="curso in cursos" :key="curso.id" :value="curso">
          {{ curso.nombre }}
        </option>
      </select>
    </aside>

    <main v-if="cursoSeleccionado">
      <div class="infoCurso">
        <div class="infoCursoText">
          <h2>Curso: {{ cursoSeleccionado.nombre }}</h2>
          <p>ID del curso: {{ cursoSeleccionado.id }}</p>
        </div>
        <div class="infoCursoButton">
          <button @click="abrirEdicion">Editar curso</button>
        </div>
      </div>

      <!-- Modal edición -->
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
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ estudiante.nombre }}</td>
              <td>{{ estudiante.apellido }}</td>
              <td>{{ estudiante.dni }}</td>
              <td>{{ estudiante.turno }}</td>
              <td>{{ estudiante.promedio }}</td>
              <td>
                <button @click="editarEstudiante(index)">
                  <img src="../assets/editar-texto-_2_.ico" alt="Editar" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal edición estudiante -->
      <div v-if="mostrarEdicionEstudiante" class="modal">
        <div class="modal-content">
          <h3>Editar estudiante</h3>
          <input v-model="estudianteEditado.nombre" placeholder="Nombre" class="input-modal" />
          <input v-model="estudianteEditado.apellido" placeholder="Apellido" class="input-modal" />
          <input v-model="estudianteEditado.dni" placeholder="DNI" class="input-modal" />
          <input v-model="estudianteEditado.turno" placeholder="Turno" class="input-modal" />
          <input v-model="estudianteEditado.promedio" type="number" step="0.1" placeholder="Promedio" class="input-modal" />

          <div class="modal-buttons">
            <button class="guardar" @click="guardarCambiosEstudiante">✅ Guardar cambios</button>
            <button class="cancelar" @click="cerrarEdicionEstudiante">❌ Cancelar</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Cursos mock (en el futuro pueden venir del backend)
const cursos = ref([
  { id: 1, nombre: "Programación" },
  { id: 2, nombre: "Matemáticas" },
  { id: 3, nombre: "Física" },
]);

// variable reactiva vinculada al <select>
const cursoSeleccionado = ref("");

// Estado del modal
const mostrarEdicion = ref(false);
const nombreEditado = ref("");

// Abrir modal edición
const abrirEdicion = () => {
  if (cursoSeleccionado.value) {
    nombreEditado.value = cursoSeleccionado.value.nombre;
    mostrarEdicion.value = true;
  }
};

// Lista de estudiantes (mock de ejemplo)
const estudiantes = ref([
  { nombre: "Juan", apellido: "Pérez", dni: "12345678", turno: "Mañana", promedio: 8.5 },
  { nombre: "María", apellido: "Gómez", dni: "87654321", turno: "Tarde", promedio: 7.9 }
]);

// Estado modal estudiante
const mostrarEdicionEstudiante = ref(false);
const estudianteEditado = ref({});
let estudianteIndexEditado = null;

// Editar estudiante
const editarEstudiante = (index) => {
  estudianteEditado.value = { ...estudiantes.value[index] };
  estudianteIndexEditado = index;
  mostrarEdicionEstudiante.value = true;
};

// Guardar cambios estudiante
const guardarCambiosEstudiante = () => {
  estudiantes.value[estudianteIndexEditado] = { ...estudianteEditado.value };
  cerrarEdicionEstudiante();
};

// Cerrar modal estudiante
const cerrarEdicionEstudiante = () => {
  mostrarEdicionEstudiante.value = false;
  estudianteEditado.value = {};
  estudianteIndexEditado = null;
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: questrial, sans-serif;
}

/*---------Header---------*/
header button {
  background-color: #6f1515;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 16px;
  font-family: 'Questrial', sans-serif;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
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

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #000;
  font-family: questrial, sans-serif;
  max-width: 100%;
  min-width: 0;
  font-size: clamp(1rem, 0.7vw + 0.9rem, 1.25rem);
}

.tablaEstudiantesCurso th {
  margin-top: 20px;
  padding: 10px;
  background-color: #6f1515;
  color: rgb(226, 217, 217);
}

.tablaEstudiantesCurso td {
  margin-top: 20px;
  padding: 10px;
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

.infoCurso {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: start;
  margin-bottom: 20px;
}


.infoCursoText {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
    grid-template-columns: 1fr;
  }
  .infoCursoButton {
    justify-self: start;
  }
}

/* --- TABLA RESPONSIVA --- */
.tablaEstudiantesCurso {
  width: 100%;
  overflow-x: auto;
}

.tablaEstudiantesCurso table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  min-width: 600px;
}

.tablaEstudiantesCurso th,
.tablaEstudiantesCurso td {
  padding: 10px;
  text-align: center;
  white-space: nowrap;
}

.tablaEstudiantesCurso th {
  background-color: #6f1515;
  color: #e2d9d9;
  position: sticky;
  top: 0;
}

.tablaEstudiantesCurso td {
  background-color: #dbabab;
}

@media (max-width: 480px) {
  .tablaEstudiantesCurso table {
    min-width: 0;
  }
  .tablaEstudiantesCurso thead {
    display: none;
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
    white-space: normal;
    background-color: transparent;
    padding: 6px 4px;
  }
  .tablaEstudiantesCurso td::before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: 8px;
  }
}

.tablaEstudiantesCurso table {
  border-collapse: collapse;
  width: 100%;
}

.tablaEstudiantesCurso th:not(:last-child),
.tablaEstudiantesCurso td:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.15);
}

.tablaEstudiantesCurso tr + tr td {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.tablaEstudiantesCurso th,
.tablaEstudiantesCurso td {
  text-align: center;
  padding: 10px;
}

@media (max-width: 480px) {
  .tablaEstudiantesCurso th,
  .tablaEstudiantesCurso td {
    border-right: none;
    border-top: none;
  }
}

/* --- Modal básico --- */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  background: white;
  padding: 25px;
  border-radius: 16px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
}
.modal-content h3 {
  margin-bottom: 10px;
}
.input-modal {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
}
.modal-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-buttons button {
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
.modal-buttons .guardar {
  background: #28a745;
  color: white;
  font-family: 'Questrial', sans-serif;

}

.modal-buttons .cancelar {
  background: #d9534f;
  color: white;
  font-family: 'Questrial', sans-serif;
}
</style>
