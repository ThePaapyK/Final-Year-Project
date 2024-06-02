import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
import cover from '../assets/sethoscope.jpg';
import { GiArtificialIntelligence } from "react-icons/gi";
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="App-body">
	<div className="items-info">
	  <Header className="headie" />
	  <Outlet />
        </div>
	<div className="side-img">
	   <NavLink to="/login" className="side-login">Login</NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};
