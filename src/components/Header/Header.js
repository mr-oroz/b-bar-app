import React from "react";
import s from './Header.module.css';
import logo from '../../Assets/img/logo.png';
import exit from '../../Assets/img/exit.png';
import market from '../../Assets/img/Vector.png';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Link className={s.a} to='/'>Меню</Link>
                <a>Акции</a>
                <a>О нас</a>
            </div>
            <div className={s.contact}>
                <img src={logo} alt="" className={s.logoo} />
                <Link className={s.a} to='/contacts'>Контакты</Link>
                <div className={s.exit}>
                    <img src={exit} alt="" className={s.exiti} />
                    <a className={s.exirt}>Войти</a>
                </div>
                <Link to='/cart'>
                    <img src={market} alt="" className={s.market_logo} />
                </Link>
            </div>
        </div>
    )
}

export default Header;
