import React from "react";
import Button from "../utils/Button";

const Combatant = ({ typeOfEntry, name, score, colorOfModal: colorOfDiv }) => {
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
        // onClick={() => handleCloseDiv()}
      />
    </div>
  );
};

export default Combatant;
