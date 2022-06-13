import {createAPI,createFormAPI} from '@/utils/request'

// 查询部门列表
export const list = data => createAPI('/company/department', 'get', data)
// 保存部门
// data  {id：“”，name：“”}
export const save = data => createAPI('/company/department', 'post', data)
// 根据id查询部门 {id：“”}
export const find = data => createAPI(`/company/department/${data.id}`, 'get', data)
// 根据id删除部门 {id:""}
export const deleteById = data => createAPI(`/company/department/${data.id}`, 'delete', data)
// 根据id更新部门 {id:"",name:"",code:""}
export const update = data => createAPI(`/company/department/${data.id}`, 'put', data)
// 保存或更新的方法   如果data.id存在则执行update方法，如果不存在则执行save方法
export const saveOrUpdate = data => { return data.id ? update(data) : save(data) }