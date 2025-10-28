<template>
  <select v-model="cursoSeleccionado" @change="clickCurso(cursoSeleccionado)">
    <option disabled value="">Seleccioná un curso</option>
    <option v-for="curso in cursos" :key="curso.id" :value="curso">
      {{ curso.name }}
    </option>
  </select>

  <main v-if="cursoSeleccionado">
    <div class="infoCurso">
      <div class="infoCursoText">
        <h2>Curso: {{ cursoSeleccionado.name }}</h2>
        <p>ID del curso: {{ cursoSeleccionado.id }}</p>
      </div>
    </div>

    <div class="tablaEstudiantesCurso">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Semestre</th>
            <th>Promedio</th>
            <th>Edición</th>
          </tr>
        </thead>
        <tbody v-if="countStudents">
          <tr v-for="(estudiante, index) in estudiantes" :key="index">
            <td>{{ estudiante.name }}</td>
            <td>{{ estudiante.lastName }}</td>
            <td>{{ estudiante.dni }}</td>
            <td>{{ estudiante.numSemester }}</td>
            <td>{{ estudiante.average }}</td>
            <td>
              <button @click="editarEstudiante(index, estudiante.id)">
                <img src="../assets/editar-texto-_2_.ico" alt="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="mostrarEdicionEstudiante" class="modal">
      <div class="modal-content">
        <h3>Editar estudiante</h3>

        <div class="input-group">
          <label for="name">Nombre</label>
          <input id="name" v-model="courseStore.estudianteActualizado.name" placeholder="Nombre" class="input-modal"
            required />
        </div>

        <div class="input-group">
          <label for="lastName">Apellido</label>
          <input id="lastName" v-model="courseStore.estudianteActualizado.lastName" placeholder="Apellido"
            class="input-modal" required />
        </div>

        <div class="input-group">
          <label for="dni">DNI</label>
          <input id="dni" type="text" v-model="courseStore.estudianteActualizado.dni" placeholder="DNI"
            class="input-modal" maxlength="8" @keypress="
              ($event) => {
                if (
                  !/[0-9]/.test($event.key) &&
                  $event.key.length === 1
                ) {
                  $event.preventDefault();
                }
              }
            " required />
        </div>

        <div class="input-group">
          <label for="numSemester">Semestre</label>
          <input id="numSemester" type="number" v-model.number="courseStore.estudianteActualizado.numSemester"
            placeholder="Semestre" class="input-modal" required />
        </div>

        <div class="input-group">
          <label for="nota">Agregar nota</label>
          <div style="display: flex; gap: 8px;">
            <input id="nota" type="number" step="0.1" placeholder="Nota" class="input-modal"
              v-model.number="nuevaNota" />
            <button @click="agregarNota" class="guardar">➕</button>
          </div>
        </div>

        <div v-if="courseStore.estudianteActualizado.notas?.length">
          <p>Notas actuales:</p>
          <ul>
            <li v-for="(nota, i) in courseStore.estudianteActualizado.notas" :key="i">
              {{ nota }}
              <button @click="eliminarNota(i)" class="cancelar" style="margin-left: 8px;">❌</button>
            </li>
          </ul>
        </div>

        <div class="modal-buttons">
          <button class="guardar" @click="guardarCambiosEstudiante">✅ Guardar cambios</button>
          <button class="cancelar" @click="cerrarEdicionEstudiante">❌ Cancelar</button>
        </div>
      </div>
    </div>


    <div v-if="mostrarResultado" class="modal">
      <div class="modal-content">
        <h3 :style="{ color: tipoResultado === 'success' ? '#28a745' : '#d9534f' }">
          {{ tituloResultado }}
        </h3>
        <p>{{ mensajeResultado }}</p>

        <div class="modal-buttons">
          <button :class="tipoResultado === 'success' ? 'guardar' : 'eliminar'" @click="cerrarModalResultado">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useCourseStore } from "@/stores/courseStore";

const courseStore = useCourseStore();
const cursos = computed(() => courseStore.courseList);
const cursoSeleccionado = ref();

const mostrarEdicion = ref(false);
const nombreEditado = ref("");


const clickCurso = (cursoSeleccionado) => {
  console.log(courseStore.courseList.length);
  courseStore.courseList.forEach((course) => {
    console.log(course.id, cursoSeleccionado.id);
    if (course.id === cursoSeleccionado.id) {
      if (course.students.length === 0) {
        console.log("El curso no tiene estudiantes asignados.");
        estudiantes.value = [];
      }
      console.log("Curso encontrado:", course);
      estudiantes.value = course.students;
    }
  });
};

onMounted(async () => {
  await courseStore.fetchCourses();
});

const estudiantes = ref([]);
const countStudents = computed(
  () => Array.isArray(estudiantes.value) && estudiantes.value.length > 0
);

const mostrarEdicionEstudiante = ref(false);
const estudianteEditado = ref({});

const mostrarResultado = ref(false);
const tituloResultado = ref("");
const mensajeResultado = ref("");
const tipoResultado = ref("");

const mostrarModalResultado = (tipo, titulo, mensaje) => {
  tituloResultado.value = titulo;
  mensajeResultado.value = mensaje;
  tipoResultado.value = tipo;
  mostrarResultado.value = true;
};

