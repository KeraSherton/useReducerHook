import React from "react";

const Info = ({ id, onClickHandler, title }) => {
  const handleClick = () =>
    onClickHandler({
      id,
      type: "REMOVE"
    });
  return (
    <div className="info">
      <p>{title}</p>
      <button onClick={handleClick}>remove</button>
    </div>
  );
};

export default Info;
