const CardList = (props) => {

  const monstersList = props.monsters

  return (
    <div
      className="p-5 my-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {monstersList && monstersList.map((monster) => (
          <div
            key={monster.id}
            className="bg-white shadow-md rounded-lg p-4">
              <h2
                className="text-2xl text-lime-700 font-bold mb-2">
                  {monster.name}
              </h2>
              <div className="flex justify-center mb-5">

                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  alt={monster.name}
                  src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
              </div>
              <p className="text-[#b45309]">
                {monster.email}
              </p>
          </div>
        ))}
    </div>
  );
}

export default CardList;