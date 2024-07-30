import { createSlice } from '@reduxjs/toolkit'
import { Inventory } from '../types';

interface Props {
    inventory: Inventory
}

const initialStoreInventoryState: Props = {
    inventory: {}
}

const storeInventorySlice = createSlice( {
    name: 'storeInventory',
    initialState: initialStoreInventoryState,
    reducers: {
        setStoreInventory: ( state: Props, action: { payload: Props } ) => {
            state.inventory = action.payload.inventory
        },
    }
} )

export const storeInventoryAction = storeInventorySlice.actions;
export default storeInventorySlice.reducer;