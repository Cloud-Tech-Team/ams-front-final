import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = {'token': true}
    let user = {'type': 'admin'}
  return (
    (auth.token && user.type === 'admin')  ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoutes