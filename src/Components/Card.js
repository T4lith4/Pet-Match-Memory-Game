import React from 'react';
import ReactCardFlip from "react-card-flip";

//The utilized ReactCardFlip is assigned into the constant Card, which is then mapped over in App.js
//The ternary operator asks if it is truthy that the cardNumber is NOT less than one, and either hides the cardd with the css class or displayd front or back
const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={2} >
    <div id={id} className={`card card-front ${cardNumber !== -1 ? " " : "hide-card"}`} onClick={handleClick} key="front">
    </div>

    <div id={id} className={`card card-back ${cardNumber !== -1 ? " " : "hide-card"}`} onClick={handleClick} key="back">
      { cardNumber }
    </div>
  </ReactCardFlip>
);

export default Card;