import React from 'react';
import "./Basket.css"
import photo from '../../Assets/img/photo_2020-08-16_15-38-39 1.png'

const Basket = () => {
    return (
        <div className="basket-container">
            <div className='Basket_img'>
                <img src={photo} alt="" />
            </div>
            <div className="Container">
            <div className="Logo">
            <div className='Basket_logo'>
                <h3>Форель с булгуром</h3>
            </div>
                <div className="Btn">
                <button>X</button>  
                </div>
            </div>
           <div className="Price">
           <div className="Amount">
                <p>Количество</p>
                <h6>- 2 +</h6>
            </div>
            <div className="Splice">
                <p>Цена</p>
                <h6>1000 сом</h6>
            </div>
            <div className="Price_Open">
                <p>Конечная цена</p>
                <h6>2000 сом</h6>
            </div>
           </div>
            </div>
        </div>
    );
};

export default Basket;