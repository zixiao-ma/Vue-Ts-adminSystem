import {storeModelType} from '@/typeing/storeActionType';

export const getters = {
    token: (state: storeModelType) => state.user.token,
    userInfo: (state: storeModelType) => state.user.userInfo,
    hasPermission: (state: storeModelType) => JSON.stringify(state.user.actionList) === '[]',
    menuList: (state: storeModelType) => state.user.menuList,
    tags: (state: storeModelType) => state.tagView.tagsView
};
