import React, { useEffect, useState } from "react";
import Combatant from "./Combatant";
import Button from "../utils/Button";

function CombatantList() {
  const [combatantList, setCombatantList] = useState([
    {
      name: "Stephanie Cindermine",
      roll: 23,
      userType: "NPC",
    },
    {
      name: "Capu",
      roll: 5,
      userType: "Player",
    },
    {
      name: "Lapis",
      roll: 27,
      userType: "Player",
    },
    {
      name: "Upton",
      roll: 3,
      userType: "Player",
    },
  ]);
  // const [combatList, setCombatList] = React.useState('Entry') This is for taking props from EntryForm
  // function to sort. (Completed by Jack)

  // ComponentDidUpdate - Google if this is possible. (Completed by Joe - CDM, CDU, and CWU are replaced by useEffect() )

  // Create a button to add another player in this component to test. Only for testing. (Completed by Joe)

  const combatantInfo = {
    name: "EXTRA",
    roll: 15,
    userType: "Player",
  };

  const addNewCombatant = (combatantInfo) => {
    setCombatantList([...combatantList, combatantInfo]);
    console.log(combatantList);
  };
  //This function is called when the button is pushed to add another object to the array of CombatantList, (Jack: It isn't working atm.   Joe: Working now, but still not dynamic.)

  function sortList() {
    combatantList.sort((a, b) => {
      return b.roll - a.roll; //This will sort the array of objects (Highest to Lowest so we know who goes first)
    });
  }

  sortList();

  useEffect(() => sortList, [combatantList]); //useEffect replaces in sorts ComponentDidUpdate and ComponentDidLoad. For some reason its not working right now so I've called the function as above. (My function call above won't work dynamically, it will only run once when the page loads.) We need to add dummydata to the array dynamically to test if it auto sorts.

  const combatantMap = combatantList.map((data) => {
    return (
      <Combatant
        key={Math.floor(Math.random() * 100000)}
        name={data.name}
        roll={data.roll}
        userType={data.userType}
      />
    );
  });

  return (
    <div className="combatant-list">
      <div>{combatantMap}</div>
    </div>
  );
}

export default CombatantList;
