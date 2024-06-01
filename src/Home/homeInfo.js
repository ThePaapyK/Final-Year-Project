import React from "react";
import './home-info.css';
import { PiStarFourFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

export default function HomeInfo() {
  return (
    <>
      <div className="home-page">
	<div className="home-info">
	  <p className="welcome"><span><PiStarFourFill /></span>Welcome to MammoAI</p>
	  <p className="p-1">Accurate</p>
	  <p className="p-1">Mammogram Analysis,</p>
	  <p className="p-1">Better Patient Outcomes</p>
	  <p className="mAI">MammoAI</p>
	  <p className="desc">
	    Empowering Early Detection: Harnessing AI and
	    Convolutional Neural Networks to Accurately Classify
	    Mammograms and Diagnose Breast Cancer with Precision
	  </p>
	  <Link to="/signup" className="button">Get Started</Link>
	  <div className="stats">
	    <blockquote>
	      <p className="figure">99%</p>
	      <p className="word">Accuracy</p>
	    </blockquote>
	    <blockquote>
	      <p className="figure">1800</p>
              <p className="word">Patients Served</p>
            </blockquote>
	    <blockquote>
	      <p className="figure">257</p>
	      <p className="word">Enrolled Doctors</p>
            </blockquote>
	  </div>
	</div>
      </div>
    </>
  );
};

