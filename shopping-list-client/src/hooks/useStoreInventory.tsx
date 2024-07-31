import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CONSTS } from '../consts';
import { storeInventoryAction } from '../store';

export const useStoreInventory = () => {
    const dispatch = useDispatch();

    const restoreStoreInventory = async () => {
        try {
            const { data } = await axios.get( `${ CONSTS.api.baseUrl }/${ CONSTS.api.getStoreInventoryRoute }` );
            if ( data.inventory ) {
                dispatch( storeInventoryAction.setStoreInventory( data.inventory ) );
            } else {
                console.error( '[ERR]: Failed to get store inventory.' );
            }
        } catch ( error ) {
            console.error( '[ERR]: Failed to get store inventory.', error );
        }
    };

    return { restoreStoreInventory };
};
