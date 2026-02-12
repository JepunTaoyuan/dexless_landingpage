import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/landingpage/Hero';
import WhyDexless from './components/landingpage/WhyDexless';
import HowItWorks from './components/landingpage/HowItWorks';
import Markets from './components/landingpage/Markets';
import SecurityAndRisk from './components/landingpage/SecurityAndRisk';
import RiskDisclosure from './components/landingpage/RiskDisclosure';
import LandingPageFooter from './components/landingpage/LandingPageFooter';
function App() {

  return (
    <>
      <Hero />
      <WhyDexless />
      <HowItWorks />
      <Markets />
      <SecurityAndRisk />
      <RiskDisclosure />
      <LandingPageFooter />
    </>
  )
}

export default App
