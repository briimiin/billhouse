import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Layout.css'; // Make sure this file exists

const Layout = ({ children }) => {  // Accept children as a prop
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <div className="layout">
      {/* Show back button on all pages except Home */}
      {!isHome && (
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <FaArrowLeft /> Back
        </button>
      )}
      
      {/* Render the page content */}
      {children}  {/* Use children instead of Outlet */}
    </div>
  );
};

export default Layout;