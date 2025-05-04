import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Information from '../components/Information/Information'
import Operators from '../components/operators/Operators'
import Codes from '../components/codes/Codes'

const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/info' element={<Information/>}/>
            <Route path='/operator' element={<Operators/>}/>
            <Route path='/code' element={<Codes/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp