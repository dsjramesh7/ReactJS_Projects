import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, deleteTask }) => {
  return (
    <section className="todo-list">
      <h1>Todo</h1>
      <div className="container">
        {todo && todo.length > 0
          ? todo.map((item) => {
              return <TodoItem item={item} deleteTask={deleteTask} key={item.id}/>;
            })
          : "you have no task right now add it"}
      </div>
    </section>
  );
};

export default TodoList;
