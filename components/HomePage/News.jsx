import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Autoplay, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
import Link from "next/link";

const News = ({ jsonNews }) => {
  SwiperCore.use([Autoplay, Mousewheel]);
  return (
    <section className="news">
      <div className="container">
        <h2 className="title">News</h2>
        <ul className="news__list">
          <Swiper
            className="news__slider"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            freeMode
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{ clickable: true }}
          >
            {jsonNews.length ? jsonNews.map((item) => (
              <SwiperSlide key={item.id}>
                <li className="news__slide">
                  <Image
                    src={item.content[0].right_img || item.content[0].left_img}
                    alt={item.page_title}
                    width={390}
                    height={290}
                  />
                  <div className="news__wrapper">
                    <h3 className="news__title">{item.page_title}</h3>
                    <p className="news__text">{item.content[0].page_text}</p>
                    <Link href={"news/[news]"} as={"news/" + item.page_title}>
                      <a className="news__link" href="#">
                        Детальнее
                      </a>
                    </Link>
                  </div>
                </li>
              </SwiperSlide>
            )): ''}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default News;
