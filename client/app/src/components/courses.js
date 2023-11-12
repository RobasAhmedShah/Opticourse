import React from "react";
import "./courses.css"; // Create a separate CSS file for styling

const Courses = () => {
  return (
    <div className="courses-page">
      <section className="course-section">
        <h1 className="course-header">Explore Our Courses</h1>
        <p className="course-description">
          Discover a wide range of courses designed to help you achieve your
          academic goals.
        </p>
      </section>

      <section className="course-list">
        <div className="course">
          <h2 className="course-title">Course 1</h2>
          <p className="course-details">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="course">
          <h2 className="course-title">Course 2</h2>
          <p className="course-details">Consectetur adipiscing elit...</p>
        </div>

        {/* Add more courses as needed */}
      </section>
    </div>
  );
};

export default Courses;
