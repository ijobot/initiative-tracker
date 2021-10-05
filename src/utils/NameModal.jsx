import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const NameModal = ({
  typeOfEntry,
  colorOfModal,
  handleCloseNameModal,
  editCombatantName,
  index
}) => {
  const [name, setName] = useState("");



 // const handleEditCombatantName = () => {
  //       handleOpenNameModal(typeOfEntry, colorOfDiv)
  // };



  const handleModalNameSubmit = (e) => {
    
    e.preventDefault();
    e.currentTarget.blur();


    const editedCombatantName = name;
    editCombatantName(editedCombatantName, index);
    handleCloseNameModal();
  };

  return (
    <form
      className="modal modal-grid bg-darkgrey border"
      style={{ backgroundColor: colorOfModal }}
    >
      <div className="modal-entry">
        <p className="tall">{typeOfEntry}</p>
      </div>
      <div className="modal-inputs">
        <input
          type="text"
          placeholder="Enter New Combatant Name"
          className="bg-darkgrey"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        
      </div>

      <div className="modal-buttons">
        <Button
          color="#737373ff"
          text="Submit"
          className="btn"
          onClick={handleModalNameSubmit}
        />
        <Button
          color="#737373ff"
          text="Cancel"
          className="btn"
          onClick={() => handleCloseNameModal()}
        />
      </div>
    </form>
  );
};

export default NameModal;

NameModal.propTypes = {
  typeOfEntry: PropTypes.string.isRequired,
  colorOfModal: PropTypes.string.isRequired,
  handleCloseNameModal: PropTypes.func,
};
