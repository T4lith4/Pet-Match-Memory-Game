import React, { PureComponent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Components/Card";
import GameOver from "./Components/GameOver";
import "./App.css";
import Restart from "./Components/Restart";

//In order fot the game to update, we need to create initial states inside a Pure Componenet
class App extends PureComponent {
  state = {
    isFlipped: Array(12).fill(false),
    shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1
  };

  static duplicateCard = () => {
    //Method for duplicating the array of images, each card image should have a duplicate.
    return [  
              <img className="card-image" src="https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg" alt="a"/>, 
              <img className="card-image" src="https://img.chuing.net/i/QpHHJJp/14-a-dogs-way-home.w700.h700.jpg" alt="b"/>, 
              <img className="card-image" src="https://www.airc.ie/wp-content/uploads/horse-web.jpg" alt="c"/> , 
              <img className="card-image" src="https://cdn-5a0e3a56f911ca1e30bcc5f0.closte.com/wp-content/uploads/2018/05/fish-2.jpg" alt="d"/>, 
              <img className="card-image" src="https://supremepetfoods.com/wp-content/uploads/2017/02/Syrian.jpg" alt="e"/>,
              <img className="card-image" src="https://live.staticflickr.com/3660/3599464112_f2c92afcda_b.jpg" alt="f"/>
          ].reduce(
      (preValue, current) => {
        //This array is randomised when it is passed to the state object shuffledCard.
        return preValue.concat([current, current]);
      },
      []
    );
  };

  //Method for flipping card when it is clicked on to reveal the card number.
  handleClick = event => {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
      prevSelectedCard: this.state.shuffledCard[cardId],
      prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      }));
      //if the number of flipped cards is two so we can check if the two cards are a match.
      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;
        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  //We checks if the two flipped cards are a match.
  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        //method used while setting the state is so that the card flip will not be abrupt.
        this.setState(prevState => ({
          shuffledCard: hideCard
        }));
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isFlipped: flipBack }));
      }, 1000);
    }
  };

  //The Restart Method restarts the game
  restartGame = () => {
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  //If the game is over, the GameOver component is displayed.
  isGameOver = () => {
    return this.state.isFlipped.every(
      (element) => element !== false
    );
  };

  /*The Header component is passed restartGame props. 
  The isGameOver method is used to render the GameOver component when the game is over otherwise, 
  the Card component is rendered.*/

  render() {
    return (
      <div>
        <Restart restartGame={this.restartGame} />
        {this.isGameOver() ? (
          <GameOver restartGame={this.restartGame} />
        ) : (
          <div className="grid-container">
            {this.state.shuffledCard.map((cardNumber, index) => (
              <div  key={index}>
                <br/>
              <Card
                key={index}
                id={index}
                cardNumber={cardNumber}
                isFlipped={this.state.isFlipped[index]}
                handleClick={this.handleClick}
              /> 
          </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;

