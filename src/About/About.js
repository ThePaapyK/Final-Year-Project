import React, { useEffect } from "react";
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div className="about-info">
	  <h4>Kojo Annan</h4>
	  <p>Child of God</p>
      </div>
    </>
  );
};
