import React, { useState } from "react";
import MenuDisplay from "./MenuDisplay";
import CombatDisplay from "./CombatDisplay";
import cloneDeep from "lodash/cloneDeep";
import Modal from "../utils/Modal";
import PartyModal from "../utils/PartyModal";

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPartyModal, setShowPartyModal] = useState(false);
  const [typeOfEntry, setTypeOfEntry] = useState("");
  const [colorOfModal, setColorOfModal] = useState("");
  const [combatantList, setCombatantList] = useState([]);
  const [partyMember, setPartyMember] = useState("");

  const handleOpenModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenPartyModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowPartyModal(true);
  };

  const handleClosePartyModal = () => {
    setShowPartyModal(false);
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
  };

  const editCombatant = (editedScore, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].score = editedScore;
    setCombatantList(updatedCombatantList);
  };

  const handleClearList = (e) => {
    e.currentTarget.blur();
    setCombatantList([]);
  };

  return (
    <>
      <MenuDisplay
        handleOpenModal={handleOpenModal}
        handleOpenPartyModal={handleOpenPartyModal}
        handleClearList={handleClearList}
      />
      <CombatDisplay
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatant={editCombatant}
      />
      {showModal && (
        <Modal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfModal}
          handleCloseModal={handleCloseModal}
          addCombatant={addCombatant}
        />
      )}
      {showPartyModal && (
        <PartyModal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfModal}
          handleClosePartyModal={handleClosePartyModal}
          addCombatant={addCombatant}
        />
      )}
    </>
  );
};

export default Wrapper;
