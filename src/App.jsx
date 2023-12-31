import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CartProvider } from './components/CartContext'

function App() {


  return (
    <div className="App">
      <CartProvider>
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </Router>
      </CartProvider>
    </div>
  )
}

export default App
