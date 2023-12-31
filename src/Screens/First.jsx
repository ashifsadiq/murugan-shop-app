import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Fireworks from "../Screens/Fireworks";
import image from "../images/murganimage.jpeg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css"; // Create a CSS file for styling

import img1 from "../images/1st half.png";
import img3 from "../images/murugan.png";
import img2 from "../images/2nd half.png";

const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handle = () => {
    navigate("/home");
  };

  return (
    <div className="first-page-container">
      <div className="content-container">
        <img src={img3} alt="Diwali Sale Banner" className="sale-banner" />
        {/* <img src={img1} alt="Diwali Sale Banner" className="small-banner m-2" /> */}

        {/* <img src={img2} alt="Diwali Sale Banner" className="small-banner m-2" /> */}
      </div>
      <div className="button-container ">
        <Button
          variant="outline-light"
          className="responsive-button btn-lg "
          onClick={handle}
        >
          <i className=""></i> Purchase Now
        </Button>
      </div>
    </div>

  
    
  );
};

export default FirstPage;
