import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // CHANGED: added router imports
import Home from './pages/Home';       // CHANGED: import pages
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // CHANGED: track dark/light mode  
  const [menuOpen, setMenuOpen] = useState(false); // CHANGED: track menu open/close
  const [searchText, setSearchText] = useState('');

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
          <TypingName /> {/* CHANGED: replaced static h1 with typing component */}
        </div>
        </div>
        {/* CHANGED: search bar added to header */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
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
        <Route path="/" element={<Home searchText={searchText} />} />
        <Route path="/resume" element={<Resume searchText={searchText} />} />
        <Route path="/projects" element={<Projects searchText={searchText} />} />
      </Routes>
    {/* CHANGED: added footer below routes so it appears on every page */}
      <Footer />
    </div>
  );
}

// CHANGED: typing animation component
function TypingName() {
  const [text, setText] = useState('');
  const fullText = 'Nicholas Aramburu';
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100); // CHANGED: 100ms between each letter, increase to slow down
    return () => clearInterval(interval);
  }, []);

  return <h1 className="title-card">{text}</h1>;
}


// CHANGED: new footer component
function Footer() {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Nicholas Aramburu. All rights reserved.</p>
    </div>
  );
}
// Find out how to implement bootstrap!!!!!!!!!!!!!!!