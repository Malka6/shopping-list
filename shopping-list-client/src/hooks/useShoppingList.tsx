import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CONSTS } from '../consts';
import { shoppingListAction } from '../store';

export const useShoppingList = () => {
    const dispatch = useDispatch();

    const restoreShoppingList = async () => {
        try {
            const { data } = await axios.get( `${ CONSTS.api.baseUrl }/${ CONSTS.api.getShoppingListRoute }` );
            if ( data.shoppingList ) {
                dispatch( shoppingListAction.setShoppingList( data.shoppingList ) );
            } else {
                console.error( '[ERR]: Failed to get shopping list.' );
            }
        } catch ( error ) {
            console.error( '[ERR]: Failed to get shopping list.', error );
        }
    };

    return { restoreShoppingList };
};
