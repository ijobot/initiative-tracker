import React, { useEffect, useState } from "react";
import Combatant from "./Combatant";

const CombatantList = ({ combatantList }) => {
  const combatantMap = combatantList.map((data) => {
    return (
      <Combatant
        key={Math.floor(Math.random() * 100000)}
        name={data.name}
        score={data.score}
        typeOfEntry={data.typeOfEntry}
        colorOfModal={data.colorOfModal}
      />
    );
  });

  const sortList = () => {
    combatantList.sort((a, b) => {
      return b.score - a.score;
    });
  };

  sortList();

  return (
    <div className="combatant-list">
      <div>{combatantMap}</div>
    </div>
  );
};

export default CombatantList;
