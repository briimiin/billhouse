import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaArrowLeft,FaTimes } from 'react-icons/fa';
import './team.css';
import image from '../assets/image.png'; 
import imagecopy from '../assets/image.png'; 
const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  const team = [
    {
      id: 1,
      name: "Wesley Too",
      role: "CEO - Director",
      bio: "20+ years in construction management",
      image: image,
      department: "Leaders",
      fullBio: "As Group General Counsel Wesley brings over 10 years of varied QS experience as the manager.Encompassing his more recent inhouse experience in the construction and finance industries to provide clear structure, advice and support to deliver fundamental change and improvement in legal strategy, process and compliance. Jane has an acute attention to detail in all aspects of her work. Using logical, analytical and creative solutions to ensure the legal strategy of the company aligns with its effective and compliant business functioning.",
      education: "Bsc Quantity Survey, TUK ",
      social: {
        linkedin: "#",
        email: "john@billhouse.com"
      }
    },
        {
      id: 2,
      name: "John Doe",
      role: "Quanity Surveyor",
      bio: "20+ years in construction management",
      image: imagecopy,
      department: "Engineers",
      fullBio: "John founded BillHouse in 2010... bringing over 20 years of experience in construction management. His expertise spans across various sectors including healthcare, commercial, and residential projects. John is passionate about leveraging technology to enhance project delivery and cost efficiency.",
      education: "MSc Construction Management, MIT",
      social: {
        linkedin: "#",
        email: "john@billhouse.com"
      }
    }
    // Add other team members
  ];

  const departments = [...new Set(team.map(member => member.department))];

  return (
    <div className="team-page">
    
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
        <div className="image-container">
          <img src={member.image} alt={member.name} />
          <div className="overlay-text">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="department">{member.department}</p>
          </div>
        </div>
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
             <FaTimes />
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
               {/* <h3>Education</h3> */}
              <p>{selectedMember.education}</p>

              <h3>About</h3>
              <p>{selectedMember.fullBio}</p>

             
              {/* <ul>
                {selectedMember.projects?.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;