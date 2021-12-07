import React from 'react';
import './Carusel.css'
import onephoto from '../../assets/img/luca-bravo-8x_fFNrmeDk-unsplash 1.png'
import foto from '../../assets/img/IMG_8257 1.png';
import croto from '../../assets/img/IMG_8258 1.png';
import phot from '../../assets/img/IMG_8259 1.png';
import left from '../../assets/img/left.png';
import right from '../../assets/img/right.png';
const HomeSlider = () => {
    return (
        <div className='slider-mini'>
            <img className='backround-img' src={onephoto} alt="" />
            <div className='left'>
                <img src={left} alt="" />
            </div>
            <div className='right'>
                <img src={right} alt="" />
            </div>
            <div className="Slider">
                <div className="Slider_img">
                    <div className="inst-img">
                        <img src={foto} alt="" />
                    </div>
                    <div className="inst-img">
                        <img src={croto} alt="" />
                    </div>
                    <div className="inst-img">
                        <img src={phot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeSlider;
