import React from 'react';
import '../components/styles/WorkCard.css';

const WorkCard = ({ title, viewLink, downloadLink }) => {
  return (
    <div className="work-card">
      <h3>{title}</h3>
      <div className="card-buttons">
      <a href={viewLink} className="btn view-btn" target="_blank" rel="noopener noreferrer">View</a>

      <a href={downloadLink} className="btn download-btn" download>Download</a>

      </div>
    </div>
  );
};

export default WorkCard;
