import React from 'react';
import './aboutus.css';
import download3 from '../assets/download3.jpeg';
import { motion } from "framer-motion";
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  // Data for reusable sections
  const values = [
    { title: "Expertise", desc: "Decades of industry knowledge." },
    { title: "Innovation", desc: "Tech-driven solutions." },
    { title: "Integrity", desc: "Ethical partnerships." },
    { title: "Sustainability", desc: "Green construction practices." },
  ];

  const stats = [
    { number: "25+", label: "Countries" },
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Team Members" },
  ];

  const locations = [
    "Nairobi, Kenya",
    "Eldoret",
    "Nakuru",
    "Kisumu",
    "Mombasa"
  ];

   const milestones = [
    { 
      year: "2010", 
      event: "Founded as a boutique construction consultancy",
      detail: "Started with just 5 team members in Nairobi, focusing on local projects."
    },
    { 
      year: "2015", 
      event: "Expanded to international markets",
      detail: "Opened first regional offices in Tanzania and Uganda."
    },
    { 
      year: "2020", 
      event: "Recognized as industry leaders",
      detail: "Won 'Sustainable Construction Firm of the Year' award."
    }
  ];


  const team = [
    { name: "John Doe", role: "CEO", bio: "20+ years in construction management." },
    { name: "Jane Smith", role: "CTO", bio: "Pioneer in construction tech solutions." },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
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
                    
                    
                  </div>
                </div>

      {/* Core Identity */}
      <section className="core-identity">
        <div className="vision-purpose">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To redefine construction excellence through sustainable, technology-driven solutions that stand the test of time.</p>
          </div>
          <div className="purpose">
            <h2>Our Purpose</h2>
            <p>To bridge the gap between architectural ambition and practical execution, ensuring every project achieves its highest potential.</p>
          </div>
        </div>
        
        {/* Global Presence */}
        <div className="locations">
          <h2>Where We Operate</h2>
          <div className="location-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-item">
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>To deliver construction consultancy services that combine technical excellence with innovative thinking, ensuring client success at every stage.</p>
        </div>
        <div className="values-grid">
          {values.map((item, index) => (
            <div key={index} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Impact */}
      <section className="global-section">
        <h2>Our Global Impact</h2>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
      <h2 className="section-title">Our Journey</h2>
      <div className="modern-timeline">
        {milestones.map((milestone, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="timeline-marker">
              <div className="year-bubble">
                <FaCalendarAlt className="calendar-icon" />
                <span>{milestone.year}</span>
              </div>
              <div className="timeline-line"></div>
            </div>
            <div className="timeline-content">
              <h3 className="event-title">{milestone.event}</h3>
              <p className="event-detail">{milestone.detail}</p>
            </div>
          </motion.div>
        ))}
         </div>
        </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our People</h2>
        <div className="team-preview" onClick={() => navigate('/our-team')}>
          <img 
            src={download3} 
            alt="BillHouse Team" 
            className="team-group-photo"
          />
          <div className="team-overlay">
            <h3>Meet Our Team</h3>

          <Link to="/our-team" className="explore-team-btn">
            Explore Team Members →
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;