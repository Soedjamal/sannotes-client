import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../components/header/Navbar";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/authUtils";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const currentUser = getUser();

  useEffect(() => {
    setUser(currentUser);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-biodata">
          <h1 className="profile-title">Your Profile</h1>
          <div className="profile-bio">
            <div className="username-title-container">
              <h1>Hello</h1>
              <h2 className="username">{user ? user.username : null}</h2>
              <span className="halo">{user ? "🖐" : "..."}</span>
            </div>
            <div className="email-title-container">
              <h2 className="greet-email">Your account </h2>
              <h3 className="email">{user ? user.email : null}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
