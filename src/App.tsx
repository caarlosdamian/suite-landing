import { useState } from 'react'
import './App.scss'
import { Navbar } from './sections/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
     <Navbar/>
    </main>
  )
}

export default App
