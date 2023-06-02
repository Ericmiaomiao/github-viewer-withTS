import React,{useRef,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import { setCookie } from '../../cookie'

import Navstyle from './index.module.css'
interface IProps {
  username:[string,React.Dispatch<React.SetStateAction<string>>],
}

export default function Nav(props:IProps) {
  let navigate = useNavigate()
  let inputRef = useRef<HTMLInputElement>(null) 
  
  // 初始化用户名
  const [username,setusername] = props.username
  
  // 点击search，更改用户名
  let search=()=>{
    if(!inputRef.current.value){
      alert('请输入用户名')
      return
    }
    let name:string = inputRef.current.value
    setusername(name)
    setCookie('token',name,1)
    navigate({pathname:'/user'})
    window.location.reload() 
  }
  
  // 搜索框value值和用户名绑定
  useEffect(()=>{
    inputRef.current.value = username
  },[username])

  // 点击退出，清除token
  let signOut=()=>{
    setCookie('token','',-1)
    navigate({pathname:'/'})
    window.location.reload() 
  }

  return (
    <div>
      <div className={Navstyle.out}>
        <div className={Navstyle.center}>
          <div className={Navstyle.logo}>
            <i className={Navstyle.iconlogo}>&#xe644;</i>
          </div>
          <div className={Navstyle.menu}>
            Github Viewer
          </div>
          <div className={Navstyle.search}>
            <input ref={inputRef}/>
            <div onClick={search}>Search</div>
          </div>
          <div className={Navstyle.signOut} onClick={signOut}>退出</div>
        </div>
      </div>
    </div>
  )
}
