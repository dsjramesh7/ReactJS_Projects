import React, { useState } from "react";

const Three = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const submitFunc = () => {
    setName(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="your name here...."
        style={{ padding: "20px" }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={submitFunc}>submit</button>
      <h1>{name}</h1>
    </div>
  );
};

export default Three;
