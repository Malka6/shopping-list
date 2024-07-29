import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';

const { Option } = Select;

export const ItemAdder: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <div style={{ display: 'flex', gap: '10px', padding: '1rem', justifyContent: 'center' }}>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="הכנס מוצר חדש"
                style={{ width: '300px' }}
            />
            <Button>הוסף</Button>
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder="בחר קטגוריה"
                style={{ width: '300px' }}
            >
                <Option value="Option 1">Option 1</Option>
                <Option value="Option 2">Option 2</Option>
                <Option value="Option 3">Option 3</Option>
                <Option value="Option 4">Option 4</Option>
                <Option value="Option 5">Option 5</Option>
            </Select>
        </div>
    );
};