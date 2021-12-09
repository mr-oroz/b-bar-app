import React from "react";
// import mod from './Carousel.module.css';
import Carousel from "react-bootstrap/Carousel";
import photo from '../../Assets/img/Слайдер Акции.png';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;