import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  A11y,
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

const Slider = ({ jsonModels }) => {
  SwiperCore.use([Autoplay, Mousewheel]);
  const [visible, setVisible] = useState(1);

  return (
    <div className="slider">
      <div className="container">
        <h2 className="title">Home Page</h2>
        <ul className="slider__list">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChangeTransitionEnd={() => setVisible(1)}
            onSlideChangeTransitionStart={() => setVisible(0)}
            effect="coverflow"
            navigation
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            loop={true}
            pagination={{ clickable: true }}
          >
            {jsonModels.length
              ? jsonModels.map((item, index) => (
                  <SwiperSlide key={index}>
                    <li className="slider__item">
                      <Image
                        objectFit="contain"
                        style={{ margin: "0 auto" }}
                        height={400}
                        width={600}
                        src={item.model_photo}
                        alt={item.modal_text}
                        placeholder="blur"
                        blurDataURL={item.model_photo}
                      />
                      <div className="slider__content">
                        <h2
                          className="slider__title"
                          style={{ opacity: visible }}
                        >
                          {item.model_name}
                        </h2>
                        <p
                          className="slider__text"
                          style={{ opacity: visible }}
                        >
                          {item.model_text}
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                ))
              : ""}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
