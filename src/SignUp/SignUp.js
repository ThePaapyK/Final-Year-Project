import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import robot from '../assets/ai_robot_hand.png';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

export default function SignUp() {
  useEffect(() => {
    document.title = "SignUp";
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
  });

  const { firstName, lastName, email, password, confirmPassword, gender, dateOfBirth } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  }; 

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirm_password: confirmPassword,
      gender,
      date_of_birth: dateOfBirth,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', newUser);

      if (res.data.msg === 'User created successfully') {
        navigate('/profile');
      }
    } catch (err) {
      console.error(err.response);
    }
  };


  return (
    <div className="signup-page">
      <div className="signup-display">
	  <div className="disp-container">
	    <img src={ robot } alt="ai robot hand" />
	    <div className="text-overlay">
	      <p className="d-title">MammoAI</p>
	      <p>Breast Cancer Screening</p>
	      <p>Now AI Powered!</p>
	    </div>
	  </div>
      </div>
      <div className="App-signup">
        <form action="" onSubmit={onSubmit}>
	  <div className="h-logo">
	   <FaReact className="logo" />
	   <p>Sign Up</p>
	  </div>
	  <div className="Name">
	   <div className="input-box">
	    <input type="string" name="firstName" value={firstName} placeholder="First Name" onChange={onChange} required/>
	   </div>
	   <div className="input-box">
            <input type="string" name="lastName" value={lastName} placeholder="Last Name" onChange={onChange}  required/>
	   </div>
	  </div>
	   <div className="input-box">
              <input type="email" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange}  required/>
           </div>
	   <div className="input-box">
              <input type="password" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange}  required/>
              <FaLock className="icon"/>
           </div>
	   <div className="input-box">
              <input type="password" id="confirm" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={onChange}  required/>
              <FaLock className="icon"/>
           </div>
	   <div className="input-box">
	    <p>Date of Birth</p>
            <input type="date" id="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange} required/>
           </div>
	  <div className="gender">
	    <p>Gender</p>
	    <span className="choosegender" data-type="radio" data-name="gender_wrapper" >
              <span className="but_gen">
                <label className="female" htmlFor="fem_choi">Female</label>
                <input type="radio" name="gender" value="Female" id="fem_choi" onChange={onGenderChange} />
              </span>
              <span className="but_gen">
                <label className="male" htmlFor="male_choi">Male</label>
                <input type="radio" name="gender" value="male" id="male_choi" onChange={onGenderChange} />
              </span>
            </span>
	  </div>
	  <div className="Terms">
              <p className="t_c">By clicking Sign Up, you agree to our <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">Terms</a>, <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">Privacy Policy</a> and <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
	  
	  </div>
	  <button type="submit">Sign Up</button>
	  <Link className="login" to="/login">Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};

