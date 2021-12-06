import React from 'react';
import Logo from '../../assets/img/Лого.png'

const Footer = () => {
    return (
        <div>
            <div className="footer_logo">
                <img src={Logo} alt=""  />
            </div>
            <div className="rezhim">
                <h3>Режим работы</h3>
                <p>С 10:00 до 20:00</p>
                <p>Сб,Вс - Выходной</p>
            </div>
            <div className="contatcs">
                <h3>Телефон</h3>
                <p>+996 (553) 577-575</p>
                <p>+996 (773) 577-575</p>
            </div>
            <div className="adress">
                <h3>Адрес</h3>
                <p>г.Бишкек, Медерова 50/2</p>
            </div>
        </div>
    );
};

export default Footer;