const cerrarModalResultado = () => {
  if (tipoResultado.value === 'success') {
    if (mostrarEdicionEstudiante.value) {
      cerrarEdicionEstudiante();
    }
    if (mostrarEdicion.value) {
      cerrarEdicion();
    }
  }

  mostrarResultado.value = false;
  tituloResultado.value = "";
  mensajeResultado.value = "";
  tipoResultado.value = "";
};

const editarEstudiante = (index, id) => {
  courseStore.estudianteActualizado.name = estudiantes.value[index].name;
  courseStore.estudianteActualizado.lastName = estudiantes.value[index].lastName;
  courseStore.estudianteActualizado.dni = String(estudiantes.value[index].dni);
  courseStore.estudianteActualizado.numSemester = Number(estudiantes.value[index].numSemester);
  courseStore.estudianteActualizado.average = estudiantes.value[index].average;
  courseStore.estudianteActualizado.notas = estudiantes.value[index].notas || [];
  calcularPromedio();
  mostrarEdicionEstudiante.value = true;
  courseStore.setIdEstudiante(id);
};


const validarCamposEstudiante = () => {
  const estudiante = courseStore.estudianteActualizado;
  if (
    !estudiante.name ||
    !estudiante.lastName ||
    !estudiante.dni ||
    !estudiante.numSemester ||
    estudiante.name.trim() === "" ||
    estudiante.lastName.trim() === "" ||
    !String(estudiante.dni).trim() ||
    !String(estudiante.numSemester).trim()
  ) {
    mostrarModalResultado(
      "error",
      "Error de Validación",
      "Todos los campos (Nombre, Apellido, DNI y Semestre) son obligatorios."
    );
    return false;
  }

  if (
    isNaN(Number(estudiante.dni)) ||
    isNaN(Number(estudiante.numSemester)) ||
    Number(estudiante.dni) <= 0 ||
    Number(estudiante.numSemester) <= 0
  ) {
    mostrarModalResultado(
      "error",
      "Error de Validación",
      "DNI y Semestre deben ser números válidos y mayores a cero."
    );
    return false;
  }
  return true;
};


const guardarCambiosEstudiante = async () => {
  if (!validarCamposEstudiante()) {
    return;
  }

  const dniNumerico = Number(courseStore.estudianteActualizado.dni);
  courseStore.estudianteActualizado.dni = dniNumerico;

  await courseStore.updateStudent();

  if (courseStore.isUpdated) {

    mostrarModalResultado(
      "success",
      "¡Éxito!",
      "Los datos del estudiante se han guardado correctamente."
    );
  } else {
    mostrarModalResultado("error", "Error", "Hubo un error al actualizar el estudiante.");
  }
};


const cerrarEdicionEstudiante = () => {
  mostrarEdicionEstudiante.value = false;
  estudianteEditado.value = {};
};


const cerrarEdicion = () => {
  mostrarEdicion.value = false;
  nombreEditado.value = "";
  courseStore.cursoActualizado.id = null;
};

const nuevaNota = ref(null);

const agregarNota = () => {
  if (!courseStore.estudianteActualizado.notas) {
    courseStore.estudianteActualizado.notas = [];
  }
  if (typeof nuevaNota.value === 'number') {
    courseStore.estudianteActualizado.notas.push(nuevaNota.value);
    calcularPromedio();
    nuevaNota.value = null;
  } else if (nuevaNota.value !== null) {
    mostrarModalResultado("error", "Error de Nota", "La nota debe ser un valor numérico.");
  }
};

const eliminarNota = (index) => {
  courseStore.estudianteActualizado.notas.splice(index, 1);
  calcularPromedio();
};

const calcularPromedio = () => {
  const notas = courseStore.estudianteActualizado.notas;
  if (notas && notas.length > 0) {
    const suma = notas.reduce((acc, n) => acc + n, 0);
    courseStore.estudianteActualizado.average = parseFloat((suma / notas.length).toFixed(2));
  } else {
    courseStore.estudianteActualizado.average = 0;
  }
};

</script>

<style>
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

select {
  padding: 10px;
  font-size: clamp(1rem, 0.7vw + 0.9rem, 1.25rem);
  border-radius: 12px;
  border: 1px solid #ccc;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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

  align-items: start;
  margin-bottom: 20px;
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
  display: flex;
  flex-direction: row;
  justify-items: end;
  margin-bottom: 30px;
}

.infoCursoButton {
  align-self: end;
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

.tablaEstudiantesCurso tr+tr td {
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
  font-family: "Questrial", sans-serif;
}

.modal-buttons .eliminar {
  background: #6f1515;
  color: rgb(255, 255, 255);
  font-weight: lighter;
  font-family: "Questrial", sans-serif;
}

.modal-buttons .cancelar {
  background: #6f1515;
  color: white;
  font-weight: lighter;
  font-family: "Questrial", sans-serif;
}

.input-group label {
  font-weight: 200;
  font-size: medium;
  margin-right: 1rem;
  font-family: "Questrial", sans-serif;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: "Questrial", sans-serif;
}
</style>
