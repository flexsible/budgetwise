import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Team from '../components/Team'
import AboutUs from '../components/AboutUs'
import HowItWorks from '../components/HowItWorks'
import Testimoni from '../components/Testimoni'

const HomePage = () => {
  return (
    <>
      <LandingPage/>
      <AboutUs/>
      <HowItWorks/>
      <Team/>
      <Testimoni/>
      <Footer/>
    </>
  )
}

export default HomePage
