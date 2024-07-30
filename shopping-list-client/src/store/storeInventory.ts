import { createSlice } from '@reduxjs/toolkit'

import { Inventory } from '../types';

interface Props {
    inventory: Inventory;
    productsCounter: number;
}

const initialStoreInventoryState: Props = {
    inventory: {},
    productsCounter: 0
}

const storeInventorySlice = createSlice( {
    name: 'storeInventory',
    initialState: initialStoreInventoryState,
    reducers: {
        setStoreInventory: ( state: Props, action: { payload: Inventory } ) => {
            state.inventory = action.payload
        },
        setProductsCounter: ( state: Props, action: { payload: number } ) => {
            state.productsCounter = action.payload;
        },
    }
} )

export const storeInventoryAction = storeInventorySlice.actions;
export default storeInventorySlice.reducer;