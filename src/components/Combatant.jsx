import React from "react";

function Combatant({ name, roll, userType }) {
  return (
    <div className="container combatant-row border">
      <p>{userType}</p>
      <p>{name}</p>
      <p>{roll}</p>
    </div>
  );
}

export default Combatant;
