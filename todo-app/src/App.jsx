import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // alert("New Task Added");
    toast.success("New Task Added!!!");
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };

  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id != id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    toast.success("Task Deleted Successfully!!!")
    setTodo(filteredTodos);
  };

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />
      <TodoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default App;
