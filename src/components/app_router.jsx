import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Lista from '../pages/lista'
import Inventory from '../pages/inventory'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopping-list' element={<Lista />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
