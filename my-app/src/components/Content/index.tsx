import React from 'react'

import ContentNav from './ContentNav'
import UserInfo from './UserInfo'
import ProjectInfo from './ProjectInfo'

import ContentStyle from './index.module.css'

export default function Content() {
  return (
    <div>
      {/* 导航条 */}
      <ContentNav></ContentNav>
      <div className={ContentStyle.content}>
        {/* 用户信息部分 */}
        <UserInfo></UserInfo>
        {/* 用户的项目列表 */}
        {<ProjectInfo></ProjectInfo>}
      </div>
    </div>
  )
}
