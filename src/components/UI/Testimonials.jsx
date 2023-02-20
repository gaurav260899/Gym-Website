import React from 'react';
import "../../styles/testimonial.css"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";


export default function Testimonial() {
  return (
    <>
    <section>
        <div className="container sliders">
            <h2 className="section_title">Testimonials</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img-01"><img src={avatar01} alt="" /></div>
                <h4>isnam</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quod illo quasi dolorem consequuntur enim nihil tempora 
                     doloremque iure molestias reprehenderit.  
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
                <div className="slide_img-02"><img src={avatar02} alt="" /></div>
                <h4>ev0l</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quod illo quasi dolorem consequuntur enim nihil tempora 
                     doloremque iure molestias reprehenderit.     
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide_item">
                <div className="slide_img-03"><img src={avatar01} alt="" /></div>
                <h4>uoy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quod illo quasi dolorem consequuntur enim nihil tempora 
                     doloremque iure molestias reprehenderit.     
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
     
    </>
  );
}