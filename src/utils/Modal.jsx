import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Modal = ({
  typeOfEntry,
  colorOfModal,
  handleCloseModal,
  addCombatant,
}) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  if (score !== score) {
    setScore("");
  }

  const handleModalSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.blur();

    if (!name) {
      alert("Please enter combatant's name");
    } else if (!score) {
      alert("Please enter combatant's initiative score");
    }

    const newCombatant = { typeOfEntry, name, score, colorOfModal };
    addCombatant(newCombatant);
    handleCloseModal();
  };

  return (
    <form
      className="modal modal-grid bg-darkgrey border"
      style={{ backgroundColor: colorOfModal }}
    >
      <div className="modal-entry">
        <p className="tall">{typeOfEntry}</p>
      </div>
      <div className="modal-inputs">
        <input
          type="text"
          placeholder="Enter Combatant Name"
          className="bg-darkgrey"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Initiative Score"
          className="bg-darkgrey"
          value={score}
          pattern="[0-9]*"
          onChange={(e) =>
            setScore(parseInt(e.target.value.split(/\D/).join("")))
          }
        />
      </div>

      <div className="modal-buttons">
        <Button
          color="#737373ff"
          text="Submit"
          className="btn"
          onClick={handleModalSubmit}
        />
        <Button
          color="#737373ff"
          text="Cancel"
          className="btn"
          onClick={() => handleCloseModal()}
        />
      </div>
    </form>
  );
};

export default Modal;

Modal.propTypes = {
  typeOfEntry: PropTypes.string.isRequired,
  colorOfModal: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func,
};
