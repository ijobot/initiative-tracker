import React, { useState } from "react";
import MenuDisplay from "./MenuDisplay";
import CombatDisplay from "./CombatDisplay";
import SavedPartiesDisplay from "./SavedPartiesDisplay";
import cloneDeep from "lodash/cloneDeep";
import Modal from "../utils/Modal";
import PartyModal from "../utils/PartyModal";
// import NameModal from "../utils/NameModal"

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPartyModal, setShowPartyModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  const [typeOfEntry, setTypeOfEntry] = useState("");
  const [colorOfModal, setColorOfModal] = useState("");

  const [combatantList, setCombatantList] = useState([]);
  const [partyList, setPartyList] = useState([]);

  const [buttonToggle, setButtonToggle] = useState(false);

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

  // PARTY MODAL AND PARTY FUNCTIONS //

  const handleOpenPartyModal = (e, type, color) => {
    e.currentTarget.blur();
    setTypeOfEntry(type);
    setColorOfModal(color);
    setShowPartyModal(true);
  };

  const handleClosePartyModal = () => {
    setShowPartyModal(false);
    setButtonToggle(true);
  };

  const addPartyMember = (newPartyMember) => {
    const updatedPartyList = cloneDeep(partyList);
    updatedPartyList.push(newPartyMember);
    setPartyList(updatedPartyList);
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
    setButtonToggle(false);
  };

  // END PARTY MODAL AND PARTY FUNCTIONS //

  // NAME MODAL //

  const handleOpenNameModal = (type, color) => {
    console.log(type, color);
    setTypeOfEntry(type);
    console.log(typeOfEntry);
    setColorOfModal(color);
    console.log(colorOfModal);
    setShowNameModal(true);
  };

  const handleCloseNameModal = () => {
    setShowNameModal(false);
  };

  // END NAME MODAL //

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

  const handleClearList = (e) => {
    e.currentTarget.blur();
    setCombatantList([]);
  };

  // END COMBATANT//

  // COMBATANT EDITS //

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

  const editCombatantName = (editedName, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].name = editedName;
    setCombatantList(updatedCombatantList);
  };

  const editCombatantScore = (editedScore, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].score = parseInt(editedScore);
    setCombatantList(updatedCombatantList);
  };

  // END COMBATANT EDITS //

  return (
    <>
      <MenuDisplay
        handleOpenModal={handleOpenModal}
        handleOpenPartyModal={handleOpenPartyModal}
        handleClearList={handleClearList}
        handleAddParty={handleAddParty}
        buttonToggle={buttonToggle}
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
      <SavedPartiesDisplay
        partyList={partyList}
        buttonToggle={buttonToggle}
        handleAddParty={handleAddParty}
        handleClearParty={handleClearParty}
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
          setButtonToggle={setButtonToggle}
          partyList={partyList}
        />
      )}
    </>
  );
};

export default Wrapper;
