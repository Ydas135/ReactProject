import { useState } from 'react'
import { Navbar } from '../components/navbar/navbar.jsx'
import '../app/App.css'  
import { Hero } from '../components/hero/hero.jsx'
function App() {

  return ( 
    <main>
    <Navbar />
    <Hero />
    </main>
  )
}

export default App
