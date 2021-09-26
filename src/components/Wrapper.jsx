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

  const editCombatantScore = (editedScore, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].score = parseInt(editedScore);
    setCombatantList(updatedCombatantList);
  };

  const editCombatantName = (editedName, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].name = editedName;
    setCombatantList(updatedCombatantList);
  };

  const editCombatantType = (editedType, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].typeOfEntry = editedType;
    if (editedType === "Player") {
      updatedCombatantList[index].colorOfModal = "#8CBA80";
      setCombatantList(updatedCombatantList);
    } else if (editedType === "Monster") {
      updatedCombatantList[index].colorOfModal = "#DA4167";
      setCombatantList(updatedCombatantList);
    } else if (editedType === "NPC") {
      updatedCombatantList[index].colorOfModal = "#2E86AB";
      setCombatantList(updatedCombatantList);}
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
        editCombatantScore={editCombatantScore}
        editCombatantType={editCombatantType}
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
