import React from "react";

const DropdownType = () => {
  const TypeArray = [
    'Player', 'Monster', 'NPC',
  ];

  const options = TypeArray.map((chosenType) => {
    return (
      <option key={chosenType} className="score-option" value={chosenType}>
        {chosenType}
      </option>
    );
  });

  return options;
};

export default DropdownType;