import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="App-footer">
     <div className="App-foo">
      <blockquote>
        <h1>MammoAI</h1>
        <p>Room 205</p>
        <p>Caesar Building</p>
        <p>Kwame Nkrumah University of Science and Technology</p>
      </blockquote>
      <ul>
        <li className="social-item">
          <a href="https://www.facebook.com/profile.php?id=100010161783387">
            < FaFacebookF className="socimg"/>
          </a>
        </li>
        <li className="social-item">
          <a href="https://twitter.com/ThePaapy_K?s=09">
            <FaXTwitter className="socimg" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.instagram.com/paapy_k?igsh=Yng1anh3cmdyZTFk&utm_source=qr">
            <FaInstagram className="socimg" />
          </a>
        </li>
      </ul>
     </div>
      <hr />
      <p className="policies">
      <span className="copy">&copy; 2024  Fobistems Corp.</span>
      <span className="poli">
       <a href="#">Terms of use </a>
       <a href="#">Privacy Policy </a>
       <a href="#">Cookie Policy</a>
      </span>
      </p>
    </div>
  );
};
