import React, { useState } from "react";
import MenuDisplay from "./MenuDisplay";
import CombatDisplay from "./CombatDisplay";
import cloneDeep from "lodash/cloneDeep";
import Modal from "../utils/Modal";
import PartyModal from "../utils/PartyModal";
// import NameModal from "../utils/NameModal"

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeOfEntry, setTypeOfEntry] = useState("");
  const [colorOfModal, setColorOfModal] = useState("");
  const [combatantList, setCombatantList] = useState([]);
  const [showPartyModal, setShowPartyModal] = useState(false);
  const [partyList, setPartyList] = useState([]);
  const [showNameModal, setShowNameModal] = useState(false);
  

  // MODAL //

  const handleOpenModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // END MODAL //




  // COMBATANT // 

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

  // END COMBATANT// 




  // COMBATANT EDITS //

  const editCombatantScore = (editedScore, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].score = parseInt(editedScore);
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
      setCombatantList(updatedCombatantList);
    }
  };

  const handleClearList = (e) => {
    e.currentTarget.blur();
    setCombatantList([]);
  };

  // END COMBATANT EDITS //


  // PARTY //

  const handleOpenPartyModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowPartyModal(true);
  };

  const handleClosePartyModal = () => {
    setShowPartyModal(false);
  };

  const addPartyMember = (newPartyMember) => {
    const updatedPartyList = cloneDeep(partyList);
    updatedPartyList.push(newPartyMember);
    setPartyList(updatedPartyList);
    console.log("party list", updatedPartyList);
  };

  const handleAddParty = (e) => {
    e.currentTarget.blur();
    const updatedCombatantList = cloneDeep(partyList);

    for (const val of updatedCombatantList) {
      val.colorOfModal = "#8CBA80";
    }
    
    setCombatantList(updatedCombatantList);
  };

  const handleClearParty = (e) => {
    e.currentTarget.blur();
    setPartyList([]);
  };

  // END PARTY //




  // NAMEMODAL //

  const handleOpenNameModal = (type, color) => {
    console.log(type, color)
    setTypeOfEntry(type);
    console.log(typeOfEntry)
    setColorOfModal(color);
    console.log(colorOfModal)
    setShowNameModal(true);
  };

  const handleCloseNameModal = () => {
    setShowNameModal(false);
  };

  const editCombatantName = (editedName, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
       updatedCombatantList[index].name = editedName;
    setCombatantList(updatedCombatantList);
  };


  // END NAMEMODAL //

 

  return (
    <>
      <MenuDisplay
        handleOpenModal={handleOpenModal}
        handleOpenPartyModal={handleOpenPartyModal}
        handleClearList={handleClearList}
        handleAddParty={handleAddParty}
        handleClearParty={handleClearParty}
      />
      <CombatDisplay
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatantScore={editCombatantScore}
        editCombatantType={editCombatantType}
        handleOpenNameModal={handleOpenNameModal}
        handleCloseNameModal={handleCloseNameModal}
        editCombatantName={editCombatantName}
        showNameModal={showNameModal}
      />
      {showModal && (
        <Modal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfModal}
          handleCloseModal={handleCloseModal}
          addCombatant={addCombatant}
          partyList={partyList}
        />
      )}
      {showPartyModal && (
        <PartyModal
          typeOfEntry={typeOfEntry}
          colorOfModal={colorOfModal}
          handleClosePartyModal={handleClosePartyModal}
          addPartyMember={addPartyMember}
        />
      )}

      
    </>
  );
};

export default Wrapper;
