import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/signin',
            name: 'SignIn',
            component: Login
        },
        // {
        //     path: '/signup',
        //     name: 'SignUp',
        //     component: SignUp
        // },
        {
            path: '',
            name: 'Home',
            component: Home,
            meta: {requiresAuth: false},
        },
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next('/signin')
    } else {
        next()
    }
})

export default router