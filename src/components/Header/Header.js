import React from "react";
import s from './Header.module.css';
import logo from '../../Assets/img/Logo.png';
import exit from '../../Assets/img/exit.png';
import market from '../../Assets/img/Vector.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Link className={s.a} to='/'>Меню</Link>
                <Link className={s.a} to='/stock'>Акции</Link>
                <Link className={s.a} to='/about'>О нас</Link>
            </div>
            <div className={s.contact}>
                <img src={logo} alt="" className={s.logoo} />
                <Link className={s.a} to='/contacts'>Контакты</Link>
                <div className={s.exit}>
                    <img src={exit} alt="" className={s.exiti} />
                    <Link to='/auth/signin' className={s.exirt}>Войти</Link>
                </div>
                <Link to='/cart'>
                    <img src={market} alt="" className={s.market_logo} />
                </Link>
            </div>
        </div>
    )
}

export default Header;
