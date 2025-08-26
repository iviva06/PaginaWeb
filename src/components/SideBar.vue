<template>
  <div class="sidebar">
    <aside>
      <button><i class='bx bxs-user'></i> Agregar estudiante</button>
      <button><i class='bx bxs-book'></i> Agregar un curso</button>
      <select>
        <option>Programación</option>
        <option>Matemáticas</option>
        <option>Física</option>
      </select>
    </aside>
  </div>


  <main class="page-content">
    <slot></slot>
  </main>
</template>

<script setup>
</script>

<style scoped>
* {
  box-sizing: border-box;
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
  gap: 15px;
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

</style>
