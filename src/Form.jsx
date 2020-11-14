import React, { useState } from "react";

const Form = ({ onClickHandler }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleClick = () => {
    const newItem = {
      title: value,
      id: Math.floor(Math.random() * 1000)
    };
    onClickHandler({
      type: "ADD",
      data: newItem
    });
    setValue("");
  };

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={value}></input>
      <button onClick={handleClick}>Add new</button>
    </div>
  );
};
export default Form;
