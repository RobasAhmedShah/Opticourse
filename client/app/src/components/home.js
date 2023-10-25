import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"; // CSS file for styling

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <section className="full-screen-section" style={{ transform: `translateY(-${scrollY * 1}px)` }}>
        <header className="header text-white text-center py-5">
          <h1 className="display-4">Welcome to Opti-Course</h1>
          <p className="lead">Streamlining Your Course Selection Process</p>
          <Link to="/courses" className="btn-donate">
            Explore Courses
          </Link>
        </header>
      </section>

      <section className="full-screen-section" style={{ transform: `translateY(-${scrollY * 1}px)` }}>
        <div className="container my-5 py-5">
          <h2 className="text-center mb-4">About Opti Course</h2>
          <p className="text-muted">
            Opti Course is the ultimate platform for simplifying the course
            selection process at Fast Nuces. We're committed to helping students
            efficiently find and select the courses that align with their academic
            goals.
          </p>
        </div>
      </section>

      <section className="full-screen-section" style={{ transform: `translateY(-${scrollY * 1}px)` }}>
        <div className="container my-5 py-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted">
                Have questions or feedback? Feel free to reach out to us using
                the contact information below.
              </p>
              <address className="text-muted">
                Email: info@opticourse.com
                <br />
                Phone: (123) 456-7890
              </address>
            </div>
            <div className="col-md-6">
              <form>
                {/* Add a contact form here */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
