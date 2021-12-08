import React from 'react';
import './Order.css'
const Order = () => {
    return (
        <div className="All">
            <div className="All_Price">
                <p>Общая стоимость:  6000сом</p>
                <p>Количество элементов:  6</p>
                <button>ОФОРМИТЬ ЗАКАЗ</button>
            </div>
        </div>
    );
};

export default Order;