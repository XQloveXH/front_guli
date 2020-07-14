import request from '@/utils/request'

export default {

  // 获取所有分类列表
  getSubjectList(){
    return request({
      url: `/eduservice/subject/getdata`,
      method: 'get'
    })
  },
}