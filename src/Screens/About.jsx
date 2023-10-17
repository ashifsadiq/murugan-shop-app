import React, { useEffect } from "react";
import Fireworks from "../Screens/Fireworks";
import "./AboutPage.css";
import img1 from "../images/about us.jpg";

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
        <div>
          <p className="about-heading">MURUGAN PATTASU KADAI</p>
        </div>
        <img src={img1} alt="About Us" className="about-image" />
        <h5 className="about-info">
          <i className="bi bi-shop"></i> BRANCH: GANESHAPURAM, KOVILPALAYAM &
          NEELAMBUR.
        </h5>
        <h5 className="about-info">
          <i className="bi bi-phone"></i> CONTACT: 80126 41274 | 96886 20121 |
          94888 83399
        </h5>
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
