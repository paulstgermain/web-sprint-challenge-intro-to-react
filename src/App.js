import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8')
    .then(res => {
      setCharData(res.data);
    })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty</h1>
      <Characters charData={charData} />
    </div>
  );
}

export default App;
