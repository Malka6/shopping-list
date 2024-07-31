import { configureStore } from '@reduxjs/toolkit';

import categories from './categories';
import shoppingList from './shoppingList';

export const store = configureStore( { reducer: { categories, shoppingList } } );

export type RootState = ReturnType<typeof store.getState>;

export * from './categories';
export * from './shoppingList';