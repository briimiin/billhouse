import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { projects } from './ProjectData';
import './projects.css';
import { Link } from 'react-router-dom'; // Add this impor

export default function Projects() {
 
  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <p className="section-subtitle">Explore Our Projects</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <h3>{project.title}</h3>
                      <div className="project-location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                <div className="project-details">
                  <div className="project-meta">
                    <span className="project-sector">{project.sector}</span>
                    <span className="project-savings">{project.savings}</span>
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-link" >View project analysis</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}