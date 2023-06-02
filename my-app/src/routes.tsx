import React from 'react'
import {Route, Routes,Navigate} from 'react-router-dom';

import User from './pages/User'
import Login from './pages/Login'
import Detail from './pages/Detail'
import { getCookie } from './cookie';

export default function routes(props:any) {
  let token = getCookie('token')
  return (
    <div>
      <Routes>
        <Route path="/" element={token?<Navigate to='/user'></Navigate>:<Navigate to='/login'></Navigate>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/detail/:username/:projname" element={<Detail/>} />
      </Routes>
    </div>
  )
} 
