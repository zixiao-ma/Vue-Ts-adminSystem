import {storeModelType} from "@/typeing/user";

export const getters = {
    token: (state: storeModelType) => state.user.token
}
