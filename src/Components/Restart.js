//This component attaches the restart function to the button with the Restart Game Prop
import React from "react";
import Help from "./Help";

//I have embedded the <Help/> component here so that it can be situated in the first div which is the grid-header-container
const Restart = ({ restartGame }) => (
  <div>
    <div className="grid-header-container"><h1 className="heading-text">PET MATCH</h1></div><br/>
    <div className="grid-footer-container"> <button onClick={restartGame} className="restart-button">RESTART</button><Help/></div><br/> 
  </div>
)

export default Restart;


