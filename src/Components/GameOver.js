//This displays the message when the game is won
import React from 'react';
import Countdown from 'react-countdown-now';

//define that we only want seconds instead of 00:00:00
const renderer = ({ seconds}) => {
  return <span>
          {seconds}
        </span>
}

//GameOver component displays that the game has been won and starts a countdown, which, when done automatically restarts the game
const GameOver = ({ restartGame }) => (
  <div>
    <br/>
      <h1 className="count-down">The game will automatically restart in</h1> <br/>
      <h1 className="count-down-seconds">
        <Countdown date={Date.now() + 10000} onComplete={restartGame} renderer={renderer}>
       </Countdown></h1>
       <h1 className="win-message">YOU WIN</h1>
    </div>
)

export default GameOver;