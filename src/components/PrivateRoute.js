import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  let auth = {'token':true}  //ozgartir ture false 
return (
    auth.token ? <Outlet/> : <Navigate to='/signup'/>
  )
}

export default PrivateRoutes