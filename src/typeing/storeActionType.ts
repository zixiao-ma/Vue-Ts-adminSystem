import {Commit} from 'vuex';
import {userStoreType} from '@/typeing/user';
import {TagsStateType} from './tags';

interface ActionType {
    commit: Commit;
    state?: any;
}

/**
 * @interface storeModelType
 * store的user模块接口模型
 */
interface storeModelType {
    user: userStoreType;
    tagView: TagsStateType;
}

export {ActionType, storeModelType};
