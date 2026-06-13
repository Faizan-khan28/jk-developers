import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Clients from './components/Client'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Clients/>
      <Testimonials/>
    </div>
  )
}

export default App