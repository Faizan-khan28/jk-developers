import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Clients from './components/Client'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Clients/>
    </div>
  )
}

export default App