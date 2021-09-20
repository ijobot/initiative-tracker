import React from "react";
import Button from "../utils/Button";

const Combatant = ({
  typeOfEntry,
  removeCombatant,
  name,
  score,
  colorOfModal: colorOfDiv,
  index,
}) => {
  return (
    <div
      style={{ backgroundColor: colorOfDiv }}
      className="container combatant-row"
    >
      <p>{typeOfEntry}</p>
      <p>{name}</p>
      <p>{score}</p>
      <Button
        text="X"
        color="#6D668Fff"
        className="btn btn-small"
        onClick={() => removeCombatant(index)}
      />
    </div>
  );
};

export default Combatant;
