import { useState } from 'react'
import './App.scss'
import { Footer } from './sections/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { Navbar } from './sections/Navbar/Navbar'
import { Top } from './sections/Top/Top'

function App() {

  return (
    <main className="App">
     <Navbar/>
     <Top/>
     <Hero/>
     <Footer/>
    </main>
  )
}

export default App
