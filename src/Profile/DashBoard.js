import React, { useEffect } from "react";
import './DashBoard.css';
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { getFormattedDate,  getFormattedTime }  from './utils';

export default function DashBoard() {
  useEffect(() => {
    document.title = "DashBoard";
  }, []);

  return (
    <>
      <div className="dash">
	<div className="Top-items">
          <h3>Dashboard</h3>
	  <div className="top">
	    <div className="date"> <FaRegCalendarAlt className="ico" /> <span>{ getFormattedDate() }</span></div>
	    <div className="time"><FaRegClock className="ico" /> <span>{ getFormattedTime() }</span></div>
	    <div className="search-bar">
	      <LuSearch className="search-icon"/>
              <input type="text" placeholder="Search for..." />
	    </div>
          </div>
        </div>
	<div className="lower-items">
	</div>
  </div>
    </>
  );
};
