import { FaCalculator, FaFileContract, FaCogs, FaShieldAlt, FaRulerCombined, FaHandshake } from 'react-icons/fa';
import './services.css'; // We'll create this

export default function Services() {
  const services = [
    {
      icon: <FaCalculator className="service-icon" />,
      title: "Cost Estimation",
      description: "Accurate budget forecasting using BIM and historical data to prevent cost overruns.",
      highlights: [
        "Elemental cost planning",
        "Lifecycle cost analysis",
        "Value engineering options"
      ]
    },
    {
      icon: <FaFileContract className="service-icon" />,
      title: "Tender Management",
      description: "End-to-end tender processes ensuring competitive bids and optimal contractor selection.",
      highlights: [
        "Pre-tender estimates",
        "Bid evaluation",
        "Contract negotiation"
      ]
    },
    {
      icon: <FaRulerCombined className="service-icon" />,
      title: "BIM Quantity Takeoffs",
      description: "Precision measurements from 3D models reducing material waste by up to 15%.",
      highlights: [
        "5D BIM integration",
        "Automated measurements",
        "Cloud collaboration"
      ]
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: "Risk Management",
      description: "Proactive identification and mitigation of cost risks throughout project lifecycle.",
      highlights: [
        "Risk registers",
        "Monte Carlo simulations",
        "Contingency planning"
      ]
    },
    {
      icon: <FaCogs className="service-icon" />,
      title: "Value Engineering",
      description: "Cost optimization strategies without compromising quality or performance.",
      highlights: [
        "Alternative design solutions",
        "Material substitutions",
        "Constructability reviews"
      ]
    },
    {
      icon: <FaHandshake className="service-icon" />,
      title: "Dispute Resolution",
      description: "Expert mediation and claims management to minimize project delays.",
      highlights: [
        "Delay analysis",
        "Claims preparation",
        "Expert witness"
      ]
    }
  ];

  return (
    <section className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle">cost management for construction projects</p>
        </div>
      </div>

      <div className="container">
        <div className="services-intro">
          <h2>Strategic Cost Control</h2>
          <p>
            BillHouse offers quantity surveying services across all construction sectors. 
            Our data-driven approach ensures cost certainty from feasibility through to final account.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-highlights">
                {service.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              
              {/* <button className="service-cta">
                Learn more <span>→</span>
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}