import './Header.css';

import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

import { RootState, categoryAction } from '../store';
import { Category } from '../types';
import { CONSTS } from '../consts';

export const Header = () => {
    const dispatch = useDispatch();

    const productsCounter = useSelector((state: RootState) => state.shoppingList.productsCounter);

    useEffect(() => {
        const getStoreDetails = async () => {
            try {
                const { data } = await axios.get(`${ CONSTS.api.baseUrl }/${ CONSTS.api.getAllCategoriesRoute }`);
                const categories: Category[] = data.categories || [];

                dispatch(categoryAction.setCategories({ categories }));
            } catch (error) {
                console.log('[ERR]: Failed to get categories from server with error:', error)
            }
        };

        getStoreDetails();
    }, [])

    return (<header className='app-header'>
        <p> רשימת קניות</p>
        <p className='products-counter'>סה'כ: {productsCounter} מוצרים בחנות</p>
    </header>);
}