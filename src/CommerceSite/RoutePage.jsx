import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import DetailPage from './DetailPage'
import AboutUs from './AboutUs'
import ContactPage from './ContactPage'


export default function RoutePage() {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='details'
                    element={<DetailPage />}
                />
                <Route
                    path='about us'
                    element={<AboutUs/>}
                />
                <Route
                    path='contact'
                    element={<ContactPage />}
                />
            </Routes>
        </div>
    )
}
