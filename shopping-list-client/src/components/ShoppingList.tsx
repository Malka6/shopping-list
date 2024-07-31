import './ShoppingList.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { Category } from './Category';

export const ShoppingList = () => {
    const shoppingList = useSelector((state: RootState) => state.shoppingList.shoppingList);

    return (
        <div className='shopping-list'>
            <p>יש לאסוף מוצרים אלו במחלקות המתאימות</p>
            <div className='categories'>
                {Object.entries(shoppingList).map(([ category, products ]) => {
                    return <Category key={category} category={category} products={products} />
                })}
            </div>
        </div>
    );
}