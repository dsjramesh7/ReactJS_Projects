import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const addFunction = () => {
    if (input.trim() !== "") {
      setTask([...task, input]);
      setInput("");
    }
  };

  const deleteFunction = (index) => {
    setTask(task.filter((_,id) => id !== index));
  };
  return (
    <>
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button onClick={addFunction}>Add</button>
      </div>
      <ul className="">
        {task.map((t, index) => {
          return (
            <li key={index}>
              {t} <button onClick={() => deleteFunction(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Eight;
