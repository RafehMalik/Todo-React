import styles from "./todoitems.module.css";
export default function TodoItems({ item, todos, settodos }) {
  function handledelete(itemToDelete) {
    console.log("Deleting:", itemToDelete);
    console.log("Current todos:", todos);

    settodos(todos.filter((todo) => todo !== itemToDelete));
  }

  return (
    <div className={styles.item1}>
      <div className={styles.itemName}>
        {item}{" "}
        <span className={styles.delete}>
          <button onClick={() => handledelete(item)}>Delete</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
