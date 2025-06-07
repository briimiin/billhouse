import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaChevronDown, FaChevronRight, FaTimes, FaBars, FaArrowLeft } from 'react-icons/fa';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        {/* Back Button (visible on all pages except Home) */}
        {!isHomePage && (
          <button 
            className="navbar-back-button"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>
        )}

        {/* Logo (visible only on Home page) */}
        {isHomePage && (
          <Link to="/" className="navbar-logo">
            <span className="logo-text">BillHouse</span>
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <Link to={item.path}>
                {item.icon && <span className="nav-icon">{item.icon}</span>}
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          <div 
            className="mobile-backdrop" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDropdown(null);
            }} 
          />
          <div className="mobile-menu">
            {navItems.map((item) => (
              <div key={item.name} className="mobile-menu-group">
                <div 
                  className="mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.path}>
                    {item.icon && <span className="nav-icon">{item.icon}</span>}
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}