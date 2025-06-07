import './home.css';
import { FaChartLine,FaMapMarkedAlt,FaArrowCircleRight, FaFileContract, FaCogs, FaShieldAlt, FaRuler, FaBalanceScale, FaMapMarkerAlt, FaIndustry, FaChartBar, FaArrowRight } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { BsAwardFill } from 'react-icons/bs';
import download3 from '../assets/download3.jpeg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ContactModal from '../Components/ContactModal';  
import { projects } from './ProjectData';




export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
 
  const services = [
    { 
      title: "Cost Planning & Estimation",
      icon: <GiMoneyStack />,
      description: "Accurate budget forecasting from concept to completion"
    },
    { 
      title: "Contract Administration",
      icon: <FaFileContract />, 
      description: "End-to-end contract management and compliance"
    },
    { 
      title: "Value Engineering",
      icon: <FaCogs />,
      description: "Cost optimization without compromising quality"
    },
    { 
      title: "Risk Management",
      icon: <FaShieldAlt />,
      description: "Proactive identification and mitigation of cost risks"
    },
    { 
      title: "BIM Quantity Takeoffs",
      icon: <FaRuler />,
      description: "Precision measurements from 3D models"
    },
    { 
      title: "Dispute Resolution",
      icon: <FaBalanceScale />,
      description: "Expert mediation for construction claims"
    }
  ];

  return (
    <div className="home-page">
        <div className="linesight-hero">
            {/* Background Image (positioned absolutely) */}
            <div className="background-image-wrapper">
              <img 
                src= {download3} 
                alt="Construction site background" 
                className="background-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            {/* Content */}
            <div className="linesight-content">
              <h1 className="company-name"> About BillHouse</h1>
              {/*               
              <div className="service-header">
                <h2>Quantity Surveying</h2>
              </div> */}
              
              <p className="service-decription">
                Delivering cost certainty for complex projects through precise measurement 
                and strategic cost management, guided by our RICS-certified quantity 
                surveying professionals. Learn more about our quantity surveying services.
              </p>
              <p className="hero-tagline">
                <strong>Building success through financial precision</strong>
              </p>
              
              
              <div className="divider-line"></div>
                      <button 
                  className="hero-cta-button"
                  onClick={() => setShowContactModal(true)}
                >
                  <strong>Contact Representative</strong>
                </button>
              

              {/* Contact Modal */}
              {showContactModal && (
                <ContactModal onClose={() => setShowContactModal(false)} />
              )}
            </div>
          </div>
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Strategic Construction Consultancy</h2>
              <p className="lead">
                BillHouse specializes in <strong>cost management</strong> and <strong>quantity surveying </strong> 
                 services for complex construction projects across all sectors.
              </p>
              <ul className="about-features">
                <li><strong>RICS-certified</strong> professionals</li>
                <li><strong>BIM-integrated</strong> workflows</li>
                <li><strong>Data-driven</strong> decision making</li>
                <li><strong>Global</strong> project experience</li>
              </ul>
              {/* <button className="cta-button">Our Methodology</button> */}
            </div>
            {/* <div className="about-image">
              <img src={teamPhoto} alt="BillHouse team" />
              <div className="award-badge">
                <BsAwardFill className="award-icon" />
                <span>Top QS Firm 2023</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Credentials Section - NEW */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-grid">
            <div className="credentials-item">
              <div className="credential-number">25+</div>
              <div className="credential-label">Years Experience</div>
            </div>
            <div className="credentials-item">
              <div className="credential-number">2B+</div>
              <div className="credential-label">Project Value</div>
            </div>
            <div className="credentials-item">
              <div className="credential-number">850+</div>
              <div className="credential-label">Projects Completed</div>
            </div>
            <div className="credentials-item">
              <div className="credential-number">100%</div>
              <div className="credential-label">RICS Qualified</div>
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section className="projects-section">
  <div className="container">
    <div className="section-header">
      <h2>Explore our Projects</h2>
      <p className="section-subtitle">Our global portfolio</p>
    </div>
    
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image-container">
            <img src={project.image} alt={project.title} />
            
            {/* Image Overlay */}
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
          
          {/* Hidden Details (Appears on hover) */}
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
      {/* Services Section */}
<section className="services-section">
  <div className="container">
    <div className="section-header">
      <h2>Core Services</h2>
      <p className="section-subtitle">Strategic cost management solutions</p>
    </div>
    
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-header">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
          <p className="service-descriiption">{service.description}</p>
          <div className="service-footer">
            <Link to="/Services" className="service-link">
              <span>Explore service</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>


      {/* Insights Section */}
      {/* <section className="insights-section">
        <div className="container">
          <div className="insights-header">
            <h2>Market Intelligence</h2>
            <a href="#" className="view-all">View all reports →</a>
          </div>
          <div className="insights-grid">
            <div className="insight-card">
              <FaChartLine className="insight-icon" />
              <h3>2024 Construction Cost Forecast</h3>
              <p>Analysis of material and labor trends across key markets</p>
              <div className="insight-meta">
                <span>15 min read</span>
                <span>Updated: April 2024</span>
              </div>
            </div>
            <div className="insight-card">
              <FaChartLine className="insight-icon" />
              <h3>Sustainability Cost Analysis</h3>
              <p>ROI of green building practices in commercial projects</p>
              <div className="insight-meta">
                <span>12 min read</span>
                <span>Updated: March 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}