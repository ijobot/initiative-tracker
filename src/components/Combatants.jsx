import Combatant from "./Combatant";

const Combatants = ({ combatantList, removeCombatant, editCombatant }) => {
  const combatantMap = combatantList.map((data, index) => {
    return (
      <Combatant
        key={`${data.name}${data.score}`}
        name={data.name}
        score={data.score}
        typeOfEntry={data.typeOfEntry}
        colorOfModal={data.colorOfModal}
        removeCombatant={removeCombatant}
        index={index}
        editCombatant={editCombatant}
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

export default Combatants;
