import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const RoomImageSlider = ({ items }) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
