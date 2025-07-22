import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}
