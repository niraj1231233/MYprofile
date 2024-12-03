import React from 'react';
import '../App.css';
const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h2>
      <p className="quote qq">Education is the most powerful weapon which you can use to change the world.</p>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="./Niraj.png" alt="College" />
          </div>
          <div className="content">
            <h3>HSC</h3>
            <p> FROM, NEW ENGLISH HIGH SCHOOL AND JR COLLEGE </p>
            <h4>2018 | COMPLETED</h4>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src="./Niraj.png" alt="School" />
          </div>
          <div className="content">
          <h3>Bachelor of Science in Information & Technology</h3>
            <p> FROM, R.K.TALREJA COLLEGE OF ART'S, COMMERECE AND SCIENCE </p>
            <h4>2024 | COMPLETED</h4>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
