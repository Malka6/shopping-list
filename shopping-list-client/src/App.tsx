import React from 'react';
import './App.css';
import { ItemAdder } from './ItemAdder';
import { Categories } from './Categories';
import { Provider } from 'react-redux';
import { store } from './store';

function App () {
  return (
    <div className="App">
      <Provider store={ store }>
        <header className="App-header">
          <p> רשימת קניות</p>
        </header>
        <ItemAdder />
        <p>------------------------------------------</p>
        <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
        <Categories />
      </Provider>
    </div>
  );
}

export default App;
