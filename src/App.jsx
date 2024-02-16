import React from 'react'
// import the browser router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
function App() {
 

  return (
    <>
      <div className="App">
       

        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />  
            
            <Route  element={<PrivateRoute />} >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-post" element={<CreatePost/>} />
          </Routes>
          <Footer />
        </BrowserRouter>

        
      </div>
      
    </>
  )
}

export default App
