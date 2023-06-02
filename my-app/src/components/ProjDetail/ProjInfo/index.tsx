import React,{useEffect,useState} from 'react'

import { getProjInfo,getProjContributor } from '../../../service'

import projInfoStyle from './index.module.css'

// 引入redux所需：
import { useAppSelector} from '../../../store/hooks'

export default function ProjInfo() {
  // 获取用户名和项目名
  const {userName,projName} = useAppSelector((state=>state.projDetail))
  
  // 初始化项目的信息和贡献者
  const[projinfo,setprojinfo] = useState(null)
  const[projContributor,setprojContributor] = useState(null)

  useEffect(()=>{
    // 获得用户项目的一些信息，访问量之类的
    getProjInfo(userName,projName)
    .then((res)=>{
      console.log('getProjInfo请求成功',res)
      setprojinfo(res.data)
    })
    .catch((err)=>{
      console.log('getProjInfo请求失败',err)
    })

    // 获得用户项目的贡献者
    getProjContributor(userName,projName)
    .then((res)=>{
      console.log('getProjContributor请求成功',res)
      setprojContributor(res.data)
      console.log(projContributor)
    })
    .catch((err)=>{
      console.log('getProjContributor请求失败',err)
    })
  },[])

  return (
    <div className={projInfoStyle.out}>
      {projinfo&&<div>
        <div>About</div>
        <div className={projInfoStyle.description}>
          {projinfo.description}
        </div>
        <a href={projinfo.homepage} className={projInfoStyle.homepage}>
          {projinfo.homepage}
        </a>
        <div className={projInfoStyle.topics}>
          {projinfo&&projinfo.topics.map((item,index)=>{
            return(
              <div key={index}>
                {item}
              </div>
            )
          })}
        </div>
        <div className={projInfoStyle.other}>
          <div><i className={projInfoStyle.iconCode}>&#xe61c;</i>Readme</div>
          <div><i className={projInfoStyle.iconCode}>&#xe6cf;</i>GPL-license</div>
          <div><i className={projInfoStyle.iconCode}>&#xe621;</i><span>{projinfo.stargazers_count} </span> stars</div>
          <div><i className={projInfoStyle.iconCode}>&#xe611;</i><span>{projinfo.subscribers_count} </span> watching</div>
          <div><i className={projInfoStyle.iconCode}>&#xe607;</i><span>{projinfo.forks_count} </span> forks</div>
        </div>
        <div className={projInfoStyle.contributor}>
          <div>Contributors</div>
          <div>
            {projContributor&&projContributor.map((item,index)=>{
              return(
                <div key={index}>
                  <div className={projInfoStyle.contributorImg} style={{backgroundImage:`url(${item.avatar_url})`}}></div>
                  <div>{item.login}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>}
    </div>
  )
}
