import React ,{useEffect,useRef}from 'react'

import userInfoStyle from './index.module.css'

// 引入redux所需：
import { useAppSelector} from '../../../store/hooks'

export default function UserInfo() {
  // 获取用户信息
  const userInfo =  useAppSelector(state=>state.user.userInfo)
  
  // 绑定边框和头像的dom节点
  let outRef = useRef<HTMLDivElement>(null)
  let imgRef = useRef<HTMLDivElement>(null)
  
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
      {userInfo&&<div>
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
      </div>}
    </div>
  )
}
