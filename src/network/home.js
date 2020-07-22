import {request} from "./request";

//管理整个home的网络请求  所有的home网络请求都放这里
export function getHomeMultiData() {
 return request({
     url: '/home/multidata'
 })
}

export function getHomeGoods(type,page){
    return request({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}