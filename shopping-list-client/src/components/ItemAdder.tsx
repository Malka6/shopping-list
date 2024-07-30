import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

const { Option } = Select;

export const ItemAdder: React.FC = () => {
    const [ inputValue, setInputValue ] = useState<string>( '' );
    const [ selectedOption, setSelectedOption ] = useState<string | undefined>( undefined );

    const categories = useSelector( ( state: RootState ) => state.categories.categories );

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue( e.target.value );
    };

    const handleSelectChange = ( value: string ) => {
        setSelectedOption( value );
    };

    return (
        <div style={ { display: 'flex', gap: '10px', padding: '1rem', justifyContent: 'center' } }>
            <Input
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="הכנס מוצר חדש"
                style={ { width: '300px' } }
            />
            <Select
                value={ selectedOption }
                onChange={ handleSelectChange }
                placeholder="בחר קטגוריה"
                style={ { width: '300px' } }
            >
                { categories.map( ( category ) => <Option value={ category.key }>{ category.key }</Option> ) }
            </Select>
            <Button>הוסף</Button>
        </div>
    );
};