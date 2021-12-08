import React from 'react';
import './Carusel.css'
import onephoto from '../../Assets/img/luca-bravo-8x_fFNrmeDk-unsplash 1.png'
import foto from '../../Assets/img/IMG_8257 1.png';
import croto from '../../Assets/img/IMG_8258 1.png';
import phot from '../../Assets/img/IMG_8259 1.png';
import left from '../../Assets/img/left.png';
import right from '../../Assets/img/right.png';
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
