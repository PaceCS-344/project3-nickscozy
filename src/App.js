import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // CHANGED: added router imports
import Home from './pages/Home';       // CHANGED: import pages
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // CHANGED: track dark/light mode  
  const [menuOpen, setMenuOpen] = useState(false); // CHANGED: track menu open/close


  return (
    /* CHANGED: added light-mode class */
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="header">

        {/* CHANGED: hamburger and title grouped on the left */}
        <div className="header-left">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        <div className="white-text">
          <h1>Nicholas Aramburu</h1>
        </div>
        </div>
        <nav className="box-container">
          {/* CHANGED: removed Home, Resume, Projects from here */}
          <button className="box" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
      {/* CHANGED: dropdown menu appears when hamburger is clicked */}
      {menuOpen && (
        <>
          {/* CHANGED: dark overlay that closes menu when clicked */}
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/resume" className="dropdown-item" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link to="/projects" className="dropdown-item" onClick={() => setMenuOpen(false)}>Projects</Link>
          </div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
// Find out how to implement bootstrap!!!!!!!!!!!!!!!