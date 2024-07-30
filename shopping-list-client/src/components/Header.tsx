import './Header.css';

import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

import { RootState, categoryAction, storeInventoryAction } from '../store';
import { Category } from '../types';
import { CONSTS } from '../consts';

export const Header = () => {
    const dispatch = useDispatch();

    const productsCounter = useSelector( ( state: RootState ) => state.storeInventory.productsCounter );

    useEffect( () => {
        const getStoreDetails = async () => {
            try {
                const { data } = await axios.get( `${ CONSTS.api.baseUrl }/${ CONSTS.api.getAllCategoriesRoute }` );
                const categories: Category[] = data.categories || [];
                let counter = 0;
                categories.forEach( ( category ) => counter += category.doc_count );

                dispatch( categoryAction.setCategories( { categories } ) );
                dispatch( storeInventoryAction.setProductsCounter( counter ) );
            } catch ( error ) {
                console.log( "[ERR]: Failed to get categories from server with error:", error )
            }
        };

        getStoreDetails();
    }, [] )

    return <header className="App-header">
        <p> רשימת קניות</p>
        <p className='products-counter'>סה"כ: { productsCounter } מוצרים בחנות</p>
    </header>
}