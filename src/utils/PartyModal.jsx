import React, { useState } from "react";
import Button from "./Button";

const PartyModal = ({
  typeOfEntry,
  colorOfModal,
  addPartyMember,
  addCombatant,
  handleClosePartyModal,
}) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

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
    addPartyMember(newCombatant);
    handleClosePartyModal();
  };

  if (score !== score) {
    setScore("")
  }

  return (
    <form
      className="modal modal-grid bg-darkgrey border"
      style={{ backgroundColor: colorOfModal }}
    >
      <h3 className="modal-entry">{typeOfEntry}</h3>
      <div className="modal-inputs">
        <input
          type="text"
          placeholder="Enter Combatant Name"
          className="bg-darkgrey border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Initiative Score"
          className="bg-darkgrey border"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value.split(/\D/).join('')))}
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
          onClick={() => handleClosePartyModal()}
        />
      </div>
    </form>
  );
};

export default PartyModal;
