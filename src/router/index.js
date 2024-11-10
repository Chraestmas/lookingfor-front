import MainPage from '@/pages/MainPage.vue';
import SearchPage from '@/pages/SearchPage.vue';
import {  createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: MainPage},
    { path: '/search', component: SearchPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;