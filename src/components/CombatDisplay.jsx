import React from "react";
import Combatants from "./Combatants";

const CombatDisplay = ({ combatantList, removeCombatant, editCombatantScore, editCombatantType }) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <Combatants
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatantScore={editCombatantScore}
        editCombatantType={editCombatantType}
      />
    </div>
  );
};

export default CombatDisplay;
