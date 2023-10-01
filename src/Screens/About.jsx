import React from 'react';
import Fireworks from '../Screens/Fireworks';
// import image1 from '../images/image1.jpg';
// import image2 from '../images/image2.jpg';
// import image3 from '../images/image3.jpg';
// import image4 from '../images/image4.jpg';
import { Link } from 'react-router-dom';
const AboutPage = () => {

    // const handleDownload = () => {
    //     const pdfUrl = 'order/pdf/rpt_price_list.php?format=1';
    //     window.open(pdfUrl, '_blank');
    // };
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
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
            }}>  <div style={{
                textAlign: "left",
                display: 'flex',
                alignItems: 'flex-start',
                marginLeft: 30
            }}>
                    <Link to="/home">
                        Go Back
                    </Link>
                </div>
              
                <div style={{
                    display: 'block',
                    marginTop: '500px',
                }}>
                    <h2 style={{
                        marginLeft: '20px',
                        color: 'purple',
                        fontSize: '2em',
                    }}>About Us :</h2>
                    <div>
                        <h5 style={{ marginLeft: '80px', color: '#ddd' }}>
                            MURUGAN PATTASU KADAI .
                        </h5>
                        <h5 style={{ marginLeft: '80px', color: '#ddd' }}>
                            <i className="bi bi-shop"></i> BRANCH: GANESHAPURAM, KOVILPALAYAM & NEELAMBUR.
                        </h5>
                        <h5 style={{ marginLeft: '80px', color: '#ddd' }}>
                            <i className="bi bi-phone"></i> CONTACT: 80126 41274 | 96886 20121 | 94888 83399
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;