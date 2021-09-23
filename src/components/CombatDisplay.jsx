import React from "react";
import Combatants from "./Combatants";

const CombatDisplay = ({ combatantList, removeCombatant, editCombatant }) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <Combatants
        combatantList={combatantList}
        removeCombatant={removeCombatant}
        editCombatant={editCombatant}
      />
    </div>
  );
};

export default CombatDisplay;
