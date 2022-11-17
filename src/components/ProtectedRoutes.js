import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = {'token':  localStorage.getItem("admin_access_token")  }
    let user = {'type' : localStorage.getItem("role")}
  return (
    (auth.token && user.type === 'admin')  ? <Outlet/> : <Navigate to='/adminlogin'/>
  )
}

export default ProtectedRoutes