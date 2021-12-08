import React from 'react';
import Logo from '../../Assets/img/Logo.png'
import inst from '../../Assets/img/inst.png'
import what from '../../Assets/img/what.png'
import face from '../../Assets/img/face.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="Footer"
            style={{
                display: "flex",
                justifyContent: 'space-around',
                alignItems: 'center',
                color: 'white',
                width: '100%',
                height: '200px'
            }}>
            <div className="footer_logo">
                <img src={Logo} alt=""
                    style={{
                        width: '150px',
                        height: '150px'
                    }} />
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
                <p>brr</p>
            </div>
            <div className="icons" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
               <div className='icon'>
                   <img src={inst}/>
               </div>
               <div className='icon'>
                   <img src={what}/>
               </div>
               <div className='icon'>
                   <img src={face}/>
               </div>
            </div>
        </div>
    );
};

export default Footer;