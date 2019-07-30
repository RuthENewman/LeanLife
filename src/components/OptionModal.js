import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.chosenOption}
      onRequestClose={props.clearChosenOption}
      contentLabel="Chosen Option"
      closeTimeoutMS={400}
      className="modal"
    >
      <h3 className="modal__title">Your choice is: </h3>
      {props.chosenOption && <p className="modal__body">{props.chosenOption}</p>}
      <button className="button" onClick={props.clearChosenOption}>OK</button>
    </Modal>
  );

export default OptionModal;
