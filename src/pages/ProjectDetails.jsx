import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowLeft, FaCalendarAlt, FaRuler } from 'react-icons/fa';
import './ProjectDetails.css';
import { projects } from './ProjectData';



const ProjectDetails = () => {
  const { id } = useParams();
 
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-container">
     
        <div className="hero-banner" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="hero-overlay">
            <p className="project-region">{project.sector}</p>
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