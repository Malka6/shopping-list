import './ItemAdder.css';

import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, shoppingListAction } from '../store';
import { Product } from '../types';

const { Option } = Select;

export const ItemAdder: React.FC = () => {
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState<string>('');
    const [ selectedOption, setSelectedOption ] = useState<string | undefined>(undefined);

    const categories = useSelector((state: RootState) => state.categories.categories);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    const submit = async () => {
        if (!selectedOption) {
            console.log('No category selected');
        } else {
            try {
                const newProduct: Product = { name: inputValue, category: selectedOption };
                dispatch(shoppingListAction.addProduct(newProduct));

                setInputValue('');
                setSelectedOption(undefined);
            } catch (error) {
                console.log('[ERR]: Failed to add a new product with error:', error)
            }
        }
    }

    return (
        <div className='item-adder'>
            <Input value={inputValue} onChange={handleInputChange} placeholder='הכנס מוצר חדש' />
            <Select value={selectedOption} onChange={handleSelectChange} placeholder='בחר קטגוריה' >
                {
                    categories.map((category) =>
                        <Option key={category.key} value={category.key}>{category.key}</Option>)
                }
            </Select>
            <Button onClick={submit}>הוסף</Button>
        </div>
    );
};