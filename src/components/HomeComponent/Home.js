import React from 'react'
import Slider from '../Carousel/Slider'
import About from '../FooterComponent/About-us/about'
import HomeSlider from '../Carusel/HomeSlider';
import Menu from '../MenuComponent/Menu';
import Order from '../Order/Order';
import Similar from '../Similar/Similar';

export default function Home() {
    return (
        <div className='home'>
            <Slider/>
            <Menu/>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                <Similar/>
                <Similar/>
                <Similar/>
                <Similar/>
                <Similar/>
                <Similar/>
                <Similar/>
                <Similar/>
            </div>
            <About/>
            <HomeSlider/>
        </div>
    )
}
