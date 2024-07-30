import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../types'

interface Props {
    categories: Category[]
}

const initialCategoriesState: Props = {
    categories: []
}

const categoriesSlice = createSlice( {
    name: 'categories',
    initialState: initialCategoriesState,
    reducers: {
        setCategories: ( state: Props, action: { payload: Props } ) => {
            state.categories = action.payload.categories;
        },
    }
} )

export const categoryAction = categoriesSlice.actions;
export default categoriesSlice.reducer;