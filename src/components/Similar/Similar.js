import React from 'react';
import photo from '../../assets/img/photo_2020-08-16_15-38-39 1.png'
import './Similar.css'
const Similar = () => {
    return (
        <div className="Sim">
            {/* <h3>С этим также подойдет</h3> */}
            <div className="Sim_img">
                <img src={photo} alt="" />
                <p>Форель с булгуром</p>
                <p className="p">Описание продукта, особенности, плюсы и минусы. </p>
                <div className="Sim_h6">
                    <h6>1000сом</h6>
                    <div className="Sim_btn">
                        <button>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Similar;