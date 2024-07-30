import './App.css';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { ItemAdder } from './components/ItemAdder';
import { Categories } from './components/Categories';
import { Header } from './components/Header';

export const App = (): JSX.Element => {
  useEffect( () => {
    document.title = 'shopping-list'
  }, [] );

  return (
    <div className="App">
      <Provider store={ store }>
        <Header />
        <ItemAdder />
        <p>------------------------------------------</p>
        <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
        <Categories />
      </Provider>
    </div>
  );
}
