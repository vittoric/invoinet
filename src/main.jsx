import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx';
import LogosComp from './components/LogosComp.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeroSection />
    <LogosComp />
    

  </React.StrictMode>,
)
