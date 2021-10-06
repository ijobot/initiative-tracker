import React from "react";
import Button from "../utils/Button";

const SavedPartiesDisplay = ({
  handleAddParty,
  handleClearParty,
  buttonToggle,
  partyList,
}) => {
  const partyListMap = partyList.map((member) => {
    return (
      <div className="party-member-div" key={member.name + member.score}>
        <p>{member.name}</p>
        <p>{member.score}</p>
      </div>
    );
  });
  return (
    <div className="party-menu container bg-darkgrey border">
      {buttonToggle && (
        <div className="party-individual">
          {partyListMap}

          <div className="party-individual flex-basis">
            <Button
              color="#6a5d83"
              text="Fight!"
              onClick={handleAddParty}
              className="btn btn-small party-member-div"
            />
            <Button
              color="#6a5d83"
              text="Clear Party"
              onClick={handleClearParty}
              className="btn btn-small party-member-div"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedPartiesDisplay;
