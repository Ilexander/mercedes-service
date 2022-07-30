import Head from "next/head";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Trade from "../components/Sections/Trade";
import Credit from "../components/Sections/Credit";
import Preview from "../components/HomePage/Preview";
import Slider from "../components/HomePage/Slider";
import News from "../components/HomePage/News";

export default function Home({ jsonModels, jsonNews }) {
  return (
    <div>
      <Head>
        <title>Сервисный центр Mercedes-benz</title>
      </Head>
      <Preview />
      <Slider jsonModels={jsonModels} />
      <News jsonNews={jsonNews} />
      <Trade jsonModels={jsonModels} />
      <Credit />
    </div>
  );
}

Home.getInitialProps = async(context) => {
  const respModels = await fetch(`http://localhost:3001/models`);
  const respNews = await fetch(`http://localhost:3001/news`);
  const jsonModels = await respModels.json();
  const jsonNews = await respNews.json();
  return {
    jsonModels: jsonModels || null,
    jsonNews: jsonNews || null,
  };
}
