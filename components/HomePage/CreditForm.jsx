import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { fetchCredit } from "../../store/creditSlice.reducer";

const CreditForm = ({ style }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(fetchCredit(data));
  };

  return (
    <form style={{ display: style }}>
      <label>
        <input
          className="credit__input"
          type="text"
          placeholder="Введите ваше имя"
          {...register("credit_name", {
            require: "Пожалуйста введите ваше имя",
            maxlength: {
              value: 2,
              message: "Минимально количество символов: 2",
            },
          })}
        />
      </label>
      <label>
        <InputMask
          className="credit__input"
          placeholder="Ваш номер телефона"
          mask="+38 (099)-999-99-99"
          {...register("credit_phone", {
            required: "Пожалуйста укажите ваш номер телефона",
          })}
        />
      </label>
      <button className="credit__submit" type="button" onClick={handleSubmit(onSubmit)}>
        ОФОРМИТь ЗАЯВКУ НА КРЕДИТ
      </button>
    </form>
  );
};

export default CreditForm;
