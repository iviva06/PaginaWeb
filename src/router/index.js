<<<<<<< HEAD
// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Usa alias @ (recomendado) o rutas relativas ../
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import AppLayout from "@/components/AppLayout.vue";

// ✅ Lazy imports con alias @
const MostrarCursos = () => import("@/components/MostrarCursos.vue");
const MostrarCursosSuperAdmin = () => import("@/components/MostrarCursosSuperAdmin.vue");
const AgregarEstudiante = () => import("@/components/AgregarEstudiante.vue");
const AgregarCurso = () => import("@/components/AgregarCurso.vue");
const HomePrincipal = () => import("@/components/HomePrincipal.vue");
=======
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import SideBar from '../components/SideBar.vue'
import HomePrincipal from '../components/HomePrincipal.vue'
import AgregarEstudiante from '../components/AgregarEstudiante.vue'
import AgregarCurso from '../components/AgregarCurso.vue'
import MostrarCursos from '@/components/MostrarCursos.vue'
import MostrarCursosAdmin from '@/components/MostrarCursosAdmin.vue'
>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/app",
    component: AppLayout,
    children: [
      { path: "homeprincipal", name: "HomePrincipal", component: HomePrincipal },
      { path: "mostrarcursos", name: "MostrarCursos", component: MostrarCursos },
      { path: "agregarestudiante", name: "AgregarEstudiante", component: AgregarEstudiante },
      { path: "agregarcurso", name: "AgregarCurso", component: AgregarCurso },
      {
        path: "mostrarcursosSuperAdmin",
        name: "MostrarCursosSuperAdmin",
        component: MostrarCursosSuperAdmin,
      },
      { path: "", redirect: { name: "MostrarCursos" } },
    ],
  },
<<<<<<< HEAD
  { path: "/:pathMatch(.*)*", redirect: "/" },
];
=======
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: SideBar
  },
  {
    path: '/homeprincipal',
    name: 'HomePrincipal',
    component: HomePrincipal
  },
  {
    path: '/agregarestudiante',
    name: 'AgregarEstudiante',
    component: AgregarEstudiante
  },
  {
    path: '/agregarcurso',
    name: 'AgregarCurso',
    component: AgregarCurso
  },
  {
    path: '/mostrarcursos',
    name: 'MostrarCursos',
    component: MostrarCursos
  },
  {
    path: '/mostrarcursosadmin',
    name: 'MostrarCursosAdmin',
    component: MostrarCursosAdmin
  }
]
>>>>>>> 1b55e7d4545a0845c3a86da6b04ccb339b01e597

export default createRouter({ history: createWebHistory(), routes });
