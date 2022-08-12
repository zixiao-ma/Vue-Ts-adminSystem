import {loginApi} from "@/api/login";
import {userStoreType, userActionType, loginType, loginResponse} from "@/typeing/user";
import {LStorage} from "@/utils/storage";
import {ADMIN_TOKEN_KEY, ADMIN_USERINFO_KEY} from "@/utils/PublicVariables";

export default {
    namespaced: true,
    state: {
        token: LStorage.get(ADMIN_TOKEN_KEY) || '',
        userInfo: LStorage.get(ADMIN_USERINFO_KEY) || {}
    },
    mutations: {
        setUserInfo(state: userStoreType, res: loginResponse) {
            state.token = res.token
            state.userInfo = res
            LStorage.set(ADMIN_TOKEN_KEY, state.token)
            LStorage.set(ADMIN_USERINFO_KEY, state.userInfo)
        }
    },
    actions: {
        async login({commit}: userActionType, loginModel: loginType) {
            const res = await loginApi(loginModel)
            console.log(res)
            commit('setUserInfo', res)
            return res
        }
    }
}
