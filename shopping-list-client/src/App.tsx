import './App.css';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { ItemAdder } from './components/ItemAdder';
import { StoreInventory } from './components/StoreInventory';
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
        <div className='devider' />
        <StoreInventory />
      </Provider>
    </div>
  );
}
