import React from "react";
import img from "../../Assets/img/Лого.png";
import './Entry.css'
const Entry = () => {
    return (
        <div className="Entry">
            <div className="Entry_logo">
                <img src={img} alt="" />
            </div>
            <div className="vhod">
                <a href="" style={{ marginRight: '30px', color:'white', fontSize:'25px', textDecoration:'none' }}>Вход</a>
                <a href="" style={{ color: 'gray', fontSize:'25px', textDecoration:'none' }}>Регистрация</a>
            </div>
            <div className="inputs">
                <p>Ваша электронная почта</p>
                <input placeholder="Введите ваш адрес эл.почты" type="text" />
                <p>Ваш пароль</p>
                <input placeholder="Введите ваш пароль" type="password" />
                <div className="foot">
                    <div className="remember">
                        <input type="checkbox" style={{ height: '20px', width: '20px' }} />
                        <p style={{ fontSize: '14px', marginLeft: '20px' }}>Запомнить меня</p>
                    </div>
                    <div className="zabyl">
                        <a href="" style={{ color: 'gray' }}>Забыли пароль?</a>
                    </div>
                </div>
                <div className="button">
                    <button style={{
                        height: '50px',
                        width: '150px',
                        fontSize: '20px',
                        backgroundColor: 'black',
                        color:'white'
                        
                    }}>Войти</button>
                </div>
            </div>

        </div>
    );
};

export default Entry;