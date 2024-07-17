import React from "react";

const TodoItem = ({ item, deleteTask }) => {
  return (
    <div className="card">
      <h2>{item.text}</h2>
      <button onClick={() => deleteTask(item.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
