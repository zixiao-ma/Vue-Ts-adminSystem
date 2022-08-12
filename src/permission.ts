import router from "@/router";
import store from "@/store";
import {message} from "ant-design-vue";

router.beforeEach((to, from, next) => {
    const token = store.getters.token;
    if (to.name === 'Login' && token) {
        message.warning('请勿重复登录！')
        if (from.path) {
            return next(from.path)
        } else {
            return next('/')
        }
    }
    if (to.name !== 'Login' && !token) {
        return next('/login')
    }
    next()
})
