import {React,useState} from 'react';
import '../components/styles/SuggestionBox.css';
import emailjs from 'emailjs-com';

const SuggestionBox = () => {
  
  return (
    <div className="suggestion-box">
      <h2>Suggestions & Feedback</h2>
      <form className='sugestion-form'>
        <textarea placeholder="Your suggestions or feedback..." rows="4"></textarea>
        <button type="submit" className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SuggestionBox;
