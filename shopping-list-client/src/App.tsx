import './App.css';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { ItemAdder } from './components/ItemAdder';
import { ShoppingList } from './components/ShoppingList';
import { Header } from './components/Header';
import { Order } from './components/Order';

export const App = (): JSX.Element => {
  useEffect(() => {
    document.title = 'shopping-list'
  }, []);

  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <ItemAdder />
        <div className='devider' />
        <ShoppingList />
        <Order />
      </Provider>
    </div>
  );
}
