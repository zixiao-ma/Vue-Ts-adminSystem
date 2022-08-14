import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Login from '@/views/login/index.vue';
import HomeLayout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: HomeLayout,
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                component: () => import('../views/welcome/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'none',
                    key: 'shouye'
                }
            }
        ],
        meta: {
            title: '首页'
        },
        redirect: '/welcome'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
