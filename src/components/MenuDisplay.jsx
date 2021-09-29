import React from "react";
import Button from "../utils/Button";

const MenuDisplay = ({
  handleOpenModal,
  handleOpenPartyModal,
  handleClearList,
  handleAddParty,
  handleClearParty,
}) => {
  return (
    <div className="main-menu container bg-darkgrey border">
      <div>
        <h1 className="main-title">Initiative Tracker</h1>
      </div>
      <div>
        <Button
          color="#8CBA80"
          text="Add Player"
          onClick={(e) => handleOpenModal(e, "Player", "#8CBA80")}
          className="btn"
        />
        <Button
          color="#DA4167"
          text="Add Monster"
          onClick={(e) => handleOpenModal(e, "Monster", "#DA4167")}
          className="btn"
        />
        <Button
          color="#2E86AB"
          text="Add NPC"
          onClick={(e) => handleOpenModal(e, "NPC", "#2E86AB")}
          className="btn"
        />
      </div>
      <div>
        <Button
          color="#CACF85"
          text="Create New Party"
          onClick={(e) => handleOpenPartyModal(e, "Player", "#CACF85")}
          className="btn"
        />
        <Button
          color="#CACF85"
          text="Add Saved Party"
          onClick={(e) => handleAddParty(e)}
          className="btn"
        />
        <Button
          color="#CACF85"
          text="Clear Saved Party"
          onClick={(e) => handleClearParty(e)}
          className="btn"
        />
      </div>
      <div>
        <Button
          color="#6a5d83"
          text="Clear Display"
          onClick={handleClearList}
          className="btn"
        />
      </div>
    </div>
  );
};

export default MenuDisplay;
