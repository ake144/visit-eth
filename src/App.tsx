// App.jsx
import React from 'react'
import Navbar from '@/components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import AboutUs from './components/about-us'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
