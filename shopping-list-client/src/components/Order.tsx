import { Button } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CONSTS } from '../consts';
import { RootState, shoppingListAction } from '../store';

export const Order = () => {
    const dispatch = useDispatch();
    const [ orderStatus, setOrderStatus ] = useState('');
    const shoppingList = useSelector((state: RootState) => state.shoppingList.shoppingList);

    const submit = async () => {
        const { data } = await axios.post(`${ CONSTS.api.baseUrl }/${ CONSTS.api.orderProducts }`, { shoppingList });

        setOrderStatus(data.id ? `ההזמנה נוצרה בהצלחה! מזהה ההזמנה: ${ data.id }` : 'שמירת ההזמנה נכשלה :(');
        dispatch(shoppingListAction.setShoppingList({}));
    };

    const restart = () => {
        setOrderStatus('');
    }

    return (
        <div>
            {!orderStatus && <Button onClick={submit}>סיים הזמנה</Button>}
            <p>{orderStatus}</p>
            {orderStatus && <Button onClick={restart}>התחל מחדש</Button>}
        </div>
    )
}