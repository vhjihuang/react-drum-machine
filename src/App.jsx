import { useState } from 'react'
import './App.css'
import DrumMachine from './components/DrumMachine'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DrumMachine />
    </>
  )
}

export default App
