import React from 'react';
import './Header.css';
import { FaReact } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
     <div className="App-header">
       <section className="title">
         <FaReact  className="App-logo" alt="logo" />
         <p>MammoAI</p>
       </section>
       <div className="Vitals">
        <NavLink to="/home"
	  className={({ isActive }) => isActive ? 'nhav-link active' : 'nhav-link'}
	>Home
	</NavLink>
        <NavLink to="/about"
	  className={({ isActive }) => isActive ? 'nhav-link active' : 'nhav-link'}
	>About
	</NavLink>
        <NavLink to="/contact"
          className={({ isActive }) => isActive ? 'nhav-link active' : 'nhav-link'}
	>Contact
	</NavLink>
       </div>
    </div>
  );
};
