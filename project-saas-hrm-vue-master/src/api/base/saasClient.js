// 这里是框架为我们封装好的，我们只需要引用就好了
import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/company', 'get', data)
export const detail = data => createAPI(`company/${data.id}`, 'get', data)
  