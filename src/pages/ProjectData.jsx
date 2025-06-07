// src/data/projectData.js

import download from '../assets/download.jpeg';
import download2 from '../assets/download2.jpeg';
import download3 from '../assets/download3.jpeg';

export const projects = [
  {
    id: '1',
    title: "Greenfield Hospital Complex",
    location: "Nakuru, Kenya",
    role: "Cost Management",
    sector: "Healthcare Facilities",
    savings: "Saved client 4.2M",
    description:
      "Comprehensive cost management for a state-of-the-art 450-bed teaching hospital, achieving 4.2M in value engineering savings through innovative material sourcing and construction phasing.",
    challenges: "Supply chain disruptions, complex MEP requirements, tight urban site constraints.",
    solutions: "Prefabrication strategies, local material sourcing, 4D scheduling integration.",
    status: "Completed 2023",
    size: "45,000 sqm",
    services: ["Cost Planning", "Value Engineering", "Contract Administration"],
    team: "Led by Senior QS Wesley Too",
    image: download,
  },
  {
    id: '2',
    title: "High-Rise Commercial Tower",
    location: "Nakuru, Kenya",
    role: "Tender Analysis",
    sector: "Tech Semiconductor Facilities",
    savings: "18% under budget",
    description: "Handled cost review and bid analysis for 30-floor mixed-use tower, supporting efficient procurement and budget control.",
    challenges: "Cost fluctuation and vendor misalignment.",
    solutions: "Benchmarked against regional projects and applied cost escalation formulas.",
    status: "Ongoing",
    size: "60,000 sqm",
    services: ["Tender Review", "Procurement Advisory"],
    team: "Led by QS Mercy Kiptoo",
    image: download3,
  },
  {
    id: '3',
    title: "Mixed-Use Development",
    location: "Nakuru, Kenya",
    role: "Lifecycle Costing",
    sector: "Tech Semiconductor Facilities",
    savings: "25-year cost forecast",
    description: "Developed comprehensive lifecycle cost model for integrated residential and retail development.",
    challenges: "Balancing initial costs with long-term O&M expenses.",
    solutions: "Applied Whole Life Costing (WLC) models.",
    status: "Design Phase",
    size: "80,000 sqm",
    services: ["Lifecycle Costing", "Sustainability Advisory"],
    team: "Led by QS Brian Kipkurui",
    image: download2,
  },
];
