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
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      {/* <TechStack /> */}
      <Prototype />
      <Download />
      <Feedback />
      <Team />
      <Footer />
    </div>
  )
}

export default App
