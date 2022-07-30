import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Error from "../../../components/Layout/Error";

const Models = ({ state }) => {

  if (!state.length) return <Error data={state} />;

  return (
    <>
      <Head>
        <title>Models page</title>
      </Head>
      <div className="container">
        <h2 className="title">Models page</h2>
        <ul className="model__list">
          {state.map((item, index) => (
            <li key={index} className="model__item">
              <div className="model__inner">
                <div className="model__wrapper">
                  <h3 className="model__title" href="">
                    {item.model_name}
                  </h3>
                  <p className="model__text">{item.model_text}</p>
                  <Link
                    href={`/models/[modelName]`}
                    as={`/models/${item.model_name}`}
                  >
                    <a className="model__link" href="">
                      Узнать больше
                    </a>
                  </Link>
                </div>
                <Image
                  objectFit="contain"
                  src={item.model_photo}
                  alt={item.model_name}
                  width={500}
                  height={300}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Models.getInitialProps = async (ctx) => {
  const res = await fetch(
    `http://localhost:3001/models?_page=${ctx.query.page}`
  );
  const json = await res.json();
  return { state: json };
};

export default Models;
