import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo1.png";
import "./navbar.css";
import { Link, withRouter } from "react-router-dom";
// import { UseContext } from "../../UseContext";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const LogOut = () => {
    sessionStorage.setItem("UserStatus", "LoggedOut");

    sessionStorage.removeItem("Phone");

    // sessionStorage.removeItem("Service");
  };
  let isLoggedIn = sessionStorage.getItem("UserStatus") === "loggedIn";

  useEffect(() => {
    const removeListener = props.history.listen(() => {
      isLoggedIn = sessionStorage.getItem("UserStatus") === "loggedIn";
    });
  }, []);

  return (
    <div>
      <nav className="w-navbar">
        <div className="w-navbar-container">
          <Link to="/" className="w-navbar-logo">
            <img src={Logo} alt="Website logo"></img>ebSoft
          </Link>
          <div className="w-menu-icon" onClick={handelClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "w-nav-menu active" : "w-nav-menu"}>
            <li className="w-nav-item">
              <Link to="/" className="w-nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="w-nav-item">
              <Link
                to={isLoggedIn ? "services" : "Login"}
                className="w-nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="w-nav-item">
              <Link
                to={isLoggedIn ? "Body" : "Login"}
                className="w-nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="w-nav-item">
                <button className="btn-NavBar">
                  <Link to="Logout" onClick={(closeMobileMenu, LogOut)}>
                    Logout
                  </Link>
                </button>
              </li>
            ) : (
              <li className="w-nav-item">
                <button className="btn-NavBar">
                  <Link to="Login" onClick={closeMobileMenu}>
                    LogIn
                  </Link>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
// export default Navbar;

export default withRouter(Navbar);
