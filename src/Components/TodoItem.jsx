import React from "react";
// import TodoList from "./TodoList";
import "./Todo.css";
export default function TodoItem({ texts }) {
  console.log(texts);
  return (
    <>
      <div>
        <div className="input todo">{texts}</div>
      </div>
    </>
  );
}
