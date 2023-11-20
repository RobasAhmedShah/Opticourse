import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Login from "./components/login";
import Home from "./components/home";
import Courses from "./components/courses"

import OpticourseLogo from "./assets/logo.png";
import "./App.css";

function App() {
  const [user, setUser] = React.useState(null);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }
  // Page cursors
  document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
    $('#cursor').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
    $('#cursor2').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
    $('#cursor3').css({ left: n.clientX + 'px', top: n.clientY + 'px' });
  });

  // var t = document.getElementById('cursor'),
  var e = document.getElementById('cursor2'),
    i = document.getElementById('cursor3');

  function n() {
    e.classList.add('hover');
    i.classList.add('hover');
  }

  function s() {
    e.classList.remove('hover');
    i.classList.remove('hover');
  }


  return (
    <div>
      <nav
        className={`navbar navbar-expand navbar-light bg-light ${isNavbarVisible ? "navbar-visible" : "navbar-hidden"
          }`}
      >
        <Link to="/" className="navbar-brand">
          <img
            style={{ width: "100px", height: "auto" }}
            src={OpticourseLogo}
            alt="Opticourse Logo"
            className="logo"
          />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={logout}
              >
                Logout {user.name}
              </span>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
      <div className="cursor" id="cursor" style={{ left: '331px', top: '132px' }}></div>
      <div className="cursor2" id="cursor2" style={{ left: '331px', top: '132px' }}></div>
      <div className="cursor3" id="cursor3" style={{ left: '331px', top: '132px' }}></div>

    </div>
  );
}

export default App;
