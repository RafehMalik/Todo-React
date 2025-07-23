import { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, settodos] = useState([]);

  return (
    <div>
      <FormTodo todos={todos} settodos={settodos} />
      <TodoList todos={todos} />
    </div>
  );
}
