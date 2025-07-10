import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import AdminLayout from './Pages/Admin/AdminLayout'

function App() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />

        <Route path='/kuseradmin' element={<AdminLayout/>} >
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
