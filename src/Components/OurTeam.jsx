import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './team.css';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      bio: "20+ years in construction management",
      image: "/ceo.jpg",
      department: "Leadership",
      fullBio: "John founded BillHouse in 2010...",
      education: "MSc Construction Management, MIT",
      social: {
        linkedin: "#",
        email: "john@billhouse.com"
      }
    },
    // Add other team members
  ];

  const departments = [...new Set(team.map(member => member.department))];

  return (
    <div className="team-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back to About
      </button>

      <div className="team-hero">
        <h1>Our Team</h1>
        <p>The professionals behind our success</p>
      </div>

      {/* Department Filter */}
      <div className="department-filter">
        {departments.map(dept => (
          <button key={dept} className="filter-btn">
            {dept}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="team-members-grid">
        {team.map(member => (
          <div 
            key={member.id} 
            className="team-member-card"
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="department">{member.department}</p>
          </div>
        ))}
      </div>

      {/* Member Modal */}
      {selectedMember && (
        <div className="team-modal">
          <div className="modal-backdrop" onClick={() => setSelectedMember(null)}></div>
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            
            <div className="modal-header">
              <img src={selectedMember.image} alt={selectedMember.name} />
              <div>
                <h2>{selectedMember.name}</h2>
                <p className="role">{selectedMember.role}</p>
                <div className="social-links">
                  <a href={selectedMember.social.linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href={`mailto:${selectedMember.social.email}`}>
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <h3>About</h3>
              <p>{selectedMember.fullBio}</p>

              <h3>Education</h3>
              <p>{selectedMember.education}</p>

              <h3>Key Projects</h3>
              <ul>
                {selectedMember.projects?.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;