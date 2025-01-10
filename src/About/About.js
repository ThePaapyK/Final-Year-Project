import React, { useEffect } from "react";
import './About.css';

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div className="about-info">
        <div className="start">
	        <p className="p-head">How It Started</p>
          <p className="pp">Our Dream is to Improve</p>
          <p className="pp">Lives Through Advanced</p>
          <p className="pp">Breast Cancer Screening</p>
          <p className="p-story">
          MammoAI was founded by Paa Kojo Effah Annan. The idea was born during his final year
           at KNUST when he needed to select a topic for his final-year project.
            Recognizing the global impact of breast cancer, he chose to develop a
            convolutional neural network (CNN) to classify mammograms as cancerous
            or non-cancerous. Drawn to the potential of CNNs to enhance diagnosis 
            and improve patient outcomes, Paa Kojo successfully built a robust model
            that impressed his lecturers. This success sparked a deeper curiosity and ambition,
            leading him to envision something greater emerging from his project. 
            That vision became MammoAI, transforming his academic work into a mission for impactful healthcare innovation.
          </p>
          <p className="p-head p-meet">Meet the Founder</p>
          <div className="square">
          <img className="found-pic" src={require("../assets/pk_photo.jpg")} alt="Ing. Paa Kojo Effah Annan" width="150" height="170" />
          <p className="p-founder">
          Meet Paa Kojo Effah Annan, the visionary founder of MammoAI. With a background in
          Electrical and Electronics Engineering from KNUST and a passion for leveraging
          technology to solve real-world problems, Paa Kojo Effah Annan is dedicated to making
          a difference in healthcare. His journey in tech began with an interest in electronics 
          and has evolved into a multifaceted career encompassing web development and artificial intelligence. 
          Driven by the desire to improve diagnostic accuracy and patient outcomes, Paa Kojo Effah Annan
          turned his academic endeavor into a mission to create accessible and reliable
          AI-powered solutions for early breast cancer detection, reflecting a commitment
          to innovation and social impact.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};
