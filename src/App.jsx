import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import AboutUs from './pages/about';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={< AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;