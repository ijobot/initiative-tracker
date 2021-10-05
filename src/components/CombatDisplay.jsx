import React from "react";
import Combatants from "./Combatants";

const CombatDisplay = ({
  combatantList,
  removeCombatant,
  editCombatantScore,
  editCombatantType,
  handleOpenNameModal,
  handleCloseNameModal,
  editCombatantName,
  showNameModal
}) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <Combatants
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatantScore={editCombatantScore}
        editCombatantType={editCombatantType}
        handleOpenNameModal={handleOpenNameModal}
        handleCloseNameModal={handleCloseNameModal}
        editCombatantName={editCombatantName}
        showNameModal={showNameModal}
      />
    </div>
  );
};

export default CombatDisplay;
