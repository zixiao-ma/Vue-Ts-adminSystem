import {Commit} from "vuex";

interface ActionType {
    commit: Commit
    state?: any
}

export {ActionType}
