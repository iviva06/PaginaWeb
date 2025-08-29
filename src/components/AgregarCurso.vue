<template>
  <main>
    <h1>Agregar un nuevo curso</h1>
    <form>
      <div class="ID">
        <label for="ID">ID </label><br />
        <input type="text" placeholder="Ingrese el ID del curso" id="ID" name="ID" required /><br />
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
