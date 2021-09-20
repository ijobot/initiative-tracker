import React, { useState } from "react";
import MenuDisplay from "./MenuDisplay";
import CombatDisplay from "./CombatDisplay";
import cloneDeep from "lodash/cloneDeep";
import Modal from "../utils/Modal";

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeOfEntry, setTypeOfEntry] = useState("");
  const [colorOfModal, setColorOfModal] = useState("");
  const [combatantList, setCombatantList] = useState([]);

  const handleOpenModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addCombatant = (newCombatant) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList.push(newCombatant);
    setCombatantList(updatedCombatantList);
  };

  const removeCombatant = (index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList.splice(index, 1);
    setCombatantList(updatedCombatantList);
    console.log(updatedCombatantList);
  };

  const handleClearList = (e) => {
    e.currentTarget.blur();
    setCombatantList([]);
  };

  return (
    <>
      <MenuDisplay
        handleOpenModal={handleOpenModal}
        handleClearList={handleClearList}
      />
      <CombatDisplay
        combatantList={combatantList}
        removeCombatant={removeCombatant}
      />
      {showModal && (
        <Modal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfModal}
          handleCloseModal={handleCloseModal}
          addCombatant={addCombatant}
        />
      )}
    </>
  );
};

export default Wrapper;
