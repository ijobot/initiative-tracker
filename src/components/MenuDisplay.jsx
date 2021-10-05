import React from "react";
import Button from "../utils/Button";

const MenuDisplay = ({
  handleOpenModal,
  handleClearList,
  handleOpenPartyModal,
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
          color="#8CBA80"
          text="Create Party"
          onClick={(e) => handleOpenPartyModal(e, "Player", "#8CBA80")}
          className="btn"
        />
      </div>

      <div>
      <Button
          color="#6a5d83"
          text="Clear Combat List"
          onClick={handleClearList}
          className="btn"
        />
      </div>
    </div>
  );
};

export default MenuDisplay;
