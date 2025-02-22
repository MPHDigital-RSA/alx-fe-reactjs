import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <>
    //   <Navbar />
    //   <Outlet />
    // </>
  )
}

export default App
