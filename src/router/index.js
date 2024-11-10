import MainPage from '@/pages/MainPage.vue';
import UploadPage from '@/pages/UploadPage.vue';
import {  createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: MainPage},
    { path: '/upload', component: UploadPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;