import React from 'react';
import { useLocation } from 'wouter';
import './MainPage.css';

import logo from './MainPagePics/logo.webp';
import foxy from './MainPagePics/foxy.png';

const MainPage = () => {
    const [, setLocation] = useLocation();

    const handleClick = () => {
        setLocation('/games');
    };

    return (
        <div className="main-page">
            <img src={logo} className="logo" alt="Logo" />

            <div className="foxy-section">
                <img src={foxy} className="foxy" alt="Foxy" />
                <div className="foxy-text">
                    <h2>Come join the fun with me</h2>
                    <button className="play-button" onClick={handleClick}>
                        <i className="play-icon">►</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
