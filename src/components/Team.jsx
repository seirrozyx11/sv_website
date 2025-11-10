import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: 'Irvs Ebajan',
      role: 'Lead Developer & Hardware Engineer',
      image: 'assets/images/I.jpg',
      description: 'Specializes in IoT systems and full-stack development',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sln32166@gmail.com'
      }
    },
    {
      name: 'Erwin Yambao',
      role: 'UI/UX Designer & Technical Writer',
      image: 'assets/images/E.jpg',
      description: 'Flutter expert, UI/UX designer, and Documentation specialist',
      social: {
        github: '#',
        linkedin: '#',
        email: 'mailto:eruwinsama00@gmail.com'
      }
    },
    {
      name: 'Jessie Gamayo',
      role: 'Hardware Engineer',
      image: 'assets/images/j.jpg',
      description: 'Node.js and database architecture specialist',
      social: {
        github: '#',
        linkedin: '#',
        email: 'mailto:member3@example.com'
      }
    }
  ]

  return (
    <section className="section team">
      <div className="container">
        <h2 className="section-title">Meet the Team</h2>
        <p className="team-subtitle">
          The innovators behind SIKADVOLTZ
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="image-placeholder">
                    <span className="member-initial">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                
                <div className="member-social">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.email}>
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="project-info">
          <div className="info-box">
            <h4>🎓 Academic Institution</h4>
            <p>Assumption College of Davao</p>
          </div>
          <div className="info-box">
            <h4>📅 Project Timeline</h4>
            <p>March 2025 - November 2025</p>
          </div>
          <div className="info-box">
            <h4>🏆 Project Status</h4>
            <p>Prototype Complete & Tested</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
