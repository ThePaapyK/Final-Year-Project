import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Outlet, NavLink } from 'react-router-dom';
import './Profile.css';
import { FaChartPie, FaRegCalendarAlt } from "react-icons/fa"
import { GoGear } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { LuPencilLine, LuMicroscope } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";


export default function Profile() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

 
   useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error(error);
	navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }


   const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      console.error(err.response);
    }
  };


  return (
    <>
      <div className="App-profile">
        <aside className="sidebar">
	  <div className="prof-info">
            <img className="prof-pic" src={require("../assets/pk_photo.jpg")} alt="Dr. Paa Kojo Effah Annan" width="150" height="150" />
            <h4>{user.firstName} {user.middleNames} {user.lastName}, MD</h4>
            <p>{user.job_title}</p>
           <p>{user.company}</p>
          </div>
          <NavLink 
            to="/profile/dashboard" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaChartPie className="icons"/> Dashboard
          </NavLink>
          <NavLink
	    to="/profile/calendar"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <FaRegCalendarAlt className="icons"/> Calendar
	  </NavLink>
	  <NavLink
	    to="/profile/analyse"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <LuMicroscope className="icons"/> Analyse Mammogram
	  </NavLink>
          <NavLink
	    to="/profile/messages"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <AiOutlineMessage className="icons"/> Messages
	  </NavLink>
          <NavLink
	    to="/profile/patients"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <IoPeopleOutline className="icons"/> Patients
	  </NavLink>
          <NavLink
	    to="/profile/prescription"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <LuPencilLine className="icons"/> Prescription
	  </NavLink>
          <NavLink
	    to="/profile/settings"
	    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
	  >
	    <GoGear className="icons"/> Settings
	  </NavLink>
	  <button className="logout" onClick={handleLogout}><IoExitOutline className="icons"/> Log out</button>
        </aside>
	<main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};
