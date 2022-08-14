import axios, {AxiosRequestConfig} from 'axios';
import {message} from 'ant-design-vue';
import {loading} from './loading';
import store from '@/store';
import router from '@/router';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 6000
});
// 添加请求拦截器
instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        // TODO 添加token
        loading.start();
        const token = store.getters.token;
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        loading.done();
        //loading.nprogress.done()
        const {
            data: {
                data,
                code,
                msg
            }
        } = response;

        if (code === 200) {
            return data;
        }
        if (code === 500001) {
            store.commit('user/logout');
            message.error('token过期请重新登录！');
            return;
        } else {
            message.error(msg);
        }
        return response;

    },
    function (error) {
        // 对响应错误做点什么
        const msg = error.toString();
        if (msg.includes('NetWork')) {
            message.error('网络错误，请检查您的网络！');
        }
        if (msg.includes('Timeout')) {
            message.error('请求超时，请检查您的网络！');
        }
        const {status} = error.response;
        switch (status) {
            case 401:
                message.error('Token超时,请重新登录！');
                // TODO token过期处理
                /* store.commit('user/loginOut')
                 router.push({name: 'login'})*/
                break;
            case 404:
                message.error('访问接口地址不正确！');
                break;
            case 500:
                message.error('服务器发生错误！');
                break;
            case 503:
                message.error('服务暂时不可用！');
                break;
            case 408:
                message.error('客户端请求超时!');
                break;
        }
        return Promise.reject(error);
    }
);

/**
 * 优化无论post和get都可以使用data进行传参
 * @param options
 */
interface requestOptions {
    url: string,
    method: string,
    params?: object,
    data?: object
}

function request(options: requestOptions) {
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data || {};
    }
    return instance(options);
}

export default request;
