import React, { useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import logo from '../assets/Logobc.png';

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="login-page">
      <div className="illus">
	<div className="phrase">
          <img src={logo} alt="logo" />
	  <p className="hh">MammoAI</p>
	  <p>Empowering Early Detection, One Click at a Time:</p>
	  <p>Improved Patient Outcomes, Our Passion.</p>
	</div>
      </div>
      <div className="App-login">
        <form action="">
	  <img src={logo} className="logo" alt="logo" />
	   <p className="login-h">Login</p>
	   <p className="login-p">Log in to your account</p>
	   <div className="input-box">
	      <p>Email</p>
	      <input type="email" id="email" placeholder="Enter your emial" required />
	      <FaUser className="icon"/>
	   </div>
	   <div className="input-box">
	      <p>Password</p>
              <input type="password" id="password" placeholder="Enter your password" required />
	      <FaLock className="icon"/>
           </div>
	   <div className="remember-forgot">
	      <label><input type="checkbox" />Remember me</label>
	      <a href="#">Forgot Password ?</a>
	   </div>
	   <button type="submit">Login</button>
	   <div className="register">
	     <p>Don't have an account? <Link className="reg" to="/signup">Register</Link> </p>
	   </div>
        </form>
      </div>
    </div>
  );
};
