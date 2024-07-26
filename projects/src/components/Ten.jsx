import React, { useState } from "react";

const Ten = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
      <input type="color" onChange={handleChange} />
      <div
        style={{ width: "200px", height: "200px", background: selectedColor }}
      ></div>
    </>
  );
};

export default Ten;
