import React, { useEffect } from "react";
import Fireworks from "../Screens/Fireworks";
import "./AboutPage.css";
import img1 from "../images/about us.jpg";
import img2 from "../images/edited - about us.jpg";

const AboutPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="about-page-container">
    <div className="fireworks-container">
      <Fireworks />
    </div>
    <div className="about-content">
      <h3 className="about-heading">About us</h3>
      <img src={img2} alt="About Us" className="about-image" /> {/* Add this line */}
      <div>
        <h1 className="bi bi-shop"> BRANCH</h1>
        <ul className="custom-bullet-list">
          <li>GANESHAPURAM</li>
          <li>KOVILPALAYAM &</li>
          <li>NEELAMBUR</li>
        </ul>
        <div className="contact">
          <h5 className="contact_content">
            <i className="bi bi-phone" style={{ fontWeight: 'bold'   }}></i> CONTACT: 80126 41274 |<br /> 96886 20121 |
            94888 83399
          </h5>
        </div>
      </div>
    
      <h5 className="about-info">
        <a
          href="https://www.instagram.com/muruganpattasukadai/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <i className="bi bi-instagram instagram-icon"></i> Instagram
        </a>
      </h5>
    </div>
  </div>
  );
};

export default AboutPage;
