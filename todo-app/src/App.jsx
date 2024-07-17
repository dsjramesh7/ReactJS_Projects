import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  }, []);

  const addTask = (text) => {
    // console.log("click add");
    const newTask = {
      id: Date.now(),
      text,
    };
    setTodo(todo.unshift(newTask));
    localStorage.setItem("todos", JSON.stringify(todo));
    alert("New Task Added");
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };

  const deleteTask = () => {};

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />
      <TodoList todo={todo} deleteTask={deleteTask} />
    </>
  );
};

export default App;
