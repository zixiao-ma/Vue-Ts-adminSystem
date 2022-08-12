import request from "@/utils/request";
import {loginType} from "@/typeing/user";

export const loginApi =(data:loginType):Promise<object>=>{
    return request({
        method: "POST",
        url:'/users/login',
        data
    })
}
