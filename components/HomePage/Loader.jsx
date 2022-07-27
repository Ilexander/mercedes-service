import React from "react";

const Loader = ({style}) => {
  return (
    <div className="lds-ring" style={{display: style}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
