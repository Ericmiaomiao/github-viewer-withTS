import React , {useRef}from 'react'
import {useNavigate} from 'react-router-dom'

import { setCookie } from '../../cookie'

import loginStyle from './index.module.css'

export default function Login() {
  let navigate = useNavigate()
  let usernameref = useRef(null)
  let passwordref = useRef(null)

  // 点击登录后，存token，跳转用户界面
  let sign =()=>{
    if(!usernameref.current.value){
      alert('请输入用户名')
      return
    }
    // 利用Cookie模拟存入token，保存时间为1天
    setCookie('token',usernameref.current.value,1)
    // 路由跳转至用户界面
    navigate({pathname:'/user'})
  }
  return (
    <div className={loginStyle.out}>
      <div className={loginStyle.loginOut}>
        <div className={loginStyle.logo}>
          <i className={loginStyle.iconlogo}>&#xe644;</i>
        </div>
        <div>登录 Github Viewer</div>
        <div className={loginStyle.inputOut}>
          <div className={loginStyle.text}>用户名</div>
          <div className={loginStyle.input}>
            <input ref={usernameref}/>
          </div>
          <div className={loginStyle.text}>密码</div>
          <div className={loginStyle.input}>
            <input type="password" ref={passwordref}/>
          </div>
          <div className={loginStyle.loginButton} onClick={sign}>Sign in</div>
        </div>
      </div>
    </div>
  )
}
