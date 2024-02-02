import React from 'react'
// import the browser router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/SignIn'
import Signup from './pages/SsignUp'

function App() {
 

  return (
    <>
      <div className="App">
       

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />  
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>

        
      </div>
      
    </>
  )
}

export default App
