/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

const Error = ({ data }) => {
  useLayoutEffect(() => {
    if (!data.length) {
      Router.push("/");
    }
  }, []);
  return (
    <div className="error">
      <Head>
        <title>Ошибка! Переадресация...</title>
      </Head>
      <h2>Такой страницы не сущевствует!</h2>
      <p>Переадресация на главную страницу...</p>
    </div>
  );
};

export default Error;
