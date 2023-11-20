import React, { useState } from "react";
import "./courses.css"; // CSS file for styling

const CoursesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [courseEntries, setCourseEntries] = useState([
    { courseTitle: "", timeSlot: "" },
  ]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (index, event) => {
    const updatedEntries = [...courseEntries];
    updatedEntries[index][event.target.name] = event.target.value;
    setCourseEntries(updatedEntries);
  };

  const addCourse = () => {
    setCourseEntries([...courseEntries, { courseTitle: "", timeSlot: "" }]);
  };

  return (
    <div>
      {showForm ? (
        <div className={`fade-in`}>
          <div className="containerform">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <form className="mt-5">
                  <div className="form-group">
                    <input type="text" className="inputss" placeholder="Section" />
                  </div>
                  {courseEntries.map((entry, index) => (
                    <div key={index} className="form-row">
                      <div className="col">
                        <input 
                          type="text"
                          name="courseTitle"
                          value={entry.courseTitle}
                          onChange={(e) => handleInputChange(index, e)}
                          className="inputss"
                          placeholder={`Course Title ${index + 1}`}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="timeSlot"
                          value={entry.timeSlot}
                          onChange={(e) => handleInputChange(index, e)}
                          className="inputss"
                          placeholder={`Time Slot ${index + 1}`}
                        />
                      </div>
                      {index === courseEntries.length - 1 && (
                        <div className="col-auto">
                          <button type="button" onClick={addCourse} className="buttonplus">
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={`section full-height ${showForm ? "fade-out" : ""}`}>
            <div className="section-title-wrap">
              <div className="container">
                <div className="row">
                  <div
                    className="col-12 text-center parallax-fade-top"
                    style={{ top: "0.5px", opacity: "0.998571" }}
                  >
                    <p>Welcome to Courses</p>
                    <h1>Choose Your Courses</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`section full-height ${showForm ? "fade-out" : ""}`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <button className="btn btn-donate" onClick={toggleForm}>
                    Upload
                  </button>
                  <button className="btn btn-donate" onClick={toggleForm}>
                    Make your own
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoursesPage;
