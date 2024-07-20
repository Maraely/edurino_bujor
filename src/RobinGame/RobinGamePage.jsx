import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable.jsx';
import Droppable from './Droppable.jsx';
import './RobinGame.css';
import logo from './RobinGamePics/logo.png';
import banana from './RobinGamePics/banana.png';
import peach from './RobinGamePics/peach.png';
import ananas from './RobinGamePics/ananas.png';
import apple from './RobinGamePics/apple.png';
import blueberry from './RobinGamePics/blueberry.png';

const fruits = [
    { id: 'banana', img: banana, correctNumber: 1 },
    { id: 'peach', img: peach, correctNumber: 2 },
    { id: 'ananas', img: ananas, correctNumber: 3 },
    { id: 'apple', img: apple, correctNumber: 4 },
    { id: 'blueberry', img: blueberry, correctNumber: 5 }
];

const numbers = [4, 1, 3, 5, 2];

const RobinGamePage = () => {
    const [droppedElements, setDroppedElements] = useState({});
    const [incorrectDrops, setIncorrectDrops] = useState({});
    const [, setLocation] = useLocation();

    useEffect(() => {
        if (checkAllCorrect()) {
            setLocation('/congratulations');
        }
    }, [droppedElements]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over) {
            const correct = fruits.find(fruit => fruit.id === over.id).correctNumber.toString() === active.id;
            if (correct) {
                setDroppedElements((prev) => ({ ...prev, [over.id]: active.id }));
                setIncorrectDrops((prev) => ({ ...prev, [over.id]: false }));
            } else {
                setIncorrectDrops((prev) => ({ ...prev, [over.id]: true }));
            }
        }
    };

    const checkAllCorrect = () => {
        return fruits.every((fruit) => droppedElements[fruit.id] === fruit.correctNumber.toString());
    };

    return (
        <div className="robin-game-page">
            <div className="game-header">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <DndContext onDragEnd={handleDragEnd}>
                <div className="game-area">
                    <div className="fruits-section">
                        {fruits.map((fruit) => (
                            <Droppable key={fruit.id} id={fruit.id}>
                                <div className={incorrectDrops[fruit.id] ? 'incorrect-drop' : ''}>
                                    <img src={fruit.img} alt={fruit.id} className="fruit-img" />
                                </div>
                            </Droppable>
                        ))}
                    </div>
                    <div className="numbers-section">
                        {numbers
                            .filter(number => !Object.values(droppedElements).includes(number.toString()))
                            .map((number) => (
                            <Draggable key={number} id={number.toString()}>
                                <div className="draggable">{number}</div>
                            </Draggable>
                        ))}
                    </div>
                </div>
            </DndContext>
        </div>
    );
};

export default RobinGamePage;
