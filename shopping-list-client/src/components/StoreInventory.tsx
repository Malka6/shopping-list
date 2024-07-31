import './StoreInventory.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const StoreInventory = () => {
    const storeInventory = useSelector( ( state: RootState ) => state.storeInventory.inventory );

    return <div className='store-inventory'>
        <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
        <div className='categories'>
            { Object.entries( storeInventory ).map( ( [ category, products ] ) => {
                return <div className='category'>
                    <p className='categoey-header'>{ category }</p>
                    <div className='devider' />
                    <div className='products'>
                        { products.map( ( product ) => <p>{ product.name } ({ product.count })</p> ) }
                    </div>
                </div>
            } ) }
        </div>
    </div>
}