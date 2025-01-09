import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../assets/Logobc.png';

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', user, { withCredentials: true });
      console.log(res.data);
      if (res.data.msg === 'Login successful') {
        navigate('/profile');
      }
      else {
        navigate('/login');
      }
    } catch (err) {
      console.error(err.response);
    }
  };

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
        <form onSubmit={onSubmit}>
	  <img src={logo} className="logo" alt="logo" />
	   <p className="login-h">Login</p>
	   <p className="login-p">Log in to your account</p>
	   <div className="input-box">
	      <p>Email</p>
	      <input type="email" name="email" value={email} id="email" placeholder="Enter your emial" onChange={onChange} required />
	      <FaUser className="icon"/>
	   </div>
	   <div className="input-box">
	      <p>Password</p>
              <input type="password" name="password" value={password} id="password" placeholder="Enter your password" onChange={onChange} required />
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
