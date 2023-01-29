import React, { useEffect, useState } from 'react';
import SearchMonstersBox from '../components/SearchMonstersBox';
import CardList from '../components/CardList';


const MainSearchPage = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  
  const getMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setMonsters(data);
    console.log(data);
  }

  useEffect(() => {
    getMonsters();
  }, []);

  // const filterMonsters = 
  const onChangeSearchField = (e) => {
    const valueSearchField = e.target.value.toLowerCase();
    setSearchField(valueSearchField);
    console.log(valueSearchField);
  }

  let filterMonsters;

  if (searchField) {
    filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
  } else {
    filterMonsters = monsters;
  }



  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchMonstersBox
        placeholder="search monsters"
        onChange = {(e) => {
          onChangeSearchField(e);
          
        }}
        />
      {/* map over the monsters */}
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default MainSearchPage;