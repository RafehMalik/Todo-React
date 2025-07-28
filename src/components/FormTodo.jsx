import { useState } from "react";
import styles from "./formtodo.module.css";
export default function FormTodo({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", completed: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", completed: false });
  }

  return (
    <form className={styles.Mainform} onSubmit={handleSubmit}>
      <input
        placeholder="Enter todo..."
        className={styles.modern}
        type="text"
        value={todo.name}
        onChange={(e) => settodo({ name: e.target.value, completed: false })}
      />

      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
}
