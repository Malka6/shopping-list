import './ShoppingList.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const ShoppingList = () => {
    const shoppingList = useSelector( ( state: RootState ) => state.shoppingList.shoppingList );

    return <div className='shopping-list'>
        <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
        <div className='categories'>
            { Object.entries( shoppingList ).map( ( [ category, products ] ) => {
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