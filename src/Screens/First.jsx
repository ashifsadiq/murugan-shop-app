import React from 'react';
import { Link } from 'react-router-dom';
import Fireworks from '../Screens/Fireworks';
import image from '../images/murganimage.jpg';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const FirstPage = () => {
    const navigate = useNavigate();
    const handle = () => {
        navigate('/home')
    }

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
        }}>
            <Fireworks />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div>
                    <h4
                        style={{
                            textAlign: "center",
                            color: "White",
                            marginBottom: "50px",
                            fontSize: "29px",
                        }}>MURUGAN PATTASU KADAI</h4>
                </div>
                <img src={image} alt="Image 4" height={400} />
                <div style={{ textAlign: "center", height: '20', margin: 20 }}>
                    <Button variant="outline-light" className="responsive-button" onClick={handle}>
                        <i className="bi bi-house-door"></i> Click
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
