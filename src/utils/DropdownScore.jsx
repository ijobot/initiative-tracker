import React from "react";

const DropdownScore = () => {
  const scoreArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const options = scoreArray.map((chosenScore) => {
    return (
      <option key={chosenScore} className="score-option" value={chosenScore}>
        {chosenScore}
      </option>
    );
  });

  return options;
};

export default DropdownScore;
