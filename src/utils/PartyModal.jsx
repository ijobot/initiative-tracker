import React, { useState } from "react";
import Button from "./Button";
import PartyVisual from "./PartyVisual";

const PartyModal = ({
  typeOfEntry,
  colorOfModal,
  addPartyMember,
  handleClosePartyModal,
  setButtonToggle,
  partyList,
}) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [showPartyDisplay, setShowPartyDisplay] = useState(false);
  const [finishButtonToggle, setFinishButtonToggle] = useState(false);

  const handleAddPartyMember = (e) => {
    e.preventDefault();
    e.target.blur();

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
    setFinishButtonToggle(true);
  };

  const handleFinishPartyCreation = () => {
    setShowPartyDisplay(false);
    setFinishButtonToggle(false);
    handleClosePartyModal();
    setButtonToggle(true);
  };

  if (score !== score) {
    setScore("");
  }

  return (
    <form
      className="modal party-modal-grid bg-darkgrey border"
      style={{ backgroundColor: colorOfModal }}
    >
      <h3 className="party-modal-entry">Enter Party Names</h3>
      <div className="party-modal-input">
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

      <div className="party-modal-buttons">
        <Button
          color="#737373ff"
          text="Add"
          className="btn"
          onClick={handleAddPartyMember}
        />
        <Button
          color="#737373ff"
          text="Cancel"
          className="btn"
          onClick={() => handleClosePartyModal()}
        />
      </div>
      <div className="party-modal-finish">
        {finishButtonToggle && (
          <Button
            color="#737373ff"
            text="Complete Party Creation"
            className="btn"
            onClick={() => handleFinishPartyCreation()}
          />
        )}
      </div>
      {showPartyDisplay && <PartyVisual partyList={partyList} />}
    </form>
  );
};

export default PartyModal;
