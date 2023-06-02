import React from 'react'
import {useNavigate} from 'react-router-dom'

import projNavStyle from './index.module.css'

// 引入redux所需：
import { useAppSelector} from '../../../store/hooks'

export default function ProjNav() {
  const navigate = useNavigate()
  const {userName,projName} = useAppSelector((state=>state.projDetail))

  return (
    <div className={projNavStyle.out}>
      <div className={projNavStyle.heart}>
        <div className={projNavStyle.top}>
          <div onClick={()=>{navigate({pathname:'/user'},{state:{username:userName}})}}
            className={projNavStyle.username }>{userName}</div>
          <div> / </div>
          <div className={projNavStyle.projname}>{projName}</div>
        </div>
        <div className={projNavStyle.nav}>
          <div><i className={projNavStyle.iconCode}>&#xe60c;</i>Code</div>
          <div><i className={projNavStyle.iconIssues}>&#xe764;</i>Issues</div>
          <div><i className={projNavStyle.iconPull}>&#xe99d;</i>Pull requests</div>
          <div><i className={projNavStyle.iconAction}>&#xec61;</i>Actions</div>
          <div><i className={projNavStyle.iconProj}>&#xe63f;</i>Projects</div>
          <div><i className={projNavStyle.iconSecurity}>&#xe88c;</i>Security</div>
          <div><i className={projNavStyle.iconInsights}>&#xec66;</i>Insights</div>
        </div>
      </div>
    </div>
  )
}
