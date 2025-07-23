import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={styles.item}>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}
