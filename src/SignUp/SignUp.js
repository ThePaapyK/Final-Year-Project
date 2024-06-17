import React, { useEffect } from 'react';
import './SignUp.css';
import robot from '../assets/ai_robot_hand.png';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

export default function SignUp() {
  useEffect(() => {
    document.title = "SignUp";
  }, []);
  return (
    <div className="signup-page">
      <div className="signup-display">
	  <div className="disp-container">
	    <img src={ robot } alt="ai robot hand" />
	    <div class="text-overlay">
	      <p className="d-title">MammoAI</p>
	      <p>Breast Cancer Screening</p>
	      <p>Now AI Powered!</p>
	    </div>
	  </div>
      </div>
      <div className="App-signup">
        <form action="">
	  <div className="h-logo">
	   <FaReact className="logo" />
	   <p>Sign Up</p>
	  </div>
	  <div className="Name">
	   <div className="input-box">
	    <input type="string" id="firstName" placeholder="First Name" required/>
	   </div>
	   <div className="input-box">
            <input type="string" id="lastName" placeholder="Last Name" required/>
	   </div>
	  </div>
	   <div className="input-box">
              <input type="email" id="email" placeholder="Enter your email" required/>
           </div>
	   <div className="input-box">
              <input type="password" id="password" placeholder="Enter your password" required/>
              <FaLock className="icon"/>
           </div>
	   <div className="input-box">
              <input type="password" id="confirm" placeholder="Confirm Password" required/>
              <FaLock className="icon"/>
           </div>
	   <div className="input-box">
	    <p>Date of Birth</p>
            <input type="date" id="date" required/>
           </div>
	  <div className="gender">
	    <p>Gender</p>
	    <span class="_5k_3" data-type="radio" data-name="gender_wrapper" id="u_0_o_ps">
              <span class="but_gen">
                <label class="_58mt" for="u_0_4_YR">Female</label>
                <input type="radio" class="_8esa" name="sex" value="1" id="u_0_4_YR" />
              </span>
              <span class="but_gen">
                <label class="_58mt" for="u_0_5_eP">Male</label>
                <input type="radio" class="_8esa" name="sex" value="2" id="u_0_5_eP" />
              </span>
            </span>
	  </div>
	  <div className="Terms">
              <p class="_58mv">By clicking Sign Up, you agree to our <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">Terms</a>, <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">Privacy Policy</a> and <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
	  
	  </div>
	  <button type="submit">Sign Up</button>
	  <Link className="login" to="/login">Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};
