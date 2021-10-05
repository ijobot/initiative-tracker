import React from "react";
import Button from "../utils/Button";
import DropdownScore from "../utils/DropdownScore";
import DropdownType from "../utils/DropdownType";
import NameModal from "../utils/NameModal"

const Combatant = ({
  typeOfEntry,
  removeCombatant,
  name,
  score,
  colorOfModal: colorOfDiv,
  index,
  editCombatantScore,
  editCombatantType,
  handleOpenNameModal,
  handleCloseNameModal,
  editCombatantName,
  showNameModal
}) => {
  


  const handleEditCombatantType = (editedType, index) => {
    editCombatantType(editedType.target.value, index);
  };

  const handleEditCombatantScore = (editedScore, index) => {
    editCombatantScore(editedScore.target.value, index);
  };

    return (
    <div
      style={{ backgroundColor: colorOfDiv }}
      className="container combatant-row"
    >
      <div className="score-picker">
        <select
          style={{ backgroundColor: colorOfDiv }}
          className="score-list"
          name="type"
          onChange={(editedType) => handleEditCombatantType(editedType, index)}
        >
          <option className="score-option">{typeOfEntry}</option>
          <DropdownType />
        </select>
      </div>

      <p onClick={(e) => handleOpenNameModal(typeOfEntry, colorOfDiv)}>{name}</p>

      <div className="score-picker">
        <select
          style={{ backgroundColor: colorOfDiv }}
          className="score-list"
          name="score"
          onChange={(editedScore) =>
            handleEditCombatantScore(editedScore, index)
          }
        >
          <option className="score-option">{score}</option>
          <DropdownScore />
        </select>
      </div>
      <Button
        text="X"
        color="#6a5d83"
        className="btn btn-small"
        onClick={() => removeCombatant(index)}
      />

      {showNameModal && (
        <NameModal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfDiv}
          handleCloseNameModal={handleCloseNameModal}
          editCombatantName={editCombatantName}
          index={index}
        />
      )}
    </div>
    
  );
};

export default Combatant;
