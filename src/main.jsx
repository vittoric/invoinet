import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeroSection />

    <App />
    

  </React.StrictMode>,
)
