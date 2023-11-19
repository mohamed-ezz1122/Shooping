import React from 'react'
import Slider from 'react-slick'
import slide1 from "../../Assets/images/slider-image-1.jpeg"
import slide2 from "../../Assets/images/slider-image-2.jpeg"
import slide3 from "../../Assets/images/slider-image-3.jpeg"
import slide4 from "../../Assets/images/grocery-banner-2.jpeg"
import slide5 from "../../Assets/images/grocery-banner.png"
export default function MainSlider() {
    var settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return <>
  <div className="row g-0 mb-5">
    <div className="col-md-9">
    <Slider {...settings}>
      <img src={slide1} className='w-100' height={400}  alt="" />
      <img src={slide2} className='w-100' height={400}  alt="" />
      <img src={slide3} className='w-100' height={400}  alt="" />
      
    </Slider>
    </div>
    <div className="col-md-3">
    <img src={slide4} className='w-100' height={200}  alt="" />
    <img src={slide5} className='w-100' height={200}  alt="" />

    </div>
  </div>
  </>
}
