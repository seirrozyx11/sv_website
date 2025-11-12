import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: 'Boss Irvs',
      role: 'Project Manager | Lead Developer & IoT Systems Architect',
      image: 'assets/images/I.jpg',
      description: 'Manages the overall system architecture and leads development across firmware, mobile, cloud and UX enhancement.',
      social: {
        github: 'seirrozyx11',
        linkedin: '#',
        email: 'mailto:sln32166@gmail.com'
      }
    },
    {
      name: 'Boss Yams',
      role: 'Front-end & Mobile App Developer | UI/UX Designer & QA Specialist',
      image: 'assets/images/E.jpg',
      description: 'Handles mobile app development, UI/UX design, quality assurance, and technical documentation.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'mailtoerwinyambao@gmail.com'
      }
    },
    {
      name: 'Boss Jessie',
      role: 'Hardware Engineer | Network Specialist & QA Tester',
      image: 'assets/images/J.jpg',
      description: 'Designs and tests hardware systems, and handles wireless communication and network integration.',
      social: {
      github: '#',
        linkedin: '#',
        email: 'mailtojessiegamayo@gmail.com'
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
