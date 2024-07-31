import './Category.css';

import React from 'react';

import { ProductOrder } from '../types';

interface Props {
    category: string;
    products: ProductOrder[];
}

export const Category = ({ category, products }: Props) => {
    return <div className='category'>
        <p className='categoey-header'>{category}</p>
        <div className='devider' />
        <div className='products'>
            {products.map((product) =>
                <p key={product.name}>{product.name} ({product.count})</p>
            )}
        </div>
    </div>
}