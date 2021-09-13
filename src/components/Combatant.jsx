import React from 'react'

function Combatant(props) {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.roll}</p>
            <p>{props.userType}</p>
            <br></br>
        </div>
    )
}

export default Combatant

