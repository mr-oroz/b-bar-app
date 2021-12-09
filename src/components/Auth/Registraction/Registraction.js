import React from "react";
import m from './Registraction.module.css';
import '../Auth.css';
import {Link} from 'react-router-dom';
import img from "../../../Assets/img/Logo.png";


const Registraction = () => {
    return (
        <div className='register'>
            <div className="Entry_logo">
                <img src={img} alt="" />
            </div>
            <div className="vhod">
                <Link to="/auth/signin"
                    style={{ marginRight: '30px', color: 'white', fontSize: '25px', textDecoration: 'none' }}>Вход</Link>
                <Link to="/auth/register"
                    style={{ color: 'gray', fontSize: '25px', textDecoration: 'none' }}>Регистрация</Link>
            </div>
            <div className={m.input_reg}>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Ваша электронная почта</p>
                    <input type="text" className={m.input_w} placeholder='Введите ваш адрес эл. почты' />
                </div>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Ваше имя</p>
                    <input type="text" className={m.input_w} placeholder='Введите ваше имя' />
                </div>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Ваша фамилия</p>
                    <input type="text" className={m.input_w} placeholder='Введите вашу фамилию' />
                </div>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Ваш телефон</p>
                    <input type="text" className={m.input_w} placeholder='Введите ваш телефон' />
                </div>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Ваш пароль</p>
                    <input type="text" className={m.input_w} placeholder='Введите ваш пароль' />
                </div>
                <div className={m.box_reg}>
                    <p className={m.input_p}>Повторите ваш пароль</p>
                    <input type="text" className={m.input_w} placeholder='Введите ваш пароль повторно' />
                </div>
                <button className={m.button_reg}>Регистрация</button>
            </div>
        </div>

    )
}

export default Registraction;