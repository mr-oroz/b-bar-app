import React from "react";
import img from "../../Assets/img/Logo.png";
import './Auth.css'
import { Link, } from 'react-router-dom';

const Auth = ({children}) => {
   
    return (
        <div className="Entry">
            <div className="Entry_logo">
                <img src={img} alt="" />
            </div>
            <div className="vhod">
                <div className='auth-text active'>
                    <Link activeClassName='active' to="/auth/signin"
                        style={{
                            marginRight: '30px',
                            fontSize: '25px',
                            textDecoration: 'none'
                        }}>
                        Вход
                    </Link>
                </div>
                <div className='auth-text'>
                    <Link activeClassName='active' to="/auth/register"
                        style={{
                            fontSize: '25px',
                            textDecoration: 'none'
                        }}>
                        Регистрация
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Auth;