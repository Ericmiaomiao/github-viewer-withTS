import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import dayjs from 'dayjs'

import Paging from './Paging'

import ProjectStyle from './index.module.css'

// 引入redux所需：
import { sortByShare,sortByStar } from '../../../store/reducers/user'
import { useAppDispatch } from '../../../store/hooks'

export default function ProjectInfo() {
  const dispatch = useAppDispatch()

  // 按分享排序
  const sort1 =(el)=>{
    changeButtonStyle(el)
    dispatch(sortByShare())
  }
  // 按收藏排序
  const sort2 =(el)=>{
    changeButtonStyle(el)
    dispatch(sortByStar())
  }

  // 排序按钮样式切换
  let [lastbutton,setLastbutton] = useState(null);
  let changeButtonStyle=(el)=>{
    if(lastbutton)lastbutton.className = `${ProjectStyle.sortbutton}`
    el.target.className = `${ProjectStyle.sortbutton} ${ProjectStyle.onbutton}`
    setLastbutton(el.target)
  }

  // 初始化分页数组容器
  const [pagecontainer,setpagecontainer]= useState<any[]>(null)

  return (
    <div className={ProjectStyle.out}>
      <div className={ProjectStyle.topButton}>
        {/* 分页按钮： */}
        <Paging pagecontainer={[pagecontainer,setpagecontainer]}></Paging>
        排序：
        <div className={ProjectStyle.sortbutton} onClick={sort1}>分享量</div>
        <div className={ProjectStyle.sortbutton} onClick={sort2}>收藏量</div>
      </div>
      <div className={ProjectStyle.topLine}></div>
      
      {/* 列表渲染： */}
      {pagecontainer&&pagecontainer.map((item)=>{
        return(
          <div key={item.id} className={ProjectStyle.proj}>    
            <Link to={`/detail/${item.owner.login}/${item.name}`}>
            <div className={ProjectStyle.name}>{item.name}</div>
            </Link>
            <div className={ProjectStyle.description}>{item.description}</div>
            <div className={ProjectStyle.topics}>
              {item.topics.map((el,index)=>{return <div key={index}>{el}</div>})}
            </div>
            <div className={ProjectStyle.otherInfo}>
              <div><i className={ProjectStyle.iconcollect}>&#xe621;</i>{item.stargazers_count} </div>
              <div> <i className={ProjectStyle.iconshare}>&#xe654;</i>{item.forks_count}</div>
              <div> Updated on {dayjs(item.updated_at).format('YYYY-MM-DD')}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}