import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '@/views/Inicio/InicioView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import SobreNosView from '@/views/SobreNosView.vue'
import OuvidoriaView from '@/views/OuvidoriaView.vue'
import DescricaoDoce from '@/views/DescricaoDoce/DescricaoDoce.vue'

import doces from '@/assets/docinhos'

let docesChildren = []

for (const doce of doces) {
  docesChildren.push( {
    path: doce.url,
    component: DescricaoDoce,
    props: { doce }
  } )
}

const routes = [
  { path: '/', component: InicioView },
  { path: '/login', component: LoginView },
  { path: '/sobre-nos', component: SobreNosView},
  { path: '/ouvidoria', component: OuvidoriaView },
  { path: '/doces', children: docesChildren }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
})

export default router;
