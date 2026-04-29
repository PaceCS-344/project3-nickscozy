import { Routes, Route, Link } from 'react-router-dom'; // CHANGED: added router imports
import Home from './pages/Home';       // CHANGED: import pages
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <div className="header">
        <Title />
        <nav className="box-container"> {/* CHANGED: replaced Links component with nav */}
          <Link to="/" className="box">Home</Link>
          <Link to="/resume" className="box">Resume</Link>
          <Link to="/projects" className="box">Projects</Link>
          <a href="mailto:nicholasaramburu@gmail.com" className="box">Email</a>
          <a href="https://github.com/nickscozy" className="box" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/naramburu" className="box" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
// Find out how to implement bootstrap!!!!!!!!!!!!!!!

function Title(){
  return(
    <div className="white-text">
      <h1>Digital Portfolio</h1>
    </div>
  )
}