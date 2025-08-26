<template>
      <header>
        <img src="../assets/logo_header.jpg" alt="Logo Circular UB">
        <h1>Universidad de Belgrano</h1>

        <div style="margin-left:auto" class="logoutButton">
          <router-link to ="/modificacioncurso">
            <button>Cerrar sesión <i class='bx bxs-door-open'  ></i> </button>
            <!-- CAMBIAR DSP RUTA!!!! -->
          </router-link>
        </div>
    </header>

  <div class="sidebar">
    <aside>
      <div class="asideButtons" style="text-decoration: none ">
        <router-link to ="/agregarestudiante" style="text-decoration: none ">
          <button><i class='bx bxs-user'></i> Agregar estudiante</button>
        </router-link>

        <router-link to ="/agregarcurso" style="text-decoration: none ">
          <button><i class='bx bxs-book'></i> Agregar un curso</button>
        </router-link>
      </div>
      
      <select>
        <option>Programación</option>
        <option>Matemáticas</option>
        <option>Física</option>
      </select>
    </aside>
    <main>
      <h2>Bienvenido a la Gestión de Cursos</h2>
      <p>Elija la opción que desee</p>
    </main>
  </div>


  <main class="page-content">
    <slot></slot>
  </main>
</template>

<script setup>
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
  min-height: 100vh;

}

.asideButtons button {
  background-color: #d3d3d3;
  color: black;
  border: 1px solid #aaa;
  padding: 10px;
  width: 180px;
  height: 50px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 7px;
  border-radius: 16px;
  font-family: questrial, sans-serif;
  text-decoration: none;
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
  padding: 20px;
  font-size: xx-large;
  color: lightslategray;
  font-family: questrial, sans-serif;
  }

</style>
