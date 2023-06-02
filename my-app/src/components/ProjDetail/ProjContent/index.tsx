import React from 'react'

import projContentStyle from './index.module.css'

import { useAppSelector } from '../../../store/hooks'

export default function ProjContent() {

  // 获取用户名和项目内容信息：
  const projContent = useAppSelector((state:any)=>state.projDetail.projContent)
  const username = useAppSelector(state=>state.projDetail.userName)

  return (
    <div className={projContentStyle.out}>
      <div className={projContentStyle.button}>
        <div className={projContentStyle.branch}>
          <i className={projContentStyle.iconmaster}>&#xe607;</i>
          master
        </div>
        <div>
          <i className={projContentStyle.iconmaster}>&#xe607;</i> 
          branch
        </div>
        <div>
          <i className={projContentStyle.iconmaster}>&#xe63d;</i> 
          tags
        </div>
        <div className={projContentStyle.rightButton}>
          <div>Go to file</div> 
          <div>Add file</div> 
          <div><i className={projContentStyle.iconCode}>&#xe60c;</i>Code</div> 
        </div>
      </div>
      <div className={projContentStyle.content}>
        <div className={projContentStyle.contentNav}>
          <div className={projContentStyle.username}>{username}</div>
        </div>
        <div className={projContentStyle.contentFiles}>
          {projContent&&projContent.filter((item)=>{
            if(item.type === 'dir')return true
          }).map((item,index)=>{
            return(
              <div key={index}>
                <i className={projContentStyle.iconfiles}>&#xe6e6;</i>
                <div className={projContentStyle.filename}>{item.name}</div>
                <a className={projContentStyle.html} href={item.html_url}>{item.html_url}</a>
              </div>
            )
          })}
          {projContent&&projContent.filter((item)=>{
            if(item.type === 'file')return true
          }).map((item,index)=>{
            return(
              <div key={index}>
                <i className={projContentStyle.iconfile}>&#xeabf;</i>
                <div className={projContentStyle.filename}>{item.name}</div>
                <a className={projContentStyle.html} href={item.html_url}>{item.html_url}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
