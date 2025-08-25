<template>
      <header>
        <img src="../assets/logo_header.jpg" alt="Logo Circular UB">
        <h1>Universidad de Belgrano</h1>

        <div style="margin-left:auto" class="logoutButton">
          <router-link to ="/">
            <button>Cerrar sesión <i class='bx bxs-door-open'  ></i> </button>
          </router-link>
        </div>
    </header>

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

.logoutButton button{
  display: flex;
  align-items: center;
  gap: 3px;
}

.logoutButton a{
  text-decoration: none; /*para borrar la linea azul de hipervinculo*/
}

header {
  background-color: #6f1515; /* rojo UB */
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
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
