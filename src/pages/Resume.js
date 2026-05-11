export default function Resume() {
  return (
    <div className="full-card">
      <div className="title-header">
        <h1 className="title-card">Resume</h1>
        <hr className="title-divider" />
      </div>

      <div className="resume-body">
        <Body />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="resume-content">

      {/* Contact Info */}
      <div className="resume-contact">
        <p>Huntington, NY | 631-507-3305 | nicholasaramburu@gmail.com | linkedin.com/in/naramburu/</p>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Pace University, Pforzheimer Honors College</h3>
            <span>Pleasantville, NY</span>
          </div>
          <div className="resume-entry-header">
            <p>Bachelor of Science in Computer Science | Minor in Mathematics</p>
            <span>May 2027</span>
          </div>
          <p>GPA: 3.81</p>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Walt Whitman High School</h3>
            <span>Huntington Station, NY</span>
          </div>
          <div className="resume-entry-header">
            <p>GPA: 4.0</p>
            <span>June 2023</span>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="resume-section">
        <h2 className="resume-section-title">Technical Skills</h2>
        <hr className="resume-title-divider" />
        <p><strong>Programming Languages:</strong> Java, Python, HTML, COBOL</p>
        <p><strong>Languages:</strong> English and Elementary Spanish</p>
        <p><strong>Marketing:</strong> Social Media (Instagram and Canva)</p>
        <p><strong>Technical:</strong> Git, VS Code, Microsoft Office 365, Google Docs, Google Slides, Adobe Photoshop, Adobe Lightroom Classic</p>
        <p><strong>Relevant Coursework:</strong> Multivariable Calculus | Data Structures and Algorithms | Object Oriented Programming | Web Computing/Scripting | Programming Languages and Implementation</p>
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h2 className="resume-section-title">Academic & Personal Projects</h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Silly Slots | Java Team Project</h3>
          </div>
          <ul>
            <li>Developed a Java-based slot machine game featuring a currency system, randomized outcomes, and event-driven gameplay.</li>
            <li>Implemented game logic for betting, balance tracking, and conditional events triggered by player actions.</li>
            <li>Designed interactive easter egg mechanics with randomized humorous events.</li>
            <li>Collaborated with a team to brainstorm, design, and implement gameplay features and creative event outcomes.</li>
          </ul>
        </div>
      </div>

      {/* Work Experience */}
      <div className="resume-section">
        <h2 className="resume-section-title">Relevant Work Experience</h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Academic Tutor, Pace Learning Commons</h3>
            <span>Pleasantville, NY | Sept 2025 – Present</span>
          </div>
          <ul>
            <li>Provide 1:1 tutoring to students in mathematics, assisting with homework, test preparation and corrections.</li>
            <li>Adaptable to a variety of math courses and student needs, including subjects not previously studied.</li>
          </ul>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>IT Intern, IT Department @ Suffolk County District Courts</h3>
            <span>East Islip, NY | May 2025 – August 2025</span>
          </div>
          <ul>
            <li>Responded to on-site technical issues including printer malfunctions, computer troubleshooting, and technology setup.</li>
            <li>Gained hands-on experience diagnosing hardware and software issues while supporting employee IT needs.</li>
          </ul>
        </div>
      </div>

      {/* Leadership */}
      <div className="resume-section">
        <h2 className="resume-section-title">Leadership</h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Vice President, NATURE Club</h3>
            <span>April 2024 – Present</span>
          </div>
          <ul>
            <li>Organize and lead general body meetings and coordinate club events for members.</li>
            <li>Fill responsibility gaps by assisting peers and executive board members to keep projects and events on track.</li>
          </ul>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3>Vice President of Recruitment, Pi Lambda Phi Fraternity</h3>
            <span>November 2024 – Present</span>
          </div>
          <ul>
            <li>Maintain and update recruitment spreadsheets tracking prospective members and engagement data.</li>
            <li>Connect with students across campus to gauge interest and build relationships with potential new members.</li>
          </ul>
        </div>
        <p><strong>Extracurriculars:</strong> Pi Lambda Phi Fraternity | NATURE Club | Programming Board | Pride at Pace</p>
      </div>

      {/* Awards */}
      <div className="resume-section">
        <h2 className="resume-section-title">Awards</h2>
        <hr className="resume-title-divider" />
        <p>Dean's List First Honors | Academic Excellency Award | Fraternity of the Year at Pace's Blue and Gold Awards 2023-2024 | Greek Service and Philanthropy Award at Pace's Blue and Gold Awards 2024-2025</p>
      </div>

    </div>
  );
}