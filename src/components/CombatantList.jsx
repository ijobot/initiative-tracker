import React, { useEffect } from 'react'
import Combatant from './Combatant'
import Button from '../utils/Button'

function CombatantList() {
    // const [combatList, setCombatList] = React.useState('Entry') This is for taking props from EntryForm
    // function to sort. (Completed by Jack) ComponentDidUpdate //Google if this is possible. (Joe) 
    // Create a button to add another player in this component to test. (Only for testing) (Joe)
    // Create a Button under 

    let combatantList = [{ 
        name: 'James', 
        roll: 23,
        userType: 'DM'
      },
      {
        name: 'Bob', 
        roll: 5, 
        userType: 'Player'
      },
      {
        name: 'Sam', 
        roll: 27, 
        userType: 'Player'
      },
      {
        name: 'Dan', 
        roll: 3, 
        userType: 'Player'
      }
    ]

      const extraInfo = {
        name: 'EXTRA',
        roll: 15,
        userType: 'Player'
      }

      function sortList() {
        combatantList.sort((a, b) => {
          return b.roll - a.roll; //This will sort the array of objects (Highest to Lowest so we know who goes first)
      });
      }

      sortList()

      useEffect(() => sortList); //useEffect replaces in sorts ComponentDidUpdate and ComponentDidLoad. For some reason its not working right now so I've called the function as above. (My function call above won't work dynamically, it will only run once when the page loads.) We need to add dummydata to the array dynamically to test if it auto sorts. 

      const combatantMap = combatantList.map((data) => {
        return (
          <Combatant 
          key={data.id}
          name={data.name}
          roll={data.roll}
          userType={data.userType}
        />
        )
      })

      function addUser(){
        combatantList.push(extraInfo)
        console.log(CombatantList)
      } //This function is called when the button is pushed to add another object to the array of CombatantList, (Jack: It isn't working atm)

    return (
        <div>
            <h1>Combatant List:</h1>
            <br></br>
            <div>{combatantMap}</div>
            <Button
            color="#DE781F"
            text="Add Static Info"
            onClick={addUser}
            className="btn"
          />
        </div>
    )
}

export default CombatantList