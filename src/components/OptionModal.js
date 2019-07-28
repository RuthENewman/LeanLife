import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.chosenOption}
      onRequestClose={props.clearChosenOption}
      contentLabel="Chosen Option"
    >
      <h3>Chosen option</h3>
      {props.chosenOption && <p>{props.chosenOption}</p>}
      <button onClick={props.clearChosenOption}>Okay</button>
    </Modal>
  );

export default OptionModal;
