import { createRouter, createWebHistory } from 'vue-router';
import Test from '../pages/test.vue'
import Login from '../pages/login.vue'

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
            name: 'test',
            component: Test,
            meta: {requiresAuth: true},
        }
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