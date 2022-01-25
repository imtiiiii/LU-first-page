import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactDOM from 'react-dom';
import React from 'react';
import './HeroSection.css'
var Carousel = require('react-responsive-carousel').Carousel;
const HeroSection = () => {
    const img1 = "https://www.lus.ac.bd/wp-content/uploads/2020/03/1111111-745x385.jpg"
    const img2 = "https://www.lus.ac.bd/wp-content/uploads/2019/07/3-745x385.jpg"
    const img3 = "https://www.lus.ac.bd/wp-content/uploads/2021/03/%E0%A6%B2%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%AC%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AE%E0%A6%B6%E0%A6%A4%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A6%BF%E0%A6%95%E0%A7%80-%E0%A6%93-%E0%A6%B6%E0%A6%BF%E0%A6%B6%E0%A7%81-%E0%A6%A6%E0%A6%BF%E0%A6%AC%E0%A6%B8-%E0%A6%89%E0%A6%A6%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%A8-745x385.jpg"
    return (
        <>
            <Carousel autoPlay infiniteLoop className="slider  w-full mt-5 mb-8">
                <div>
                    <img src={img1} className="slider-img" alt="slider" />

                </div>
                <div>
                    <img src={img2} className="slider-img" alt="slider" />
                </div>
                <div>
                    <img src={img3} className="slider-img" alt="slider" />

                </div>
            </Carousel>
        </>
    );
};

export default HeroSection;