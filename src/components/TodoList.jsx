import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function TodoList({ todos, settodos }) {
  return (
    <div className={styles.item}>
      {todos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        />
      ))}
    </div>
  );
}
