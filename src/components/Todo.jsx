import { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, settodos] = useState([{ name: "task1", completed: false }]);
  const todoTotal = todos.length;
  let count = 0;
  todos.map((item) => (item.completed ? count++ : count));

  return (
    <div>
      <FormTodo todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer todoTotal={todoTotal} count={count} />
    </div>
  );
}
