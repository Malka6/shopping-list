import { createSlice } from '@reduxjs/toolkit'

import { ShoppingList } from '../types';

interface Props {
    shoppingList: ShoppingList;
    productsCounter: number;
}

const initialShoppingListState: Props = {
    shoppingList: {},
    productsCounter: 0
}

const shoppingListSlice = createSlice( {
    name: 'shoppingList',
    initialState: initialShoppingListState,
    reducers: {
        setShoppingList: ( state: Props, action: { payload: ShoppingList } ) => {
            state.shoppingList = action.payload
        },
        setProductsCounter: ( state: Props, action: { payload: number } ) => {
            state.productsCounter = action.payload;
        },
    }
} )

export const shoppingListAction = shoppingListSlice.actions;
export default shoppingListSlice.reducer;