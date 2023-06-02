import axios from 'axios'

const ajax = axios.create({
  baseURL:'https://api.github.com'
})

// 获取用户的信息
export const getUserInfo =(username)=>{
  return ajax.get(`/users/${username}`)
}

// 获得用户所有的项目
export const getUserProj =(username)=>{
  return ajax.get(`/users/${username}/repos`)
}

// 获得用户项目的内容，由那些文件组成
export const getProjContent =(username,projname)=>{
  return ajax.get(`/repos/${username}/${projname}/contents/`)
}

// 获得用户项目的一些信息，访问量之类的

export const getProjInfo =(username,projname)=>{
  return ajax.get(`/repos/${username}/${projname}`)
}

// 获得用户项目的贡献者
  // avatar_url是头像地址

export const getProjContributor =(username,projname)=>{
  return ajax.get(`/repos/${username}/${projname}/contributors`)
}
