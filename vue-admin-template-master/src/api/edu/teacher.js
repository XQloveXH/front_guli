import request from '@/utils/request'

export default {
  /**
  * 分页查询--有条件
  * */
  choosePage(current,size,teacherQuery){
    return request({
      url: `/edu/teacher/choosepage/${current}/${size}`,
      method: 'post',
      data: teacherQuery
    })
  },
  // 通过ID删除讲师
  deleteById(id){
    return request({
      url: `/edu/teacher/${id}`,
      method: 'delete', 
    })
  },
  //添加讲师
  add(teacher){
    return request({
      url: `/edu/teacher/add`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id查询讲师
  selectById(id){
    return request({
      url: `/edu/teacher/${id}`,
      method: 'get'
    })
  },
  // 根据id修改讲师
  updateById(teacher){
    return request({
      url: `/edu/teacher`,
      method: 'put',
      data: teacher
    })
  }
}