import React, { useState, useEffect } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import './Profile.css';
import { FaChartPie, FaRegCalendarAlt } from "react-icons/fa"
import { GoGear } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { LuPencilLine, LuMicroscope } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";


export default function Profile() {
  return (
    <>
      <div className="App-profile">
        <aside className="sidebar">
	  <div className="prof-info">
            <img className="prof-pic" src={require("../assets/pk_photo.jpg")}
              alt="Dr. Paa Kojo Effah Annan picture" width="150" height="150" />
            <h4>Paa Kojo Effah Annan, MD</h4>
            <p>Senior Oncologist</p>
            <p>Effia-Nkwanta Regional Hospital</p>
          </div>
          <NavLink 
            to="/profile/dashboard" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaChartPie /> Dashboard
          </NavLink>
          <NavLink
	    to="/profile/calendar"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <FaRegCalendarAlt /> Calendar
	  </NavLink>
	  <NavLink
	    to="/profile/analyse"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <LuMicroscope /> Analyse Mammogram
	  </NavLink>
          <NavLink
	    to="/profile/messages"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <AiOutlineMessage /> Messages
	  </NavLink>
          <NavLink
	    to="/profile/patients"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <IoPeopleOutline /> Patients
	  </NavLink>
          <NavLink
	    to="/profile/prescription"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <LuPencilLine /> Prescription
	  </NavLink>
          <NavLink
	    to="/profile/settings"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <GoGear /> Settings
	  </NavLink>
        </aside>
	<main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};
