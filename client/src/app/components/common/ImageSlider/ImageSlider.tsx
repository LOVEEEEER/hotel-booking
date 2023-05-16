import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

type ImageSliderProps = {
    items: string[];
    className: string;
    pagination?: boolean;
    autoplay: object;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
    items,
    className,
    pagination = true,
    ...rest
}) => {
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

export default ImageSlider;
