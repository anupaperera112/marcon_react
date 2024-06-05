import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'

const CarouselComponent = () => {
    const items = [
        {img : require("../../assets/gallery/9.jpg")},
        {img : require("../../assets/gallery/11.jpg")},
        {img : require("../../assets/gallery/12.jpg")},
        {img : require("../../assets/gallery/13.jpg")},
        {img : require("../../assets/gallery/10.jpg")},
        {img : require("../../assets/gallery/15.jpg")},
        {img : require("../../assets/gallery/2.jpg")},
        {img : require("../../assets/gallery/3.jpg")},
        {img : require("../../assets/gallery/4.jpg")},
        {img : require("../../assets/gallery/5.jpg")},
        {img : require("../../assets/gallery/6.jpg")}
    ];


    return (
        <div id="carouselExampleControls" className="carousel slide custom-owl-carousel" data-ride="carousel">
            <div className="carousel-inner custom-carousel-inner" >
                <div className="carousel-item active">
                    <img src={require("../../assets/gallery/1.jpg")} className="d-block" alt="..."  />
                </div>
                
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}><img src={item.img} alt='carousel img' className="d-block"  /></div>
                ))}
                
            </div>
            <button className="carousel-control-prev custom-carousel-control" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;