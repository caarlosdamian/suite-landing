import { useState } from 'react'
import './App.scss'
import { Navbar } from './sections/Navbar/Navbar'
import { Top } from './sections/Top/Top'

function App() {

  return (
    <main className="App">
     <Navbar/>
     <Top/>
    </main>
  )
}

export default App
