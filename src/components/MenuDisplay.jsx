import React from "react";
import Button from "../utils/Button";

const MenuDisplay = ({ handleOpenModal, handleClearList }) => {
  return (
    <div className="main-menu container bg-darkgrey border">
      <div>
        <h1 className="main-title">Initiative Tracker</h1>
      </div>
      <div>
        <Button
          color="#ACBFA4ff"
          text="Add Player"
          onClick={(e) => handleOpenModal(e, "Player", "#ACBFA4ff")}
          className="btn"
        />
        <Button
          color="#FF7F11ff"
          text="Add Monster"
          onClick={(e) => handleOpenModal(e, "Monster", "#FF7F11ff")}
          className="btn"
        />
        <Button
          color="#E2E8CEff"
          text="Add NPC"
          onClick={(e) => handleOpenModal(e, "NPC", "#E2E8CEff")}
          className="btn"
        />
      </div>
      <div>
        <Button
          color="#6D668Fff"
          text="Clear All"
          onClick={handleClearList}
          className="btn"
        />
      </div>
    </div>
  );
};

export default MenuDisplay;
