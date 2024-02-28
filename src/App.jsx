import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Welcome from './components/Welcome'
import DisplayContent from './components/DisplayContent'
import Multiple from './components/Multiple'

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Welcome />} />
        <Route path='/:param' element={<DisplayContent />} />
        <Route path='/:word/:textColor/:bgColor' element={<Multiple />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
