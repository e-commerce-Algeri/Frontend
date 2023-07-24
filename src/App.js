import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// pages
import Home from './pages/home/home.jsx';
import AboutUs from './pages/about-us/About-us.jsx'
import ContactUs from './pages/contact-us/Contact-us.jsx';
import Products from './pages/products/products.jsx';
import Brands from './pages/brands/brands.jsx';

// components
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/brands' element={<Brands/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
