<template>
  <div v-if="open" class="sb-overlay" @click="$emit('close')" />
  <aside
    class="sidebar"
    :class="[{ 'is-open': open }]"
    role="navigation"
    aria-label="Menú lateral"
    @keydown.esc="$emit('close')"
  >
    <nav class="sidebar__nav">
      <router-link to="/app/agregarestudiante" class="botonesNav">
        <button class="SidebarButton"><i class="bx bxs-user"></i> Agregar estudiante</button>
      </router-link>
      <router-link to="/app/agregarcurso" class="botonesNav">
        <button class="SidebarButton"><i class="bx bxs-book"></i> Agregar un curso</button>
      </router-link>
      <router-link to="/app/mostrarcursos" class="botonesNav">
        <button class="SidebarButton"><i class="bx bxs-book"></i> Mostrar Cursos</button>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
defineProps({ open: { type: Boolean, default: false } });
defineEmits(["close"]);
</script>

<style scoped>
.sb-overlay {
  position: fixed;
  top: 80px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 998;
}

.sidebar {
  position: fixed;
  top: 80px;
  left: 10px;
  bottom: 0;
  background-color: #e9e9e9;

  width: 88%;
  max-width: 180px;
  padding: 0.8rem;

  box-shadow: rgba(0, 0, 0, 0.18) 0 10px 30px;
  transform: translateX(-100%);
  transition: transform 0.24s ease-out;
  z-index: 999;
  overflow-y: auto;
}

.sidebar.is-open {
  transform: translateX(0);
}

.sidebar__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.sidebar__title {
  font: 600 1rem/1.2 Questrial, system-ui, sans-serif;
  margin: 0;
}
.iconbtn {
  border: 0;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
}

.SidebarButton {
  background-color: #d3d3d3;
  color: black;
  border: 1px solid #aaa;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 7px;
  border-radius: 16px;
  font-family: questrial, sans-serif;
  width: 180px;
  text-decoration: none;
}
.botonesNav {
  text-decoration: none;
  color: inherit; /* mantiene el color del texto del padre */
}
.sb-link {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.7rem;
  border-radius: 14px;
  text-decoration: none;
  color: #333;
}
.sb-link:hover {
  background: rgba(0, 0, 0, 0.05);
}
.is-active {
  background: rgba(111, 21, 21, 0.08);
  color: #6f1515;
}
.sb-section__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.55rem 0.7rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}
.sb-section__head:hover {
  background: rgba(0, 0, 0, 0.05);
}
.sb-section__body {
  display: grid;
  gap: 0.15rem;
  padding: 0.25rem 0.35rem 0.35rem 1.9rem;
}
.sb-sublink {
  display: block;
  padding: 0.45rem 0.5rem;
  border-radius: 10px;
  text-decoration: none;
  color: #444;
}
.sb-sublink:hover {
  background: rgba(0, 0, 0, 0.05);
}
.chev {
  transition: transform 0.18s ease;
}
.chev.rot {
  transform: rotate(90deg);
}
.sidebar__extra {
  margin-top: 0.25rem;
  display: grid;
  gap: 0.5rem;
}
select {
  padding: 0.55rem 0.65rem;
  border: 1px solid #464141;
  background: rgba(123, 115, 115, 0.12);
  border-radius: 16px;
  font-family: Questrial, system-ui, sans-serif;
}
</style>
