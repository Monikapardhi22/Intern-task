import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import { Route, Routes,Navigate } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
    </div>
  )
}
