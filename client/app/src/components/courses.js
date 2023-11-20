import React from "react";
import "./courses.css"; // CSS file for styling

const CoursesPage = () => {
  return (
    <div>
      <div className="section full-height">
        <div className="section-title-wrap">
          <div className="container">
            <div className="row">
              <div
                className="col-12 text-center parallax-fade-top"
                style={{ top: '0.5px', opacity: '0.998571' }}
              >
                <p>Welcome to Courses</p>
                <h1>Choose Your Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section full-height">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
            <button class="btn-donate"> Upload
            </button>
            <button class="btn-donate"> Make your own
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
