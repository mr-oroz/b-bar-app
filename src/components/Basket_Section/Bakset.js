import React from 'react';
import'./Basket.css';
import photo from '../../assets/img/photo_2020-08-16_15-38-39 1.png'
import logo from '../../assets/img/Vector 2.png'
const Bakset = () => {
    return (
        <div className="container">
            <div className='Basket_img'><img src={photo} alt="" /></div>
            <div className='Basket_logo'>
                <h2>Форель с булгуром</h2>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Bakset;