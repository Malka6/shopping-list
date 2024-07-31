import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ShoppingList } from '../types';

interface Props {
    shoppingList: ShoppingList;
    productsCounter: number;
}

const initialShoppingListState: Props = {
    shoppingList: {},
    productsCounter: 0
}

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: initialShoppingListState,
    reducers: {
        setShoppingList: (state: Props, action: PayloadAction<ShoppingList>) => {
            state.shoppingList = { ...action.payload }
        },
        setProductsCounter: (state: Props, action: PayloadAction<number>) => {
            state.productsCounter = action.payload;
        },
    }
})

export const shoppingListAction = shoppingListSlice.actions;
export default shoppingListSlice.reducer;