import { useState } from "react";
import styles from "./formtodo.module.css";
export default function FormTodo({ todos, settodos }) {
  const [todo, settodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }

  return (
    <form className={styles.Mainform} onSubmit={handleSubmit}>
      <input
        placeholder="Enter todo..."
        className={styles.modern}
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />

      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
}
