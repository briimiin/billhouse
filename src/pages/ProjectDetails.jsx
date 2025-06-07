import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowLeft, FaCalendarAlt, FaRuler } from 'react-icons/fa';
import './ProjectDetails.css';
import download from '../assets/download.jpeg';



const ProjectDetails = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: '1',
      title: "Greenfield Hospital Complex",
      location: "Nakuru, Kenya",
      role: "Cost Management",
      sector: "Healthcare Facilities",
      savings: "Saved client 4.2M",
      description: "Comprehensive cost management for a state-of-the-art 450-bed teaching hospital, achieving 4.2M in value engineering savings through innovative material sourcing and construction phasing.",
      challenges: "Supply chain disruptions, complex MEP requirements, tight urban site constraints.",
      solutions: "Prefabrication strategies, local material sourcing, 4D scheduling integration.",
      status: "Completed 2023",
      size: "45,000 sqm",
      services: ["Cost Planning", "Value Engineering", "Contract Administration"],
      team: "Led by Senior QS Wesley Too",
      image: download
    },
    // Other projects...
  ];

  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-container">
     
        <div className="hero-banner" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="hero-overlay">
            <p className="project-region">Healthcare Sector</p>
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-subtitle">{project.description.slice(0, 120)}...</p>
            <div className="tag-list">
            {project.services?.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
            ))}
            </div>
        </div>
        </div>


      <div className="project-key-facts">
        <div className="fact-card">
          <FaCalendarAlt />
          <div>
            <h4>Status</h4>
            <p>{project.status}</p>
          </div>
        </div>
        <div className="fact-card">
          <FaRuler />
          <div>
            <h4>Project Size</h4>
            <p>{project.size}</p>
          </div>
        </div>
        {/* Add more fact cards as needed */}
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-section">
          <h2>Our Role</h2>
          <p>{project.role}</p>
          <ul className="services-list">
            {project.services?.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </section>

        <div className="two-column-section">
          <section className="project-section">
            <h2>Challenges</h2>
            <p>{project.challenges}</p>
          </section>
          <section className="project-section">
            <h2>Solutions</h2>
            <p>{project.solutions}</p>
          </section>
        </div>

        <section className="project-section">
          <h2>Project Team</h2>
          <p>{project.team}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;