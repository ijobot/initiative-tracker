import React, { useState } from "react";
import Button from "../utils/Button";
import EntryForm from "../utils/EntryForm";

const MenuDisplay = () => {
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [typeOfEntry, setTypeOfEntry] = useState("");
  const [colorOfModal, setColorOfModal] = useState("");

  const openEntryForm = (e) => {
    e.currentTarget.blur();
    setShowEntryForm(!showEntryForm);
    setTypeOfEntry(e.currentTarget.innerText.slice(4));
    setColorOfModal(e.target.style.backgroundColor);
  };

  const closeEntryForm = (e) => {
    e.currentTarget.blur();
    setShowEntryForm(!showEntryForm);
  };

  return (
    <div className="main-menu container bg-darkgrey border">
      <div>
        <h1 className="main-title">Initiative Tracker</h1>
      </div>
      <div>
        <Button
          color="#17d127ff"
          text="Add Player"
          onClick={openEntryForm}
          className="btn"
        />
        <Button
          color="#e83333ff"
          text="Add Monster"
          onClick={openEntryForm}
          className="btn"
        />
        <Button
          color="#4d0be6ff"
          text="Add NPC"
          onClick={openEntryForm}
          className="btn"
        />
      </div>
      <div>
        <Button
          color="#737373ff"
          text="Clear All"
          // onClick={clearCombatDisplay}
          className="btn"
        />
      </div>
      {showEntryForm && (
        <EntryForm
          typeOfEntry={typeOfEntry}
          onEntryFormSubmit={closeEntryForm}
          colorOfModal={colorOfModal}
        />
      )}
    </div>
  );
};

export default MenuDisplay;
