import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login";
import Home from "./components/home";

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

  return (
    <div>
      <nav
        className={`navbar navbar-expand navbar-dark bg-dark ${
          isNavbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <Link to="/" className="navbar-brand">
          <img
            style={{ width: "100px", height: "auto" }}
            src={OpticourseLogo}
            alt="Opticourse Logo"
            className="logo"
          />
          Opticourse
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
