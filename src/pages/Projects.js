import { useState, useEffect } from 'react';

function RepoCard({ repo }) {
  const [collaborators, setCollaborators] = useState([]);
  const [languages, setLanguages] = useState([]); 

  useEffect(() => {
    fetch(`https://api.github.com/repos/nickscozy/${repo.name}/collaborators`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setCollaborators(data);
      });

    fetch(`https://api.github.com/repos/nickscozy/${repo.name}/languages`)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object') {
          setLanguages(Object.keys(data)); // CHANGED: Object.keys gets all language names
        }
      });
  }, [repo.name]);

  return (
    <div className="repo-card">
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-description">
        Description: {repo.description || 'No description available'}
      </p>
      
      <p className="repo-language">
        Languages: {languages.length > 0 ? languages.join(', ') : 'Not specified'}
      </p>
    
      {/* <div className="repo-collaborators">
        <p className="repo-collab-title">Collaborators:</p>
        {collaborators.length > 0 ? (
          collaborators.map(collab => (
            <a href={collab.html_url} key={collab.id} target="_blank" rel="noreferrer" className="collab-name">
              {collab.login}
            </a>
          ))
        ) : (
          <p className="collab-none">None</p>
        )}
      </div> */}

      <a href={repo.html_url} className="repo-link" target="_blank" rel="noreferrer">
        View on GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/nickscozy/repos')
      .then(res => res.json())
      .then(data => {
        // CHANGED: only show repos you want by name
        const filtered = data.filter(repo =>
          ['Digital-Portfolio', 'Silly-Slots'].includes(repo.name)
        );
        setRepos(filtered);
        setLoading(false);
      });
  }, []);

  return (
    <div className="full-card">
      <div className="title-header">
        <h1 className="title-card">Projects</h1>
        <hr className = "title-divider"/>
      </div>
      {loading ? (
        <p className="loading-text">Loading repos...</p>
      ) : (
        <div className="repo-container">
          {repos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}