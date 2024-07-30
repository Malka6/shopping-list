import { configureStore } from '@reduxjs/toolkit';
import categories from './categories';
import storeInventory from './storeInventory';

export const store = configureStore( { reducer: { categories, storeInventory } } );

export type RootState = ReturnType<typeof store.getState>;