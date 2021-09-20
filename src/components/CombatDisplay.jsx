import React from "react";
import CombatantList from "./CombatantList";

const CombatDisplay = ({ combatantList, removeCombatant }) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <CombatantList
        combatantList={combatantList}
        removeCombatant={removeCombatant}
      />
    </div>
  );
};

export default CombatDisplay;
