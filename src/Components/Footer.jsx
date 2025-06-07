import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="billhouse-footer">
      <div className="footer-container">
        {/* Main Navigation Links */}
        <div className="footer-section">
          <ul className="footer-links">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

      

        {/* Legal Links */}
        <div className="footer-section">
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="social-links">
            <a href="https://linkedin.com/company/billhouse" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/billhouse" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/billhouse" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <p className="contact-email">info@billhouse.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BillHouse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;