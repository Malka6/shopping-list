import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product, ShoppingList } from '../types';

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
        addProduct: (state: Props, action: PayloadAction<Product>) => {
            const category = action.payload.category;
            if (!state.shoppingList[ category ]) state.shoppingList[ category ] = [];

            const index = state.shoppingList[ category ].findIndex(
                (product) => product.name === action.payload.name
            );

            if (index !== -1) {
                state.shoppingList[ action.payload.category ].at(index)!.count++;
            } else {
                state.shoppingList[ action.payload.category ].push({ name: action.payload.name, count: 1 })
            }

            state.productsCounter++;
        }
    }
})

export const shoppingListAction = shoppingListSlice.actions;
export default shoppingListSlice.reducer;