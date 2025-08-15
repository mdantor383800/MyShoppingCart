import React from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom';
export default function LogOutPage() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
        navigate('./Login')
    }
  return (
    <div>
        <h2>Welcome, {user.name}</h2>
        <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}
