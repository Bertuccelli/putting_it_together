import './App.css';
import React from 'react';
import PersonCard from './component/PersonCard';
import StateComponent from './component/StateComponent';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName="Simpson"
      firstName="Homer"
      age={39}
      hairColor="Black"
      />
    <StateComponent personAge = {39}/>

      <PersonCard 
      lastName="Simpson"
      firstName="Marge"
      age={36}
      hairColor="Blue"
      />
    <StateComponent personAge = {36}/>

      <PersonCard 
      lastName="Simpson"
      firstName="Bart"
      age={10}
      hairColor="Yellow"
      />
    <StateComponent personAge = {10}/>

      <PersonCard 
      lastName="Simpson"
      firstName="Lisa"
      age={8}
      hairColor="Yellow"
      />
    <StateComponent personAge = {8}/>

      <PersonCard 
      lastName="Simpson"
      firstName="Maggie"
      age={1}
      hairColor="Yellow"
      />
    <StateComponent personAge = {1}/>
    </div>
  );
}

export default App;
