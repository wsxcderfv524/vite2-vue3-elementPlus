import {createRouter,createWebHistory} from 'vue-router'
import user from './user'


const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('views/login/login.vue')
        },
        user,
    ]
})

export default router