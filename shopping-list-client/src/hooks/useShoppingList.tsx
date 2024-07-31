import { useDispatch } from 'react-redux';
import axios from 'axios';

import { CONSTS } from '../consts';
import { shoppingListAction } from '../store';
import { GetShoppingListResponse } from '../types';

export const useShoppingList = () => {
    const dispatch = useDispatch();

    const restoreShoppingList = async () => {
        try {
            const { data } = await axios.get<GetShoppingListResponse>(`${ CONSTS.api.baseUrl }/${ CONSTS.api.getShoppingListRoute }`);
            if (data.shoppingList) {
                let counter = 0;
                Object.values(data.shoppingList).forEach((products) => {
                    products.forEach((product) => counter += product.count);
                });

                dispatch(shoppingListAction.setShoppingList(data.shoppingList));
                dispatch(shoppingListAction.setProductsCounter(counter));
            } else {
                console.error('[ERR]: Failed to get shopping list.');
            }
        } catch (error) {
            console.error('[ERR]: Failed to get shopping list.', error);
        }
    };

    return { restoreShoppingList };
};
