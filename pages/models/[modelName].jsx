import React from "react";
import Image from "next/dist/client/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Error from "../../components/Layout/Error";

const Model = ({ state, list }) => {
  const router = useRouter();

  if (!state.length) return <Error data={state} />;

  return (
    <div className="model__page">
      <Head>
        <title>{router.query.modelName}</title>
      </Head>
      <div className="container">
        {list.length ? (
          <div className="model__page-inner">
            <Image
              src={state[0].model_photo}
              alt={state[0].model_name}
              objectFit="contain"
              width={620}
              height={430}
              placeholder="blur"
              blurDataURL={state[0].model_photo}
            />
            <div className="model__page-content">
              <h2 className="title">{router.query.modelName}</h2>
              <p className="model__page-text">
                <b>Расход топлива:</b> {state[0].model_fuelUsage}
              </p>
              <p className="model__page-text">
                <b>Разгон 0-100 км/час:</b> {state[0].model_accelerationTime}
              </p>
              <p className="model__page-text">
                <b>Объем бака:</b> {state[0].model_fueltank} л
              </p>
              <p className="model__page-text">
                <b>Объем двигателя:</b> {state[0].model_engine_displacement}
              </p>
              <p className="model__page-text">
                <b>Мощность двигателы:</b> {state[0].model_engine_power}
              </p>
              <p className="model__page-text">
                <b>Максимальная скорость:</b> {state[0].model_max_speed}
              </p>
              <div className="model__page-text">
                <b>Про автомобиль:</b>{" "}
                <p style={{ display: "block" }}>{state[0].model_text}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button className="model__page-order">Оформить заказ</button>
        <h3 className="model__page-title">Вам могут понравится:</h3>
        <ul className="model__page-list">
          {list.length
            ? list.map((item, index) => (
                <li
                  className="model__page-item"
                  key={index}
                  style={{
                    display:
                      item.model_name === router.query.modelName
                        ? "none"
                        : "block",
                  }}
                >
                  <Link
                    href="/models/[modelName]"
                    as={"/models/" + item.model_name}
                  >
                    <a href="">
                      <Image
                        style={{ margin: "0 auto" }}
                        objectFit="contain"
                        src={item.model_photo}
                        alt={item.model_name}
                        height={200}
                        width={200}
                      />
                      <h3>{item.model_name}</h3>
                    </a>
                  </Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

Model.getInitialProps = async (ctx) => {
  const res = await fetch(
    `http://localhost:3001/models?model_name=${ctx.query.modelName}`
  );
  const responsiveList = await fetch(
    `http://localhost:3001/models?q=${ctx.query.modelName.split(" ")[0]}`
  );
  const listJson = await responsiveList.json();
  const json = await res.json();
  return { state: json || null, list: listJson || null };
};

export default Model;
