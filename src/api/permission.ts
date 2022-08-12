import request from '@/utils/request';

export const PermissionApi = (): Promise<object> => {
    return request({
        method: 'GET',
        url: '/users/getPermissionList'
    });
};
