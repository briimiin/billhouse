import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import download2 from '../assets/download2.jpeg';
import download3 from '../assets/download3.jpeg';
import download from '../assets/download.jpeg';
import './projects.css';
import { Link } from 'react-router-dom'; // Add this impor

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Greenfield Hospital Complex",
      
      location: "Nakuru, Kenya",
      role: "Cost Management",
      sector: "Tech Semiconductor Facilities",
      savings: "Saved client 4.2M",
      image: download
    },
    {
      title: "High-Rise Commercial Tower",
      location: "Nakuru, Kenya",
      sector: "Tech Semiconductor Facilities",
      role: "Tender Analysis",
      savings: "18% under budget",
      image: download3
    },
    {
      title: "Mixed-Use Development",
      location: "Nakuru, Kenya",
      sector: "Tech Semiconductor Facilities",
      role: "Lifecycle Costing",
      savings: "25-year cost forecast",
      image: download2
    }
  ];

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