import React from 'react';
import { useLocation } from 'wouter';
import './GamePage.css';
import logo from './GamePagePics/logo.webp';
import mika from './GamePagePics/mika.png';
import alex from './GamePagePics/alex.png';
import niki from './GamePagePics/niki.png';
import robin from './GamePagePics/robin.png';
import yuki from './GamePagePics/yuki.png';
import ollie from './GamePagePics/ollie.png';

const GamePage = () => {
    const [location, setLocation] = useLocation();

    return (
        <div className="game-page">
            <img src={logo} alt="Logo" className="logo" />
            <div className="characters">
                <div className="left-side">
                    <img src={mika} alt="Mika" className="character" />
                    <img src={alex} alt="Alex" className="character" />
                    <img src={niki} alt="Niki" className="character" />
                </div>
                <div className="right-side">
                    <img
                        src={robin}
                        alt="Robin"
                        className="character"
                        onClick={() => setLocation('/game/robin')}
                    />
                    <img src={yuki} alt="Yuki" className="character" />
                    <img src={ollie} alt="Ollie" className="character" />
                </div>
            </div>
        </div>
    );
};

export default GamePage;