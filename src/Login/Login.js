import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

export default function Login() {
  return (
    <section className="page">
      <div className="App-login">
        <form action="">
	  <div className="h-logo">
	   <h1>MammoAI</h1>
	   <FaReact className="logo" />
	  </div>
	   <div className="input-box">
	      <input type="email" id="email" placeholder="Enter your emial" required/>
	      <FaUser className="icon"/>
	   </div>
	   <div className="input-box">
              <input type="password" id="password" placeholder="Enter your password" required/>
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
    </section>
  );
};
