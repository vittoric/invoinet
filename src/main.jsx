import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx';
import LogosComp from './components/LogosComp.jsx';
import ComparisonSection from './components/ComparisonSection';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeroSection />
    <LogosComp />
    <ComparisonSection />
    

  </React.StrictMode>,
)
