import React, { useState, useEffect } from 'react';
import './styles/Admin.css';

const AdminDashboard = () => {
  const [title, setTitle] = useState('');
  const [workLink, setWorkLink] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [works, setWorks] = useState([]);

  useEffect(() => {
    // Fetch existing works when the component mounts
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const response = await fetch('http://localhost:3004/api/getworks');
      const data = await response.json();
      setWorks(data);
    } catch (error) {
      console.error('Error fetching works:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3004/api/works', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, workLink, downloadLink }),
      });

      if (response.ok) {
        // Clear form fields and refresh works list
        setTitle('');
        setWorkLink('');
        setDownloadLink('');
        fetchWorks();
      } else {
        console.error('Failed to add work');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteButton = async (id) => {
    try {
        const response = await fetch(`http://localhost:3004/api/works/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Refresh the list or remove the item from state
            fetchWorks();
        } else {
            console.error('Failed to delete work');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div className="admin-dashboard">
      <h2 className='heading'>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="workLink">Work Link:</label>
        <input
          type="text"
          id="workLink"
          value={workLink}
          onChange={(e) => setWorkLink(e.target.value)}
          required
        />
        <label htmlFor="downloadLink">Download Link:</label>
        <input
          type="text"
          id="downloadLink"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          required
        />
        <button type="submit">Add Work</button>
      </form>
      <h2 className='heading'>Existing Works</h2>
      <div className="work-list">
        
        {works.map(work => (
          <div key={work._id} className="work-item">
            <h4>{work.title}</h4>
            <button onClick={() => handleDeleteButton(work._id)}>Delete Work</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
