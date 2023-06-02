import React from 'react'

import ProjNav from './ProjNav'
import ProjContent from './ProjContent'
import ProjInfo from './ProjInfo'

import projDetailstyle from './index.module.css'

export default function ProjDetail() {
  return (
    <div>
      <ProjNav></ProjNav>
      <div className={projDetailstyle.heart}>
        <ProjContent></ProjContent>
        <ProjInfo></ProjInfo>
      </div>  
    </div>
  )
}
