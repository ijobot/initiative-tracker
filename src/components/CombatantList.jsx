import React from 'react'
// import Combatant from 'combatant'

function CombatantList() {
    // const [combatList, setCombatList] = React.useState('Entry')
    // Where I map combatantList this will be mapped onto Combatant component.  

    let combatantList = [{ 
        'name': 'James', 
        'roll': 23,
        'userType': 'DM'
      },
      {
        'name': 'Bob', 
        'roll': 5, 
        'userType': 'Player'
      }]

    return (
        <div>
            <h1>Combatant List:</h1>
            <br></br>


{combatantList.map((i) => (
              <div>
                <p>{i.name}</p>
                <p>{i.roll}</p>
                <p>{i.userType}</p>
                <br></br>
              </div>
            ))}

        </div>
    )
}

export default CombatantList

// This will be in state. Just putting this in statically for now. 