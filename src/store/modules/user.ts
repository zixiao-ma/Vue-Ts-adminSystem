import {loginApi} from '@/api/login';
import {userStoreType, userActionType, loginType, loginResponse, PermissionRequest} from '@/typeing/user';
import {LStorage} from '@/utils/storage';
import {ADMIN_TOKEN_KEY, ADMIN_USERINFO_KEY} from '@/utils/PublicVariables';
import {PermissionApi} from '@/api/permission';
import router from '@/router';
import {message} from 'ant-design-vue';

export default {
    namespaced: true,
    state: {
        token: LStorage.get(ADMIN_TOKEN_KEY) || '',
        userInfo: LStorage.get(ADMIN_USERINFO_KEY) || {},
        actionList: [],
        menuList: []
    },
    mutations: {
        setUserInfo(state: userStoreType, res: loginResponse) {
            state.token = res.token;
            state.userInfo = res;
            LStorage.set(ADMIN_TOKEN_KEY, state.token);
            LStorage.set(ADMIN_USERINFO_KEY, state.userInfo);
        },
        setPermission(state: userStoreType, params: PermissionRequest) {
            state.actionList = params.actionList;
            state.menuList = params.menuList;
        },
        logout(state: userStoreType) {
            state.token = '';
            LStorage.delete(ADMIN_TOKEN_KEY);
            LStorage.delete(ADMIN_USERINFO_KEY);
            router.push({name: 'Login'});
        }
    },
    actions: {
        async login({commit}: userActionType, loginModel: loginType) {
            const res = await loginApi(loginModel);
            await commit('setUserInfo', res);
            return res;
        },
        async getPermission({commit}: userActionType) {
            const response = await PermissionApi();
            await commit('setPermission', response);
            return response;
        }
    }
};
