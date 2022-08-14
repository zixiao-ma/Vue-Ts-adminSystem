import {Commit} from 'vuex';

/**
 * @interface userStoreType
 * store.user模块的state接口模型
 */
interface PermissionRequest {
    actionList: Array<string>,
    menuList: Array<object>
}

interface userStoreType extends PermissionRequest {
    token: string,
    userInfo: loginResponse,
}

/**
 * @interface userActionType
 * store.user.actions的形参接口模型
 */
interface userActionType {
    commit: Commit;
    state: userStoreType;
}

/**
 * @interface loginResponse
 * 调用登录API后台返回的response数据模型
 */
interface loginResponse {
    deptId: Array<string>;
    role: number;
    roleList: Array<string>;
    state: number;
    token: string;
    userEmail: string;
    userId: number;
    userName: string;
    _id: string;
}

/**
 * @interface loginType
 * 用户登录表单接口模型
 */
interface loginType {
    userName: string;
    userPwd: string;
}


export {
    userStoreType,
    userActionType,
    loginType,
    loginResponse,
    PermissionRequest
};
