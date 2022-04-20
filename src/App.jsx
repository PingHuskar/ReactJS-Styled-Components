import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/nav'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
