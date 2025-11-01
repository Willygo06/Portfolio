import './App.css'
import react from 'react'
import { Navbar } from '../section/partial/Navbar'
import { Footer } from '../section/partial/Footer'
import { TechStack } from '../section/partial/techStack.jsx'
import { Projects } from '../section/partial/project.jsx'
import { Contact } from '../section/partial/contact.jsx'
import { Hero } from '../section/partial/hero.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
