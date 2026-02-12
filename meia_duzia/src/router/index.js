import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '@/views/InicioView.vue'
import LoginView from '@/views/LoginView.vue'
import DescProdutoView from '@/views/DescProdutoView.vue'
import SobreNosView from '@/views/SobreNosView.vue'

const routes = [
  { path: '/', component: InicioView },
  { path: '/login', component: LoginView },
  { path: '/desc_produto', component: DescProdutoView },
  { path: '/sobre_nos', component: SobreNosView}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
})

export default router;
