import React from "react";

const Success = ({style}) => {
  return (
    <div className="success-checkmark" style={{display: style}}>
      <div className="check-icon">
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
      </div>
      <p>Заявка отправлена!</p>
    </div>
  );
};

export default Success;
