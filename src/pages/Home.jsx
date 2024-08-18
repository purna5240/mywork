import React, { useState ,useEffect} from 'react';
import Header from '../components/Header';
import WorkCard from '../components/WorkCard';
import SuggestionBox from '../components/SuggestionBox';
import Footer from '../components/Footer';
import './styles/Home.css'
const Home = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
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
  return (
    <div className="home">
      <Header />
      <div className="intro">
        <h1>Welcome to Ink and Imagination</h1>
        <p>Welcome to Purna's Space, where I share my thoughts through words.</p>
      </div>
      <div className="work-section">
        <h2>My Work</h2>
        <div className="work-cards">
          {/* Example Work Card */}
          {works.map(work => (
            <WorkCard
              key={work._id} // Ensure each WorkCard has a unique key
              title={work.title}
              viewLink={work.workLink}
              downloadLink={work.downloadLink}
            />
          ))}
          {/* Add more WorkCards as needed */}
        </div>
      </div>
      <SuggestionBox />
      <Footer />
    </div>
  );
};

export default Home;
