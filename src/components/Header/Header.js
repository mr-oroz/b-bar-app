import React from "react";
import s from './Header.module.css';
import logo from '../../Assets/img/Лого.png';
import exit from '../../Assets/img/exit.png';
import market from '../../Assets/img/Vector.png';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <a>Меню</a>
                <a>Акции</a>
                <a>О нас</a>
            </div>
            <div className={s.contact}>
                <img src={logo} alt="" className={s.logoo} />   
                <a>Контакты</a>
                <div className={s.exit}>
                    <img src={exit} alt="" className={s.exiti} />
                    <a className={s.exirt}>Войти</a>
                </div>
                <img src={market} alt="" className={s.market_logo}/>
            </div>
        </div>
    )
}

export default Header;
