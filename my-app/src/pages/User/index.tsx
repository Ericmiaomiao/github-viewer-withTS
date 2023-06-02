import React ,{useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'

import { getUserInfo,getUserProj } from '../../service'
import { getCookie } from '../../cookie'

import Nav from '../../components/Nav'
import Content from '../../components/Content'

// 引入redux所需：
import { useAppDispatch } from '../../store/hooks'
import { setUserInfo,setUserProj } from '../../store/reducers/user'

export default function User() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // 初始化贡献者名 从cookie中获取
  const [username,setusername] = useState<string>(getCookie('token'))

  // 页面鉴权，如果没有token跳转到登录页面
  useEffect(()=>{
    if(getCookie('token')==null){
      alert('请登录')
      navigate('/login')
    }
  },[navigate])

  // 请求api返回数据：  
  useEffect(()=>{
    // 获取用户信息：
    getUserInfo(username)
    .then((res)=>{
      console.log('getUserInfo请求成功',res)
      // 将用户信息传入redux的store中
      dispatch(setUserInfo(res.data))
    })
    .catch((err)=>{
      console.log('getUserInfo请求失败',err)
      alert('未找到该用户')
    })

    // 获得用户所有的项目
    getUserProj(username)
    .then((res)=>{
      console.log('getUserProj请求成功',res)
      // 将用户项目信息传入redux的store中
      dispatch(setUserProj(res.data))
    })
    .catch((err)=>{
      console.log('getUserProj请求失败',err)
    })
  },[username,dispatch])

  return (
    <div>
      {/* 用户界面导航条 */}
      <Nav username={[username,setusername]}></Nav>
      {/* 用户界面的内容 */}
      <Content></Content>
    </div>
  )
}
