import React, { useRef, useState } from "react";

const Select = (props) => {
  const [open, setOpen] = useState(false);

  const displayNone = () => {
    setTimeout(() => {
      return "none";
    }, 300);
  };

  return (
    <div
      className={
        open ? "page__selector page__selector--active" : "page__selector"
      }
    >
      <button
        className="page__select"
        onClick={() => setOpen(!open)}
        disabled={props.disabled}
      >
        {props.inner}
      </button>
      <ul
        className="page__list"
        onClick={() => setOpen(false)}
      >
        {props.children}
      </ul>
      <p className="trade__error">{props.error}</p> 
    </div>
  );
};

export default Select;
