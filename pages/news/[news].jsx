import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";
import Error from "../../components/Layout/Error";

const News = ({ data }) => {
  const router = useRouter();

  if (!data.length) return <Error data={data} />;
  return (
    <>
      <Head>
        <title>{router.query.news}</title>
      </Head>
      <div className="news__page">
        <div className="container">
          <h2 className="title">{router.query.news}</h2>
          <ul className="news__page-list">
            {data[0].content.map((item, index) => (
              <li
                className={"news__page-item" + " " + Object.keys(item)[1]}
                key={index}
              >
                <p className="news__page-text">{item.page_text}</p>
                <Image
                  src={item.right_img || item.left_img}
                  objectFit="cover"
                  width={800}
                  height={400}
                  alt={router.query.news}
                />
              </li>
            ))}
          </ul>
        </div>
        s
      </div>
    </>
  );
};

News.getInitialProps = async (ctx) => {
  const resp = await fetch(
    `http://localhost:3001/news?page_title=${ctx.query.news}`
  );
  const data = await resp.json();
  return {
    data,
  };
};

export default News;
