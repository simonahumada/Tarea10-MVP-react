import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Inventory from '../pages/inventory'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/inventory' element={<Inventory />} />            
        {/*Route path='/toBuy' element={<Lista/>} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
