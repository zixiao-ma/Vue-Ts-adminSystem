import {storeModelType} from '@/typeing/user';

export const getters = {
    token: (state: storeModelType) => state.user.token,
    hasPermission: (state: storeModelType) => JSON.stringify(state.user.actionList) === '[]',
    menuList: (state: storeModelType) => state.user.menuList
};
