import React ,{useEffect,useRef}from 'react'

import userInfoStyle from './index.module.css'

// 引入redux容器组件所需：
import {connect} from 'react-redux'
import {setUserinfo,setUserproj} from '../../../store/actions/actions'

function UserInfo(props:any) {

  // 获取用户信息
  const userInfo =  props.userInfo

  let outRef = useRef(null)
  let imgRef = useRef(null)
  
  // 监听左侧用户信息栏控制不动
  useEffect(()=>{
    window.onscroll = ()=>{
      let top = outRef.current.getBoundingClientRect().top
      let windowTop = document.documentElement.scrollTop
      if(top<0){
        outRef.current.style.position = 'fixed'
        outRef.current.style.top = '0'

        imgRef.current.style.width = '200px'
        imgRef.current.style.height = '200px'
      }else if(windowTop<140) {
        outRef.current.style.position = 'absolute'

        imgRef.current.style.width = '300px'
        imgRef.current.style.height = '300px'
      }
    }
    return ()=>{
      window.onscroll=null;
    }
  },[])

  return (
    <div className={userInfoStyle.out} ref={outRef}>
      <div className={userInfoStyle.headimg} style={{backgroundImage:`url(${userInfo.avatar_url})`}} ref={imgRef}></div>
      <div className={userInfoStyle.name}>{userInfo.name}</div>
      <div className={userInfoStyle.login}>{userInfo.login}</div>
      <div className={userInfoStyle.followButton}>Follow</div>
      <div className={userInfoStyle.bio}>{userInfo.bio}</div>
      <div className={userInfoStyle.follow}>
        <div className={userInfoStyle.followers}>
          <i className={userInfoStyle.iconpeaple}>&#xe60f;</i>
          {userInfo.followers} <span>followers ·</span></div>
        <div className={userInfoStyle.following}>{userInfo.following} <span>following</span></div>
      </div>
      <div className={userInfoStyle.otherInfo}>
        {userInfo.company&&<div><i className={userInfoStyle.iconcompany}>&#xe679;</i>公司：{userInfo.company}</div>}
        {userInfo.location&&<div><i className={userInfoStyle.iconwhere}>&#xe65f;</i>地址：{userInfo.location}</div>}
        {userInfo.blog&&<div><i className={userInfoStyle.iconhref}>&#xe620;</i>博客：{userInfo.blog}</div>}
      </div>
    </div>
  )
}

// 构建容器组件：
const mapStateToProps = (state:any)=>{
  return{
    ...state.user
  }
}
const fn:(props:any)=>any=connect(
  mapStateToProps,
  {setUserinfo,setUserproj}
)(UserInfo)

export default fn
