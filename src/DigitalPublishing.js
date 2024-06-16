// src/DigitalPublishing.js
import React from 'react';
import './DigitalPublishing.css';
import logo from './assets/logo-2-550x123-1.jpg';
import deImage from './assets/de.jpg';
import BulletPoints from './BulletPoints';

const DigitalPublishing = () => {
    return (
        <div>
            <div className="top-section">
                <h1 className="digital-publishing-heading" style={{ paddingTop: '100px' }}>Digital Publishing</h1>
                <h1 className="data-under" style={{ paddingBottom: '10px' }}>Learning Spiral AI &gt;&gt; Digital Publishing</h1>
            </div>

            <div className="navbar">
                <img src={logo} width="192" height="62" alt="Logo" />
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#use-cases">Use Cases</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button className="call-now-button" onClick={() => window.location.href='tel:YOUR_PHONE_NUMBER_HERE'}>Call us now</button></li>
                </ul>
            </div>

            <div className="imagesection">
                <img src={deImage} alt="Image Description" width="615" height="580" />
                <p className="text-right">Digital Publishing Services Rooted in Effectiveness</p>
                <p className="text-right1">We are proud to be one of India's leading Digital Publishing Solution 
                providers, consistently exceeding client expectations with a technology-driven approach. Our services 
                are innovative, fast, and error-free, grounded in effective, tested Internet marketing strategies. 
                We aim to help you build a sustainable, intuitive, results-driven online presence through our 
                comprehensive digital publishing solutions.</p>
            </div>

            <BulletPoints />

            <div className="footer">
                <div className="footer1">
                    <img src={logo} style={{ height: '50px', width: '170px', marginLeft: '130px' }} alt="Footer Logo" />
                    <p style={{ marginLeft: '134px', fontSize: '18px' }}>Learning Spiral, Data <br />Labeling company offers <br /> qualitative data annotation & <br />data labeling services at scale.</p>
                </div>

                <div className="footer2">
                    <h2 style={{ marginTop: '12px' }}>Contact Us</h2>
                    <p>5th floor, 3A, Auckland Rd,<br /> Elgin, Kolkata, West Bengal <br /> 700017</p>
                    <p>+91 722 4061 676</p>
                    <p>humans@learningspiral.ai</p>
                </div>

                <div className="footer3">
                    <p>3rd Floor, Webel IT Park, Taratala <br />Road, Kolkata, West Bengal 700088</p>
                    <p style={{ marginTop: '47px' }}>524 Sunset View DR Davenport, FL <br /> 33837</p>
                </div>

                <div className="footer4">
                    <p>501 5th floor, Atlantis the Corporate <br />Park, Telibandha Ring Rd No 1,<br /> Raipur, Chhattisgarh 492001</p>
                </div>
            </div>

            <h3 style={{ backgroundColor: 'rgb(116, 180, 248)', paddingLeft: '150px', marginTop: '-10px', paddingBottom: '20px' }}>© Copyright 2020 Learning Spiral - All Rights Reserved</h3>
        </div>
    );
};

export default DigitalPublishing;
