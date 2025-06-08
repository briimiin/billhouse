import { 
  FaCalculator, 
  FaFileContract, 
  FaCogs, 
  FaShieldAlt, 
  FaRulerCombined, 
  FaHandshake,
  FaProjectDiagram,
  FaClipboardCheck,
  FaTruck,
  FaUserShield,
  FaChartLine,
  FaSearchDollar
} from 'react-icons/fa';
import { useState } from 'react';
import './services.css';

export default function Services() {
  const [expanded, setExpanded] = useState(false);

  const coreServices = [
    {
      icon: <FaCalculator className="service-icon" />,
      title: "Cost Management",
      description: "Comprehensive cost planning and control throughout project lifecycle.",
      highlights: [
        "Budget forecasting",
        "Value engineering",
        "Lifecycle cost analysis"
      ]
    },
    {
      icon: <FaProjectDiagram className="service-icon" />,
      title: "Project Management",
      description: "End-to-end project delivery with strategic oversight.",
      highlights: [
        "Risk mitigation",
        "Stakeholder coordination",
        "Quality assurance"
      ]
    },
    {
      icon: <FaClipboardCheck className="service-icon" />,
      title: "Program Management",
      description: "Coordinated management of multiple interconnected projects.",
      highlights: [
        "Portfolio optimization",
        "Resource allocation",
        "Strategic reporting"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <FaChartLine className="service-icon" />,
      title: "Project Controls",
      description: "Integrated cost/schedule monitoring for predictable outcomes.",
      highlights: [
        "Earned value analysis",
        "Progress tracking",
        "KPI reporting"
      ]
    },
    {
      icon: <FaSearchDollar className="service-icon" />,
      title: "Supply Chain Management",
      description: "Optimized procurement and vendor relationships.",
      highlights: [
        "Strategic sourcing",
        "Logistics planning",
        "Supplier performance"
      ]
    },
    {
      icon: <FaUserShield className="service-icon" />,
      title: "Health & Safety",
      description: "PSDP services and construction safety management.",
      highlights: [
        "Risk assessments",
        "Safety plans",
        "Compliance audits"
      ]
    },
    {
      icon: <FaFileContract className="service-icon" />,
      title: "Contracts & Procurement",
      description: "Transparent tendering and contract administration.",
      highlights: [
        "Procurement strategy",
        "Bid evaluation",
        "Claims management"
      ]
    },
    {
      icon: <FaRulerCombined className="service-icon" />,
      title: "Planning & Scheduling",
      description: "Advanced scheduling with critical path analysis.",
      highlights: [
        "4D/5D planning",
        "Delay analysis",
        "Resource leveling"
      ]
    },
    {
      icon: <FaHandshake className="service-icon" />,
      title: "Consultancy",
      description: "Specialist advisory for complex projects.",
      highlights: [
        "PPP/PFI expertise",
        "Dispute resolution",
        "Taxation guidance"
      ]
    }
  ];

  return (
    <section className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Professional Services</h1>
          <p className="subtitle">
            Comprehensive quantity surveying and construction consultancy services 
            for projects of all scales across multiple sectors.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="services-intro">
          <h2>Core Services</h2>
          <p>
            Foundational services that drive project success through financial 
            and operational excellence.
          </p>
        </div>

        <div className="services-grid">
          {coreServices.map((service, index) => (
            <ServiceCard key={`core-${index}`} service={service} />
          ))}
        </div>


        <div className="services-grid">
          {additionalServices
            .slice(0, expanded ? additionalServices.length : 3)
            .map((service, index) => (
              <ServiceCard key={`add-${index}`} service={service} />
            ))}
        </div>

      </div>
    </section>
  );
}

const ServiceCard = ({ service }) => (
  <div className="service-card">
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
  </div>
);