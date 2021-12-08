import React from "react";
import img from "../../Assets/img/Logo.png";
import './Entry.css'
import Sigin from "./Sigin/Sigin";
import { Link, Routes, Route } from 'react-router-dom'
const Entry = () => {
    return (
        <div className="Entry">
            <div className="Entry_logo">
                <img src={img} alt="" />
            </div>
            <div className="vhod">
                <Link to="/auth/sigin"
                    style={{ marginRight: '30px', color: 'white', fontSize: '25px', textDecoration: 'none' }}>Вход</Link>
                <Link to="/auth/register"
                    style={{ color: 'gray', fontSize: '25px', textDecoration: 'none' }}>Регистрация</Link>
            </div>
            <Sigin />
        </div>
    );
};

export default Entry;