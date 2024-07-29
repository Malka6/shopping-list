import React from 'react';
import './App.css';
import { ItemAdder } from './ItemAdder';
import { Categories } from './Categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> רשימת קניות</p>
      </header>
      <ItemAdder />
      <p>------------------------------------------</p>
      <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
      <Categories />
    </div>
  );
}

export default App;
