import { useState, useEffect } from 'react';
import myImage from '../Images/IMG_0376.jpeg'; // CHANGED: updated image path
import Highlight from '../Highlight';

export default function Home({ searchText }) {
  return (
    <>
      <div className="full-card">
        <div className="card-body">
          <div className="card-text-section">
            <h1 className="title-card">Nicholas Aramburu</h1>
            <h4>Pace University Pleasantville '27</h4>
            <p>
              <br/><Highlight text="Hi, my name is Nicholas Aramburu and welcome to my portfolio! I am currently a Senior Computer Science major attending PACE University's Pleasantville Campus." searchText={searchText} />
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
      <GitHubCard />
    </>
  );
}

// CHANGED: fetches and displays GitHub profile info
// CHANGED: fetches and displays GitHub profile info
function GitHubCard() {
  // 1. ADDED: New state variables for Orgs and Stars
  const [profile, setProfile] = useState(null);
  const [orgCount, setOrgCount] = useState(0);
  const [starCount, setStarCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. UPDATED: Fetching the base profile, then fetching orgs and stars
    fetch('https://api.github.com/users/nickscozy')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        
        // Fetch organizations count
        fetch(data.organizations_url)
          .then(res => res.json())
          .then(orgs => setOrgCount(orgs.length));

        // Fetch starred repos count 
        const starredUrl = data.starred_url.replace('{/owner}{/repo}', '');
        fetch(starredUrl)
          .then(res => res.json())
          .then(stars => setStarCount(stars.length));

        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading GitHub info...</p>;

  return (
    <div className="full-card">
      <div className="title-header">
        <h1 className="title-card">About Me on GitHub</h1>
        <hr className="title-divider" />
      </div>

      <div className="github-card-body">
        {/* Avatar on the left */}
        <img
          src={profile.avatar_url}
          alt="GitHub Avatar"
          className="github-avatar"
        />

        {/* Stats on the right */}
        <div className="github-stats">
          <p><strong>Username:</strong> {profile.login}</p>
          <p><strong>Followers:</strong> {profile.followers}</p>
          <p><strong>Following:</strong> {profile.following}</p>
          <p><strong>Public Repos:</strong> {profile.public_repos}</p>
          <p><strong>Public Gists:</strong> {profile.public_gists}</p>
          
          {/* 3. ADDED: Displaying the new Org and Star variables here */}
          <p><strong>Organizations:</strong> {orgCount}</p>
          <p><strong>Starred Repos:</strong> {starCount}</p>
          
          {profile.bio && <p><strong>Bio:</strong> {profile.bio}</p>}
          {profile.location && <p><strong>Location:</strong> {profile.location}</p>}
          
          {/* 4. FIXED: The attributes are now properly inside the opening <a> tag */}
          <a
            href={profile.html_url}
            className="card-link-box"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: '10px', width: 'fit-content' }}
          >
            View GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}