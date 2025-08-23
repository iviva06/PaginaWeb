import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import SideBar from '../components/SideBar.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
