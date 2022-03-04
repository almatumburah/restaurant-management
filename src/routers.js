import MainPage from '@/components/MainPage.vue'
import SignUp from '@/components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'MainPage',
        component:MainPage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;