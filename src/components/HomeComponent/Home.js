import React from 'react'
import Slider from '../Carousel/Slider'
import About from '../FooterComponent/About-us/about'
import HomeSlider from '../Carusel/HomeSlider';

export default function Home() {
    return (
        <div className='home'>
            <Slider/>
            <About/>
            <HomeSlider/>
        </div>
    )
}
