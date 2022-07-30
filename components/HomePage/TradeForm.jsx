import React, { useState } from "react";
import Select from "../Select/Select";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../store/tradeSlice.reducer";

const TradeForm = ({ jsonModels, style }) => {
  const [models, setModels] = useState([]);
  const dispatch = useDispatch();
  const selectFetch = async (url, stateMethod) => {
    const resp = await fetch(url);
    const data = await resp.json();
    stateMethod(data);
  };
  const modelsName = jsonModels.map((item) => item.model_name.split(" ")[0]);
  const unicModelsName = new Set(modelsName);
  const [innerMark, setInnerMark] = useState("");
  const [innerModel, setInnerModel] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleSelect = (item) => {
    selectFetch(`http://localhost:3001/models?q=${item}`, setModels);
    setInnerMark(item);
    setValue("mark", item);
    if (Object.keys(errors).length) {
      errors.mark.message = "";
    }
  };

  const onSubmit = (data) => {
    dispatch(fetchPost(data));
  };

  const selectModel = (item) => {
    setInnerModel(item);
    if (Object.keys(errors).length) {
      errors.model.message = "";
    }
    setValue("model", item);
  };

  return (
    <div className="trade__wrapper" style={{ display: style }}>
      <h3 className="title">
        Trade-in с выгодой <br /> <span>до 10 000 $</span>
      </h3>
      <Select inner={innerMark || "Выбрать марку"} error={errors.mark?.message}>
        {Array.from(unicModelsName).length
          ? Array.from(unicModelsName).map((item, index) => (
              <li
                className="page__item"
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))
          : ""}
      </Select>
      <Select
        error={errors.model?.message}
        inner={innerModel || "Выбрать модель"}
        disabled={!models.length ? true : false}
      >
        {models.length ? models.map((item, index) => (
          <li
            className="page__item"
            key={index}
            onClick={() => selectModel(item.model_name)}
          >
            {item.model_name}
          </li>
        )): ''}
      </Select>
      <from className="trade__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="trade__label" htmlFor="">
          <input
            style={{ display: "none" }}
            value={innerMark}
            type="text"
            {...register("mark", {
              required: "Пожалуйста выберите марку",
            })}
          />
        </label>
        <label className="trade__label" htmlFor="">
          <input
            style={{ display: "none" }}
            type="text"
            {...register("model", {
              value: innerModel,
              required: "Пожалуйста выберите модель",
            })}
          />
        </label>
        <label className="trade__label" htmlFor="">
          <input
            placeholder="Год выпуска"
            className="trade__input"
            type="text"
            {...register("year", {
              required: "Пожалуйста укажите год",
              maxLength: {
                value: 4,
                message: "Максимальное значение 4 цифры",
              },
              minLength: {
                value: 4,
                message: "Минимальное значение 4 цифры",
              },
            })}
          />

          <p className="trade__error">{errors.year?.message}</p>
        </label>
        <label className="trade__label" htmlFor="">
          <InputMask
            placeholder="Ваш номер телефона"
            className="trade__input"
            mask="+38 (099)-999-99-99"
            {...register("phone", {
              required: "Пожалуйста укажите ваш номер телефона",
            })}
          />
          <p className="trade__error">{errors.phone?.message}</p>
        </label>
        <button
          className="trade__submit submit"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Отправить
        </button>
      </from>
    </div>
  );
};

export default TradeForm;
