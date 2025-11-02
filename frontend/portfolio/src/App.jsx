import './App.css'
import React, { useState } from 'react'
import { Navbar } from '../section/partial/Navbar.jsx'
import { Footer } from '../section/partial/Footer.jsx'
import { TechStack } from '../section/partial/techStack.jsx'
import { Projects } from '../section/partial/project.jsx'
import { Contact } from '../section/partial/contact.jsx'
import { Hero } from '../section/partial/hero.jsx'
import { IntroAnimation } from '../section/partial/introAnimation.jsx'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App