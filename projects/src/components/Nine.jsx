import React, { useState } from "react";

const Nine = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
      <input type="color" onChange={handleChange} />
      <div
        style={{ width: "500px", height: "500px", background: selectedColor }}
      ></div>
    </>
  );
};

export default Nine;
