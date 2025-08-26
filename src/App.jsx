import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
