import React from "react";
import TodoItem from "./TodoItem";
import uuid from "uuid";

export default function TodoList({ items, setItems, value }) {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <TodoItem key="uuid()" texts={item} />
      ))}
    </>
  );
}
