import './App.css'
import react from 'react'
import { Navbar } from '../section/partial/Navbar'
import { Footer } from '../section/partial/Footer'
import { TechStack } from '../section/partial/techStack.jsx'
import { Projects } from '../section/partial/project.jsx'

function App() {

  return (
    <>
      <Navbar />
      <TechStack />
      <Projects />
      <Footer />
    </>
  )
}

export default App
