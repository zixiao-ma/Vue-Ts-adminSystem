import router from '@/router';
import {RouteRecordRaw} from 'vue-router';
import store from '@/store';
import {message} from 'ant-design-vue';
import {getRouters} from '@/utils/getRouteOptions';


router.beforeEach(async (to, from, next) => {
    const token = store.getters.token;
    if (to.name === 'Login' && token) {
        message.warning('请勿重复登录！');
        if (from.path) {
            return next(from.path);
        } else {
            return next('/');
        }
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
                return next(to.path);
            }
        }
        return next();
    }
    next();
});
