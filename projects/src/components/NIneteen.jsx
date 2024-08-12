import React, { useState } from "react";
import "./Eighteen.css";

const NIneteen = () => {
  const [text, setText] = useState("Dark Mode");
  const [bg, setBG] = useState();
  const handleClick = () => {
    setText(text === "Light Mode" ? "Dark Mode" : "Light Mode");
    setBG(bg === "whiteBackground" ? "darkBackground" : "whiteBackground");
  };
  return (
    <div className="whiteBackground">
      <button className="p-5 border-2 border-red-600" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default NIneteen;
