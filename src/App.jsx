import React, {Component} from 'react';
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName="Simpson"
      firstName="Homer"
      age={39}
      hairColor="Black"
      />

      <PersonCard 
      lastName="Simpson"
      firstName="Marge"
      age={36}
      hairColor="Blue"
      />

      <PersonCard 
      lastName="Simpson"
      firstName="Bart"
      age={10}
      hairColor="Yellow"
      />

      <PersonCard 
      lastName="Simpson"
      firstName="Lisa"
      age={8}
      hairColor="Yellow"
      />

      <PersonCard 
      lastName="Simpson"
      firstName="Maggie"
      age={1}
      hairColor="Yellow"
      />
    </div>
  );
}

export default App;
