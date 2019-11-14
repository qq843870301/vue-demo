import { get, post } from './http'
// 人员请求
export const apiAddress = p => get('personnel', p);