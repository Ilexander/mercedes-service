/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import tradePhoto from "../../public/trade.jpg";
import Loader from "../HomePage/Loader";
import Success from "../HomePage/Succese";
import Succese from "../HomePage/Succese";
import TradeForm from "../HomePage/TradeForm";

const Credits = ({ jsonModels }) => {
  const [creditState, setCreditState] = useState(true);

  const { tradeStatus } = useSelector((state) => state.status);

  return (
    <div className="trade">
      <div className="trade__inner">
        <Image
          src={tradePhoto}
          alt="Trade Photo"
          width={975}
          height={651}
          objectFit="cover"
          placeholder="blur"
        />
        <TradeForm
          jsonModels={jsonModels}
          style={tradeStatus === "waiting" ? "block" : "none"}
        />
        <Loader style={tradeStatus === "pending" ? "inline-block" : "none"} />
        <Success style={tradeStatus === "fulfilled" ? "block" : "none"} />
      </div>
    </div>
  );
};

export default Credits;
