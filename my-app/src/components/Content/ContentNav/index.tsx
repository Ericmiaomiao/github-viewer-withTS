import React from 'react'

import contentNavstlye from './index.module.css'

export default function ContentNav() {

  return (
    <div className={contentNavstlye.out}>
      <div className={contentNavstlye.nav}>
        <div><i className={contentNavstlye.iconbook1}>&#xe61c;</i>Overview</div>
        <div><i className={contentNavstlye.iconbook2}>&#xe628;</i>Repositories</div>
        <div><i className={contentNavstlye.iconproj}>&#xe63f;</i>Projects</div>
        <div><i className={contentNavstlye.iconscquare}>&#xe627;</i>Packages</div>
        <div><i className={contentNavstlye.iconstar}>&#xe621;</i>Stars</div>
      </div>
    </div>
  )
}
