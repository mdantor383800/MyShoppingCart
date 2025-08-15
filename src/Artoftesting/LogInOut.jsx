import React from 'react'
import { useAuth } from '../Auth/AuthProvider'
import LogOutPage from '../Auth/LogOutPage'
import Login  from '../Auth/LoginFrom'



export default function LogInOut() {
    const {user} = useAuth();

    return user ? <LogOutPage/> : <Login />

}
