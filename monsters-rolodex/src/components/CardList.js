const CardList = (props) => {
  console.log(props);
  console.log(props.monsters);
  const monstersList = props.monsters
  console.log("CardList" + monstersList);
  return (
    <div>
      {monstersList && monstersList.map((monster) => (
        <h2 key={monster.id}>{monster.name}</h2>
      ))}
    </div>
  );
}

export default CardList;