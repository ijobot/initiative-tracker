import React, { useState } from "react";
import Button from "./Button";

const EntryForm = () => {
  return (
    <form className="modal modal-grid bg-darkgrey border">
      <div className="modal-inputs">
        <input
          type="text"
          placeholder="Enter Combatant Name"
          className="bg-darkgrey border"
        />

        <input
          type="text"
          placeholder="Enter Initiative Score"
          className="bg-darkgrey border"
        />
      </div>

      <div className="modal-buttons">
        <Button color="#737373" text="Submit" className="btn" />
        <Button color="#737373" text="Cancel" className="btn" />
      </div>
    </form>
  );
};

export default EntryForm;
