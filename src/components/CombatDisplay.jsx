import React from "react";
import Combatants from "./Combatants";

const CombatDisplay = ({ combatantList, removeCombatant, editCombatantScore }) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <Combatants
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatantScore={editCombatantScore}
      />
    </div>
  );
};

export default CombatDisplay;
