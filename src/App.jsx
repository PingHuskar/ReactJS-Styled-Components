import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/nav'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
