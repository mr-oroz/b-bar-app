import React from 'react';
import Basket from '../Basket_Components/Basket';
import Order from '../Order/Order'
import Similar from '../Similar/Similar'

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Корзина</h1>
            <Basket />
            <Basket />
            <Basket />
            <Order />
            <div className="h3">
                <h3>С этим также подойдет</h3>
            </div>
            <div className="Simil">
                <Similar />
                <Similar />
                <Similar />
                <Similar />
            </div>
        </div>
    )
}

export default Cart