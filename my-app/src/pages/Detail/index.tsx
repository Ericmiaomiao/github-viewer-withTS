import React ,{useEffect,useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { getProjContent } from '../../service'
import { getCookie } from '../../cookie'

import Nav from '../../components/Nav'
import ProjDetail from '../../components/ProjDetail'

// 引入redux所需：
import { useAppDispatch} from '../../store/hooks'
import { setProjName, setUserName,setProjContent} from '../../store/reducers/projDetail'

export default function Detail() {

  let navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  // 接收路由传来的参数（projname）
  const params = useParams()

  // 从cookie中获取用户名
  const [username,setusername] = useState<string>(getCookie('token'))
  // 获取项目名
  const projname = useState(params.projname)[0]

  // 将用户名和项目名传入redux的store中
  dispatch(setUserName(params.username))
  dispatch(setProjName(params.projname))

  // 页面鉴权，没有token则返回登录页面
  useEffect(()=>{
    if(getCookie('token')==null){
      alert('请登录')
      navigate('/login')
    }
  },[])
 
  // 发起请求：
  useEffect(()=>{
    // 获得用户项目的内容，由那些文件组成
    getProjContent(username,projname)
    .then((res)=>{
      console.log('getProjContent请求成功',res)
      dispatch(setProjContent(res.data))
    })
    .catch((err)=>{
      console.log('请求失败',err)
    })
  },[])

  return (
    <div>
      <Nav username={[username,setusername]}></Nav>
      <ProjDetail></ProjDetail>
    </div>
  )
}
