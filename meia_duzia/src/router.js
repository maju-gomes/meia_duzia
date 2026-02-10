import { createRouter, createWebHistory } from 'vue-router'


import Inicio from '@/views/Inicio.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/login', component: Login },

  {
    path: '/doces',
    children: [
        
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
