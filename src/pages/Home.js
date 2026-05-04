import myImage from '../Images/IMG_0376.jpeg'; // CHANGED: updated image path


export default function Home() {
  return (
    <div className="full-card">
      <div className="card-body">
        <div className="card-text-section">
          <h1 className="title-card">Nicholas Aramburu</h1>
          <h4>Pace University Pleasantville '27</h4>
          <p>
            <br/>Hi, my name is Nicholas Aramburu and welcome to my portfolio! I am currently a Senior Computer Science major attending PACE University's Pleasantville Campus.
          </p>
          <div className="card-links">
            <a href="mailto:nicholasaramburu@gmail.com" className="card-link-box">Email</a>
            <a href="https://linkedin.com/in/naramburu" className="card-link-box" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/nickscozy" className="card-link-box" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <img src={myImage} alt="Picture of Me" className="card-image" />
      </div>
    </div>
  );
}