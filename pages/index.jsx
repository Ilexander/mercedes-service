import Head from "next/head";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchPost } from "../store/tradeSlice.reducer";
import Trade from "../components/Sections/Trade";
import Credit from "../components/Sections/Credit";

export default function Home({ jsonModels, jsonNews }) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(1);
  const [visibleTitle, setVisibleTitle] = useState(0);
  SwiperCore.use([Autoplay, Mousewheel]);

  useEffect(() => {
    setVisibleTitle(1);
  }, []);

  return (
    <div>
      <Head>
        <title>Сервисный центр Mercedes-benz</title>
      </Head>
      <div className="preview__wrapper">
        <h1
          className="preview__title"
          style={{ transform: `translateX(${!visibleTitle ? "-200%" : "0%"})` }}
        >
          Сервисное обслуживание <br /> Mercedes-Benz
          <span style={{ opacity: !visibleTitle ? "0" : "1" }}>
            Информация про обслуживание диллерской сети
          </span>
          <Link href="models/pages/[page]" as="models/pages/1">
            <a
              className="preview__link"
              href=""
              style={{ opacity: !visibleTitle ? "0" : "1" }}
            >
              Детальнее
            </a>
          </Link>
        </h1>
        <Image
          className="preview__image"
          src="https://wallpaperaccess.com/full/825374.jpg"
          width={1920}
          height={830}
          objectFit="cover"
          alt="Preview photo"
        />
      </div>
      <div className="slider">
        <div className="container">
          <h2 className="title">Home Page</h2>
          <ul className="slider__list">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectCoverflow,
              ]}
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
              {jsonModels.map((item, index) => (
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
                      <p className="slider__text" style={{ opacity: visible }}>
                        {item.model_text}
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
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
              {jsonNews.map((item) => (
                <SwiperSlide key={item.id}>
                  <li className="news__slide">
                    <Image
                      src={
                        item.content[0].right_img || item.content[0].left_img
                      }
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
              ))}
            </Swiper>
          </ul>
        </div>
      </section>
      <Trade jsonModels={jsonModels} />
      <Credit />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const respModels = await fetch(`http://localhost:3001/models`);
  const respNews = await fetch(`http://localhost:3001/news`);
  const jsonModels = await respModels.json();
  const jsonNews = await respNews.json();
  return {
    props: {
      jsonModels,
      jsonNews,
    },
  };
}
