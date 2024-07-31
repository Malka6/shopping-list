import React from "react";
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const StoreInventory = () => {
    const storeInventory = useSelector( ( state: RootState ) => state.storeInventory.inventory );

    return <div>
        <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
    </div>
}