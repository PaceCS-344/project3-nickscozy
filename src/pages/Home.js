import myImage from '../Images/IMG_0376.jpeg'; // CHANGED: updated image path

export default function Home() {
  return (
    <div className="full-card">
      <div className="card-body">
        <div className="card-text-section">
          <h1 className="title-card">Nicholas Aramburu</h1>
          <h4>Pace University Pleasantville '27</h4>
          <p>
            Hi, my name is Nicholas Aramburu and welcome to my portfolio! I am currently a Senior Computer Science major attending PACE University's Pleasantville Campus.
          </p>
        </div>
        <img src={myImage} alt="Picture of Me" className="card-image" />
      </div>
    </div>
  );
}