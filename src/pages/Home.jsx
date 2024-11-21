import "./home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useEffect, useState } from "react";
import { getUser } from "../utils/authUtils";

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLogin(!!isLoggedIn);
  }, []);

  const handleNavigation = (routeForLoggedIn, routeForLoggedOut) => {
    navigate(isLogin ? routeForLoggedIn : routeForLoggedOut);
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="main-home-title">
          <h1>Selamat datang {isLogin ? user.username : "di SanNotes."}</h1>
        </div>
        <div className="home-title">
          <h1>Make your plan</h1>
          <h4>On your TodoList</h4>
        </div>
        <div className="home-desc">
          <p>
            Tingkatkan produktifitas kamu, rencanakan kegiatan harianmu dengan{" "}
            <b>SanNotes</b>, Ayo{" "}
            {isLogin ? "lihat tugasmu." : "mulai sekarang."}
          </p>
        </div>
        <div className="start-option">
          <button
            onClick={() => handleNavigation("/todos", "/login")}
            className="login-btn"
          >
            {isLogin ? "Lihat Tugas" : "Mulai Sekarang"}
          </button>
          <button
            onClick={() => handleNavigation("/profile", "/register")}
            className="register-btn"
          >
            {isLogin ? "Lihat Profil" : "Daftar Sekarang"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
