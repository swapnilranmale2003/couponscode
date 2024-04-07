import React from 'react';
import './EducationSection.css'; // Import your CSS file for EducationSection component styling

function EducationSection() {
  return (
    <div className="education-container">
      <nav className="navbar">
        {/* Your Navbar component here */}
      </nav>
      <div className="content">
        <h1>Education</h1> {/* Education heading */}
        <div className="image-container">
          <img src="/edu.png" alt="" className="education-image" /> {/* Education image */}
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
