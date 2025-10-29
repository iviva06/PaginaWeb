<template>
  <div class="tablaUsuariosRegistrados">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(user, index) in listUsers"
            :key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.dni }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";
import { onMounted } from "vue";

const userStore = useUserStore();
const { listUsers } = storeToRefs(userStore);

onMounted(async () => {
  await userStore.fetchUsers();
});

</script>

<style scoped>
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

.tablaUsuariosRegistrados th {
  margin-top: 20px;
  padding: 10px;
  background-color: #6f1515;
  color: rgb(226, 217, 217);
}

.tablaUsuariosRegistrados td {
  margin-top: 20px;
  padding: 10px;
  max-width: 800px;
  background-color: #dbabab;
  justify-content: center;
}

.tablaUsuariosRegistrados img {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0 5px;
  gap: 20px;
}

.tablaUsuariosRegistrados button {
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

.tablaUsuariosRegistrados {
  width: 100%;
  overflow-x: auto;
  color: black;
}

.tablaUsuariosRegistrados table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  min-width: 600px;
}

.tablaUsuariosRegistrados th,
.tablaUsuariosRegistrados td {
  padding: 10px;
  text-align: center;
  white-space: nowrap;
}

.tablaUsuariosRegistrados th {
  background-color: #6f1515;
  color: #e2d9d9;
  position: sticky;
  top: 0;
}

.tablaUsuariosRegistrados td {
  background-color: #dbabab;
}

@media (max-width: 480px) {
  .tablaUsuariosRegistrados table {
    min-width: 0;
  }

  .tablaUsuariosRegistrados thead {
    display: none;
  }

  .tablaUsuariosRegistrados tbody tr {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
    padding: 8px;
  }

  .tablaUsuariosRegistrados td {
    display: flex;
    justify-content: space-between;
    white-space: normal;
    background-color: transparent;
    padding: 6px 4px;
  }

  .tablaUsuariosRegistrados td::before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: 8px;
  }
}

.tablaUsuariosRegistrados table {
  border-collapse: collapse;
  width: 100%;
}

.tablaUsuariosRegistrados th:not(:last-child),
.tablaUsuariosRegistrados td:not(:last-child) {
  border-right: 1px solid rgba(0, 0, 0, 0.15);
}

.tablaUsuariosRegistrados tr+tr td {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.tablaUsuariosRegistrados th,
.tablaUsuariosRegistrados td {
  text-align: center;
  padding: 10px;
}

@media (max-width: 480px) {

  .tablaUsuariosRegistrados th,
  .tablaUsuariosRegistrados td {
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
