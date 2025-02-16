import CreateAccount from '@/pages/CreateAccount.vue';
import LoginPage from '@/pages/LoginPage.vue';
import MainPage from '@/pages/MainPage.vue';
import PasswordRecovery from '@/pages/PasswordRecovery.vue';
import SearchPage from '@/pages/SearchPage.vue';
import UploadPage from '@/pages/UploadPage.vue';
import ItemDetails from '@/pages/ItemDetails.vue';
import AccountDetails from '@/pages/AccountDetails.vue';
import AccountPermit from '@/pages/AccountPermit.vue';
import {  createRouter, createWebHistory } from 'vue-router'
import {store} from '../store/index';
import axios from 'axios';


const VUE_APP_API_URL = process.env.VUE_APP_API_URL;

const routes = [
    { path: '/', component: MainPage},
    { path: '/upload-item', component: UploadPage},
    { path: '/item-search', component: SearchPage},
    { path: '/login', component: LoginPage},
    { path: '/create-account', component: CreateAccount},
    { path: '/item-details/:id', component: ItemDetails},
    { path: '/password-recovery', component: PasswordRecovery},
    { path: '/item/:id/update', component: UploadPage},
    { path: '/account-details', component: AccountDetails  , meta:{auth:"login"}},
    { path: '/account-permit', component: AccountPermit  , meta:{auth:"super"}}
]
 
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from , next)=>{
  if(to.meta.auth === 'super' ){
    console.log('ddfasdafsd',store)
    const res = await axios.get(`${VUE_APP_API_URL}/api/user/${store.getters.getUserId}`);
    console.log(res.data)
    if(res.data.superAdmin === 'Y'){
      next();
    }else{
      alert('접근 권한이 없습니다')
    next('/');
    }
    
    
  }else if(to.meta.auth === 'login'){
    if(store.getters.getUserId || localStorage.getItem('userId')){
      next();
    }else{
      alert('login 후 이용 가능');
      next('/');
    }
  }
  next();
})

export default router;