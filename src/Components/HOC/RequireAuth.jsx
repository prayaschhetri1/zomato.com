import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const RequireAuth = ({children}) => {
const location = useLocation()
    const {isAuth} = useContext(AuthContext)

if(!isAuth){
    return <Navigate to="/login" state={{from:location}} replace />
}

  return children;
}

export default RequireAuth