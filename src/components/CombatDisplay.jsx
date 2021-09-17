import React from "react";
import CombatantList from "./CombatantList";

const CombatDisplay = ({ combatantList }) => {
  return (
    <div className="combatant-menu container bg-darkgrey border">
      <CombatantList combatantList={combatantList} />
    </div>
  );
};

export default CombatDisplay;
