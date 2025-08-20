<template>
  <div id="app">
    <header>
      <img src="@/assets/logo_circulo.jpg" alt="Logo Circular" />
      <h1>Universidad de Belgrano</h1>
    </header>

    <div class="container">
      <aside>
        <button @click="agregarEstudiante">
          <i class='bx bxs-user'></i> Agregar estudiante
        </button>
        <button @click="agregarCurso">
          <i class='bx bxs-book'></i> Agregar un curso
        </button>
        
        <select v-model="cursoSeleccionado">
          <option v-for="curso in cursos" :key="curso">{{ curso }}</option>
        </select>

        <div class="lista">
          <h3>Estudiantes:</h3>
          <ul>
            <li v-for="(estudiante, index) in estudiantes" :key="index">{{ estudiante }}</li>
          </ul>
        </div>
      </aside>

      <main>
        <h2>Bienvenido a la Gestión de Cursos</h2>
        <p>Elija la opción que desee</p>
        <p>Curso seleccionado: <strong>{{ cursoSeleccionado }}</strong></p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelPrincipal",
  data() {
    return {
      cursos: ["Programación", "Matemáticas", "Física"],
      cursoSeleccionado: "Programación",
      estudiantes: []
    };
  },
  methods: {
    agregarEstudiante() {
      const nombre = prompt("Ingrese el nombre del estudiante:");
      if (nombre) {
        this.estudiantes.push(nombre);
      }
    },
    agregarCurso() {
      const nuevoCurso = prompt("Ingrese el nombre del nuevo curso:");
      if (nuevoCurso && !this.cursos.includes(nuevoCurso)) {
        this.cursos.push(nuevoCurso);
        this.cursoSeleccionado = nuevoCurso;
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, #app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #6f1515;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.container {
  display: flex;
  flex: 1;
  min-height: 0;
}

aside {
  background-color: #d3d3d3;
  width: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

.lista h3 {
  margin-top: 10px;
  font-size: 14px;
}

.lista ul {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 14px;
}

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
