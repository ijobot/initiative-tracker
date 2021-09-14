import React, { useState } from "react";
import Button from "./Button";

const EntryForm = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter combatant's name");
    } else if (!score) {
      alert("Please enter combatant's initiative score");
      return;
    }
  };

  return (
    <form className="modal modal-grid bg-darkgrey border">
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
          color="#737373"
          text="Submit"
          className="btn"
          onClick={onSubmit}
        />
        <Button color="#737373" text="Cancel" className="btn" />
      </div>
    </form>
  );
};

export default EntryForm;
