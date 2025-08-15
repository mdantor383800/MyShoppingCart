import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import BillForm from '../component/BillForm'
import ProductPage from '../Artoftesting/ProductPage'
import Login from '../Auth/LoginFrom';
import LogOutPage from '../Auth/LogOutPage';
import {useAuth} from '../Auth/AuthProvider'


function PrivateRoute({children}) {
  const { user } = useAuth();
  return user ? children: <Navigate to = '/Login' />;
}

export default function RoutesPage() {
  return (
    
    <Routes>
        <Route
        path='/login'
        element = {<Login/>}
        />
        <Route
          path='/'
          element={
          <PrivateRoute>
              <ProductPage />
          </PrivateRoute>
          }
        />
         <Route
            path="/productpage"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
  />

        <Route
          path='/billform'
          element={<BillForm />}
        />
         <Route path="*" element={<Navigate to="/" />} />
    </Routes>
 
  )
}
