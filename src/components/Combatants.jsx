import Combatant from "./Combatant";

const Combatants = ({
  combatantList,
  removeCombatant,
  editCombatantScore,
  editCombatantType,
  handleOpenNameModal,
  handleCloseNameModal,
  editCombatantName,
  showNameModal
}) => {
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
        editCombatantScore={editCombatantScore}
        editCombatantType={editCombatantType}
        handleOpenNameModal={handleOpenNameModal}
        handleCloseNameModal={handleCloseNameModal}
        editCombatantName={editCombatantName}
        showNameModal={showNameModal}
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
