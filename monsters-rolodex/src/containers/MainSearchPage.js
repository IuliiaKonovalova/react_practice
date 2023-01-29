import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
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
    <Layout title='Monsters | All' content='Search monsters'>
      <div className="App container mx-auto">
        <h1 className="text-4xl text-center my-5 text-lime-900 font-bold">
          Monsters Rolodex
        </h1>
        <SearchMonstersBox
          placeholder="search monsters"
          onChange = {(e) => {
            onChangeSearchField(e);
            
          }}
          />
        {/* map over the monsters */}
        <CardList monsters={filterMonsters} />
      </div>
    </Layout>
  );
}

export default MainSearchPage;