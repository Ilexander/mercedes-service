import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const [headerLink, setHeaderLink] = useState([]);
  const fetchHeaderLink = async () => {
    const resp = await fetch("http://localhost:3001/models");
    const data = await resp.json();
    setHeaderLink(data);
  };

  useEffect(() => {
    fetchHeaderLink();
  }, []);
  const shortModelList = headerLink.slice(0, 2);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link href={"/"}>
              <a className="logo" href="#">
                <Image
                  className="logo__img"
                  src={logo}
                  alt="logo"
                  width={180}
                  height={40}
                  blurDataURL={logo}
                  placeholder="blur"
                />
              </a>
            </Link>
            <a
              className="header__link"
              href="https://www.google.com/maps/place/%D0%9E%D1%84%D1%96%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D0%B4%D0%B8%D0%BB%D0%B5%D1%80+Mercedes-Benz/@50.3482862,30.402224,12z/data=!4m9!1m2!2m1!1smercedes+kiev!3m5!1s0x40d4c64ae1247443:0xdb079a7a79160ce5!8m2!3d50.3482862!4d30.538312!15sCg1tZXJjZWRlcyBraWV2IgOIAQFaDyINbWVyY2VkZXMga2lldpIBCmNhcl9kZWFsZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnRlR1ZxV1ZOUkVBRQ"
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0C3.365 0 0 3.38833 0 7.55417C0 13.4733 6.795 19.585 7.08417 19.8417C7.20333 19.9475 7.35167 20 7.5 20C7.64833 20 7.79667 19.9475 7.91583 19.8425C8.205 19.585 15 13.4733 15 7.55417C15 3.38833 11.635 0 7.5 0ZM7.5 11.6667C5.2025 11.6667 3.33333 9.7975 3.33333 7.5C3.33333 5.2025 5.2025 3.33333 7.5 3.33333C9.7975 3.33333 11.6667 5.2025 11.6667 7.5C11.6667 9.7975 9.7975 11.6667 7.5 11.6667Z"
                  fill="silver"
                />
              </svg>
              вулиця Пирогівський шлях, 167-А, Київ
            </a>
            <a className="header__link" href="tel:+380670000009">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2055 13.2304C14.5521 12.5853 13.7363 12.5853 13.0871 13.2304C12.5918 13.7215 12.0965 14.2126 11.6096 14.712C11.4764 14.8493 11.364 14.8785 11.2017 14.7869C10.8812 14.6121 10.54 14.4706 10.232 14.2792C8.79613 13.3761 7.59334 12.2149 6.52789 10.9081C5.99933 10.2589 5.52903 9.56385 5.20024 8.78143C5.13365 8.62328 5.14613 8.51924 5.27515 8.39022C5.77042 7.91161 6.2532 7.42052 6.74015 6.92942C7.41854 6.24689 7.41854 5.44782 6.73598 4.76112C6.34893 4.36991 5.96187 3.98703 5.57481 3.59582C5.17527 3.19628 4.77989 2.79259 4.37618 2.39721C3.72276 1.76046 2.90702 1.76046 2.25777 2.40138C1.75834 2.89247 1.27972 3.39605 0.771963 3.87882C0.301666 4.32413 0.0644373 4.86933 0.0144944 5.50609C-0.064582 6.54238 0.189295 7.5204 0.547219 8.47346C1.27972 10.4462 2.39511 12.1983 3.74773 13.8047C5.57481 15.9772 7.75565 17.696 10.3069 18.9362C11.4556 19.4939 12.6459 19.9226 13.9403 19.9933C14.8309 20.0433 15.605 19.8185 16.2251 19.1235C16.6497 18.6491 17.1283 18.2162 17.5778 17.7626C18.2437 17.0884 18.2478 16.2727 17.5861 15.6068C16.7953 14.8119 16.0004 14.0211 15.2055 13.2304Z"
                  fill="silver"
                />
                <path
                  d="M14.4105 9.91342L15.9462 9.65123C15.7049 8.24037 15.0389 6.9627 14.0276 5.94722C12.958 4.87763 11.6054 4.20342 10.1154 3.99533L9.89899 5.53936C11.0518 5.70167 12.1006 6.2219 12.9289 7.0501C13.7113 7.83252 14.2232 8.82303 14.4105 9.91342Z"
                  fill="silver"
                />
                <path
                  d="M16.812 3.23789C15.039 1.46496 12.7957 0.34543 10.3194 0L10.103 1.54403C12.2422 1.84368 14.1816 2.81338 15.7132 4.34077C17.1657 5.79324 18.1188 7.6286 18.4642 9.64707L20 9.38488C19.5963 7.04594 18.4934 4.92342 16.812 3.23789Z"
                  fill="silver"
                />
              </svg>
              +380(67) 000 00 09
            </a>
            <a className="header__order" href="#">
              Заказать звонок
            </a>
          </div>
          <nav className="menu">
            <ul className="menu__list">
              <li
                className={
                  router?.pathname === "/models/pages/[page]"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                <button onClick={() => Router.push(`/models/pages/1`)}>
                  Модели
                </button>
              </li>
              <li className="menu__item">
                <button onClick={() => Router.push(`/contacts`)}>
                  Контакты
                </button>
              </li>
              <li className="menu__item">
                <button onClick={() => Router.push(`/payment`)}>Кредиты</button>
              </li>
              {shortModelList.map((item, index) => (
                <li
                  className={
                    router.query?.modelName === item.model_name
                      ? "menu__item menu__item--active"
                      : "menu__item"
                  }
                  key={index}
                >
                  <button
                    onClick={() => Router.push(`/models/${item.model_name}`)}
                  >
                    {item.model_name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div>{children}</div>
      <footer className="footer">
        <div className="container">
          <a className="logo" href="#">
            <Image
              className="logo__img"
              src={logo}
              alt="logo"
              width={180}
              height={40}
              blurDataURL={logo}
              placeholder="blur"
            />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
