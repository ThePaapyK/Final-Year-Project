import React from 'react';
import './Header.css';
import { FaReact } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
     <div className="App-header">
       <section className="title">
         <FaReact  className="App-logo" alt="logo" />
         <p>MammoAI</p>
       </section>
       <div className="Vitals">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
	<Link to="/signup">Sign Up</Link>
	<Link to="/login">Login</Link>
       </div>
    </div>
  );
};
