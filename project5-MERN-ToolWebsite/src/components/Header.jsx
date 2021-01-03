import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import Logo from "../images/logo.png";
const Header = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  let userData = localStorage.getItem("username");
  console.log(`the data is ${userData}`);
  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("username");
    setUserInfo(null);
  };
  //views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link to="/" className="navbar-brand">
          <img className="Logo" src={Logo} alt="burger tag logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 mb-lg-0 Right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {/* landing Page */}
            </li>
            <li className="nav-item">
              <Link to="/food" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            {userInfo ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    {userData}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/log" className="nav-link" onClick={logout}>
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/log" className="nav-link">
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
  //render
  return <header id="header">{showNavigation()}</header>;
};
export default Header;
