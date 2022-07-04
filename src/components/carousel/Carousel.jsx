import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './carousel.css';
import img1 from '../assets/img/carousel-img/1.jfif';
import img2 from '../assets/img/carousel-img/2.jfif';
import img3 from '../assets/img/carousel-img/3.jfif';
import img4 from '../assets/img/carousel-img/4.jfif';

const carousel = () => {
    return (
         <div className="container-fluid carousel-container pt-5 pb-5">
            <div className="container">
                <div className="row ">
                    <OwlCarousel className="owl-carousel owl-theme" autoplay items='3'>
                        <div className="item">
                            <img src={img1} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img2} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img3} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img4} alt="img"/>
                        </div>
                         <div className="item">
                            <img src={img3} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img2} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img1} alt="img"/>
                        </div>
                        <div className="item">
                            <img src={img4} alt="img"/>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            </div>
  )
}

export default carousel;