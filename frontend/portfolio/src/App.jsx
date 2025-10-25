import './App.css'
import react from 'react'
import { Navbar } from '../section/partial/Navbar'
import { Footer } from '../section/partial/Footer'
import { TechStack } from '../section/partial/techStack.jsx'

function App() {

  return (
    <>
      <Navbar />
      <TechStack />
      <Footer />
    </>
  )
}

export default App
