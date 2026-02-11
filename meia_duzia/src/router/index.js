import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '@/views/InicioView.vue'
import LoginView from '@/views/LoginView.vue'
import DescProdutoView from '@/views/DescProdutoView.vue'

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/desc_produto', name: 'DescProduto', component: DescProdutoView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
})

export default router;
