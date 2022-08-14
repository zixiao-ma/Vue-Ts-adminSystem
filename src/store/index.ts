import {createStore} from 'vuex';
import user from './modules/user';
import {getters} from '@/store/getters';
import tagView from './modules/tags';

export default createStore({
    getters,
    modules: {
        user, tagView
    }
});
