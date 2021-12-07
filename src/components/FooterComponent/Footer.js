import React from 'react';
import Logo from '../../assets/img/Лого.png'
import inst from '../../assets/img/inst.png'
import what from '../../assets/img/what.png'
import face from '../../assets/img/face.png'

const Footer = () => {
    return (
        <div className = "Footer" style={{display: "flex",justifyContent:'space-around',alignItems:'center',
        backgroundColor:'black',color:'white',width:'100%',height:'200px'}}>
            <div className="footer_logo">
                <img src={Logo} alt="" style={{width:'150px', height:'150px'}} />
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
            <div className="icons" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <img src={inst} alt="" style={{width:'30px',height:'30px'}} />
                <img src={what} alt="" style={{width:'25px',height:'25px',margin:'20px'}} />
                <img src={face} alt="" style={{width:'18px',height:'29px'}} />
            </div>
        </div>
    );
};

export default Footer;