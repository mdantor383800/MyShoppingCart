import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BillForm from '../component/BillForm'
import ProductPage from '../Artoftesting/ProductPage'

export default function RoutesPage() {
  return (

    <Routes>
      <Route
        path='/'
        element={<ProductPage />}
      />

      <Route
        path='/billform'
        element={<BillForm />}
      />

      <Route
      path='/checkout'
      element={<ProductPage/>}
      />
  
  </Routes>

  )
}
