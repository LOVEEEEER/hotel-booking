import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";

const RoomImageSlider = ({ items, className, pagination, ...rest }) => {
  console.log(items);
  return (
    <>
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        mousewheel={true}
        loop={true}
        {...rest}
      >
        {items.map((item) => (
          <SwiperSlide key={item} className={className}>
            <img src={item} alt="" className={className} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

RoomImageSlider.defaultProps = {
  pagination: true,
};

export default RoomImageSlider;
