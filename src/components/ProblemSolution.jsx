import { FaExclamationTriangle, FaLeaf, FaHeartbeat, FaBolt } from 'react-icons/fa'
import './ProblemSolution.css'

function ProblemSolution() {
  const problems = [
    {
      icon: <FaHeartbeat />,
      title: 'Health Crisis',
      description: 'Sedentary lifestyles leading to obesity and cardiovascular diseases'
    },
    {
      icon: <FaBolt />,
      title: 'Energy Waste',
      description: 'Human kinetic energy lost during exercise'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Motivation Gap',
      description: 'Lack of tangible rewards for fitness activities'
    },
    {
      icon: <FaLeaf />,
      title: 'Limited Access',
      description: 'Limited power outlets in public spaces'
    }
  ]

  const solutions = [
    {
      title: 'Real-Time Tracking',
      description: 'Monitor calories, speed, distance, and power output in real-time'
    },
    {
      title: 'Energy Generation',
      description: 'Convert pedaling into USB power for charging devices'
    },
    {
      title: 'Gamified Fitness',
      description: 'Earn achievements and track measurable impact'
    },
    {
      title: 'Eco-Friendly',
      description: 'Sustainable solution for public spaces like campuses and parks'
    }
  ]

  return (
    <section className="section problem-solution">
      <div className="container">
        {/* Problems */}
        <div className="problem-section">
          <h2 className="section-title">The Problems We Solve</h2>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="divider">
          <div className="arrow-down">↓</div>
          <p>Our Solution</p>
        </div>

        {/* Solutions */}
        <div className="solution-section">
          <div className="solution-hero">
            <h2>SIKADVOLTZ: Where Fitness Meets Sustainability</h2>
            <p className="solution-tagline">
              An integrated system combining fitness tracking with renewable energy generation
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-number">{index + 1}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="solution-cta">
            <a href="#features" className="btn btn-accent">Explore Features</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
