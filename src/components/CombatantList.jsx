import Combatant from "./Combatant";

const CombatantList = ({ combatantList, removeCombatant, index }) => {
  const combatantMap = combatantList.map((data) => {
    return (
      <Combatant
        key={`${data.name}${data.score}`}
        name={data.name}
        score={data.score}
        typeOfEntry={data.typeOfEntry}
        colorOfModal={data.colorOfModal}
        index={index}
        removeCombatant={removeCombatant}
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

export default CombatantList;
