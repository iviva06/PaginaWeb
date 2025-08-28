import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import SideBar from '../components/SideBar.vue'
import HomePrincipal from '../components/HomePrincipal.vue'
import AgregarEstudiante from '../components/AgregarEstudiante.vue'
import AgregarCurso from '../components/AgregarCurso.vue'
import MostrarCursos from '@/components/MostrarCursos.vue'
import MostrarCursosAdmin from '@/components/MostrarCursosAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
