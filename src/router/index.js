import LoginPage from '@/pages/LoginPage.vue';
import MainPage from '@/pages/MainPage.vue';
import SearchPage from '@/pages/SearchPage.vue';
import UploadPage from '@/pages/UploadPage.vue';
import {  createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: MainPage},
    { path: '/upload-item', component: UploadPage},
    { path: '/item-search', component: SearchPage},
    { path: '/login', component: LoginPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;