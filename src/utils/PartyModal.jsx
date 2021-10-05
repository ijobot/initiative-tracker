import React, { useState } from "react";
import Button from "./Button";
import PartyVisual from "./PartyVisual";

const PartyModal = ({
  typeOfEntry,
  colorOfModal,
  addPartyMember,
  handleClosePartyModal,
  partyList,
}) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [showPartyDisplay, setShowPartyDisplay] = useState(false);

  const handleAddPartyMember = (e) => {
  const handleModalSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.blur();

    if (!name) {
      alert("Please enter combatant's name");
    } else if (!score) {
      alert("Please enter combatant's initiative score");
    }
    const newPartyMember = { typeOfEntry, name, score, colorOfModal };
    setShowPartyDisplay(true);
    addPartyMember(newPartyMember);
    setName("");
    setScore("");
  };

  const handleFinishPartyCreation = () => {
    setShowPartyDisplay(false);
    handleClosePartyModal();
  };

  if (score !== score) {
    setScore("");
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
          className="bg-darkgrey"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Initiative Score"
          className="bg-darkgrey"
          value={score}
          onChange={(e) =>
            setScore(parseInt(e.target.value.split(/\D/).join("")))
          }
        />
      </div>

      <div className="modal-buttons">
        <Button
          color="#737373ff"
          text="Add"
          className="btn"
          onClick={handleAddPartyMember}
          onClick={handleModalSubmit}
        />
        <Button
          color="#737373ff"
          text="Cancel"
          className="btn"
          onClick={() => handleClosePartyModal()}
        />
      </div>
      <div className="modal-finish-party">
        <Button
          color="#737373ff"
          text="Finish"
          className="btn"
          onClick={() => handleFinishPartyCreation()}
          onClick={() => handleClosePartyModal()}
        />
      </div>
      {showPartyDisplay && <PartyVisual partyList={partyList} />}
    </form>
  );
};
}
export default PartyModal;