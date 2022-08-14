import router from '@/router';
import {RouteRecordRaw} from 'vue-router';
import store from '@/store';
import {message} from 'ant-design-vue';
import {getRouters} from '@/utils/getRouteOptions';


router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && to.path !== '/') {
        if (to.meta.title) {
            const obj = {
                path: to.path,
                title: to.meta.title,
                key: to.meta.key
            };
            await store.dispatch('tagView/addTag', obj);
        }
    }
    const token = store.getters.token;
    if (to.name === 'Login' && token) {
        console.log(token, 'token');
        message.warning('请勿重复登录！');
        return next('/');
    }
    if (to.name !== 'Login' && !token) {
        return next('/login');
    }
    if (to.name !== 'Login' && token) {
        const isGetPermission = store.getters.hasPermission;
        if (isGetPermission) {
            const res = await store.dispatch('user/getPermission');
            if (res) {
                const data = getRouters(res.menuList);
                data.forEach(route => {
                    router.addRoute('Home', <RouteRecordRaw>route);
                });
            }
            return next(to.path);
        }
        return next();
    }
    next();
});
