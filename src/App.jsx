import { useState } from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Footer />
    </div>
  )
}

export default App
