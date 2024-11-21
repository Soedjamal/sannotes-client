import {
  faBars,
  faBolt,
  faCalendar,
  faHouse,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../utils/authUtils";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!status);
  }, []);

  const handleLogout = () => {
    logOut();
    navigate("/");
    navigate(0);
  };

  return (
    <nav className="menu-container">
      <ul className="menu-list-container">
        <li className="menu-list">
          <FontAwesomeIcon icon={faCalendar} />
          <Link className="menu-link" to="/todos">
            Todos
          </Link>
        </li>
        <li className="menu-list">
          <FontAwesomeIcon icon={faUser} />
          <Link className="menu-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="menu-list">
          <FontAwesomeIcon icon={faHouse} />
          <Link className="menu-link" to="/">
            Home
          </Link>
        </li>
      </ul>
      {isLoggedIn && (
        <div className="logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <Link onClick={handleLogout} className="logout-link">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <FontAwesomeIcon className="logos" icon={faBolt} />
          <h4 className="main-title">SanNotes.</h4>
        </div>
        <div onClick={handleMenuToggle} className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={menu ? "menu-on" : "menu-off"}>
        <Menu />
      </div>
    </>
  );
};

export default Navbar;
