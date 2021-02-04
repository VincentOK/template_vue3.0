import request from '@/untils/request';
const api = require('@/setting.js')
/**
 * 首页广告栏
 * @param {}} params
 */
export function advertisementList() {
    return request({
        url: api.baseUrl + "/parameter/query",
        method: "GET",
    })
}
