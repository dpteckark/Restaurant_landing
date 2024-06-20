import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Connect from './components/Connect'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navigation/>
      <Hero/>
      <About/>
      <Work/>
      <Testimonial/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default App