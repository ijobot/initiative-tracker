import React from "react";

const PartyVisual = ({ partyList }) => {
  const partyListMap = partyList.map((member) => (
    <div
      className="party-member-visual border"
      key={member.name + member.score}
    >
      <p>{member.name}</p>
      <p>{member.score}</p>
    </div>
  ));
  return <div className="modal-party-visual">{partyListMap}</div>;
};

export default PartyVisual;
