import React from "react";
import Button from "../utils/Button";
import Dropdown from "../utils/Dropdown";

const Combatant = ({
  typeOfEntry,
  removeCombatant,
  name,
  score,
  colorOfModal: colorOfDiv,
  index,
  editCombatant,
}) => {
  const handleEditCombatant = (editedScore, index) => {
    editCombatant(editedScore.target.value, index);
  };

  return (
    <div
      style={{ backgroundColor: colorOfDiv }}
      className="container combatant-row"
    >
      <p>{typeOfEntry}</p>
      <p>{name}</p>
      <div className="score-picker">
        <select
          style={{ backgroundColor: colorOfDiv }}
          className="score-list"
          name="score"
          onChange={(editedScore) => handleEditCombatant(editedScore, index)}
        >
          <option className="score-option">{score}</option>
          <Dropdown />
        </select>
      </div>
      <Button
        text="X"
        color="#6a5d83"
        className="btn btn-small"
        onClick={() => removeCombatant(index)}
      />
    </div>
  );
};

export default Combatant;
