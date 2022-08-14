import {ActionType} from '@/typeing/storeActionType';
import {TagsType, TagsStateType} from '@/typeing/tags';

export default {
    namespaced: true,
    state: {
        tagsView: []
    },
    mutations: {
        add(state: TagsStateType, tag: TagsType) {
            const index = state.tagsView.findIndex(item => item.path === tag.path);
            if (-1 === index) {
                state.tagsView.push(tag);
            }

        },
        deleteTag(state: TagsStateType, index: number) {
            state.tagsView.splice(index, 1);
        }
    },
    actions: {
        addTag({commit}: ActionType, tag: TagsType) {
            commit('add', tag);
        }
    }
};
