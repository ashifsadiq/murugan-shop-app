import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fireworks from '../Screens/Fireworks';
import image from '../images/murganimage.jpeg';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './FirstPage.css'; // Create a CSS file for styling

const FirstPage = () => {
    const navigate = useNavigate();
    const handle = () => {
        navigate('/home')
    }

    useEffect(() => {
        // Prevent scrolling when the component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="first-page-container">
            <Fireworks />
            <div className="content-container">
                <div>
                    <h4 className="title">MURUGAN PATTASU KADAI</h4>
                </div>
                <img src={image} alt="Image 4" className="main-image" height={400}/>
                <p>
  60% offer is going now <br />
  Place the order <br />
  & <br />
  Enjoy This Diwali with Murugan Pattasu Kadai
</p>


                <div className="button-container">
                    <Button variant="outline-light" className="responsive-button" onClick={handle}>
                        <i className=""></i> Purchase Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
