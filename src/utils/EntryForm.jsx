import React, { useState } from "react";
import Button from "./Button";

const EntryForm = ({ typeOfEntry, colorOfModal }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [showEntryForm, setShowEntryForm] = useState(true);

  const onEntrySubmit = (e) => {
    e.preventDefault();
    e.currentTarget.blur();

    if (!name) {
      alert("Please enter combatant's name");
    } else if (!score) {
      alert("Please enter combatant's initiative score");
    }
    setName(name);
    setScore(score);
    setShowEntryForm(!showEntryForm);
    const createdCombatant = { typeOfEntry, name, score };

    console.log(createdCombatant);
  };

  const onEntryCancel = (e) => {
    setShowEntryForm(!showEntryForm);
  };

  //new function that spreads info into array

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
          onChange={(e) => setScore(e.target.value)}
        />
      </div>

      <div className="modal-buttons">
        <Button
          color="#737373ff"
          text="Submit"
          className="btn"
          onClick={onEntrySubmit}
        />
        <Button
          color="#737373ff"
          text="Cancel"
          className="btn"
          onClick={onEntryCancel}
        />
      </div>
    </form>
  );
};

export default EntryForm;
