import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

//The function here shows the modal when the help button is clicked on, and closes it with the close button
//The modal shows the rules of the game
function Help() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button className="help-button" onClick={handleShow}>
         HELP
        </Button>
        <Modal className="modal" show={show} onHide={handleClose}>
          <h3 className="modal-header">Pet Match Rules</h3>
        <ol>
              <li>The aim of the game is to select all the matching pairs by remembering what is displayed on 
                   the side that is face-down, and which card displayed it</li>
              <li>Click on any random card to see what is on the other side.</li>
              <li>Take a guess as to which card is the first card's match and click on it.</li>
              <li>If the card that has been selcted matches the first one selected, it will remain face-up.</li>
              <li>If it does not match, both cards will face-down and you will have to try to find the matching pairs again.</li>
              <li>Once all of the matching pairs have been discovered, you have won and you can restart the game if you so choose.</li>
        </ol>
          <Button className="modal-closer restart-button" onClick={handleClose}>
              Close
            </Button>
        </Modal>
      </div>
    );
  }
  
export default Help