import React from "react";
import { useSelector } from "react-redux";
import CreditForm from "../HomePage/CreditForm";
import Loader from "../HomePage/Loader";
import Success from "../HomePage/Succese";

const Credit = () => {
  const { creditStatus } = useSelector((state) => state.creditStatus);

  return (
    <div className="credit">
      <h2 className="title">ВЫГОДНЫЙ КРЕДИТ</h2>
      <p className="credit__text">
        Оставьте свои контактные данные и получите одобрение за 1 день!
      </p>
      <CreditForm style={creditStatus === "waiting" ? "block" : "none"} />
      <Loader style={creditStatus === "pending" ? "inline-block" : "none"} />
      <Success style={creditStatus === "fulfilled" ? "block" : "none"} />
    </div>
  );
};

export default Credit;
