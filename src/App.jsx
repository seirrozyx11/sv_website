import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
// import TechStack from './components/TechStack'
import Prototype from './components/Prototype'
import Download from './components/Download'
import Feedback from './components/Feedback'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  // Animation variants - reduced for comfort
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, amount: 0.2 }
  }

  const slideFromRight = {
    initial: { x: 60, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    viewport: { once: true, amount: 0.2 }
  }

  return (
    <div className="App">
      <Navbar />
      
      {/* 1. Hero - No animation */}
      <Hero />
      
      {/* 2. ProblemSolution - Fade up animation */}
      <motion.div {...fadeInUp}>
        <ProblemSolution />
      </motion.div>
      
      {/* 3. Features - Slides from right */}
      <motion.div {...slideFromRight}>
        <Features />
      </motion.div>
      
      {/* <TechStack /> */}
      
      {/* Prototype - No animation */}
      <Prototype />
      
      {/* 4. Download - Fades up */}
      <motion.div {...fadeInUp}>
        <Download />
      </motion.div>
      
      {/* 5. Feedback - No animation */}
      <Feedback />
      
      {/* Team - No animation */}
      <Team />
      
      {/* 6. Footer - No animation */}
      <Footer />
    </div>
  )
}

export default App
