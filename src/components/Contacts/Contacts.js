import React from 'react';
import './Contacts.css'
import inst from '../../Assets/img/inst.png'
import what from '../../Assets/img/what.png'
import face from '../../Assets/img/face.png'
const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="contents">
                <div className="Working_House">
                    <h1>Контакты</h1>
                    <h5>Режим работы</h5>
                    <p>С 10:00 до 20:00</p>
                    <p>Сб, Вс - выходной</p>
                </div>
                <div className="Numbers">
                    <h5>Телефон</h5>
                    <p>+996 (0553) 577-575</p>
                    <p>+996 (0773) 577-575</p>
                </div>
                <div className="Address">
                    <h5>Адрес</h5>
                    <p>г . Бишкек, Медерова, 50/2</p>
                </div>
                <div className="png">
                    <img src={inst} alt="" />
                    <img src={what} alt="" />
                    <img src={face} alt="" />
                </div>
            </div>
            <div className="kart">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.0149352635112!2d74.62146751497772!3d42.851417811922616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7f3216abe71%3A0x10aa63d2976f27c9!2sSB%20bar!5e0!3m2!1sru!2skg!4v1638960428377!5m2!1sru!2skg" style={{ width: '600px', height: '350px', border: '0', marginTop: '120px' }} allowfullscreen="" loading="lazy"></iframe>
                <div className="imgs"></div>
            </div>
        </div>
    );
};

export default Contacts;