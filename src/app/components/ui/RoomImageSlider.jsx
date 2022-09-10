import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const RoomImageSlider = ({ items, ...rest }) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        {...rest}
      >
        {items.map((item) => (
          <SwiperSlide key={item} className="swiper-image">
            <img src={item} alt="" className="swiper-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RoomImageSlider;
