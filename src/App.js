import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homelist from './pages/Homelist'
import { AppContext } from './context/Content'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Menu from './components/Menu'
import Watch from './pages/Watch'

function App() {

  return (
    <AppContext>
      <Router>
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Homelist />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Watch" element={<Watch />}/>
        </Routes>
      </Router>
    </AppContext>
  )
}

export default App
