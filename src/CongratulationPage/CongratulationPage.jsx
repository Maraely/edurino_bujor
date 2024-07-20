import React from 'react';
import { useLocation } from 'wouter';
import QRCode from 'qrcode.react';
import './CongratulationPage.css';
import GroupImage from './CongratulationPics/group.png';
import Home from './CongratulationPics/home.png';

const CongratulationPage = () => {
    const [, setLocation] = useLocation();

    const handleBackToGame = () => {
        setLocation('/');
    };

    return (
        <div className="congratulation-page">
            <div className="background-rectangle"></div>
            <h1 className="congratulations-text">Congratulations!</h1>
            <h2 className="you-did-it-text">You did it!</h2>
            <div className="qr-code">
                <QRCode value="https://edurino.com" size={128} />
            </div>
            <div className="round-btn" onClick={handleBackToGame}>
                <img src={Home} alt="home"/>
            </div>
           <div className="group-container">
            <img src={GroupImage} alt="Group" className="group-image" />
            </div>
        </div>
    );
};

export default CongratulationPage;
