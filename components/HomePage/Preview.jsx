import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Preview = () => {
  const [visibleTitle, setVisibleTitle] = useState(0);

  useEffect(() => {
    setVisibleTitle(1);
  }, []);

  return (
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
  );
};

export default Preview;
