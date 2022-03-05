import MainPage from '@/components/MainPage.vue'
import SignUp from '@/components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'

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
    {
        name:'SignIn',
        component:SignIn,
        path:'/sign-in'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;