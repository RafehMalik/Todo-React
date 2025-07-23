import { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, settodos] = useState(["task 1", "task 2"]);

  return (
    <div>
      <FormTodo todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
}
