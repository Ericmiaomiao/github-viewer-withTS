import React ,{useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'

import { getUserInfo,getUserProj } from '../../service'
import { getCookie } from '../../cookie'

import Nav from '../../components/Nav'
import Content from '../../components/Content'

// 引入redux容器组件所需：
import {connect} from 'react-redux'
import {setUserinfo,setUserproj} from '../../store/actions/actions'

function User(props:any) {
  let navigate = useNavigate()

  // 初始化贡献者名 从cookie中获取
  let [username,setusername]:[string,any] = useState(getCookie('token'))

  // 页面鉴权，如果没有token跳转到登录页面
  useEffect(()=>{
    if(getCookie('token')==null){
      alert('请登录')
      navigate('/login')
    }
  },[])

  // 请求api返回数据：  
  useEffect(()=>{
    // 获取用户信息：
    getUserInfo(username)
    .then((res)=>{
      console.log('getUserInfo请求成功',res)
      props.setUserinfo(res.data)
    })
    .catch((err)=>{
      console.log('getUserInfo请求失败',err)
      alert('未找到该用户')
    })

    // 获得用户所有的项目
    getUserProj(username)
    .then((res)=>{
      console.log('getUserProj请求成功',res)
      props.setUserproj(res.data)
    })
    .catch((err)=>{
      console.log('getUserProj请求失败',err)
    })
  },[username])

  return (
    <div>
      {/* 用户界面导航条 */}
      <Nav username={[username,setusername]}></Nav>
      {/* 用户界面的内容 */}
      <Content></Content>
    </div>
  )
}

// 构建容器组件：
const mapStateToProps = (state:any)=>{
  return{
    ...state.user
  }
}
export default connect(
  mapStateToProps,
  {setUserinfo,setUserproj}
)(User)
