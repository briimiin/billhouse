import { FaPhone, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';
import './ContactModal.css';

const ContactModal = ({ onClose }) => {
  const contactMethods = [
    {
      name: "Call",
      icon: <FaPhone />,
      action: "tel:+254711103774",
      description: "+254 711103774"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      action: "https://wa.me/254776357868",
      description: "Chat on WhatsApp"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      action: "mailto:briimiin@gmail.com",
      description: "briimiin@gmail.com"
    },
    {
      name: "Message",
      icon: <FaEnvelope />,
      action: "#contact-form",
      description: "Fill contact form"
    }
  ];

  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h3>Contact Our Representative</h3>
        
        <div className="contact-options">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.action}
              className="contact-option"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="option-icon">{method.icon}</div>
              <div className="option-details">
                <h4>{method.name}</h4>
                <p>{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;