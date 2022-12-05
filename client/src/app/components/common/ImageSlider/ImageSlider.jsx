import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const ImageSlider = ({ items, className, pagination, ...rest }) => {
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

ImageSlider.defaultProps = {
    pagination: true
};

ImageSlider.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string,
    pagination: PropTypes.bool.isRequired
};

export default ImageSlider;
