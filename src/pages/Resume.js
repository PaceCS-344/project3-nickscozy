import Highlight from '../Highlight';

export default function Resume({ searchText }) {
  return (
    <div className="full-card">
      <div className="title-header">
        <h1 className="title-card">Resume</h1>
        <hr className="title-divider" />
      </div>

      <div className="resume-body">
        <Body searchText={searchText}/>
      </div>
    </div>
  );
}

function Body({ searchText }) {
  return (
    <div className="resume-content">

      {/* Contact Info */}
      <div className="resume-contact">
        <p><Highlight text="Huntington, NY | 631-507-3305 | nicholasaramburu@gmail.com | linkedin.com/in/naramburu/" searchText={searchText} /></p>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2 className="resume-section-title"><Highlight text="Education" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Pace University, Pforzheimer Honors College" searchText={searchText} /></h3>
            <span>Pleasantville, NY</span>
          </div>
          <div className="resume-entry-header">
            <p><Highlight text="Bachelor of Science in Computer Science | Minor in Mathematics" searchText={searchText} /></p>
            <span>May 2027</span>
          </div>
          <p>GPA: 3.81</p>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Walt Whitman High School" searchText={searchText} /></h3>
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
        <h2 className="resume-section-title"><Highlight text="Technical Skills" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <p><strong>Programming Languages:</strong> <Highlight text="Java, Python, HTML, COBOL" searchText={searchText} /></p>
        <p><strong>Languages:</strong> <Highlight text="English and Elementary Spanish" searchText={searchText} /></p>
        <p><strong>Marketing:</strong> Social Media (Instagram and Canva)</p>
        <p><strong>Technical:</strong> <Highlight text="Git, VS Code, Microsoft Office 365, Google Docs, Google Slides, Adobe Photoshop, Adobe Lightroom Classic" searchText={searchText} /></p>
        <p><strong>Relevant Coursework:</strong> <Highlight text="Multivariable Calculus | Data Structures and Algorithms | Object Oriented Programming | Web Computing/Scripting | Programming Languages and Implementation" searchText={searchText} /></p>
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h2 className="resume-section-title"><Highlight text="Academic & Personal Projects" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Silly Slots | Java Team Project" searchText={searchText} /></h3>
          </div>
          <ul>
            <li><Highlight text="Developed a Java-based slot machine game featuring a currency system, randomized outcomes, and event-driven gameplay." searchText={searchText} /></li>
            <li><Highlight text="Implemented game logic for betting, balance tracking, and conditional events triggered by player actions." searchText={searchText} /></li>
            <li><Highlight text="Designed interactive easter egg mechanics with randomized humorous events." searchText={searchText} /></li>
            <li><Highlight text="Collaborated with a team to brainstorm, design, and implement gameplay features and creative event outcomes." searchText={searchText} /></li>
          </ul>
        </div>
      </div>

      {/* Work Experience */}
      <div className="resume-section">
        <h2 className="resume-section-title"><Highlight text="Relevant Work Experience" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Academic Tutor, Pace Learning Commons" searchText={searchText} /></h3>
            <span>Pleasantville, NY | Sept 2025 – Present</span>
          </div>
          <ul>
            <li><Highlight text="Provide 1:1 tutoring to students in mathematics, assisting with homework, test preparation and corrections." searchText={searchText} /></li>
            <li><Highlight text="Adaptable to a variety of math courses and student needs, including subjects not previously studied." searchText={searchText} /></li>
          </ul>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="IT Intern, IT Department @ Suffolk County District Courts" searchText={searchText} /></h3>
            <span>East Islip, NY | May 2025 – August 2025</span>
          </div>
          <ul>
            <li><Highlight text="Responded to on-site technical issues including printer malfunctions, computer troubleshooting, and technology setup." searchText={searchText} /></li>
            <li><Highlight text="Gained hands-on experience diagnosing hardware and software issues while supporting employee IT needs." searchText={searchText} /></li>
          </ul>
        </div>
      </div>

      {/* Leadership */}
      <div className="resume-section">
        <h2 className="resume-section-title"><Highlight text="Leadership" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Vice President, NATURE Club" searchText={searchText} /></h3>
            <span>April 2024 – Present</span>
          </div>
          <ul>
            <li><Highlight text="Organize and lead general body meetings and coordinate club events for members." searchText={searchText} /></li>
            <li><Highlight text="Fill responsibility gaps by assisting peers and executive board members to keep projects and events on track." searchText={searchText} /></li>
          </ul>
        </div>
        <div className="resume-entry">
          <div className="resume-entry-header">
            <h3><Highlight text="Vice President of Recruitment, Pi Lambda Phi Fraternity" searchText={searchText} /></h3>
            <span>November 2024 – Present</span>
          </div>
          <ul>
            <li><Highlight text="Maintain and update recruitment spreadsheets tracking prospective members and engagement data." searchText={searchText} /></li>
            <li><Highlight text="Connect with students across campus to gauge interest and build relationships with potential new members." searchText={searchText} /></li>
          </ul>
        </div>
        <p><strong>Extracurriculars:</strong> Pi Lambda Phi Fraternity | NATURE Club | Programming Board | Pride at Pace</p>
      </div>

      {/* Awards */}
      <div className="resume-section">
        <h2 className="resume-section-title"><Highlight text="Awards" searchText={searchText} /></h2>
        <hr className="resume-title-divider" />
        <p><Highlight text="Dean's List First Honors | Academic Excellency Award | Fraternity of the Year at Pace's Blue and Gold Awards 2023-2024 | Greek Service and Philanthropy Award at Pace's Blue and Gold Awards 2024-2025" searchText={searchText} /></p>
      </div>

    </div>
  );
}