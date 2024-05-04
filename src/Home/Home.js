import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';
import cover from '../assets/mammo_diag.jpeg';
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMicroscope } from "react-icons/fa";
import { MdPersonalInjury } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div className="App-body">
        <img src={cover} className="cover-photo" alt="cover-photo" />
        <h1> Key Features </h1>
        <div className="Features">
          <article className="col-1">
            <GiArtificialIntelligence className="imge" />
            <blockquote>
              <h3>Digital Mammogram Analysis</h3>
              <p>Advanced Technology _for precise intepretation of mammogram images</p>
            </blockquote>
          </article>
          <article className="col-1">
            <FaMicroscope className="imge" />
            <blockquote>
              <h3>Early Detection</h3>
              <p>Identifying potential issues at early
                stages for prompt intervention </p>
            </blockquote>
          </article>
          <article className="col-1">
            <MdPersonalInjury className="imge" />
            <blockquote>
              <h3>Personalized Results</h3>
              <p>Results made just for you</p>
            </blockquote>
          </article>
        </div>
        <Link to="/login" className="button">Get Started</Link>
      </div>
      <Footer />
    </>
  );
};
