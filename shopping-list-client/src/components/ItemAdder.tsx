import './ItemAdder.css';

import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { RootState } from '../store';
import { CONSTS } from '../consts';
import { Product } from '../types';
import { useStoreInventory } from '../hooks';

const { Option } = Select;

export const ItemAdder: React.FC = () => {
    const { restoreStoreInventory } = useStoreInventory();

    const [ inputValue, setInputValue ] = useState<string>( '' );
    const [ selectedOption, setSelectedOption ] = useState<string | undefined>( undefined );

    const categories = useSelector( ( state: RootState ) => state.categories.categories );

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue( e.target.value );
    };

    const handleSelectChange = ( value: string ) => {
        setSelectedOption( value );
    };

    const submit = async () => {
        if ( !selectedOption ) {
            console.log( 'No category selected' );
        } else {
            try {
                const newProduct: Product = { name: inputValue, category: selectedOption }
                const { data } = await axios.post( `${ CONSTS.api.baseUrl }/${ CONSTS.api.addProductRoute }`, newProduct );
                if ( data.id ) console.log( 'Product added successfully.' );
                else console.log( 'Failed to add a new product.' );

                setInputValue( '' );
                setSelectedOption( undefined );
                await restoreStoreInventory();
            } catch ( error ) {
                console.log( '[ERR]: Failed to add a new product with error:', error )
            }
        }
    }

    return (
        <div className='item-adder'>
            <Input value={ inputValue } onChange={ handleInputChange } placeholder="הכנס מוצר חדש" />
            <Select value={ selectedOption } onChange={ handleSelectChange } placeholder="בחר קטגוריה" >
                {
                    categories.map( ( category ) => <Option value={ category.key }>{ category.key }</Option> )
                }
            </Select>
            <Button onClick={ submit }>הוסף</Button>
        </div>
    );
};