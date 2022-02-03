import React from "react";
import TodoList from "./TodoList";
import uuid from "uuid";
import "./Todo.css";
export default function Todo() {
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const handleAdd = () => {
    setItems([...items, value]);
    console.log(items);
    setValue("");
  };
  return (
    <>
      <input
        className="input"
        placeholder="write something"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleAdd} className="input">
        +
      </button>
      <TodoList key="uuid()" items={items} setItems={setItems} />
    </>
  );
}
