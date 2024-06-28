import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx';
import LogosComp from './components/LogosComp.jsx';
import ComparisonSection from './components/ComparisonSection';
import CardsSection from './components/CardsSection';
import SupportSection from './components/SupportSection';
import VisibilitySection from './components/VisibilitySection';
import RpaSection from './components/RpaSection.jsx';
import TrustSection from './components/TrustSection';
import ProcessSection from './components/ProcessSection';
import PlanSection from './components/PlanSection';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import UseCase from './components/UseCase.jsx';
import Footer from './components/Footer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <HeroSection />
    <LogosComp />
    <ComparisonSection />
    <CardsSection />
    <SupportSection />
    <VisibilitySection />
    <RpaSection />
    <TrustSection />
    <ProcessSection />
    <PlanSection />
    <TestimonialsSection />
    <UseCase />
    <Footer />


  </React.StrictMode>,
)
