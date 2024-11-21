import React, { useState } from "react";
import { saveUser } from "../../utils/authUtils";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../header/Navbar";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userfail, setUserfail] = useState(false);
  const [emailfail, setEmailfail] = useState(false);
  const [passwordfail, setPasswordfail] = useState(false);

  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (username.length < 1) {
      setUserfail(true);
    } else if (email.length < 1) {
      setEmailfail(true);
    } else if (password.length < 1) {
      setPasswordfail(true);
    } else {
      saveUser(username, email, password);
      navigate("/login");
    }
  }

  return (
    <>
      <Navbar />
      <form className="form" onSubmit={handleRegister}>
        <h2 className="title">Buat Akun</h2>
        <div className="form-container">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
          {userfail ? <p className="alert">username wajib diisi</p> : null}
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
          {emailfail ? <p className="alert">email wajib diisi</p> : null}
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="input-password">
            <input
              type={showpass ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input-password"
            />

            {showpass ? (
              <FontAwesomeIcon
                onClick={() => setShowPass(!showpass)}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setShowPass(!showpass)}
                icon={faEyeSlash}
              />
            )}
          </div>
          {passwordfail ? <p className="alert">password wajib diisi</p> : null}
          <button className="auth-btn" type="submit">
            Buat Akun
          </button>
        </div>
        <h4 className="not-register">
          Sudah punya akun?{" "}
          <Link className="not" to="/login">
            Login
          </Link>
        </h4>
      </form>
    </>
  );
};

export default Register;
