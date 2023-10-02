import React from 'react';
import Fireworks from '../Screens/Fireworks';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <Fireworks />
            <div className="about-content">
            <h3 className="about-heading">About us</h3>
                <div>
                    <p className="about-heading">MURUGAN PATTASU KADAI</p>
                </div>
                <p className="description">
                    We take pleasure in introducing ourselves as one of the best retail fancy fireworks suppliers in the market who cares most about quality and customer satisfaction. "Safety first" - this is the first motto of Murugan Pattasu Kadai, so we have chosen the Naachiar Fireworks manufacturer who has been in the field for 20-plus years. 
                    At Murugan Pattasu Kadai, you can order Diwali crackers, crackers gift boxes, fancy crackers, and crackers for special occasions online at a reasonable price with the safest door/area delivery.

                    “A satisfied customer is one who will continue to buy from you, seldom shop around, refer other customers and in general be a superstar advocate for your business.” ~ Gregory Ciotti
                </p>
                <h5 className="about-info"><i className="bi bi-shop"></i> BRANCH: GANESHAPURAM, KOVILPALAYAM & NEELAMBUR.</h5>
                <h5 className="about-info"><i className="bi bi-phone"></i> CONTACT: 80126 41274 | 96886 20121 | 94888 83399</h5>
                
            </div>
        </div>
    )
}

export default AboutPage;
