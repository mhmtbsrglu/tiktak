import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HeroBanner from './components/HeroBanner/HeroBanner'
import HowWorks from './components/HowWorks/HowWorks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <HeroBanner/>
    <HowWorks />
    </>
  )
}

export default App
